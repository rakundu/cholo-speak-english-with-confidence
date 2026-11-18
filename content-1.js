"use strict";
/* ================================================================
   CHOLO course content — Part 1 & 2
   Item makers (short names keep the lesson lists readable):
   P  phrase       P(english, bengali, tip, memoryTrick)
   L  listen       L(they say, [right meaning, bn], [[wrong, bn]], tip, trick)
   R  reply        R(they say, bn, right reply, [wrong replies], bn of reply, tip, trick)
   G  which-better G(right, wrong, bn, tip, trick)
   F  fill gap     F("sentence with ___", right, [wrong], bn, tip, trick)
   B  build        B(sentence, bn, tip, trick)  -> word tiles to put in order
   C  grammar idea C({title, bnTitle, pattern, en, bn, ex:[[en,bn]], mn})
   Sp speak freely Sp(prompt, bn, example answer, tip, timerSeconds)
   W  word         W(word, bengali word, example sentence, bengali sentence, tip, trick)
   D  conversation D(title, bn, [[they, bn, right, wrong]...], tip)
   Role colours in {s:..} who, {v:..} action, {o:..} what/where, {t:..} when
   Fill-ins: {name} {who} {whoBn} {whoNom} {city} {stay} {stayBn} {home}
   ================================================================ */
const PARTS=[
 {n:1,en:"First steps",bn:"প্রথম ধাপ"},
 {n:2,en:"The journey",bn:"যাত্রাপথ"},
 {n:3,en:"Everyday conversation",bn:"রোজকার আলাপ"},
 {n:4,en:"Practice conversations",bn:"পুরো কথোপকথন"},
 {n:5,en:"Growing confidence",bn:"আত্মবিশ্বাস বাড়ানো"}
];
const LESSONS=[]; let _L=null;
function lesson(id,part,icon,en,bn){_L={id,part,icon,en,bn,items:[]};LESSONS.push(_L);}
function _h(s){let h=5381;for(let i=0;i<s.length;i++)h=((h<<5)+h+s.charCodeAt(i))|0;return (h>>>0).toString(36);}
function add(t,o,key){o.t=t;o.u=_L.id;if(!o.id)o.id=_L.id+':'+_h(t+'|'+key);_L.items.push(o);return o;}
const P=(en,bn,tip,mn,id)=>add('phrase',{en,bn,tip,mn,id},en);
const L=(en,right,wrong,tip,mn,id)=>add('listen',{en,opts:[{en:right[0],bn:right[1]}].concat(wrong.map(w=>({en:w[0],bn:w[1]}))),a:0,tip,mn,id},en);
const R=(they,theyBn,right,wrong,bn,tip,mn,id)=>add('reply',{they,theyBn,opts:[right].concat(wrong),a:0,bn,tip,mn,id},they);
const G=(right,wrong,bn,tip,mn,id)=>add('grammar',{opts:[right,wrong],a:0,bn,tip,mn,id},right);
const F=(text,right,wrong,bn,tip,mn)=>add('fill',{text,opts:[right].concat(wrong),a:0,bn,tip,mn},text);
const B=(en,bn,tip,mn)=>add('build',{en,bn,tip,mn},en);
const C=o=>add('concept',o,o.title);
const Sp=(en,bn,ex,tip,timer)=>add('speak',{en,bn,ex,tip,timer},en);
const W=(w,wbn,en,bn,tip,mn)=>add('word',{w,wbn,en,bn,tip,mn},w+'|'+en);
const D=(title,bn,turns,tip)=>add('dialog',{title,bn,turns:turns.map(t=>({they:t[0],theyBn:t[1],opts:[t[2],t[3]],a:0})),tip},title);

/* ======================= PART 1 · FIRST STEPS ======================= */
lesson('hello',1,'👋',"Hello & Help","নমস্কার ও সাহায্য");
P("Hello! How are you?","নমস্কার! কেমন আছেন?","Say it with a smile. 'How are you?' is just a friendly greeting — nobody expects a long answer.","British লোকেরা 'are'-এর 'র' প্রায় বলেই না — শুনবেন 'হাউ আ ইউ'।",'h1');
R("Hello! How are you?","নমস্কার! কেমন আছেন?","Fine, thank you. And you?",["Yes, I am hello."],"ভালো আছি, ধন্যবাদ। আপনি?","Always ask back — 'And you?' It's polite and keeps the chat going.",null,'h2');
P("Sorry, could you say that again, please?","মাফ করবেন, আর একবার বলবেন?","This is your magic sentence! Nobody minds repeating. Use it as many times as you need.","Again (অ্যাগেন) আর আবার — দুটোই 'আ' দিয়ে শুরু, মানেও এক! আবার = Again।",'h3');
P("Could you speak a bit more slowly, please?","একটু আস্তে আস্তে বলবেন?","British people often speak fast. Asking them to slow down is completely normal.","Slowly = স্লো — বাংলাতেও বলি 'ঘড়িটা স্লো চলছে'!",'h4');
P("Could you write it down, please?","একটু লিখে দেবেন?","You read English well — that's your secret strength! If you can't follow, ask them to write it, then read it calmly.","Write it down — কাগজের উপর 'নামিয়ে' লেখা। Down = নিচে, কাগজে!",'h5');
P("Excuse me, could you help me, please?","শুনছেন, একটু সাহায্য করবেন?","Start with 'Excuse me' to get someone's attention. People in uniform at airports and stations are there to help.","Excuse me আগে, Sorry পরে — ডাকার আগে 'Excuse me', ভুল হলে পরে 'Sorry'।",'h6');
L("Sorry, love, I didn't catch that.",["They didn't hear me. I can say it again.","উনি শুনতে পাননি — আবার বলি।"],[["They want to catch a ball.","উনি বল ধরতে চান।"]],"'I didn't catch that' = I didn't hear you. And 'love' is just a friendly word — British shopkeepers call everyone 'love'!",null,'h7');
G("Sorry, could you say that again?","Sorry, can you repeat?","আর একবার বলবেন?","Both are understood! But 'Could you…?' is softer and more polite — and the British love polite.",null,'h8');
P("Thank you very much. That's very kind of you.","অনেক ধন্যবাদ। আপনার অনেক দয়া।","In Britain people say 'thank you' all day — to bus drivers, shop staff, everyone. You can't say it too much!",null,'h9');

lesson('order',1,'🧩',"Building sentences","বাক্য গড়া");
C({title:"English word order",bnTitle:"ইংরেজি বাক্যের ক্রম",pattern:"{s:Who} → {v:Action} → {o:What}",
 en:"In English, the action word comes in the MIDDLE: Who → Action → What. In Bengali it comes at the END.",
 bn:"বাংলায় কাজটা থাকে শেষে: আমি চা খাই। ইংরেজিতে কাজটা মাঝখানে: I drink tea.",
 ex:[["{s:I} {v:drink} {o:tea}.","{s:আমি} {o:চা} {v:খাই}।"],["{s:I} {v:speak} {o:Bengali}.","{s:আমি} {o:বাংলা} {v:বলি}।"],["{s:We} {v:live} {o:in India}.","{s:আমরা} {o:ভারতে} {v:থাকি}।"]],
 mn:"বাংলায় কাজ লেজে, ইংরেজিতে কাজ মাঝে! 'I drink tea' — 'drink' মাঝখানে বসে চা খাচ্ছে ☕"});
B("I drink tea.","আমি চা খাই।","Who → Action → What.");
B("I speak Bengali.","আমি বাংলা বলি।");
B("I read English.","আমি ইংরেজি পড়ি।","You read English well — now you'll speak it too!");
G("I drink tea.","I tea drink.","আমি চা খাই।","In English the action word goes in the middle.","বাংলায় চা 'খাই', ইংরেজিতে চা 'drink' করি! ☕");
B("We live in India.","আমরা ভারতে থাকি।","Where comes at the end: Who → Action → Where.");
B("I like music.","আমার গান ভালো লাগে।","Bengali says 'music is good to me'. English says 'I like music' — start with I.");
Sp("Make your own sentence: I + action + what.","নিজে একটা বাক্য বানান: I + কাজ + কী।","I like flowers. I read books. I drink coffee.","There's no wrong answer — just say it out loud!");

lesson('me',1,'🙂',"About Me","আমার কথা");
P("My name is {name}.","আমার নাম {name}।","Or the short way: 'I'm {name}.' Both are perfect.",null,'m1');
G("My name is {name}.","Myself {name}.","আমার নাম {name}।","In India we often say 'Myself…'. In Britain, say 'My name is…' or 'I'm…'.","'Myself' মানে 'নিজেই' — 'I made it myself' (নিজেই বানিয়েছি)। নাম বলতে 'My name is'।",'m2');
P("I'm from India.","আমি ভারত থেকে এসেছি।","I'm = I am. The short 'I'm' sounds natural and friendly.",null,'m3');
P("I'm visiting {who} in {city}.","আমি {city}-এ আমার {whoBn} কাছে বেড়াতে এসেছি।","This one sentence answers many questions — say it slowly and proudly!",null,'m4');
R("Where are you from?","আপনি কোথা থেকে এসেছেন?","I'm from India.",["I'm going to India."],"আমি ভারত থেকে।","'Where are you FROM?' — listen for 'from' at the end.",null,'m5');
P("This is my first time in the UK.","এই প্রথম বিলেতে এলাম।","When you say this, people often become extra kind and helpful!","UK = বিলেত — ঠাকুমা-দিদিমারা যেমন বলতেন! 'First time' = প্রথমবার।",'m6');
G("I have two bags.","I am having two bags.","আমার দুটো ব্যাগ আছে।","For things you own, say 'I have'. ('I'm having tea' is fine — that means drinking it right now!)",null,'m7');
R("Lovely to meet you.","আপনার সাথে দেখা হয়ে খুব ভালো লাগল।","Lovely to meet you too.",["Yes, I am meeting."],"আপনার সাথে দেখা হয়েও ভালো লাগল।",null,"'Lovely' ব্রিটিশদের প্রিয় শব্দ — আমাদের 'বাহ্‌, দারুণ!'-এর মতো সবকিছুতে বলে।",'m8');

lesson('be',1,'🔗',"am · is · are","am, is, are");
C({title:"am · is · are",bnTitle:"ইংরেজিতে মাঝের শব্দটা লাগবেই",pattern:"{s:I} {v:am} · {s:he / she / it} {v:is} · {s:you / we / they} {v:are}",
 en:"In Bengali we can say 'আমি ভালো' with no action word. English always needs am, is or are in the middle: I AM fine.",
 bn:"I-এর সাথে am; একজন (he/she/it)-এর সাথে is; you আর অনেকের সাথে are।",
 ex:[["{s:I} {v:am} {o:fine}.","{s:আমি} {o:ভালো} আছি।"],["{s:The tea} {v:is} {o:hot}.","{s:চা-টা} {o:গরম}।"],["{s:We} {v:are} {o:from India}.","{s:আমরা} {o:ভারত থেকে}।"]],
 mn:"আমি-am — দুটোই 'আ/অ্যা' দিয়ে! একজন হলে is, অনেকে হলে are।"});
F("I ___ from India.","am",["is","are"],"আমি ভারত থেকে এসেছি।");
F("It ___ very cold today.","is",["are","am"],"আজ খুব ঠান্ডা।");
F("We ___ very happy.","are",["is","am"],"আমরা খুব খুশি।");
G("I am fine, thank you.","I fine, thank you.","আমি ভালো আছি, ধন্যবাদ।","English always needs 'am' after 'I'.");
B("She is my sister.","ও আমার বোন।");
B("The tea is very hot.","চা-টা খুব গরম।");
R("Are you tired?","আপনি কি ক্লান্ত?","No, I'm fine, thank you.",["No, I fine."],"না, আমি ঠিক আছি, ধন্যবাদ।","I'm = I am. The short form is very natural.");
P("I am very happy to be here.","এখানে এসে আমি খুব খুশি।");

lesson('benot',1,'❓',"Questions and 'not'","প্রশ্ন আর 'না'");
C({title:"Asking, and saying 'not'",bnTitle:"প্রশ্ন করতে is/are সামনে আসে",pattern:"{s:You} {v:are} tired. → {v:Are} {s:you} tired?",
 en:"To ask a question, move am / is / are to the front. To say 'not', put 'not' straight after it.",
 bn:"প্রশ্ন করতে is/are সামনে লাফ দেয়। 'না' বলতে ঠিক পরে 'not' বসান।",
 ex:[["{v:Is} {s:this} {o:your bag}?","{s:এটা} কি {o:আপনার ব্যাগ}?"],["{s:I} {v:am not} {o:hungry}.","{s:আমার} {o:খিদে} {v:নেই}।"],["{s:It} {v:isn't} {o:far}.","{s:এটা} {o:দূরে} {v:নয়}।"]],
 mn:"বাংলায় 'কি' বসিয়ে প্রশ্ন, ইংরেজিতে is/are-কে সামনে টেনে প্রশ্ন! isn't = is not।"});
B("Are you ready?","আপনি কি তৈরি?");
B("Is this your bag?","এটা কি আপনার ব্যাগ?");
F("I am ___ hungry, thank you.","not",["no"],"আমার খিদে নেই, ধন্যবাদ।","'No' answers a question. 'Not' goes inside the sentence: I am not…");
G("I am not tired.","I not tired.","আমি ক্লান্ত নই।");
R("Is this seat free?","এই সিটটা কি খালি?","Yes, it is. Please sit down.",["Yes, it free."],"হ্যাঁ, খালি। বসুন।","Short answers: 'Yes, it is.' / 'No, it isn't.'");
L("Is this your bag, madam?",["Is this bag yours?","এই ব্যাগটা কি আপনার?"],[["Do you want a bag?","আপনার কি ব্যাগ লাগবে?"]],"'Madam' is a polite way to address a lady.");
P("Is this the right bus for the city centre?","এটা কি সিটি সেন্টারের সঠিক বাস?");

lesson('little',1,'🔤',"a · an · the · plurals","a, an, the আর বহুবচন");
C({title:"a · an · the",bnTitle:"ছোট্ট শব্দ, বড় কাজ",pattern:"{o:a} bag · {o:an} apple · {o:the} station",
 en:"'a' = one thing (a bag). 'an' before a vowel sound: a, e, i, o, u (an apple, an hour). 'the' = a thing we both know (the station, the bus).",
 bn:"a/an = 'একটা'। the = 'টা/টি' — যেটা দুজনেই চিনি।",
 ex:[["I have {o:a} ticket.","আমার কাছে {o:একটা} টিকিট আছে।"],["I'd like {o:an} orange juice.","আমাকে {o:একটা} কমলালেবুর রস দিন।"],["Where is {o:the} toilet?","বাথরুম{o:টা} কোথায়?"]],
 mn:"'an' আসে অ, আ, ই, উ, এ, ও শব্দের আগে — an apple, an egg। 'the' = বাংলার 'টা'!"});
F("I'd like ___ apple, please.","an",["a"],"আমাকে একটা আপেল দিন।","'Apple' starts with a vowel sound, so: an apple.");
F("Excuse me, where is ___ station?","the",["a"],"শুনছেন, স্টেশনটা কোথায়?","We both know which station — so 'the'.");
G("I have two bags.","I have two bag.","আমার দুটো ব্যাগ আছে।","More than one: add -s. One bag, two bags.");
F("Two ___, please.","teas",["tea"],"দুটো চা দিন।","In cafés the British say 'Two teas, please' and 'Two coffees'.");
F("My friend has three ___.","children",["childs"],"আমার বন্ধুর তিনটি ছেলেমেয়ে।","Some words change: one child → two children; one man → two men; one woman → two women.");
B("I have a big suitcase.","আমার একটা বড় সুটকেস আছে।");
P("One coffee and two teas, please.","একটা কফি আর দুটো চা দিন।");

lesson('mine',1,'👪',"he, she · his, her","ছেলে না মেয়ে: he / she");
C({title:"he / she · his / her",bnTitle:"বাংলায় 'ও/সে' একটাই — ইংরেজিতে দুটো!",pattern:"{s:he} · {o:his} = man · {s:she} · {o:her} = woman",
 en:"Bengali uses one word (ও / সে / উনি) for a man or a woman. English has two: he / his for a man, she / her for a woman. This is the most common slip for Bengali speakers — go slowly!",
 bn:"পুরুষ হলে he / his, মহিলা হলে she / her।",
 ex:[["{s:He} is my brother. {o:His} name is Amit.","{s:ও} আমার ভাই। {o:ওর} নাম অমিত।"],["{s:She} is my friend. {o:Her} name is Rina.","{s:ও} আমার বন্ধু। {o:ওর} নাম রিনা।"],["This is {o:my} bag. Is this {o:your} bag?","এটা {o:আমার} ব্যাগ। এটা কি {o:আপনার} ব্যাগ?"]],
 mn:"she-তে বাড়তি একটা 'S' — শ্রীমতী-র 'শ'! শ্রীমতী = she, her।"});
F("This is ___ passport.","my",["me","I"],"এটা আমার পাসপোর্ট।");
F("What is ___ name, please?","your",["you"],"আপনার নাম কী?");
F("My sister lives in Delhi. ___ lives near the market.","She",["He"],"আমার বোন দিল্লিতে থাকে। ও বাজারের কাছে থাকে।","Sister = woman → she.");
F("My brother is a doctor. ___ wife is a teacher.","His",["Her"],"আমার ভাই ডাক্তার। ওর স্ত্রী শিক্ষিকা।","Brother = man → his.");
G("She is my friend. Her name is Mary.","She is my friend. His name is Mary.","ও আমার বন্ধু। ওর নাম মেরি।");
B("Her name is Mary.","ওর নাম মেরি।");
P("This is my son.","এ আমার ছেলে।","Change it to fit: This is my daughter / my grandson / my friend.");

lesson('numbers',1,'🔢',"Numbers & money","সংখ্যা আর টাকাপয়সা");
P("one, two, three, four, five, six, seven, eight, nine, ten","এক থেকে দশ","Say them slowly with the voice. Count your steps when you walk!");
P("eleven, twelve, thirteen, fourteen, fifteen","এগারো থেকে পনেরো");
L("thirteen",["13","তেরো"],[["30","তিরিশ"]],"thir-TEEN (13): the end is long and strong. THIR-ty (30): the start is strong.","-teen-এ টান শেষে: থার্‌-টিইইন। -ty-তে জোর শুরুতে: থার্‌-টি।");
L("That's thirty pounds, please.",["£30","তিরিশ পাউন্ড"],[["£13","তেরো পাউন্ড"]]);
L("That's twelve pounds ninety-nine.",["£12.99","বারো পাউন্ড নিরানব্বই পেন্স"],[["£2.99","দুই পাউন্ড নিরানব্বই পেন্স"]],"Prices like £12.99 are often said 'twelve ninety-nine'.");
L("Number twenty-five.",["25","পঁচিশ"],[["52","বাহান্ন"]]);
P("Could you write the price, please?","দামটা একটু লিখে দেবেন?","Numbers are easy to mishear — asking to see them is clever.");
P("Here you are.","এই নিন।","Say this when you hand over money or a ticket.");
Sp("Say your phone number in English, one number at a time.","আপনার ফোন নম্বর ইংরেজিতে, এক এক করে বলুন।","nine, eight, seven, six…","The British often say 'double' for two the same: 'double five' = 55.");

lesson('time',1,'🕰️',"Time & days","সময় আর বার");
P("What time is it, please?","কটা বাজে?");
L("It's half past ten.",["10:30","সাড়ে দশটা"],[["9:30","সাড়ে নটা"]],"'Half past ten' = 10:30. You may also hear 'ten thirty'.","Half past = সাড়ে। Half past ten = সাড়ে দশটা।");
L("It's quarter to three.",["2:45","পৌনে তিনটে"],[["3:15","সোয়া তিনটে"]],"Quarter to three = 2:45. Quarter past three = 3:15.","Quarter to = পৌনে, Quarter past = সোয়া!");
P("What time does it leave?","এটা কটায় ছাড়বে?");
L("The next bus is in ten minutes.",["The bus comes after ten minutes.","দশ মিনিট পরে বাস আসবে।"],[["The bus is number ten.","বাসের নম্বর দশ।"]]);
P("Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday","সোম থেকে রবিবার","Wednesday sounds like 'Wenz-day' — the first 'd' is silent!","Wednesday = 'ওয়েন্‌জ্‌ডে' — মাঝের 'd' চুপ!");
F("My flight is ___ Monday.","on",["at","in"],"আমার ফ্লাইট সোমবার।","Day → on.");
L("See you on Thursday!",["We'll meet on Thursday.","বৃহস্পতিবার দেখা হবে।"],[["See you on Tuesday.","মঙ্গলবার দেখা হবে।"]],"Thursday (থার্‌জ্‌ডে) and Tuesday (টিউজ্‌ডে) sound close — listen for 'th'.");
P("Today is Monday.","আজ সোমবার।","Change the day: Today is Tuesday… Wednesday…");

/* ======================= PART 2 · THE JOURNEY ======================= */
lesson('polite',2,'🙏',"Asking politely","ভদ্রভাবে চাওয়া");
C({title:"Could I…? · Could you…? · I'd like…",bnTitle:"'দিন' না বলে 'দেবেন?'",pattern:"{v:Could I have} {o:some water}, please?",
 en:"British people rarely say 'Give me…'. They ask: 'Could I have…?' (for yourself), 'Could you…?' (asking someone to do something), or 'I'd like…'.",
 bn:"'Give me' শুনতে কড়া লাগে। বলুন 'Could I have…?' — বাংলার 'দেবেন?'-এর মতো নরম।",
 ex:[["{v:Could I have} {o:a cup of tea}, please?","{o:এক কাপ চা} {v:দেবেন}?"],["{v:Could you} {o:help me}, please?","{o:আমাকে একটু সাহায্য} {v:করবেন}?"],["{v:I'd like} {o:a window seat}, please.","{o:জানলার ধারের সিট} {v:চাই}।"]],
 mn:"Could = 'দেবেন/করবেন?' — নরম অনুরোধ। I'd = I would।"});
F("___ I have some water, please?","Could",["Do"],"একটু জল দেবেন?");
G("Could I have some water, please?","Give me water.","একটু জল দেবেন?","Both get you water — but 'Could I have…' sounds kind and polite.");
B("Could you help me, please?","একটু সাহায্য করবেন?");
P("I'd like a window seat, please.","আমাকে জানলার ধারের সিট দিন।");
R("What would you like?","আপনি কী নেবেন?","I'd like a coffee, please.",["I am liking coffee."],"আমি একটা কফি নেব।");
F("I'd ___ a cup of tea, please.","like",["want to"],"আমি এক কাপ চা নেব।");

lesson('airport',2,'🧳',"At the Airport","বিমানবন্দরে");
P("Excuse me, where do I check in?","শুনছেন, চেক-ইন কোথায় করব?","Your airline's name is on the big screens. Look for it — or simply ask.",null,'a1');
P("I have one bag to check in.","আমার একটা ব্যাগ জমা দেওয়ার আছে।","'Check in' a bag = give it to the airline. You get it back at the end of the journey.",null,'a2');
P("Could I have an aisle seat, please?","করিডোরের ধারের সিট পেতে পারি?","An aisle seat is next to the walkway — easy to get up and stretch your legs.","Aisle = 'আইল' — 's' চুপ করে থাকে, ঠিক 'Island'-এর মতো!",'a3');
L("Have you got any liquids in your bag?",["Do you have water, oil or cream in your bag?","ব্যাগে জল, তেল বা ক্রিম আছে?"],[["Is your bag heavy?","ব্যাগটা কি ভারী?"]],"'Have you got…?' is the British way of saying 'Do you have…?' You'll hear it everywhere.",null,'a4');
L("Please put your bag and coat in the tray.",["Put your things in the plastic box to be checked.","জিনিসগুলো ট্রে-তে রাখুন।"],[["Please sit down here.","এখানে বসুন।"]],"At security, just copy the person in front of you. Take your time — it's not a race.",null,'a5');
P("Which gate is it, please?","কোন গেট, বলবেন?","The gate number is on your boarding pass and on the big screens. A gate is like a platform at a station.",null,'a6');
L("Boarding will begin shortly. Please have your boarding pass and passport ready.",["Get ready — we will get on the plane soon.","তৈরি থাকুন — একটু পরেই প্লেনে ওঠা শুরু।"],[["The shops are closing now.","দোকান বন্ধ হচ্ছে।"]],"'Boarding' = getting on the plane. 'Shortly' = soon.",null,'a7');
add('listen',{en:"This is the final call for passengers on flight BA256.",say:"This is the final call for passengers on flight B A two five six.",opts:[{en:"Last chance to get on that plane — go to the gate now.",bn:"ওই প্লেনে ওঠার শেষ ডাক — এখনই গেটে যান।"},{en:"Please call your family now.",bn:"এখন বাড়িতে ফোন করুন।"}],a:0,tip:"A little secret: go to your gate early. Then you never need to hurry — you can relax with a cup of tea.",id:'a8'},'a8');
G("Where is the gate?","Where is gate?","গেটটা কোথায়?","Little words like 'the' and 'a' make English sound smooth: the gate, the bus, a ticket.","'the' = 'টা/টি' — গেটটা, বাসটা। বাংলায় 'টা' ছাড়া বলি না, ইংরেজিতে 'the' ছাড়া নয়!",'a9');

lesson('thereis',2,'📍',"there is · there are","আছে কি?");
C({title:"there is · there are",bnTitle:"কোথাও কিছু 'আছে' বলতে",pattern:"{v:There is} {o:a café}. · {v:Is there} {o:a lift}?",
 en:"Use 'there is' for one thing and 'there are' for many. To ask: 'Is there…?' / 'Are there…?'",
 bn:"'আছে' = there is / there are। 'আছে কি?' = Is there…?",
 ex:[["{v:Is there} {o:a toilet} near here?","কাছাকাছি {o:বাথরুম} {v:আছে কি}?"],["{v:There are} {o:two lifts}.","{o:দুটো লিফট} {v:আছে}।"],["{v:There's} {o:a bench} over there.","ওখানে {o:একটা বেঞ্চ} {v:আছে}।"]],
 mn:"একটা → is, অনেক → are। একটা লিফট IS, দুটো লিফট ARE।"});
F("___ a toilet near here?","Is there",["Are there"],"কাছাকাছি কোনো বাথরুম আছে?");
F("There ___ two trains to London.","are",["is"],"লন্ডনের দুটো ট্রেন আছে।");
B("Is there a lift?","লিফট আছে?");
P("Is there somewhere I can sit down?","বসার কোনো জায়গা আছে?","Perfectly fine to ask — there are usually benches and seats.");
L("There's a café just over there.",["There is a café very near.","খুব কাছেই একটা ক্যাফে আছে।"],[["The café is closed.","ক্যাফে বন্ধ।"]],"'Just over there' = very close, where they are pointing.");
P("There's a problem with my ticket.","আমার টিকিটে একটা সমস্যা আছে।");

lesson('plane',2,'✈️',"On the Plane","প্লেনে");
L("Please fasten your seatbelt.",["Close your seatbelt.","সিটবেল্ট বেঁধে নিন।"],[["Please stand up.","উঠে দাঁড়ান।"]],"'Fasten' sounds like 'faa-sen' — the 't' is silent. Click metal into metal, and you're done.",null,'p1');
P("Excuse me, could I get past, please?","মাফ করবেন, একটু যেতে দেবেন?","Use this when you're in the window seat and need to get out.",null,'p2');
R("Would you like the chicken or the vegetarian?","চিকেন নেবেন, না নিরামিষ?","The vegetarian, please.",["Yes, please."],"নিরামিষটা দিন।","When someone asks 'A or B?', choose one — 'Yes, please' doesn't answer it! (Say 'The chicken, please' if you prefer.)",null,'p3');
P("Could I have some water, please?","একটু জল দেবেন?","The British say 'water' like 'waw-tuh' — no 'r' sound at the end.","British 'Water' = 'ওয়া-টা' — শেষের 'র' গিলে ফেলে!",'p4');
R("Tea or coffee?","চা না কফি?","Tea, please — with milk, no sugar.",["I am liking tea."],"চা দিন — দুধ দিয়ে, চিনি ছাড়া।","Say 'I like tea', not 'I am liking tea'. For likes and loves, no '-ing'.",null,'p5');
L("We are now beginning our descent. Please return to your seats.",["We will land soon. Go back to your seat.","একটু পরে নামব — নিজের সিটে ফিরে যান।"],[["Dinner is coming now.","এখন খাবার আসছে।"]],"'Descent' = going down. When you hear it, landing is about 20–30 minutes away.",null,'p6');
L("Please remain seated until the seatbelt sign has been switched off.",["Stay sitting until the little light goes off.","আলোটা নিভে না যাওয়া পর্যন্ত বসে থাকুন।"],[["Take your bag down now.","এখনই ব্যাগ নামান।"]],"No need to rush after landing. Wait calmly — everyone gets off.",null,'p7');
P("Could you help me with my bag, please?","ব্যাগটা নিয়ে একটু সাহায্য করবেন?","Cabin crew (the flight staff) are happy to help lift bags into the locker above your seat.",null,'p8');

lesson('wh',2,'❔',"Question words","প্রশ্নের শব্দ");
C({title:"what · where · when · which · who · why · how",bnTitle:"প্রশ্নের শব্দ থাকে একদম শুরুতে",pattern:"{v:Where} is the exit? · {v:When} does it leave?",
 en:"What = কী · Where = কোথায় · When = কখন · Which = কোনটা · Who = কে · Why = কেন · How = কীভাবে · How much = কত দাম. In Bengali the question word sits in the middle; in English it goes at the very START.",
 bn:"বাংলায়: বাসটা কখন আসবে? ইংরেজিতে: When does the bus come? — প্রশ্নের শব্দ সবার আগে।",
 ex:[["{v:Where} is the exit?","বেরোনোর রাস্তা {v:কোথায়}?"],["{v:When} does the train leave?","ট্রেন {v:কখন} ছাড়বে?"],["{v:How much} is it?","এটার দাম {v:কত}?"]],
 mn:"Where-এর ভেতরে আছে 'here' (এখানে) — জায়গার প্রশ্ন! When-এর ভেতরে 'hen' 🐔 — মুরগি কখন ডাকে? সময়ের প্রশ্ন!"});
F("___ is the toilet, please?","Where",["When"],"বাথরুম কোথায়?");
F("___ does the train leave?","When",["Where"],"ট্রেন কখন ছাড়বে?");
F("___ much is this?","How",["What"],"এটার দাম কত?");
F("___ one is mine?","Which",["Who"],"কোনটা আমার?");
B("Where is the exit?","বেরোনোর রাস্তা কোথায়?");
B("What time is it?","কটা বাজে?");
L("When does your flight leave?",["What time is your flight?","আপনার ফ্লাইট কখন?"],[["Where are you flying to?","আপনি কোথায় যাচ্ছেন?"]]);

lesson('transfer',2,'🔄',"Changing Planes","প্লেন বদল");
P("I have a connecting flight to {city}.","আমার {city} যাওয়ার পরের ফ্লাইট আছে।","Show your next boarding pass as you say this — staff will point you the right way.","Connecting = জোড়া লাগানো — দুটো ফ্লাইট হাত ধরাধরি করে আছে!",'t1');
L("Transfer passengers, please follow the signs for Flight Connections.",["If you're changing planes, follow the 'Flight Connections' signs.","প্লেন বদলালে 'Flight Connections' লেখা বোর্ড দেখে এগোন।"],[["Everyone must leave the airport now.","সবাইকে এখনই বেরিয়ে যেতে হবে।"]],"When changing planes, don't follow 'Exit' or 'Arrivals'. Follow 'Transfers' or 'Flight Connections'.",null,'t2');
P("Excuse me, where is the transfer desk?","শুনছেন, ট্রান্সফার ডেস্কটা কোথায়?","The transfer desk helps people changing planes. It's a good place to ask anything.",null,'t3');
P("Is this the right gate for {city}?","{city}-এর জন্য এটাই কি ঠিক গেট?","Checking is smart, not silly. Lots of travellers ask this at the desk.",null,'t4');
L("Please note, the flight to {city} will now depart from gate twenty-three.",["The gate has changed to 23 — go there.","গেট বদলে ২৩ নম্বর হয়েছে — ওখানে যান।"],[["The flight leaves at 23 o'clock.","ফ্লাইট রাত ১১টায়।"]],"Gate changes are normal. Look at the big screens every half hour and you'll always know.",null,'t5');
P("How long until boarding?","প্লেনে ওঠা শুরু হতে আর কতক্ষণ?","'How long until…?' works for anything: How long until the bus? How long until dinner?",null,'t6');
P("Could you show me the way, please?","রাস্তাটা একটু দেখিয়ে দেবেন?","Airport staff wear uniforms and ID cards. Helping travellers is their job — and they like doing it.",null,'t7');
G("My flight is at 10.30.","My flight is on 10.30.","আমার ফ্লাইট সাড়ে দশটায়।","Time → 'at' (at 10.30). Day → 'on' (on Monday). Month → 'in' (in May).","ঘড়ি-দিন-মাস → at-on-in! ঘড়িতে 'at', দিনে 'on', মাসে 'in'।",'t8');

lesson('arrive',2,'🇬🇧',"Arriving in the UK","বিলেতে পৌঁছে");
R("What's the purpose of your visit?","কেন এসেছেন?","I'm here to visit {who}.",["Yes, I am visiting."],"আমার {whoBn} কাছে বেড়াতে এসেছি।","'Purpose' = reason. Short, clear answers are perfect here.",null,'r1');
R("How long are you staying?","কতদিন থাকবেন?","For {stay}.",["Since {stay}."],"{stayBn} জন্য।","'For' + amount of time: for {stay}. ('Since' is for a starting day: since Monday.)","For = জন্য — 'কতদিনের জন্য?' → 'For…'",'r2');
R("Where will you be staying?","কোথায় থাকবেন?","With {who}, in {city}.",["I will be stay in {city}."],"{city}-এ, আমার {whoBn} সাথে।","Keep the address written on paper in your bag, with your passport. Then you can simply show it.",null,'r3');
R("Have you got a return ticket?","ফেরার টিকিট আছে?","Yes, here it is.",["Yes, I have got."],"হ্যাঁ, এই যে।","Keep your passport, return ticket and the address together in one folder. Hand it over with a smile.",null,'r4');
L("Have you been to the UK before?",["Did you ever come to the UK in the past?","আগে কখনো বিলেতে এসেছেন?"],[["Are you going to the UK?","আপনি কি বিলেত যাচ্ছেন?"]],"You can answer: 'No, this is my first time.'",null,'r5');
P("Here is my passport.","এই যে আমার পাসপোর্ট।","The officer at the desk asks everyone the same few simple questions — and you're practising all of them here.",null,'r6');
R("Is anyone meeting you here?","কেউ আপনাকে নিতে আসছে?","Yes, {who} is waiting outside.",["Yes, I am meeting."],"হ্যাঁ, আমার {whoNom} বাইরে অপেক্ষা করছে।",null,null,'r7');
P("Where is baggage reclaim?","ব্যাগ কোথায় পাব?","In Britain it's called 'baggage reclaim'. Look for your flight number on the screen above the belt.","Reclaim = ফেরত নেওয়া — নিজের ব্যাগ 'ফেরত' নেওয়ার জায়গা।",'r8');
R("Have you got anything to declare?","আপনার কাছে জানানোর মতো কিছু আছে?","No, nothing to declare.",["Yes, I declare."],"না, কিছু নেই।","Food rules are strict in the UK — check with family before packing sweets or pickles. Not sure? Ask: 'Is this all right?'",null,'r9');
G("I came here to visit my family.","I came here for visiting my family.","আমি পরিবারের সাথে দেখা করতে এসেছি।","'To' + action tells the reason: to visit, to see, to meet.",null,'r10');

lesson('place',2,'🧭',"Where things are","কোথায় কী আছে");
C({title:"in · on · under · next to · opposite",bnTitle:"জায়গা বোঝানোর শব্দ",pattern:"The bank is {o:next to} the station.",
 en:"These small words say where something is. Bengali puts them AFTER (স্টেশনের পাশে); English puts them BEFORE (next to the station).",
 bn:"বাংলায় 'পাশে' পরে আসে, ইংরেজিতে 'next to' আগে আসে।",
 ex:[["{o:in} the bag","ব্যাগের {o:ভেতরে}"],["{o:on} the table","টেবিলের {o:উপরে}"],["{o:under} the seat","সিটের {o:নিচে}"],["{o:next to} the bank","ব্যাংকের {o:পাশে}"],["{o:opposite} the station","স্টেশনের {o:উল্টোদিকে}"]],
 mn:"বাংলায় শব্দটা পিছনে, ইংরেজিতে সামনে — যেন ঘুরে দাঁড়িয়েছে! স্টেশনের পাশে → next to the station।"});
F("My passport is ___ my bag.","in",["on"],"আমার পাসপোর্ট ব্যাগের ভেতরে।");
F("Please put your bag ___ the seat in front of you.","under",["on"],"ব্যাগটা সামনের সিটের নিচে রাখুন।","On the plane you'll hear this before take-off.");
L("It's opposite the station.",["It's across the road from the station.","স্টেশনের উল্টোদিকে।"],[["It's inside the station.","স্টেশনের ভেতরে।"]]);
L("Turn left at the traffic lights.",["Go left where the traffic lights are.","সিগন্যালে বাঁদিকে ঘুরুন।"],[["Turn right after the lights.","সিগন্যালের পরে ডানদিকে।"]],"Left = বাঁ, Right = ডান.","বাঁ হাতের বুড়ো আঙুল আর তর্জনী মিলে 'L' — Left!");
L("Go straight on, then it's on your right.",["Walk ahead; it will be on the right side.","সোজা যান, ডানদিকে পড়বে।"],[["Go back the way you came.","যেদিক থেকে এসেছেন সেদিকে ফিরে যান।"]]);
P("Is it on the left or on the right?","বাঁদিকে না ডানদিকে?");
B("The shop is next to the bank.","দোকানটা ব্যাংকের পাশে।");

lesson('around',2,'🚌',"Getting Around","চলাফেরা");
P("Excuse me, how do I get to the station?","শুনছেন, স্টেশনে কীভাবে যাব?","Swap 'the station' for any place: the shops, the park, the hospital.",null,'g1');
P("Does this bus go to the city centre?","এই বাসটা কি সিটি সেন্টারে যায়?","Ask the driver as you get on — it's very normal in Britain.","City centre = শহরের মাঝখান — যেমন কলকাতার ধর্মতলা!",'g2');
P("Could you tell me when we get there, please?","পৌঁছলে আমাকে একটু বলে দেবেন?","Sit near the front of the bus. Drivers hear this question every day.",null,'g3');
P("A return ticket to the city centre, please.","সিটি সেন্টারের একটা রিটার্ন টিকিট দিন।","Single = one way. Return = there and back.","Single = শুধু যাওয়া; Return = যাওয়া-আসা। Return মানে 'ফেরা' — ফেরার টিকিটও সঙ্গে!",'g4');
L("Mind the gap.",["Be careful of the space between the train and the platform.","ট্রেন আর প্ল্যাটফর্মের মাঝের ফাঁকটা খেয়াল করুন।"],[["Please wait for the next train.","পরের ট্রেনের জন্য অপেক্ষা করুন।"]],null,"ঠিক কলকাতা মেট্রোর মতো — 'Mind' মানে 'খেয়াল রাখুন'!",'g5');
L("The train now arriving at platform two is for {city}.",["The train for {city} is coming to platform 2.","{city}-এর ট্রেন ২ নম্বর প্ল্যাটফর্মে আসছে।"],[["Two trains are late today.","আজ দুটো ট্রেন দেরিতে।"]],"Station screens show the same information. Read the screen — you read English well!",null,'g6');
P("Which platform for {city}, please?","{city}-এর ট্রেন কোন প্ল্যাটফর্মে?","Short questions are fine. 'Which platform for…?' is exactly how British people ask.",null,'g7');
L("It's just round the corner.",["It's very close.","খুব কাছেই।"],[["It's very far away.","অনেক দূর।"]],"'Just round the corner' = very near. 'A fair way' = quite far.",null,'g8');
P("I'm a bit lost. Could you help me, please?","আমি একটু রাস্তা গুলিয়ে ফেলেছি। একটু সাহায্য করবেন?","Keep the address on your phone or on paper, and show it. People are kind — and you can always phone home.",null,'g9');
G("Where can I buy a ticket?","Where I can buy a ticket?","টিকিট কোথায় কিনতে পারি?","In a question, 'can' jumps to the front: Where can I…? How can I…?","প্রশ্নে 'can' ব্যাঙের মতো লাফিয়ে সামনে আসে! 🐸",'g10');

lesson('shops',2,'☕',"Shops & Cafés","দোকান ও ক্যাফে");
P("Could I have a cup of tea, please?","এক কাপ চা দেবেন?","In Britain, tea comes with milk unless you say 'no milk'.","'Please' শেষে = পাতের শেষে মিষ্টি! মিষ্টি ছাড়া খাওয়া শেষ হয় না, 'please' ছাড়া অনুরোধ শেষ হয় না।",'s1');
R("Eat in or take away?","এখানে খাবেন, না নিয়ে যাবেন?","Take away, please.",["Yes, eat."],"নিয়ে যাব।","Eat in = sit and eat here. Take away = take it with you.",null,'s2');
P("How much is this?","এটার দাম কত?",null,"'How much' — 'হাউ মাচ' — মাছের বাজার মনে করুন! 'মাছ কত করে?' = 'How much?'",'s3');
L("That's four pounds fifty, please.",["£4.50","সাড়ে চার পাউন্ড"],[["£45","পঁয়তাল্লিশ পাউন্ড"],["£4.15","চার পাউন্ড পনেরো পেন্স"]],"'Four fifty' = £4.50. 'Fifty p' = 50 pence.",null,'s4');
R("Do you need a bag?","ব্যাগ লাগবে?","No, thanks. I've got one.",["No, I am having."],"না, ধন্যবাদ। আমার কাছে আছে।","UK shops charge a little for bags, so they always ask. Carry a cloth bag!",null,'s5');
P("Can I pay by card?","কার্ডে দাম দিতে পারি?","If they say 'Contactless?', just touch your card or phone on the machine.",null,'s6');
P("I'm just looking, thanks.","এমনি দেখছি, ধন্যবাদ।",null,"গড়িয়াহাটে যেমন বলেন 'এমনি দেখছি, দাদা' — ঠিক তাই!",'s7');
P("Is this vegetarian?","এটা কি নিরামিষ?","In India it's a green dot. In the UK, look for a 'V' on menus and packets.",null,'s8');
G("Could I have a tea, please?","Give me one tea.","একটা চা দেবেন?","Both will get you tea! But 'Could I have…, please?' sounds warm and polite to British ears.",null,'s9');
L("Cheers, love. Have a nice day!",["Thanks! Have a good day.","ধন্যবাদ! দিনটা ভালো কাটুক।"],[["Let's have a drink together.","চলুন একসাথে পান করি।"]],null,"'Cheers' শুধু গ্লাস ঠোকাঠুকি নয় — দোকানে 'Cheers' মানে 'ধন্যবাদ'!",'s10');

lesson('present',2,'🔁',"Every day: I live, she lives","রোজকার কাজ");
C({title:"I live · she lives",bnTitle:"he / she / it-এর পিছনে 's' লেজ",pattern:"{s:I} {v:live} · {s:She} {v:lives}",
 en:"For things that happen every day or are always true: I live, you live, we live, they live — but he lives, she lives, it lives. Add -s for he / she / it, or one other person (my sister lives).",
 bn:"অন্য একজন (he / she) হলে কাজের শব্দের পিছনে একটা 's' লেজ লাগে।",
 ex:[["{s:I} {v:drink} {o:tea} every morning.","{s:আমি} রোজ সকালে {o:চা} {v:খাই}।"],["{s:My sister} {v:lives} {o:in Delhi}.","{s:আমার বোন} {o:দিল্লিতে} {v:থাকে}।"],["{s:The bus} {v:leaves} {o:at nine}.","{s:বাসটা} {o:ন'টায়} {v:ছাড়ে}।"]],
 mn:"বাংলাতেও বদলায়: আমি থাকি, সে থাকে! ইংরেজিতে: I live, she lives — 'সে'-র বেলায় 's'!"});
F("My sister ___ in Delhi.","lives",["live"],"আমার বোন দিল্লিতে থাকে।");
F("I ___ tea every morning.","drink",["drinks"],"আমি রোজ সকালে চা খাই।","With 'I', no -s.");
F("The train ___ at ten o'clock.","leaves",["leave"],"ট্রেন দশটায় ছাড়ে।");
G("She works in a bank.","She work in a bank.","ও ব্যাংকে কাজ করে।");
B("I live in India.","আমি ভারতে থাকি।");
B("He works in a hospital.","ও হাসপাতালে কাজ করে।");
Sp("Say two things you do every day.","রোজ করেন এমন দুটো কাজ বলুন।","I drink tea. I read the newspaper.","Start with 'I…'. No -s needed for I!");
