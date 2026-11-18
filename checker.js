"use strict";
/* =====================================================================
   Speech checker: finds common mistakes in what she said and suggests
   the correct way. Runs on the phone, no internet AI needed.
   Each rule: re (regex on lower-case text), fix(match) -> better text
   or null to skip, why (English), bn (Bengali), soft (true = "check
   this", may be fine).
   ===================================================================== */
const CK = (function(){
 const PAST={go:'went',eat:'ate',see:'saw',have:'had',buy:'bought',come:'came',take:'took',make:'made',do:'did',get:'got',say:'said',walk:'walked',cook:'cooked',visit:'visited',watch:'watched',talk:'talked',play:'played',like:'liked',live:'lived',meet:'met',sleep:'slept',drink:'drank',give:'gave',find:'found',tell:'told',speak:'spoke',read:'read',write:'wrote',sit:'sat',stay:'stayed',call:'called',enjoy:'enjoyed',work:'worked',want:'wanted',need:'needed',feel:'felt',leave:'left',fly:'flew',arrive:'arrived',travel:'travelled',bring:'brought',think:'thought',know:'knew',is:'was',am:'was',are:'were',love:'loved',start:'started',finish:'finished',reach:'reached',spend:'spent',teach:'taught',learn:'learned',wake:'woke',put:'put',cut:'cut'};
 const BASE={}; Object.keys(PAST).forEach(k=>{ if(!['is','am','are'].includes(k)) BASE[PAST[k]]=k; });
 const S3=v=>({have:'has',go:'goes',do:'does',be:'is'})[v]||(/(s|sh|ch|x|o)$/.test(v)?v+'es':/[^aeiou]y$/.test(v)?v.slice(0,-1)+'ies':v+'s');
 const UN3=v=>({has:'have',goes:'go',does:'do',is:'be'})[v]||(/ies$/.test(v)?v.slice(0,-3)+'y':/(ches|shes|sses|xes)$/.test(v)?v.slice(0,-2):v.replace(/s$/,''));
 const ING2BASE={having:'have',liking:'like',loving:'love',knowing:'know',wanting:'want',understanding:'understand',believing:'believe',needing:'need',hating:'hate',owning:'own',preferring:'prefer'};
 const NUM='(?:\\d+|one|two|three|four|five|six|seven|eight|nine|ten|eleven|twelve|fifteen|twenty|many|a few|few|several)';
 const VB='go|eat|see|have|buy|come|take|make|do|get|walk|cook|visit|watch|talk|play|meet|sleep|drink|speak|stay|call|enjoy|feel|fly|arrive|travel|is|are|am|give|find|tell|leave|love|start|spend|teach|learn|bring|think';
 const PASTS='went|ate|saw|had|bought|came|took|made|got|said|told|gave|found|met|slept|drank|spoke|wrote|knew|thought|brought|left|felt|sat|flew|taught|spent|woke';
 const THIRD='goes|likes|lives|wants|works|comes|has|eats|drinks|knows|speaks|needs|watches|cooks|loves|thinks|says|stays|plays|teaches|studies|makes|reads';
 const BLOCK_BEFORE=/\b(does|did|will|can|could|should|would|must|may|might|to|let|make|made|help|helped|doesn't|didn't|won't|can't|couldn't|shouldn't|where|when|what|why|how|if|that|saw|see|watch|watched|hear|heard)\s*$/;
 const plural=n=>({child:'children',man:'men',woman:'women',person:'people',day:'days'})[n]||(/(s|sh|ch|x)$/.test(n)?n+'es':/[^aeiou]y$/.test(n)?n.slice(0,-1)+'ies':n+'s');
 const cap=s=>s.charAt(0).toUpperCase()+s.slice(1);
 const R=[
  {re:/\b(i am|i'm|we are|we're|they are|they're|he is|he's|she is|she's)\s(having|liking|loving|knowing|wanting|understanding|believing|needing|hating|owning|preferring)\b(?!\s(?:lunch|dinner|breakfast|tea|coffee|a\b|an\b|fun|some|my|our|the|guests|trouble|problems|difficulty|a good))/g,
   fix:m=>{const subj=m[1].replace("'m",' am').replace("'re",' are').replace("'s",' is').split(' ')[0]; const b=ING2BASE[m[2]]; return (subj==='i'?'I':subj)+' '+(['he','she'].includes(subj)?S3(b):b);},
   why:"Words like have, like, know, want and understand don't use -ing for facts: I have, I like, I know.",bn:"have, like, know, want, understand — এগুলোয় -ing লাগে না: I have, I like, I know।"},
  {re:/\b(i am|i'm|we are|we're|they are|they're|he is|he's|she is|she's)\s(want|like|need|know|have|live|understand|agree|think|love|remember|feel)\b/g,
   fix:m=>{const subj=m[1].replace("'m",' am').replace("'re",' are').replace("'s",' is').split(' ')[0]; return (subj==='i'?'I':subj)+' '+(['he','she'].includes(subj)?S3(m[2]):m[2]);},
   why:"No 'am / is / are' before action words like want, like, need: I want, she likes.",bn:"want / like / need-এর আগে am / is / are লাগে না: I want, she likes।"},
  {re:/(?:^|\b(?:hello|hi|namaskar|good morning)\W*)myself\s([a-z]+)/g,fix:m=>'My name is '+cap(m[1]),
   why:"To give your name, say 'My name is…' or 'I'm…'. ('Myself' means 'by myself'.)",bn:"নাম বলতে বলুন 'My name is…' বা 'I'm…'।"},
  {re:new RegExp('\\bsince\\s('+NUM+')\\s(hours?|days?|weeks?|months?|years?)\\b','g'),fix:m=>'for '+m[1]+' '+m[2],
   why:"Use 'for' with an amount of time (for three days). Use 'since' with a starting point (since Monday).",bn:"কতক্ষণ বোঝাতে 'for' (for three days); কবে থেকে বোঝাতে 'since' (since Monday)।"},
  {re:/\btoday\s(morning|afternoon|evening)\b/g,fix:m=>'this '+m[1],why:"Say 'this morning', 'this afternoon', 'this evening'.",bn:"'today morning' নয় — বলুন 'this morning'।"},
  {re:/\btoday night\b/g,fix:()=>'tonight',why:"Say 'tonight'.",bn:"'today night' নয় — বলুন 'tonight'।"},
  {re:/\byesterday night\b/g,fix:()=>'last night',why:"Say 'last night'.",bn:"'yesterday night' নয় — বলুন 'last night'।"},
  {re:/\bmore\s(better|worse|bigger|smaller|colder|hotter|cheaper|nicer|easier|older|younger|happier|faster|slower|taller|warmer|busier|quieter)\b/g,fix:m=>m[1],
   why:"Words ending in -er already mean 'more'. Say 'better', not 'more better'.",bn:"-er মানেই 'আরও'। 'more better' নয় — শুধু 'better'।"},
  {re:new RegExp("\\b(did|didn't|did not)((?:\\s(?:you|i|we|they|he|she|it|your \\w+|my \\w+))?)\\s("+PASTS+")\\b",'g'),fix:m=>m[1]+m[2]+' '+BASE[m[3]],
   why:"After 'did' / 'didn't', use the simple word: Did you go? I didn't see.",bn:"did / didn't-এর পরে সাধারণ রূপ: Did you go? (went নয়)।"},
  {re:/\b(can|could|should|must|will|would|may|might)\sto\s([a-z]+)/g,fix:m=>m[1]+' '+m[2],
   why:"No 'to' after can, should, must, will: I should go.",bn:"can / should / must / will-এর পরে 'to' বসে না।"},
  {re:new RegExp("\\b(can|could|should|must|will|would)\\s("+THIRD+"|"+PASTS+")\\b",'g'),fix:m=>m[1]+' '+(BASE[m[2]]||UN3(m[2])),
   why:"After can, should, will…, use the simple word: She can go. I will see.",bn:"can / will / should-এর পরে সাধারণ রূপ: can go, will see।"},
  {re:new RegExp("\\b(doesn't|does not|don't|do not|does|do)((?:\\s(?:you|i|we|they|he|she|it|this|that|your \\w+|my \\w+))?)\\s("+THIRD+")\\b",'g'),fix:m=>m[1]+m[2]+' '+UN3(m[3]),
   why:"After do / does / don't / doesn't, use the simple word without -s: Does he like…? She doesn't like…",bn:"do / does / don't / doesn't-এর পরে 's' ছাড়া: Does he like? She doesn't like।"},
  {re:/\b(he|she|it)\sdon't\b/g,fix:m=>m[1]+" doesn't",why:"With he / she / it, say 'doesn't': She doesn't like coffee.",bn:"he / she / it-এর সাথে doesn't।"},
  {re:new RegExp("\\b(i|we|they|you)\\s("+THIRD+")\\b",'g'),pre:true,fix:m=>(m[1]==='i'?'I':m[1])+' '+UN3(m[2]),
   why:"With I / you / we / they, no -s: I like, they live.",bn:"I / you / we / they-এর সাথে 's' লাগে না: I like, they live।"},
  {re:/\b(he|she|it|my (?:son|daughter|husband|wife|friend|sister|brother|mother|father|grandson|granddaughter|neighbour))\s(go|like|live|want|work|come|eat|drink|have|know|speak|need|make|cook|watch|read|love|think|say|stay|play|teach|study|do)\b/g,pre:true,fix:m=>m[1]+' '+S3(m[2]),
   why:"For he / she / one person, add -s: She lives, he likes, my son works.",bn:"he / she / একজন হলে কাজের শব্দে 's': she lives, my son works।"},
  {re:/\bi\s(is|are)\b/g,fix:()=>'I am',why:"With I, always 'am': I am.",bn:"I-এর সাথে সবসময় am।"},
  {re:/\b(he|she|it)\sare\b/g,fix:m=>m[1]+' is',why:"With he / she / it, use 'is'.",bn:"he / she / it-এর সাথে is।"},
  {re:/\b(we|they|you)\sis\b/g,fix:m=>m[1]+' are',why:"With we / they / you, use 'are'.",bn:"we / they / you-এর সাথে are।"},
  {re:/\b(we|they|you)\swas\b/g,fix:m=>m[1]+' were',why:"With we / they / you, the past is 'were'.",bn:"we / they / you-এর অতীত were।"},
  {re:/\bi\s(happy|tired|fine|hungry|ready|sorry|going|coming|waiting|learning|feeling|staying|very(?!\smuch)|so(?!\smuch))\b/g,fix:m=>'I am '+m[1],
   why:"English needs 'am' here: I am happy, I am going.",bn:"এখানে 'am' লাগবে: I am happy, I am going।"},
  {re:/\b(he|she|it)\s(happy|tired|fine|hungry|ready|beautiful|lovely|expensive|cheap|cold|hot|going|coming|waiting|very(?!\smuch)|so(?!\smuch))\b/g,pre:true,preBlock:/\b(find|found|make|made|keep|kept|think|thought|like|liked|liking|love|loved|loving|want|wanted|get|got|see|saw|consider|call|called|let|enjoy|enjoyed|enjoying)\s*$/,fix:m=>m[1]+' is '+m[2],
   why:"English needs 'is' here: She is happy. It is cold.",bn:"এখানে 'is' লাগবে: She is happy, It is cold।"},
  {re:new RegExp('\\b(i|we|they|he|she|it)\\s('+VB+')\\b','g'),after:/\b(yesterday|last (?:night|week|month|year|time|sunday|monday|tuesday|wednesday|thursday|friday|saturday)|\w+ (?:days?|weeks?|months?|years?) ago|when i was (?:young|a child|little))\b[^.?!]{0,60}$/,
   fix:m=>m[1]+' '+PAST[m[2]],why:"It happened in the past (yesterday, last week…), so use the past: I went, we were.",bn:"গতকাল / গত সপ্তাহ — অতীতের কথা, তাই অতীত রূপ: I went, we were।"},
  {re:new RegExp('\\btomorrow\\b([^.?!]{0,30}?)\\b(i|we|they|he|she)\\s('+PASTS+'|visited|cooked|watched|walked|stayed|called)\\b','g'),span:2,
   fix:m=>(m[2]==='i'?'I':m[2])+' will '+(BASE[m[3]]||m[3].replace(/ed$/,'').replace(/(visit|cook|watch|walk|stay|call)e?$/,'$1')),why:"Tomorrow is the future: I will go / I'm going to go.",bn:"আগামীকাল = ভবিষ্যৎ: I will go।"},
  {re:/\bi have (a|one|some) doubts?\b/g,fix:()=>'I have a question',why:"In Britain 'doubt' means not believing something. Say 'I have a question'.",bn:"বিলেতে 'doubt' মানে সন্দেহ। বলুন 'I have a question'।"},
  {re:/\bi(?: am|'m)( not)? agree\b/g,fix:m=>m[1]?"I don't agree":'I agree',why:"'Agree' is an action word — no 'am': I agree / I don't agree.",bn:"agree-এর আগে am লাগে না: I agree / I don't agree।"},
  {re:/\bdiscuss about\b/g,fix:()=>'discuss',why:"Say 'discuss it' — no 'about'.",bn:"discuss-এর পরে about লাগে না।"},
  {re:/\breturn back\b/g,fix:()=>'return',why:"'Return' already means 'go back'. Say 'return' or 'go back'.",bn:"return মানেই ফিরে যাওয়া — back লাগে না।"},
  {re:/\bcope up\b/g,fix:()=>'cope',why:"Say 'cope' or 'cope with'.",bn:"'cope up' নয় — 'cope with'।"},
  {re:/\bwent to shopping\b/g,fix:()=>'went shopping',why:"Say 'go shopping' / 'went shopping' — no 'to'.",bn:"'went shopping' — to লাগে না।"},
  {re:/\b(so |too |very )?much\s(people|friends|things|children|books|shops|cars|days|times)\b/g,fix:m=>(m[1]||'')+'many '+m[2],
   why:"For things you can count, use 'many': many people, many friends.",bn:"গোনা যায় এমন জিনিসে many: many people।"},
  {re:/\bwhat is your good name\b/g,fix:()=>"what's your name",why:"In Britain, just say 'What's your name?'",bn:"বলুন 'What's your name?'"},
  {re:/\b(is|was|it's|have|had|has)\s(good|nice|big|small|lovely|beautiful|great|long|short|old|new|wonderful|busy|quiet|delicious|happy|sad|fantastic|lucky)\s(man|woman|place|city|town|house|day|idea|time|film|book|garden|friend|holiday|trip|journey|family|room|meal|lady|boy|girl|flat|life|question)\b/g,
   fix:m=>m[1]+' a '+m[2]+' '+m[3],why:"For one thing, add 'a': a good idea, a big family, a lovely day.",bn:"একটা জিনিসের আগে 'a': a good idea, a big family।"},
  {re:/\b(go|went|going|goes|come|came|to|at|from|visit|visited|visiting)\s(market|station|park|airport|post office|bus stop|museum|supermarket|cinema|bank)\b/g,fix:m=>m[1]+' the '+m[2],
   why:"Use 'the' for places like these: to the market, at the station.",bn:"এসব জায়গার আগে 'the': to the market, at the station।"},
  {re:new RegExp('\\b('+NUM+')\\s(bag|ticket|child|day|week|year|book|friend|hour|month|time|apple|pound|man|woman|person|sister|brother|son|daughter|grandchild|bottle|cup|glass|box|egg|cake|room|plate|minute|suitcase|photo|stamp)\\b(?!\\s(?:walk|drive|ride|note|coin|break|old))','g'),fix:m=>m[1]+' '+(m[2]==='grandchild'?'grandchildren':plural(m[2])),
   why:"More than one: add -s (two bags). Some words change: child → children, man → men.",bn:"একের বেশি হলে 's': two bags। child → children।"},
  {re:/\bmy (son|husband|brother|father|grandson|nephew|uncle)\b[^.?!]{1,30}?\b(she|her)\b/g,soft:true,span:'last',fix:()=>'he / his / him',
   why:"Check: for a man, English uses he / his / him.",bn:"মিলিয়ে নিন: পুরুষের জন্য he / his / him।"},
  {re:/\bmy (daughter|wife|sister|mother|granddaughter|niece|aunt)\b[^.?!]{1,30}?\b(he|his|him)\b/g,soft:true,span:'last',fix:()=>'she / her',
   why:"Check: for a woman, English uses she / her.",bn:"মিলিয়ে নিন: মহিলার জন্য she / her।"},
  {re:/^(where|what|how|when) (i|we) (can|should)\b/g,soft:true,fix:m=>cap(m[1])+' '+m[3]+' '+(m[2]==='i'?'I':m[2]),
   why:"In a question, 'can' or 'should' goes before 'I': Where can I…?",bn:"প্রশ্নে can / should আগে: Where can I…?"}
 ];
 function check(text){
  const orig=String(text||'').replace(/[’]/g,"'").replace(/\s+/g,' ').trim();
  const t=orig.toLowerCase();
  const found=[];
  R.forEach(rule=>{
   rule.re.lastIndex=0; let m;
   while((m=rule.re.exec(t))){
    if(m[0].length===0){rule.re.lastIndex++;continue;}
    let start=m.index, end=m.index+m[0].length;
    if(rule.span==='last'){ const w=m[m.length-1]; start=end-w.length; }
    else if(typeof rule.span==='number'){ const sub=m[rule.span]; const off=m[0].lastIndexOf(sub+' '); start=m.index+(off>=0?off:0); }
    if(rule.after&&!rule.after.test(t.slice(0,start)))continue;
    if(rule.pre||rule.preBlock){ const before=t.slice(0,start); if(rule.pre&&BLOCK_BEFORE.test(before))continue; if(rule.preBlock&&rule.preBlock.test(before))continue; }
    let better; try{better=rule.fix(m);}catch(e){better=null;}
    if(!better)continue;
    const said=orig.slice(start,end);
    better=better.replace(/\bi\b/g,'I'); if(/^[A-Z]/.test(said)) better=cap(better); else if(/^[a-z]/.test(said)&&!/^I\b/.test(better)&&!/^My name/.test(better)) better=better.charAt(0).toLowerCase()+better.slice(1);
    if(!rule.soft&&said.toLowerCase()===better.toLowerCase())continue;
    if(found.some(f=>start<f.end&&end>f.start))continue;
    found.push({start,end,said,better,why:rule.why,bn:rule.bn,soft:!!rule.soft});
   }
  });
  found.sort((a,b)=>a.start-b.start);
  // context windows (3 words either side); overlapping windows are merged so each revision card is a whole, fully corrected phrase
  const ws=[]; orig.replace(/\S+/g,(w,i)=>{ws.push([i,i+w.length]);return w;});
  const groups=[];
  found.filter(f=>!f.soft).forEach(f=>{
   const wi=ws.findIndex(([a,b])=>b>f.start), wj=ws.findIndex(([a,b])=>b>=f.end);
   const s0=Math.max(0,wi-3), s1=Math.min(ws.length-1,(wj<0?ws.length-1:wj)+3);
   const g=groups.find(g=>s0<=g.s1&&s1>=g.s0);
   if(g){ g.s0=Math.min(g.s0,s0); g.s1=Math.max(g.s1,s1); g.fixes.push(f); } else groups.push({s0,s1,fixes:[f]});
  });
  const cards=groups.map(g=>{
   const cs=ws[g.s0][0], ce=ws[g.s1][1];
   let right='',k=cs; g.fixes.sort((a,b)=>a.start-b.start).forEach(f=>{right+=orig.slice(k,f.start)+f.better;k=f.end;}); right+=orig.slice(k,ce);
   const pre=g.s0>0?'…':'', post=g.s1<ws.length-1?'…':'';
   const fin=x=>{x=x.replace(/[,;:]$/,''); return pre?pre+x:cap(x);};
   return {w:fin(orig.slice(cs,ce))+post, r:fin(right)+post, why:g.fixes.map(f=>f.why).filter((v,i,a)=>a.indexOf(v)===i).join(' '), bn:g.fixes.map(f=>f.bn).filter((v,i,a)=>a.indexOf(v)===i).join(' ')};
  });
  found.forEach(f=>{ const c=cards.find(c=>c.w.includes(f.said)); f.rightLine=c?c.r:f.better; f.wrongLine=c?c.w:f.said; });
  const words=t.split(/\s+/).filter(w=>/[a-z]/.test(w));
  const has=re=>re.test(t);
  const good=[];
  if(has(/\b(because|but|so|and then|then|after that|finally|first)\b/))good.push("joined ideas with words like because, but, then");
  if(has(new RegExp('\\b('+PASTS+'|was|were|\\w{3,}ed)\\b')))good.push("talked about the past");
  if(has(/\b(will|i'll|we'll|going to)\b/))good.push("talked about the future");
  if(has(/\b(beautiful|lovely|delicious|comfortable|wonderful|quiet|busy|friendly|kind|cold|hot|big|small|bright|expensive|cheap)\b/))good.push("used describing words");
  if(has(/\b(should|could|would|might)\b/))good.push("used should / could / would");
  return {text:orig,words:words.length,fixes:found,good,cards};
 }
 function markText(res){
  const e=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
  let out='',i=0; res.fixes.forEach(f=>{ out+=e(res.text.slice(i,f.start))+`<span class="mistake${f.soft?' soft':''}">${e(f.said)}</span>`; i=f.end; });
  return out+e(res.text.slice(i));
 }
 return {check,markText};
})();
