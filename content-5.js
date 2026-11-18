"use strict";
/* ============ More grammar, phrasal verbs, and 'when you don't understand' ============ */

lesson('attime',0,'🗓️',"at, on, in: talking about time","সময়ের at, on, in");
C({title:"at · on · in for time",bnTitle:"ঘড়ি-দিন-মাস → at-on-in",pattern:"{t:at} 7 o'clock · {t:on} Monday · {t:in} May",
 en:"at = an exact time (at 7 o'clock, at night, at lunchtime). on = a day or date (on Monday, on 5th June, on my birthday). in = longer times (in May, in 2027, in winter, in the morning, in the evening).",
 bn:"at = ঘড়ির সময়। on = দিন বা তারিখ। in = মাস, বছর, ঋতু, আর সকাল/বিকেল/সন্ধ্যা।",
 ex:[["The bus leaves {t:at} half past nine.","বাস সাড়ে ন'টায় ছাড়ে।"],["We're meeting {t:on} Sunday.","আমরা রবিবার দেখা করছি।"],["I'm travelling {t:in} June.","আমি জুন মাসে যাচ্ছি।"],["I walk {t:in} the morning, and I sleep {t:at} night.","সকালে হাঁটি, রাতে ঘুমোই।"]],
 mn:"পিরামিড ভাবুন 🔺: চূড়ায় ছোট্ট 'at' (ঘড়ি), মাঝে 'on' (দিন), নিচে চওড়া 'in' (মাস, বছর)। মনে রাখার বাক্য: I arrived at night, on a Sunday, in June."});
F("Let's meet ___ four o'clock.","at",["on","in"],"চলো চারটেয় দেখা করি।");
F("My birthday is ___ March.","in",["on","at"],"আমার জন্মদিন মার্চ মাসে।");
F("The doctor can see you ___ Tuesday.","on",["in","at"],"ডাক্তার আপনাকে মঙ্গলবার দেখবেন।");
F("I like to read ___ the evening.","in",["at","on"],"আমি সন্ধ্যায় পড়তে ভালোবাসি।","in the morning / afternoon / evening — but at night.");
F("It's very quiet here ___ night.","at",["in"],"রাতে এখানে খুব চুপচাপ।");
B("I'll see you on Friday at ten.","শুক্রবার দশটায় দেখা হবে।");
Sp("Say when your birthday is, and what time you get up.","আপনার জন্মদিন কবে আর কটায় ঘুম থেকে ওঠেন বলুন।","My birthday is in October, on the twelfth. I get up at six o'clock in the morning.");

lesson('notunderstand',0,'🤔',"When you don't understand someone","কারও কথা বুঝতে না পারলে");
C({title:"Not understanding is normal",bnTitle:"না বোঝা স্বাভাবিক — চুপ করে থাকবেন না",pattern:"{v:Ask} — don't {o:pretend}",
 en:"Everyone misses words sometimes — even British people ask each other to repeat! Don't nod and pretend. Instead: ask them to repeat or slow down, catch the key words, repeat back what you understood, ask about one word, or ask them to write it down.",
 bn:"ব্রিটিশরাও একে অপরকে আবার বলতে বলে! না বুঝে মাথা নাড়বেন না। আবার বলতে বলুন, মূল শব্দগুলো ধরুন, যা বুঝেছেন তা মিলিয়ে নিন, লিখে দিতে বলুন।",
 ex:[["Sorry, could you say that {v:more slowly}?","একটু {v:আস্তে} বলবেন?"],["You said {v:platform four}, is that right?","{v:চার নম্বর প্ল্যাটফর্ম} বললেন, তাই তো?"],["Sorry, what does '{v:return}' mean?","'{v:return}' মানে কী?"]],
 mn:"সব শব্দ লাগে না — মূল শব্দগুলো ধরুন, যেন মাছ ধরার জাল 🎣: bus… ten… minutes!"});
P("Sorry, I didn't understand. Could you say it another way?","দুঃখিত, বুঝতে পারিনি। অন্যভাবে বলবেন?","If the same words come again, it won't help — ask for different words.");
P("Could you use simpler words, please?","একটু সহজ শব্দে বলবেন?");
P("I'm still learning English, so please speak slowly.","আমি এখনো ইংরেজি শিখছি, তাই একটু আস্তে বলবেন।","People are kind when they know. It's not a weakness — it's helpful information.");
P("I understood 'platform', but which number?","'প্ল্যাটফর্ম' বুঝলাম, কিন্তু কত নম্বর?","Say the part you DID understand. Then ask only about the missing bit.");
P("Could you show me on the map?","ম্যাপে একটু দেখিয়ে দেবেন?","Pointing and showing work in every language.");
L("Y'alright, love? D'you want a bag for that?",["Hello — do you need a bag for those things?","ব্যাগ লাগবে?"],[["Is that your bag?","এটা কি আপনার ব্যাগ?"]],"Fast speech squashes words: 'D'you' = 'Do you'. Catch the key words: want… bag.");
L("Next stop's yours, love — just after the lights.",["Get off at the next stop, after the traffic lights.","পরের স্টপে নামবেন — সিগন্যালের ঠিক পরেই।"],[["The lights are on the bus.","বাসের আলো জ্বলছে।"]],"Key words: next stop… after the lights.");
D("When someone speaks too fast","কেউ খুব তাড়াতাড়ি বললে",[
 ["Righ', so it's the number nine from stand B, change at the interchange.","তো, B স্ট্যান্ড থেকে ৯ নম্বর, ইন্টারচেঞ্জে বদলাবেন।","Sorry, I'm still learning English. Could you say that more slowly?","Yes, OK, thank you."],
 ["Of course. Take bus number nine… from stand B.","অবশ্যই। ৯ নম্বর বাস… B স্ট্যান্ড থেকে।","Number nine, from stand B. And then?","Nine is B."],
 ["Then change buses at the interchange — that's the big bus station.","তারপর ইন্টারচেঞ্জে — মানে বড় বাস স্টেশনে — বাস বদলাবেন।","Sorry, what does 'change' mean here?","Change money?"],
 ["It means get off and take a different bus.","মানে নেমে অন্য একটা বাস ধরবেন।","I see! Could you write it down for me, please?","I see, bus."],
 ["No problem at all. Here you go.","কোনো ব্যাপার না। এই নিন।","Thank you so much. You're very kind.","Write is done."]]);

lesson('presentuses',0,'🔁',"Present simple: what it's used for","বর্তমান কাল কখন ব্যবহার হয়");
C({title:"Present simple: four jobs",bnTitle:"সাধারণ বর্তমান — চারটে কাজ",pattern:"{s:I} {v:walk} {t:every day} · {s:The sun} {v:rises} in the east",
 en:"1) Habits and routines: I walk every day. 2) Things true now: I live in Kolkata. 3) Facts that are always true: Water boils at 100 degrees. 4) Timetables, even for the future: The train leaves at 9 tomorrow.",
 bn:"১) অভ্যেস: রোজ হাঁটি। ২) এখনকার সত্য: কলকাতায় থাকি। ৩) চিরসত্য: সূর্য পূর্বে ওঠে। ৪) সময়সূচি: ট্রেন কাল ৯টায় ছাড়ে।",
 ex:[["{s:I} {v:call} my sister {t:twice a week}.","{s:আমি} {t:সপ্তাহে দুবার} বোনকে {v:ফোন করি}।"],["{s:My daughter} {v:works} in an office.","{s:আমার মেয়ে} অফিসে {v:কাজ করে}।"],["{s:The sun} {v:rises} in the east.","{s:সূর্য} পূর্ব দিকে {v:ওঠে}।"],["{s:The museum} {v:opens} {t:at ten tomorrow}.","{s:জাদুঘর} {t:কাল দশটায়} {v:খোলে}।"]],
 mn:"কত ঘনঘন? once = একবার, twice = দুবার, three times = তিনবার — a day / a week / a month!"});
F("I see my sister ___ a week.","twice",["two"],"আমি সপ্তাহে দুবার বোনের সাথে দেখা করি।","once, twice, three times, four times…");
F("The museum ___ at ten o'clock.","opens",["is opening"],"জাদুঘর দশটায় খোলে।","Timetables use the present simple.");
F("Water ___ at 100 degrees.","boils",["boil"],"জল ১০০ ডিগ্রিতে ফোটে।");
F("We usually go shopping ___ the weekend.","at",["in"],"আমরা সাধারণত সপ্তাহান্তে বাজার করি।","British English: at the weekend.");
B("I go to the market twice a week.","আমি সপ্তাহে দুবার বাজারে যাই।");
P("I call my family every evening.","রোজ সন্ধ্যায় পরিবারকে ফোন করি।");
L("The next train leaves at four fifteen.",["The next train goes at 4:15.","পরের ট্রেন সওয়া চারটেয় ছাড়বে।"],[["The next train arrives at 4:50.","পরের ট্রেন চারটে পঞ্চাশে আসবে।"]],"fifteen (১৫) and fifty (৫০) sound close — listen for the long 'teen'.");
Sp("Tell me three things you do every week, and how often.","প্রতি সপ্তাহে করেন এমন তিনটে কাজ আর কতবার বলুন।","I go to the market twice a week. I call my sister every Sunday. I cook fish three times a week.");

lesson('shortanswers',0,'✔️',"Short answers: Yes, I do","ছোট উত্তর: Yes, I do");
C({title:"Short answers",bnTitle:"ছোট উত্তর — ভদ্র আর স্বাভাবিক",pattern:"{v:Do} you…? → Yes, I {v:do}. / No, I {v:don't}.",
 en:"Answer with the same helper word as the question: Do you…? → Yes, I do. Does she…? → Yes, she does. Did you…? → Yes, I did. Are you…? → Yes, I am. Can you…? → No, I can't. Just 'Yes' or 'No' can sound a bit sharp.",
 bn:"প্রশ্নে যে সাহায্যকারী শব্দ, উত্তরেও সেটাই: Do → do, Did → did, Are → am, Can → can।",
 ex:[["{v:Do} you like tea? — Yes, I {v:do}.","চা ভালো লাগে? — হ্যাঁ।"],["{v:Does} she live here? — No, she {v:doesn't}.","ও কি এখানে থাকে? — না।"],["{v:Did} you sleep well? — Yes, I {v:did}.","ভালো ঘুম হয়েছে? — হ্যাঁ।"],["{v:Are} you tired? — No, I'm {v:not}.","ক্লান্ত? — না।"]],
 mn:"প্রশ্নের শব্দটাই উত্তরে ফেরত দিন — যেন প্রতিধ্বনি 🔊: Do…? → I do!"});
R("Do you like British tea?","ব্রিটিশ চা ভালো লাগে?","Yes, I do. It's lovely.",["Yes, I like."],"হ্যাঁ, খুব ভালো।");
R("Does your daughter live near here?","আপনার মেয়ে কি কাছেই থাকে?","Yes, she does.",["Yes, she lives."],"হ্যাঁ, কাছেই থাকে।");
R("Are you from India?","আপনি কি ভারত থেকে?","Yes, I am.",["Yes, I do."],"হ্যাঁ।");
R("Can you swim?","আপনি সাঁতার জানেন?","No, I can't. But I'd like to learn!",["No, I don't can."],"না, পারি না। তবে শিখতে চাই!");
R("Did you have breakfast?","জলখাবার খেয়েছেন?","Yes, I did, thank you.",["Yes, I had."],"হ্যাঁ, খেয়েছি, ধন্যবাদ।");
R("Is it far from here?","এখান থেকে দূরে?","No, it isn't. It's about five minutes.",["No, it don't."],"না, পাঁচ মিনিট মতো।");
F("Do you have a pen? — Yes, I ___.","do",["have"],"আপনার কাছে কলম আছে? — হ্যাঁ।");

lesson('pv-morning',0,'⏰',"Phrasal verbs: my morning","দুই-শব্দের ক্রিয়া: সকাল");
C({title:"Phrasal verbs",bnTitle:"কাজের শব্দ + ছোট্ট শব্দ = নতুন মানে",pattern:"{v:get} + {o:up} = উঠে পড়া · {v:get} + {o:on} = (বাসে) ওঠা",
 en:"A phrasal verb is an action word + a little word (up, on, off, out, down). The little word changes the meaning! Learn them as one piece, like a single word.",
 bn:"ছোট্ট শব্দটা মানে বদলে দেয়: get up = ঘুম থেকে ওঠা, get on = বাসে ওঠা, get off = নামা। পুরোটা একসাথে শিখুন।",
 ex:[["I {v:get up} at six.","আমি ছটায় উঠি।"],["{v:Put on} your coat.","কোটটা পরে নাও।"],["{v:Turn off} the light, please.","আলোটা নিভিয়ে দাও।"]],
 mn:"up = উপরে ⬆️ (get up — বিছানা ছেড়ে উপরে), off = বন্ধ/নেমে ⬇️ (turn off, get off)।"});
W("wake up","ঘুম ভাঙা","I wake up early, before the alarm.","অ্যালার্মের আগেই আমার ঘুম ভেঙে যায়।");
W("get up","উঠে পড়া","I get up at six and make tea.","ছটায় উঠে চা বানাই।","wake up = open your eyes; get up = get out of bed.");
W("put on","পরা","Put on your scarf — it's cold.","স্কার্ফটা পরে নাও — ঠান্ডা।");
W("take off","খোলা (জামা/জুতো)","Please take off your shoes.","জুতোটা খুলে আসুন।","A plane also 'takes off' — it leaves the ground!");
W("turn on","চালানো / জ্বালানো","Could you turn on the heating?","হিটারটা চালিয়ে দেবেন?","Also: switch on.");
W("turn off","বন্ধ করা / নেভানো","Don't forget to turn off the cooker.","কুকার বন্ধ করতে ভুলবেন না।","Also: switch off.");
W("go out","বাইরে যাওয়া","I'm going out for a walk.","আমি একটু হাঁটতে বেরোচ্ছি।");
W("come back","ফিরে আসা","I'll come back at five.","পাঁচটায় ফিরে আসব।");
F("Please ___ your shoes at the door.","take off",["take on"],"দরজায় জুতো খুলে রাখুন।");

lesson('nowuses',0,'🌱',"Present continuous: now, these days, and plans","এখন, আজকাল, আর পরিকল্পনা");
C({title:"am / is / are + -ing: four jobs",bnTitle:"-ing-এর চারটে কাজ",pattern:"{s:I}'m {v:staying} with my son {t:at the moment}.",
 en:"1) Happening right now: I'm cooking. 2) For a while, these days: I'm staying with my son this month. 3) Changing: My English is getting better! 4) Fixed plans with a time: I'm flying home on Monday.",
 bn:"১) এখনই: রান্না করছি। ২) আজকাল / কিছুদিনের জন্য: এ মাসে ছেলের কাছে আছি। ৩) বদলাচ্ছে: ইংরেজি আরও ভালো হচ্ছে! ৪) পাকা পরিকল্পনা: সোমবার ফিরছি।",
 ex:[["{s:I}'m {v:cooking} {t:right now}.","{t:এখন} {v:রান্না করছি}।"],["{s:I}'m {v:staying} with my daughter {t:this month}.","{t:এই মাসে} মেয়ের কাছে {v:আছি}।"],["{s:My English} {v:is getting} better!","{s:আমার ইংরেজি} আরও ভালো {v:হচ্ছে}!"],["{s:We}'re {v:visiting} the seaside {t:on Saturday}.","{t:শনিবার} সমুদ্রের ধারে {v:যাচ্ছি}।"]],
 mn:"-ing = 'চলছে' — এখন চলছে, এ মাসে চলছে, বদল চলছে, প্ল্যান চলছে! 🎬"});
F("At the moment I ___ with my daughter in {city}.","am staying",["stay"],"এখন আমি {city}-এ মেয়ের কাছে আছি।","'At the moment' = for now, not forever → -ing.");
F("My English ___ better every day!","is getting",["gets"],"আমার ইংরেজি রোজ আরও ভালো হচ্ছে!");
F("I ___ to Edinburgh on Monday. I've got my ticket.","am going",["go"],"সোমবার এডিনবরা যাচ্ছি। টিকিট কাটা আছে।","A fixed plan with a day → present continuous.");
P("My English is getting better!","আমার ইংরেজি আরও ভালো হচ্ছে!","Say this proudly — it's true!");
P("I'm staying here for three weeks.","আমি এখানে তিন সপ্তাহ আছি।");
R("What are you doing this weekend?","এই সপ্তাহান্তে কী করছেন?","We're visiting the seaside on Saturday.",["We visit seaside Saturday."],"শনিবার আমরা সমুদ্রের ধারে যাচ্ছি।");
G("I'm staying with my son at the moment.","I stay with my son at the moment.","এখন আমি ছেলের কাছে আছি।");
Sp("What is changing in your life these days?","আজকাল আপনার জীবনে কী কী বদলাচ্ছে?","I'm learning English every day. My English is getting better. I'm getting ready for my trip.");

lesson('pastuses',0,'📜',"Past simple: what it's used for","অতীত কাল কখন ব্যবহার হয়");
C({title:"Past simple: four jobs",bnTitle:"সাধারণ অতীত — চারটে কাজ",pattern:"{s:I} {v:went} to Puri {t:in 2015}.",
 en:"1) One finished action at a time in the past: I went to Puri in 2015. 2) True for a long time, then finished: I worked in a school for thirty years. 3) Repeated in the past: We walked to school every day. 4) Steps in a story: I got up, had tea and went out.",
 bn:"১) একবার ঘটেছিল: ২০১৫-য় পুরী গেলাম। ২) অনেকদিন সত্য ছিল: তিরিশ বছর স্কুলে কাজ করেছি। ৩) বারবার হত: রোজ হেঁটে স্কুলে যেতাম। ৪) গল্পের ধাপ: উঠলাম, চা খেলাম, বেরোলাম।",
 ex:[["{s:I} {v:went} to Puri {t:in 2015}.","{t:২০১৫-য়} পুরী {v:গেলাম}।"],["{s:We} {v:lived} in a small town {t:for many years}.","{t:অনেক বছর} ছোট শহরে {v:থাকতাম}।"],["{s:I} {v:got} up, {v:had} tea and {v:went} out.","উঠলাম, চা খেলাম, বেরোলাম।"]],
 mn:"'ago' দেখলেই অতীত! two years ago → I went (I have gone নয়)।"});
F("We ___ in a small town when I was young.","lived",["live"],"ছোটবেলায় আমরা ছোট একটা শহরে থাকতাম।");
F("I got up, ___ a bath and had breakfast.","had",["have"],"উঠলাম, স্নান করলাম, জলখাবার খেলাম।","In a story, every step uses the past.");
F("I went to Delhi two years ___.","ago",["before"],"দু-বছর আগে দিল্লি গিয়েছিলাম।","'Ago' counts back from today: two years ago.");
F("My sister got married ___ 1995.","in",["on"],"আমার বোনের বিয়ে হয়েছিল ১৯৯৫ সালে।","Years → in.");
G("I went to Delhi last year.","I have gone to Delhi last year.","গত বছর দিল্লি গিয়েছিলাম।","With a finished time (last year, ago, in 2015), use the past simple.");
B("I went to Puri last summer.","গত গ্রীষ্মে আমি পুরী গিয়েছিলাম।");
Sp("Tell me about one day last week, step by step.","গত সপ্তাহের একটা দিনের কথা ধাপে ধাপে বলুন।","On Tuesday I got up early. I went to the market and bought vegetables. Then I cooked lunch and called my sister.");

lesson('inat',0,'📍',"in, at, on: talking about places","জায়গার in, at, on");
C({title:"in · at · on for places",bnTitle:"কোথায়? in, at, না on?",pattern:"{o:in} London · {o:at} the airport · {o:on} the bus",
 en:"in = inside an area (in India, in London, in the park, in the kitchen). at = a point or a place for an activity (at the airport, at the station, at the doctor's, at a party). on = a surface, or buses, trains and planes (on the table, on the bus). Some you just learn as a set: at home, at work, at school, in bed, in a car, in a taxi.",
 bn:"in = ভেতরে (দেশ, শহর, ঘর)। at = নির্দিষ্ট জায়গা বা কাজের জায়গা (স্টেশনে, এয়ারপোর্টে)। on = উপরে, আর বাস-ট্রেন-প্লেনে।",
 ex:[["My daughter lives {o:in} London.","আমার মেয়ে লন্ডনে থাকে।"],["I'll meet you {o:at} the station.","তোমার সাথে স্টেশনে দেখা করব।"],["I'm {o:on} the bus now.","আমি এখন বাসে।"],["She's {o:at} home today.","ও আজ বাড়িতে।"]],
 mn:"বাসে 'on', গাড়িতে 'in' — বাসে দাঁড়ানো যায় (উপরে), গাড়িতে ঢুকে বসতে হয় (ভেতরে)! 🚌🚗 শব্দগুলো জোড়ায় শিখুন: at home, at work, in bed।"});
F("My daughter lives ___ London.","in",["at"],"আমার মেয়ে লন্ডনে থাকে।");
F("I'll meet you ___ the station.","at",["in"],"স্টেশনে দেখা করব।");
F("She's not here — she's ___ work.","at",["in"],"ও এখানে নেই — কাজে গেছে।");
F("I'm ___ the train now. I'll call you later.","on",["in"],"আমি এখন ট্রেনে। পরে ফোন করব।");
F("We came ___ a taxi.","in",["on"],"আমরা ট্যাক্সিতে এলাম।");
F("Your keys are ___ the table.","on",["at"],"তোমার চাবি টেবিলের উপর।");
Sp("Say where five people in your family are right now.","এখন আপনার পরিবারের পাঁচজন কোথায় আছে বলুন।","My daughter is at work. My sister is at home. My brother is in Delhi. My grandson is at school. I'm in the kitchen!");

lesson('ability',0,'💪',"can, could, be able to","পারা: can, could, be able to");
C({title:"can · could · will be able to",bnTitle:"পারি, পারতাম, পারব",pattern:"{s:I} {v:can} cook · {s:I} {v:could} swim · {s:I}'ll {v:be able to} speak",
 en:"can = I'm able to now. could = I was able to in the past. will be able to = in the future. After can and could, use the plain action word (no 'to', no -s).",
 bn:"can = পারি, could = পারতাম, will be able to = পারব।",
 ex:[["{s:I} {v:can} cook Bengali food.","{s:আমি} বাঙালি রান্না {v:পারি}।"],["{s:I} {v:could} climb trees when I was young.","ছোটবেলায় {s:আমি} গাছে চড়তে {v:পারতাম}।"],["Soon {s:I}'ll {v:be able to} chat in English!","শিগগির {s:আমি} ইংরেজিতে গল্প করতে {v:পারব}!"]],
 mn:"can → could → be able to: আজ পারি, কাল পারতাম, ভবিষ্যতে পারব — তিন সিঁড়ি 🪜"});
F("When I was young, I ___ run very fast.","could",["can"],"ছোটবেলায় খুব জোরে দৌড়োতে পারতাম।");
F("She can ___ three languages.","speak",["speaks"],"ও তিনটে ভাষা বলতে পারে।","After can: the plain word, no -s.");
P("I can't hear you very well.","আপনার কথা ভালো শুনতে পাচ্ছি না।","Very useful on the phone or in a noisy place.");
P("Soon I'll be able to talk to everyone!","শিগগির সবার সাথে কথা বলতে পারব!");
R("Can you speak English?","আপনি কি ইংরেজি বলতে পারেন?","Yes, a little. I'm learning every day.",["Yes, I can to speak."],"হ্যাঁ, একটু। রোজ শিখছি।");
Sp("Say three things you can do, and one thing you could do when you were young.","তিনটে জিনিস যা পারেন, আর একটা যা ছোটবেলায় পারতেন বলুন।","I can cook, sing and sew. When I was young, I could climb trees!");

lesson('superlative',0,'🏆',"the biggest, the best","সবচেয়ে বড়, সবচেয়ে ভালো");
C({title:"the biggest · the most beautiful · the best",bnTitle:"সবচেয়ে…",pattern:"the {o:biggest} · the {o:most beautiful} · the {o:best}",
 en:"To say something is number one: short words add -est (the biggest, the coldest); long words use 'the most' (the most beautiful). Special: good → the best, bad → the worst.",
 bn:"সবচেয়ে = the …-est, বা the most …। good → the best, bad → the worst।",
 ex:[["It's {o:the coldest} day of the year!","বছরের {o:সবচেয়ে ঠান্ডা} দিন!"],["It's {o:the most beautiful} park in the city.","শহরের {o:সবচেয়ে সুন্দর} পার্ক।"],["Your tea is {o:the best}!","তোমার চা {o:সবচেয়ে ভালো}!"]],
 mn:"cold → colder → coldest: ঠান্ডা → আরও ঠান্ডা → সবচেয়ে ঠান্ডা — তিন ধাপের সিঁড়ি!"});
F("Today is the ___ day of the year!","hottest",["most hot"],"আজ বছরের সবচেয়ে গরম দিন!");
F("This is the ___ cake I've ever eaten.","best",["goodest"],"এত ভালো কেক আগে কখনো খাইনি।");
F("It's the most ___ place I've ever seen.","beautiful",["beautifullest"],"এত সুন্দর জায়গা আগে দেখিনি।");
P("What's the best way to get to the station?","স্টেশনে যাওয়ার সবচেয়ে ভালো উপায় কী?","A brilliant question for directions — people will give you the easiest route.");
B("This is the best tea in London.","এটাই লন্ডনের সবচেয়ে ভালো চা।");
Sp("What's the best thing about your home town?","আপনার শহরের সবচেয়ে ভালো জিনিস কী?","The best thing about {home} is the food. The most beautiful time is winter, during the festivals.");

lesson('pv-home',0,'🧹',"Phrasal verbs: at home","দুই-শব্দের ক্রিয়া: বাড়িতে");
W("tidy up","গোছানো","Let's tidy up before the guests come.","অতিথিরা আসার আগে চলো গুছিয়ে নিই।");
W("wash up","বাসন ধোয়া","I'll wash up after dinner.","রাতের খাওয়ার পরে আমি বাসন ধুয়ে দেব।","British English: 'wash up' = wash the dishes.");
W("put away","তুলে রাখা","Could you put the plates away?","প্লেটগুলো তুলে রাখবেন?");
W("throw away","ফেলে দেওয়া","Don't throw away the bread — I'll use it.","পাউরুটিটা ফেলো না — আমি কাজে লাগাব।");
W("look after","দেখাশোনা করা","I look after my grandson on Fridays.","শুক্রবার আমি নাতির দেখাশোনা করি।");
W("pick up","তুলে নেওয়া / কাউকে নিয়ে আসা","Can you pick me up from the station?","স্টেশন থেকে আমাকে নিয়ে আসতে পারবে?");
W("run out of","ফুরিয়ে যাওয়া","We've run out of milk.","দুধ ফুরিয়ে গেছে।");
W("clean up","পরিষ্কার করা","I'll clean up the kitchen.","আমি রান্নাঘরটা পরিষ্কার করে দিচ্ছি।");
F("Oh no, we've ___ sugar! I'll buy some.","run out of",["run away"],"ইশ্‌, চিনি ফুরিয়ে গেছে! কিনে আনছি।");
F("Who will ___ the children this evening?","look after",["look at"],"আজ সন্ধ্যায় বাচ্চাদের কে দেখবে?");

lesson('futureplans',0,'🧭',"Talking about the future: four ways","ভবিষ্যতের চার রকম কথা");
C({title:"going to · -ing · will · might",bnTitle:"কতটা পাকা পরিকল্পনা?",pattern:"{v:I'm going to} · {v:I'm meeting} · {v:I'll} · {v:I might}",
 en:"going to = a plan or intention (I'm going to visit Scotland one day). am / is / are + -ing = a fixed plan with a time (I'm meeting Sarah at three). will = deciding now, a promise, an offer, or a guess (I'll help you. I think it'll rain). might = maybe (I might go out later).",
 bn:"going to = ইচ্ছে / পরিকল্পনা। -ing = পাকা পরিকল্পনা (সময় ঠিক)। will = এখনই ঠিক করলাম / কথা দিলাম / আন্দাজ। might = হয়তো।",
 ex:[["{v:I'm going to} learn to bake.","ভাবছি বেক করা শিখব।"],["{v:I'm meeting} my friend at three.","তিনটেয় বন্ধুর সাথে দেখা করছি।"],["The phone's ringing — {v:I'll} get it!","ফোন বাজছে — আমি ধরছি!"],["{v:I might} go to the park later.","পরে হয়তো পার্কে যাব।"]],
 mn:"পাকা থেকে কাঁচা: I'm meeting (পাকা ✅) → I'm going to (ইচ্ছে 👍) → I'll (এখনই ঠিক 💡) → I might (হয়তো 🤷)।"});
F("I don't know yet. I ___ go to the market.","might",["am"],"এখনো জানি না। হয়তো বাজারে যাব।");
F("I ___ meeting my friend at three o'clock tomorrow.","am",["will"],"কাল তিনটেয় বন্ধুর সাথে দেখা করছি।");
F("The doorbell's ringing — ___ get it!","I'll",["I'm going to"],"বেল বাজছে — আমি দেখছি!","Deciding right now → will ('ll).");
F("Look at those clouds. I think it ___ rain.","will",["is"],"মেঘ দেখো। মনে হচ্ছে বৃষ্টি হবে।");
P("I might go for a walk later.","পরে হয়তো হাঁটতে যাব।");
P("I'll probably stay at home this evening.","আজ সন্ধ্যায় সম্ভবত বাড়িতেই থাকব।","'probably' = most likely. It goes after 'will': I'll probably…");
R("Any plans for the weekend?","সপ্তাহান্তে কিছু পরিকল্পনা আছে?","Not really. I might go to the park.",["Not really. I am go park."],"তেমন কিছু না। হয়তো পার্কে যাব।");
Sp("Talk about next weekend: one fixed plan, and one 'maybe'.","আগামী সপ্তাহান্ত: একটা পাকা পরিকল্পনা, আর একটা 'হয়তো'।","On Saturday I'm visiting my friend for lunch. On Sunday I might go to the museum, if it's not raining.");

lesson('perfect',0,'🔗',"I've done: already, yet, for, since","have done: already, yet, for, since");
C({title:"have / has + done",bnTitle:"অতীত, কিন্তু এখনো জড়িয়ে আছে",pattern:"{s:I}'ve {t:already} {v:eaten} · {s:I}'ve {v:lived} here {t:for} 40 years",
 en:"Use have / has + done when the past is connected to now. already = sooner than expected. yet = until now (in questions and 'not'). for = how long (for 40 years). since = from when (since 1985). For things still going on: I've been learning English for six months.",
 bn:"already = আগেই হয়ে গেছে। yet = এখনো (প্রশ্নে বা 'না'-তে)। for = কতদিন ধরে। since = কবে থেকে।",
 ex:[["{s:I}'ve {t:already} {v:had} lunch.","{s:আমি} {t:আগেই} খেয়ে {v:নিয়েছি}।"],["Have {s:you} {v:finished} {t:yet}?","{t:এখনো} কি {s:আপনার} {v:শেষ হয়েছে}?"],["{s:I}'ve {v:lived} in {home} {t:since} 1985.","{s:আমি} {t:১৯৮৫ থেকে} {home}-এ {v:আছি}।"],["{s:I}'ve {v:been learning} English {t:for} six months.","{t:ছয় মাস ধরে} {s:আমি} ইংরেজি {v:শিখছি}।"]],
 mn:"since = কবে থেকে (একটা দিন / সাল: since Monday, since 1985)। for = কতদিন ধরে (একটা মাপ: for three days, for 40 years)।"});
F("I've ___ eaten, thank you. I'm full.","already",["yet"],"আমি আগেই খেয়েছি, ধন্যবাদ। পেট ভরা।");
F("Have you finished ___?","yet",["already"],"এখনো শেষ হয়েছে?");
F("I've lived here ___ 1990.","since",["for"],"আমি ১৯৯০ থেকে এখানে আছি।");
F("I've lived here ___ thirty years.","for",["since"],"তিরিশ বছর ধরে এখানে আছি।");
G("I've lived in {home} for many years.","I am living in {home} since many years.","অনেক বছর ধরে {home}-এ থাকি।","A very common slip in India! Use 'I've lived… for…'.");
P("I've been learning English for six months.","ছয় মাস ধরে ইংরেজি শিখছি।","Change the time to fit — and be proud of it!");
P("I haven't been to Scotland yet.","এখনো স্কটল্যান্ড যাইনি।");
R("How long have you been in the UK?","কতদিন হল বিলেতে এসেছেন?","I've been here for two weeks.",["I am here since two weeks."],"দু-সপ্তাহ হল এসেছি।");

lesson('pastcont',0,'🎞️',"I was cooking when…","আমি রান্না করছিলাম, তখন…");
C({title:"was / were + -ing",bnTitle:"অতীতে চলছিল",pattern:"{s:I} {v:was cooking} {t:when} the phone {v:rang}.",
 en:"was / were + -ing = something was in progress in the past. Often another short action interrupts it: I was cooking when the phone rang. 'While' joins two things happening together: While I was waiting, I read a book.",
 bn:"was / were + -ing = অতীতে চলছিল। মাঝে কিছু ঘটলে: রান্না করছিলাম, তখন ফোন এল।",
 ex:[["{s:I} {v:was sleeping} {t:when} you called.","তুমি যখন ফোন করলে, {s:আমি} {v:ঘুমোচ্ছিলাম}।"],["{s:We} {v:were walking} in the park {t:when} it started to rain.","{s:আমরা} পার্কে {v:হাঁটছিলাম}, তখন বৃষ্টি শুরু হল।"],["{t:While} {s:I} {v:was waiting}, I read the newspaper.","অপেক্ষা {v:করতে করতে} খবরের কাগজ পড়লাম।"]],
 mn:"লম্বা কাজ (was cooking) 🍲 + হঠাৎ ছোট ঘটনা (rang) 📞 = গল্পের মজা!"});
F("I was ___ when you called.","sleeping",["sleep"],"তুমি যখন ফোন করলে, ঘুমোচ্ছিলাম।");
F("We ___ walking in the park when it started to rain.","were",["was"],"আমরা পার্কে হাঁটছিলাম, তখন বৃষ্টি শুরু হল।");
F("While I ___ waiting for the bus, I met an old friend.","was",["am"],"বাসের অপেক্ষা করতে করতে এক পুরোনো বন্ধুর সাথে দেখা।");
B("I was cooking when the phone rang.","রান্না করছিলাম, তখন ফোন বাজল।");
L("What were you doing at eight o'clock?",["What was happening with you at eight?","আটটার সময় কী করছিলেন?"],[["What will you do at eight?","আটটায় কী করবেন?"]]);
Sp("Tell a short story: 'I was … when suddenly …'","একটা ছোট গল্প: 'আমি … করছিলাম, হঠাৎ …'","I was making tea when suddenly the lights went off. I was looking for a torch when my grandson started laughing!");

lesson('patterns',0,'🧵',"want to go, enjoy going","want to, enjoy -ing");
C({title:"to + action, or action + -ing?",bnTitle:"কোন শব্দের পরে 'to', কোনটার পরে '-ing'",pattern:"{v:want} {o:to go} · {v:enjoy} {o:going}",
 en:"Some words take 'to': want to, would like to, hope to, decide to, need to, try to. Some take -ing: enjoy, finish, mind, stop, look forward to. (Like and love can take both.)",
 bn:"want / hope / decide / need-এর পরে 'to'। enjoy / finish / mind / look forward to-এর পরে '-ing'।",
 ex:[["I {v:want} {o:to visit} the museum.","জাদুঘরে যেতে চাই।"],["I {v:enjoy} {o:sitting} in the garden.","বাগানে বসতে ভালো লাগে।"],["I'm {v:looking forward to} {o:seeing} you!","তোমার সাথে দেখা হওয়ার অপেক্ষায় আছি!"]],
 mn:"ভবিষ্যতের দিকে তাকানো শব্দে 'to' ➡️ (want to, hope to)। উপভোগ / শেষের শব্দে '-ing' 😊 (enjoy, finish)। look forward to-এর পরে কিন্তু -ing!"});
F("I want ___ the castle.","to visit",["visiting"],"দুর্গটা দেখতে চাই।");
F("I enjoy ___ in the garden.","sitting",["to sit"],"বাগানে বসতে ভালো লাগে।");
F("I've decided ___ English every day.","to practise",["practising"],"রোজ ইংরেজি অনুশীলন করব ঠিক করেছি।");
F("Have you finished ___?","eating",["to eat"],"খাওয়া শেষ হয়েছে?");
G("I'm looking forward to seeing you.","I'm looking forward to see you.","তোমার সাথে দেখা হওয়ার অপেক্ষায় আছি।","A very common slip: after 'look forward to', use -ing.");
P("I hope to visit Scotland one day.","একদিন স্কটল্যান্ড যাওয়ার ইচ্ছে আছে।");
Sp("Say two things you want to do, and two things you enjoy doing.","দুটো জিনিস যা করতে চান, আর দুটো যা করতে ভালোবাসেন।","I want to visit Scotland and learn to bake. I enjoy cooking and walking in the park.");

lesson('pv-travel',0,'🧳',"Phrasal verbs: travel","দুই-শব্দের ক্রিয়া: ভ্রমণ");
W("check in","চেক-ইন করা","We need to check in two hours before the flight.","ফ্লাইটের দু-ঘণ্টা আগে চেক-ইন করতে হবে।");
W("get on","(বাস/ট্রেনে) ওঠা","Get on the number 9 bus.","৯ নম্বর বাসে উঠুন।");
W("get off","নামা","Get off at the next stop.","পরের স্টপে নামুন।");
W("set off","রওনা হওয়া","We set off early in the morning.","আমরা ভোরে রওনা দিলাম।");
W("look for","খোঁজা","I'm looking for platform six.","ছ নম্বর প্ল্যাটফর্ম খুঁজছি।");
W("find out","জেনে নেওয়া","Let's find out what time the train leaves.","চলো জেনে নিই ট্রেন কটায় ছাড়ে।");
W("look forward to","অপেক্ষায় থাকা","I'm looking forward to the trip!","যাত্রার জন্য মুখিয়ে আছি!","Use -ing after it: looking forward to seeing you.");
W("hold on","একটু দাঁড়ান / ধরে থাকুন","Hold on — I'll check the timetable.","একটু দাঁড়ান — সময়সূচিটা দেখি।");
F("We need to ___ at the next stop.","get off",["get up"],"পরের স্টপে নামতে হবে।");
F("Excuse me, I'm ___ the toilets.","looking for",["looking at"],"শুনছেন, বাথরুম খুঁজছি।");

/* ---------- Part 7 grammar ---------- */
lesson('adv-indirect',0,'🎩',"Extra-polite questions","আরও ভদ্র প্রশ্ন");
C({title:"Could you tell me where … is?",bnTitle:"ঘুরিয়ে প্রশ্ন — আরও নরম",pattern:"Where {v:is} the station? → Could you tell me where the station {v:is}?",
 en:"To be extra polite, start with 'Could you tell me…' or 'Do you know…'. Then the rest goes back to normal order: where the station IS (not 'where is the station'). For yes/no questions, use 'if': Do you know if this bus goes to the hospital?",
 bn:"'Could you tell me…' দিয়ে শুরু করলে বাকিটা সাধারণ ক্রমে: where the station is।",
 ex:[["Could you tell me where the toilets {v:are}?","বাথরুমগুলো কোথায় বলবেন?"],["Do you know what time the shop {v:opens}?","দোকান কটায় খোলে জানেন?"],["Do you know {v:if} this bus goes to the hospital?","এই বাস হাসপাতালে যায় কি না জানেন?"]],
 mn:"ভদ্রতার টুপি 🎩 পরালে প্রশ্নটা আবার সোজা হয়ে দাঁড়ায়: where IS the bank? → tell me where the bank IS।"});
F("Could you tell me where ___?","the bank is",["is the bank"],"ব্যাংকটা কোথায় বলবেন?");
F("Do you know what time ___?","the museum closes",["does the museum close"],"জাদুঘর কটায় বন্ধ হয় জানেন?");
G("Could you tell me where the lift is?","Could you tell me where is the lift?","লিফটটা কোথায় বলবেন?","After 'Could you tell me', the normal order comes back.");
P("Could you tell me how to get to the station?","স্টেশনে কীভাবে যাব বলবেন?");
P("Do you know if this bus goes to the hospital?","এই বাস হাসপাতালে যায় কি না জানেন?");
Sp("Make these polite: 'Where is the lift?' and 'When does it close?'","এগুলো ভদ্রভাবে বলুন: 'লিফট কোথায়?' আর 'কখন বন্ধ হয়?'","Could you tell me where the lift is? And do you know when it closes?");

lesson('adv-if2',0,'💭',"If I were…, I would…","যদি হতাম, তাহলে করতাম");
C({title:"Imagining: If I were…, I would…",bnTitle:"কল্পনা: যদি… তাহলে…",pattern:"{v:If} I {v:were} younger, I {v:would} learn to dance.",
 en:"For dreams and imagined situations (not real now): If + past form, then would. With 'I', 'If I were' sounds best. 'If I were you, I'd…' is a lovely way to give advice.",
 bn:"কল্পনার কথা: If + অতীত রূপ, তারপর would। পরামর্শ: If I were you, I'd… = আমি তোমার জায়গায় হলে…",
 ex:[["{v:If} I {v:were} younger, I {v:would} learn to drive.","বয়স কম হলে গাড়ি চালানো শিখতাম।"],["{v:If} I {v:had} more time, I'd read more.","আরও সময় থাকলে আরও পড়তাম।"],["{v:If I were you}, I'd take a coat.","আমি তোমার জায়গায় হলে কোট নিতাম।"]],
 mn:"If it rains = সত্যি হতে পারে (will)। If I were = শুধু কল্পনা (would) — স্বপ্নের মেঘ ☁️"});
F("If I ___ rich, I would travel the world.","were",["am"],"বড়লোক হলে সারা পৃথিবী ঘুরতাম।");
F("If I lived in London, I ___ go to the theatre every week.","would",["will"],"লন্ডনে থাকলে প্রতি সপ্তাহে থিয়েটারে যেতাম।");
P("If I were you, I'd take an umbrella.","আমি তোমার জায়গায় হলে ছাতা নিতাম।","A kind way to give advice.");
P("What would you do if you won a lot of money?","অনেক টাকা জিতলে কী করতেন?");
Sp("What would you do if you were twenty again?","আবার কুড়ি বছর বয়স হলে কী করতেন?","If I were twenty again, I would travel more. I'd learn English earlier, and I'd learn to swim!");

lesson('adv-passive',0,'🏛️',"It was built… it is served…","বাড়িটা তৈরি হয়েছিল… খাবার দেওয়া হয়…");
C({title:"is / was + done",bnTitle:"কে করল সেটা জরুরি নয়",pattern:"The palace {v:was built} in 1703.",
 en:"When the action matters more than who did it, use is / was + done form: Breakfast is served at eight. The bridge was built in 1894. You'll hear it a lot in announcements, signs and on tours.",
 bn:"কে করেছে জরুরি না হলে: is / was + তৃতীয় রূপ। ঘোষণা, বোর্ড, গাইডেড ট্যুরে খুব শোনা যায়।",
 ex:[["Breakfast {v:is served} from seven.","সাতটা থেকে জলখাবার দেওয়া হয়।"],["This church {v:was built} 500 years ago.","এই গির্জাটা ৫০০ বছর আগে তৈরি।"],["The train {v:has been delayed}.","ট্রেন দেরিতে চলছে।"]],
 mn:"কাজটাই নায়ক, কর্তা আড়ালে 🎭 — was built = তৈরি হয়েছিল।"});
L("Breakfast is served from seven till ten.",["You can eat breakfast between 7 and 10.","সাতটা থেকে দশটা পর্যন্ত জলখাবার পাওয়া যাবে।"],[["Breakfast is at seven only.","শুধু সাতটায় জলখাবার।"]]);
L("This train has been delayed by ten minutes.",["The train is ten minutes late.","ট্রেন দশ মিনিট দেরিতে।"],[["The train leaves in ten minutes.","দশ মিনিটে ট্রেন ছাড়বে।"]]);
L("The flight to {city} has been cancelled. Please go to the transfer desk.",["That flight won't go. Ask at the transfer desk for help.","ফ্লাইট বাতিল — ট্রান্সফার ডেস্কে যান, ওরা ব্যবস্থা করবে।"],[["The flight is boarding now.","এখন প্লেনে ওঠা শুরু।"]],"It's rare, but if it happens: stay calm — the desk staff will put you on another flight. That's their job.");
F("This bridge ___ built in 1894.","was",["is"],"এই সেতুটা ১৮৯৪ সালে তৈরি হয়েছিল।");
P("Is service included?","সার্ভিস চার্জ কি ধরা আছে?","Ask this when you get a bill in a restaurant.");
P("Where was this made?","এটা কোথায় তৈরি?");

lesson('adv-pastperfect',0,'🕰️',"Stories: had done, would","গল্পে: had done, would");
C({title:"had done · would · will have done",bnTitle:"গল্প বলার আরও তিনটে রূপ",pattern:"When we arrived, the train {v:had} already {v:left}.",
 en:"had + done = something happened even earlier in the past: When we arrived, the train had already left. would = a nice way to remember old habits: Every evening we would sit on the roof. will have done = finished before a future time: By next year, I'll have learned a lot!",
 bn:"had done = আরও আগে ঘটেছিল। would = পুরোনো অভ্যেসের স্মৃতি (করতাম)। will have done = ভবিষ্যতের আগে শেষ হয়ে যাবে।",
 ex:[["When we got there, the film {v:had} already {v:started}.","পৌঁছে দেখি সিনেমা আগেই শুরু হয়ে গেছে।"],["Every summer, we {v:would} visit my grandmother.","প্রতি গ্রীষ্মে দিদিমার বাড়ি যেতাম।"],["By next year, I'{v:ll have learned} hundreds of phrases!","আগামী বছরের মধ্যে শত শত বাক্য শিখে ফেলব!"]],
 mn:"had left = 'আগেই চলে গিয়েছিল' — অতীতের অতীত! would = স্মৃতির জানলা 🪟"});
F("When I got to the station, the train ___ already left.","had",["has"],"স্টেশনে পৌঁছে দেখি ট্রেন আগেই চলে গেছে।");
F("When I was a child, we ___ play in the rain every monsoon.","would",["will"],"ছোটবেলায় প্রতি বর্ষায় আমরা বৃষ্টিতে খেলতাম।");
P("I had never seen snow before I came to the UK.","বিলেতে আসার আগে কখনো বরফ দেখিনি।");
P("By next year, I'll have learned a lot of English!","আগামী বছরের মধ্যে অনেক ইংরেজি শিখে ফেলব!");
Sp("Tell a memory using 'would': what would you do every summer as a child?","'would' দিয়ে একটা স্মৃতি বলুন: ছোটবেলায় প্রতি গ্রীষ্মে কী করতেন?","Every summer we would go to my grandmother's village. We would eat mangoes under the tree, and in the evening my grandmother would tell us stories.");

lesson('pv-feelings',0,'🫶',"Phrasal verbs: feelings & health","দুই-শব্দের ক্রিয়া: মন আর শরীর");
W("calm down","শান্ত হওয়া","Calm down — everything is fine.","শান্ত হও — সব ঠিক আছে।");
W("cheer up","মন ভালো করা","Cheer up! Tomorrow will be better.","মন খারাপ কোরো না! কাল আরও ভালো হবে।");
W("get better","সেরে ওঠা / উন্নতি","I hope you get better soon.","আশা করি শিগগির সেরে উঠবে।");
W("lie down","শুয়ে পড়া","I'm going to lie down for a bit.","আমি একটু শুয়ে নিচ্ছি।");
W("give up","হাল ছেড়ে দেওয়া","Don't give up — you're doing so well!","হাল ছেড়ো না — খুব ভালো করছ!");
W("carry on","চালিয়ে যাওয়া","Carry on practising every day.","রোজ অনুশীলন চালিয়ে যাও।");
W("slow down","ধীরে করা","Slow down, please — I can't keep up.","একটু আস্তে — আমি তাল রাখতে পারছি না।");
W("get on with","মিলে মিশে থাকা","I get on very well with my neighbours.","প্রতিবেশীদের সাথে আমার খুব ভাব।");
F("Don't ___ — learning takes time!","give up",["give in"],"হাল ছেড়ো না — শিখতে সময় লাগে!");

/* ---------- extra items for 'too / very' ---------- */
_L=LESSONS.find(l=>l.id==='very');
F("This coat isn't warm ___.","enough",["too"],"কোটটা যথেষ্ট গরম নয়।","'enough' comes AFTER the describing word: warm enough, big enough.");
F("There are too ___ people on this bus.","many",["much"],"এই বাসে বড্ড বেশি লোক।","too many + things you can count; too much + things you can't (too much sugar).");
P("That's enough, thank you.","এতেই হবে, ধন্যবাদ।","Say this when someone is serving you food.");
