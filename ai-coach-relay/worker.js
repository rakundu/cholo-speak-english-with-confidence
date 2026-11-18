/*
 * Cholo AI coach relay — a Cloudflare Worker.
 * It keeps the secret keys safe on the server; the app only knows this
 * worker's address and an app token.
 *
 * Settings (Cloudflare → your worker → Settings → Variables and Secrets):
 *   ANTHROPIC_API_KEY    (secret)  — from console.anthropic.com
 *   APP_TOKEN            (secret)  — any long random text; the same text goes in the app's config.js
 *   ALLOWED_ORIGINS      (text)    — your app's address, e.g. https://yourname.github.io
 *   MODEL                (text, optional) — default claude-sonnet-5-5 (claude-haiku-5-5 is much cheaper)
 *   AZURE_SPEECH_KEY     (secret, optional) — for pronunciation scoring
 *   AZURE_SPEECH_REGION  (text, optional)   — e.g. uksouth
 */
export default {
  async fetch(req, env) {
    const origin = req.headers.get('Origin') || '';
    const allowed = (env.ALLOWED_ORIGINS || '').split(',').map(s => s.trim().replace(/\/$/, '')).filter(Boolean);
    const originOk = allowed.length === 0 || allowed.includes(origin);
    const cors = {
      'Access-Control-Allow-Origin': originOk && origin ? origin : (allowed[0] || '*'),
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, X-App-Token, X-Ref-Text',
      'Access-Control-Max-Age': '86400',
      'Vary': 'Origin'
    };
    if (req.method === 'OPTIONS') return new Response(null, { headers: cors });
    if (!originOk || !env.APP_TOKEN || req.headers.get('X-App-Token') !== env.APP_TOKEN) {
      return json({ error: 'not allowed' }, 403, cors);
    }
    const path = new URL(req.url).pathname;
    try {
      if (path === '/ping') return json({ ok: true, coach: !!env.ANTHROPIC_API_KEY, pron: !!(env.AZURE_SPEECH_KEY && env.AZURE_SPEECH_REGION) }, 200, cors);
      if (path === '/coach') return await coach(req, env, cors);
      if (path === '/pron') return await pron(req, env, cors);
      return json({ error: 'not found' }, 404, cors);
    } catch (e) {
      return json({ error: String(e && e.message || e) }, 500, cors);
    }
  }
};

function json(obj, status, cors) {
  return new Response(JSON.stringify(obj), { status, headers: { ...cors, 'Content-Type': 'application/json' } });
}

const SYSTEM = `You are "Cholo Coach", a warm, patient English speaking coach inside a phone app.
The learner is an older Bengali woman from India who reads English well but is building confidence in SPEAKING British English. She gets discouraged easily, so be kind, specific and encouraging — but honest: point out real mistakes clearly so she can improve.

You receive what the phone's speech recognition heard her say (a transcript), plus the task she was doing.
Rules:
- The transcript has no reliable punctuation or capitals. Never correct punctuation, capitals or spelling.
- If a word looks like the phone mis-heard her (e.g. "berry" for "very", "tree" for "three", "jero" for "zero"), do NOT treat it as grammar. Put it in "pronunciation" with a short, practical tip on the sound (v, w, z, th, s-clusters, long/short vowels are common for Bengali speakers).
- Correct real grammar and word-choice mistakes: verb tense, he/she mix-ups, missing a/the, -s endings, word order, Indian-English habits that sound odd in Britain (e.g. "I have a doubt", "today morning", "since three weeks", "I am having two sons", "myself Mita"). Use British English.
- At most 4 corrections, the most important first. Small or optional style points: skip them.
- Every explanation in very simple English (short words, max ~15 words), plus a natural, simple Kolkata-style Bengali explanation in Bengali script.
- "praise" must be specific to what she did well (an idea she expressed, a word she used, a correct tense). Never generic.
- If she answered the task well with no real mistakes, set all_good to true and give warm praise, with empty corrections.
- "better_way" is optional: one more natural British way to say her answer, only if it adds something.
Reply with ONLY a JSON object, no other text, in this exact shape:
{"praise":"","praise_bn":"","all_good":false,"corrections":[{"said":"exact words from the transcript","better":"corrected words","sentence_better":"her whole sentence, corrected","why":"","why_bn":""}],"pronunciation":[{"heard":"","maybe":"","tip":"","tip_bn":""}],"corrected":"her whole answer, corrected","better_way":"","encourage":"","encourage_bn":""}`;

async function coach(req, env, cors) {
  if (!env.ANTHROPIC_API_KEY) return json({ error: 'coach not set up' }, 503, cors);
  const body = await req.json();
  const text = String(body.text || '').slice(0, 2500).trim();
  if (!text) return json({ error: 'empty' }, 400, cors);
  const ctx = body.context || {};
  const user = [
    ctx.task ? `Task she was doing: ${String(ctx.task).slice(0, 400)}` : 'Task: free speaking practice.',
    ctx.they ? `The other person had just said: "${String(ctx.they).slice(0, 300)}"` : '',
    ctx.example ? `A model answer (for your reference only; her answer does not need to match it): "${String(ctx.example).slice(0, 400)}"` : '',
    ctx.level ? `Course level: ${ctx.level}` : '',
    `What the phone heard her say:\n"""${text}"""`
  ].filter(Boolean).join('\n');
  const r = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: { 'x-api-key': env.ANTHROPIC_API_KEY, 'anthropic-version': '2023-06-01', 'content-type': 'application/json' },
    body: JSON.stringify({ model: env.MODEL || 'claude-sonnet-5-5', max_tokens: 1200, system: SYSTEM, messages: [{ role: 'user', content: user }] })
  });
  if (!r.ok) return json({ error: 'coach error ' + r.status, detail: (await r.text()).slice(0, 300) }, 502, cors);
  const data = await r.json();
  const out = (data.content || []).map(c => c.text || '').join('');
  const m = out.match(/\{[\s\S]*\}/);
  if (!m) return json({ error: 'bad reply' }, 502, cors);
  let parsed; try { parsed = JSON.parse(m[0]); } catch (e) { return json({ error: 'bad json' }, 502, cors); }
  return json(parsed, 200, cors);
}

async function pron(req, env, cors) {
  if (!env.AZURE_SPEECH_KEY || !env.AZURE_SPEECH_REGION) return json({ error: 'pronunciation not set up' }, 503, cors);
  const ref = decodeURIComponent(req.headers.get('X-Ref-Text') || '').slice(0, 500);
  const audio = await req.arrayBuffer();
  if (audio.byteLength < 2000) return json({ error: 'too short' }, 400, cors);
  if (audio.byteLength > 2_500_000) return json({ error: 'too long' }, 400, cors);
  const cfg = { ReferenceText: ref, GradingSystem: 'HundredMark', Granularity: 'Phoneme', Dimension: 'Comprehensive', EnableMiscue: !!ref };
  const pa = btoa(unescape(encodeURIComponent(JSON.stringify(cfg))));
  const url = `https://${env.AZURE_SPEECH_REGION}.stt.speech.microsoft.com/speech/recognition/conversation/cognitiveservices/v1?language=en-GB&format=detailed`;
  const r = await fetch(url, {
    method: 'POST',
    headers: {
      'Ocp-Apim-Subscription-Key': env.AZURE_SPEECH_KEY,
      'Content-Type': 'audio/wav; codecs=audio/pcm; samplerate=16000',
      'Accept': 'application/json',
      'Pronunciation-Assessment': pa
    },
    body: audio
  });
  if (!r.ok) return json({ error: 'pron error ' + r.status, detail: (await r.text()).slice(0, 300) }, 502, cors);
  const d = await r.json();
  const nb = (d.NBest || [])[0];
  if (!nb) return json({ heard: '', score: 0, words: [], status: d.RecognitionStatus || 'NoMatch' }, 200, cors);
  const pa2 = nb.PronunciationAssessment || nb;
  const words = (nb.Words || []).map(w => {
    const a = w.PronunciationAssessment || w;
    return { w: w.Word, score: Math.round(a.AccuracyScore ?? 0), error: a.ErrorType || 'None' };
  });
  return json({
    heard: nb.Display || d.DisplayText || '',
    score: Math.round(pa2.PronScore ?? pa2.AccuracyScore ?? 0),
    accuracy: Math.round(pa2.AccuracyScore ?? 0),
    fluency: Math.round(pa2.FluencyScore ?? 0),
    completeness: Math.round(pa2.CompletenessScore ?? 0),
    words
  }, 200, cors);
}
