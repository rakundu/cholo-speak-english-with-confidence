"use strict";
/* ================= Course order and parts ================= */
PARTS.length=0;
PARTS.push(
 {n:1,en:"First steps",bn:"প্রথম ধাপ"},
 {n:2,en:"Out and about",bn:"বাইরে বেরোনো"},
 {n:3,en:"Everyday speaking",bn:"রোজকার কথা"},
 {n:4,en:"Chatting and sharing",bn:"গল্প আর আলাপ"},
 {n:5,en:"Practice conversations",bn:"পুরো কথোপকথন"},
 {n:6,en:"Growing confidence",bn:"আত্মবিশ্বাস বাড়ানো"},
 {n:7,en:"Speaking with confidence",bn:"নির্ভয়ে কথা বলা"});
const ORDER=[
 [1,['hello','order','me','be','adj1','benot','sounds-s','verbs1','little','mine','numbers','time']],
 [2,['polite','airport','thereis','plane','wh','notunderstand','transfer','attime','arrive','place','around','shops','outing','health','rp-easy']],
 [3,['react','verbs2','present','small','adj2','askmore','feelings','verbs3','do','presentuses','shortanswers','sounds-vw','adj3','family','day','pv-morning','home2','helping']],
 [4,['food','like','weather','verbs4','chat','now','nowuses','phone','was','past','irregular','adj4','did','pastuses','future','timeline','verbs5','join','ability','very','kids','inat','compare','superlative','india','pv-home','often','friends','ever','smooth','hobbies','news','apologise','compliments']],
 [5,['talks','talks2']],
 [6,['questions2','futureplans','should','opinion','patterns','describe','memories','pastcont','perfect','if','clothes','pv-travel','doctor','story','rp-medium']],
 [7,['adv-mistakes','adv-blank','adv-small','adv-clarify','adv-indirect','adv-opinion','adv-sorry','adv-news','adv-problems','adv-requests','adv-if2','adv-appoint','adv-passive','adv-pastperfect','pv-feelings','adv-talk','adv-talk2','rp-hard']]];
(function(){ const byId=Object.fromEntries(LESSONS.map(l=>[l.id,l])); const out=[];
 ORDER.forEach(([p,ids])=>ids.forEach(id=>{ const l=byId[id]; if(!l)throw new Error('missing lesson '+id); l.part=p; out.push(l); delete byId[id]; }));
 const left=Object.keys(byId); if(left.length)throw new Error('lessons not placed: '+left.join(','));
 LESSONS.length=0; out.forEach(l=>LESSONS.push(l)); })();
const ITEMS=LESSONS.flatMap(l=>l.items);
LESSONS.forEach((l,i)=>{l.num=i+1; l.items.forEach((it,k)=>{it.num=(i+1)+'.'+(k+1); it.ln=l;});});
const TRAVEL_LESSONS=new Set(['polite','airport','thereis','plane','wh','notunderstand','transfer','attime','arrive','place','around','shops','outing','health','talks','rp-easy']);
