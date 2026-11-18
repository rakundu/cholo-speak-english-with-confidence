"use strict";
/* ============ AI coach (talks to the Cloudflare relay) + voice recorder ============ */
const COACH=(function(){
 const cfg=()=>{ const c=window.CHOLO_COACH||{}; const st=(typeof S!=='undefined'&&S&&S.settings)||{};
   return {url:String(st.coachUrl||c.url||'').trim().replace(/\/$/,''), token:String(st.coachToken||c.token||'').trim()}; };
 let info={checked:false,coach:false,pron:false,online:false};
 async function call(path,body,headers,timeout){
  const c=cfg(); if(!c.url) throw new Error('not set up');
  const ctl=new AbortController(); const t=setTimeout(()=>ctl.abort(),timeout||20000);
  try{ const r=await fetch(c.url+path,{method:'POST',headers:Object.assign({'X-App-Token':c.token},headers||{}),body,signal:ctl.signal});
   const j=await r.json().catch(()=>({})); if(!r.ok) throw new Error(j.error||('HTTP '+r.status)); return j; }
  finally{ clearTimeout(t); }
 }
 async function ping(){
  if(!cfg().url){ info={checked:true,coach:false,pron:false,online:false,err:'not set up'}; return info; }
  try{ const j=await call('/ping','{}',{'Content-Type':'application/json'},8000); info={checked:true,coach:!!j.coach,pron:!!j.pron,online:true}; }
  catch(e){ info={checked:true,coach:false,pron:false,online:false,err:String(e&&e.message||e)}; }
  return info;
 }
 return {
  ping, configured:()=>!!cfg().url, get info(){return info;},
  check:(text,context)=>call('/coach',JSON.stringify({text,context}),{'Content-Type':'application/json'},30000),
  pron:(wav,ref)=>call('/pron',wav,{'Content-Type':'audio/wav','X-Ref-Text':encodeURIComponent(ref||'')},30000)
 };
})();

/* Records the microphone as a 16 kHz WAV file (what the pronunciation service needs). */
const REC=(function(){
 let ctx=null,src=null,proc=null,stream=null,chunks=[],rate=48000,timer=null,active=false;
 const supported=()=>!!(navigator.mediaDevices&&navigator.mediaDevices.getUserMedia&&(window.AudioContext||window.webkitAudioContext));
 async function start(maxSec,onAuto){
  stream=await navigator.mediaDevices.getUserMedia({audio:{echoCancellation:true,noiseSuppression:true,channelCount:1}});
  ctx=new (window.AudioContext||window.webkitAudioContext)(); rate=ctx.sampleRate;
  src=ctx.createMediaStreamSource(stream); proc=ctx.createScriptProcessor(4096,1,1); chunks=[];
  proc.onaudioprocess=e=>{ chunks.push(new Float32Array(e.inputBuffer.getChannelData(0))); };
  src.connect(proc); proc.connect(ctx.destination); active=true;
  timer=setTimeout(()=>{ if(active&&onAuto) onAuto(); },(maxSec||15)*1000);
 }
 function cleanup(){ clearTimeout(timer); active=false; try{proc&&proc.disconnect(); src&&src.disconnect();}catch(e){} try{stream&&stream.getTracks().forEach(t=>t.stop());}catch(e){} try{ctx&&ctx.close();}catch(e){} }
 function stop(){
  cleanup(); const len=chunks.reduce((a,c)=>a+c.length,0); const all=new Float32Array(len); let o=0; chunks.forEach(c=>{all.set(c,o);o+=c.length;}); chunks=[];
  return toWav(downsample(all,rate,16000),16000);
 }
 function downsample(buf,from,to){ if(from===to)return buf; const ratio=from/to, n=Math.floor(buf.length/ratio), out=new Float32Array(n);
  for(let i=0;i<n;i++){ const s=Math.floor(i*ratio), e=Math.min(buf.length,Math.floor((i+1)*ratio)); let sum=0; for(let j=s;j<e;j++)sum+=buf[j]; out[i]=sum/Math.max(1,e-s); } return out; }
 function toWav(samples,sr){
  const b=new ArrayBuffer(44+samples.length*2), v=new DataView(b); const w=(o,s)=>{for(let i=0;i<s.length;i++)v.setUint8(o+i,s.charCodeAt(i));};
  w(0,'RIFF'); v.setUint32(4,36+samples.length*2,true); w(8,'WAVE'); w(12,'fmt '); v.setUint32(16,16,true); v.setUint16(20,1,true); v.setUint16(22,1,true);
  v.setUint32(24,sr,true); v.setUint32(28,sr*2,true); v.setUint16(32,2,true); v.setUint16(34,16,true); w(36,'data'); v.setUint32(40,samples.length*2,true);
  let o=44; for(let i=0;i<samples.length;i++,o+=2){ const x=Math.max(-1,Math.min(1,samples[i])); v.setInt16(o,x<0?x*0x8000:x*0x7FFF,true); }
  return new Blob([b],{type:'audio/wav'});
 }
 return {start,stop,cancel:cleanup,supported,get active(){return active;}};
})();
