"use strict";
/* ================== PART 3 · EVERYDAY CONVERSATION ================== */
lesson('do',3,'🚪',"Do you…? I don't…","Do দিয়ে প্রশ্ন");
C({title:"Do you…? · I don't…",bnTitle:"প্রশ্নের দরজায় 'Do' টোকা দেয়",pattern:"{v:Do} {s:you} {v:like} {o:tea}? · {s:I} {v:don't drink} {o:coffee}.",
 en:"For action words (like, live, eat, go), questions start with Do — or Does for he / she / it. For 'not', use don't — or doesn't for he / she / it.",
 bn:"প্রশ্ন: শুরুতে Do। 'না' বলতে: don't। he / she হলে Does / doesn't।",
 ex:[["{v:Do} {s:you} {v:speak} {o:Bengali}?","{s:আপনি} কি {o:বাংলা} {v:বলেন}?"],["{s:I} {v:don't drink} {o:coffee}.","{s:আমি} {o:কফি} {v:খাই না}।"],["{v:Does} {s:this bus} {v:go} {o:to the station}?","{s:এই বাসটা} কি {o:স্টেশনে} {v:যায়}?"]],
 mn:"Do = দরজায় 'ঠক ঠক' — প্রশ্নের আগে টোকা! don't = do + not = 'না'।"});
F("___ you like tea?","Do",["Are"],"আপনি কি চা পছন্দ করেন?");
F("___ this bus go to the hospital?","Does",["Do"],"এই বাস কি হাসপাতালে যায়?","'This bus' is one thing (like he / she / it) → Does.");
F("I ___ drink coffee.","don't",["not"],"আমি কফি খাই না।");
G("Do you like tea?","You like tea?","আপনি কি চা পছন্দ করেন?","'You like tea?' is understood in speech, but 'Do you like tea?' is the full, proper question.");
B("Do you speak Bengali?","আপনি কি বাংলা বলেন?");
R("Do you take sugar?","চিনি দেব?","No, thank you. Just milk.",["No, I am not taking."],"না, ধন্যবাদ। শুধু দুধ।","'Do you take sugar?' = do you want sugar in your tea.");
R("Do you like it here?","এখানে ভালো লাগছে?","Yes, I love it!",["Yes, I am like."],"হ্যাঁ, খুব ভালো লাগছে!");

lesson('family',3,'👨‍👩‍👧',"My family","আমার পরিবার");
P("This is my family.","এ আমার পরিবার।","Show a photo on your phone as you say it — people love family photos!");
P("I have one son and one daughter.","আমার এক ছেলে আর এক মেয়ে।","Change it to fit your family: I have two sons… I have three grandchildren…");
F("My daughter ___ two children.","has",["have"],"আমার মেয়ের দুটো বাচ্চা আছে।","have → has for he / she / one person. (I have, she has.)");
L("How many grandchildren have you got?",["How many grandchildren do you have?","আপনার কটা নাতি-নাতনি?"],[["Where are your grandchildren?","নাতি-নাতনিরা কোথায়?"]]);
L("You must be very proud.",["You must feel very proud.","আপনি নিশ্চয়ই খুব গর্বিত।"],[["You must be very tired.","আপনি নিশ্চয়ই খুব ক্লান্ত।"]],"You can answer: 'Yes, I am. Very proud!'");
R("Is this your first visit?","এই কি প্রথমবার আসা?","Yes, it's my first visit.",["Yes, first visit is."],"হ্যাঁ, এই প্রথম।");
P("We are a big family.","আমাদের বড় পরিবার।");
P("My family is very important to me.","আমার কাছে পরিবার খুব গুরুত্বপূর্ণ।");
Sp("Tell me about your family.","আপনার পরিবারের কথা বলুন।","I have one son and one daughter. My son lives in {city}. My daughter lives in Delhi.","Change the words to fit. Use 'I have…' and '… lives in…'.");

lesson('day',3,'🌅',"My day","আমার দিন");
P("I get up at six o'clock.","আমি ছটায় উঠি।","Change the time to fit your day.");
P("I have breakfast at eight.","আমি আটটায় জলখাবার খাই।","'Have breakfast / lunch / dinner' = eat it.","Breakfast = জলখাবার; Lunch = দুপুরের খাওয়া; Dinner = রাতের খাওয়া।");
P("In the afternoon, I have a little rest.","দুপুরে একটু বিশ্রাম নিই।");
P("I go for a walk every evening.","রোজ সন্ধ্যায় হাঁটতে যাই।");
P("I watch the news on TV.","আমি টিভিতে খবর দেখি।");
P("I go to bed at about ten.","আমি দশটা নাগাদ শুতে যাই।","'About ten' = around ten o'clock.");
F("I ___ up early every day.","get",["gets"],"আমি রোজ ভোরে উঠি।");
L("What do you usually do in the morning?",["What do you normally do in the morning?","সকালে সাধারণত কী করেন?"],[["What did you eat this morning?","আজ সকালে কী খেয়েছেন?"]]);
Sp("Tell me about your morning.","আপনার সকালের কথা বলুন।","I get up at six. I drink tea. I read the newspaper.","Use 'I + action'. Three short sentences is perfect.");

lesson('food',3,'🍛',"Food & cooking","খাবার আর রান্না");
P("I love cooking.","আমি রান্না করতে খুব ভালোবাসি।");
P("Fish curry is my favourite.","মাছের ঝোল আমার সবচেয়ে প্রিয়।","Favourite (British spelling, with 'u') = the one you like most.");
P("We eat a lot of rice and fish.","আমরা অনেক ভাত আর মাছ খাই।");
P("It's delicious!","খুব সুস্বাদু!","The best compliment for someone's cooking.","Delicious = 'ডেলিশাস' — 'দারুণ' খেতে!");
P("It's a bit too spicy for me.","আমার জন্য একটু বেশি ঝাল।");
R("Would you like some more?","আর একটু নেবেন?","Just a little, please. It's lovely.",["Yes, give more."],"অল্প একটু দিন। খুব ভালো হয়েছে।","Or: 'No, thank you, I'm full.'");
L("Help yourself!",["Please take as much as you like.","যত খুশি নিজে নিয়ে নিন।"],[["Can you help me?","আমাকে সাহায্য করবেন?"]],"'Help yourself' is a kind invitation — not a request for help!");
P("I'm full, thank you.","পেট ভরে গেছে, ধন্যবাদ।");
Sp("Describe your favourite dish.","আপনার প্রিয় খাবারের কথা বলুন।","My favourite dish is fish curry. It's a bit spicy. We eat it with rice.");

lesson('like',3,'❤️',"What I like","আমার পছন্দ");
C({title:"like · love · don't like · prefer",bnTitle:"পছন্দ-অপছন্দ",pattern:"{s:I} {v:like} {o:walking}. · {s:I} {v:don't like} {o:the cold}.",
 en:"After like / love, use a thing (I like tea) or an action with -ing (I like walking). Never 'I am liking'.",
 bn:"বাংলায় 'আমার ভালো লাগে' — ইংরেজিতে 'I like'। 'আমার' নয়, 'I' দিয়ে শুরু!",
 ex:[["{s:I} {v:love} {o:gardening}.","{s:আমার} {o:বাগান করতে} {v:খুব ভালো লাগে}।"],["{s:I} {v:don't like} {o:cold weather}.","{s:আমার} {o:ঠান্ডা} {v:ভালো লাগে না}।"],["{s:I} {v:prefer} {o:tea} to {o:coffee}.","{s:আমি} {o:কফির} চেয়ে {o:চা} {v:বেশি পছন্দ করি}।"]],
 mn:"বাংলায় 'আমার' ভালো লাগে, ইংরেজিতে 'I' like — 'আমার' নয়, 'আমি'!"});
F("I like ___ in the park.","walking",["walk"],"আমার পার্কে হাঁটতে ভালো লাগে।","like + -ing for actions.");
G("I like it very much.","I am liking it very much.","আমার খুব ভালো লাগছে।");
P("I really like it here.","এখানে আমার সত্যিই ভালো লাগছে।");
P("I prefer tea to coffee.","আমি কফির চেয়ে চা বেশি পছন্দ করি।");
R("Do you like British food?","ব্রিটিশ খাবার ভালো লাগে?","Some of it! I like fish and chips.",["Yes, I am liking."],"কিছু কিছু! ফিশ অ্যান্ড চিপস ভালো লাগে।");
B("I love reading books.","আমার বই পড়তে খুব ভালো লাগে।");
Sp("Tell me three things you like.","আপনার পছন্দের তিনটে জিনিস বলুন।","I like music. I love cooking. I like walking in the morning.");

lesson('weather',3,'🌦️',"Weather & seasons","আবহাওয়া");
P("It's very cold today.","আজ খুব ঠান্ডা।");
P("It's raining again!","আবার বৃষ্টি হচ্ছে!","Say it with a smile — the British love grumbling about rain together.");
L("It's freezing!",["It's very, very cold.","ভীষণ ঠান্ডা!"],[["It's very hot.","খুব গরম।"]]);
L("It's a bit grey today.",["It's cloudy today.","আজ মেঘলা।"],[["It's sunny today.","আজ রোদ ঝলমলে।"]]);
P("In {home}, it's very hot in summer.","{home}-এ গরমকালে খুব গরম।");
R("Is it hot in India now?","ভারতে এখন কি গরম?","Yes, very hot and humid.",["Yes, it hot."],"হ্যাঁ, খুব গরম আর ভ্যাপসা।",null,"Humid = 'হিউমিড' — প্যাচপ্যাচে গরম!");
P("I need a warm coat.","আমার একটা গরম কোট লাগবে।");
L("Wrap up warm!",["Wear warm clothes.","গরম জামাকাপড় পরে বেরোবেন।"],[["Pack your bag.","ব্যাগ গুছিয়ে নিন।"]],"People say this kindly when it's cold outside.");

lesson('health',3,'🩺',"Feeling well","শরীর-স্বাস্থ্য");
P("I'm a bit tired.","আমি একটু ক্লান্ত।");
P("I'm feeling much better, thank you.","এখন অনেক ভালো লাগছে, ধন্যবাদ।");
P("I don't feel very well.","শরীরটা ভালো লাগছে না।");
P("I have a headache.","আমার মাথা ধরেছে।","Also: a stomach ache (পেটব্যথা), a cold (সর্দি), a cough (কাশি).");
P("I need to sit down for a minute.","আমাকে এক মিনিট বসতে হবে।","Always fine to say. People will help you find a seat.");
P("Where is the nearest chemist?","কাছের ওষুধের দোকান কোথায়?","'Chemist' or 'pharmacy' = medicine shop.","Chemist = কেমিস্ট — আমাদের দেশেও বলি!");
P("I need to take my medicine.","আমাকে ওষুধ খেতে হবে।","In English you 'take' medicine (not 'eat').","বাংলায় ওষুধ 'খাই', ইংরেজিতে 'take'!");
L("Are you feeling all right?",["Are you OK? Do you feel well?","আপনি ঠিক আছেন তো?"],[["Are you ready to go?","যাওয়ার জন্য তৈরি?"]]);
R("How are you feeling today?","আজ কেমন বোধ করছেন?","Much better, thank you.",["I am feeling yesterday."],"অনেক ভালো, ধন্যবাদ।");

lesson('chat',3,'💬',"Friendly Chat","গল্পগুজব");
R("You alright?","কী খবর?","Yes, fine, thanks. You?",["No, I am not all right."],"হ্যাঁ, ভালো, ধন্যবাদ। আপনি?","'You alright?' just means 'Hello!' — it's not asking if something is wrong.","'You alright?' = বাঙালির 'কী খবর?' — উত্তর ছোট্ট: 'Fine, thanks!'",'c1');
P("Lovely weather today, isn't it?","আজ আবহাওয়াটা দারুণ, তাই না?","The British talk about the weather all the time. It's the easiest way to start a chat.","'isn't it?' = বাঙালির 'তাই না?' — একদম এক জিনিস!",'c2');
R("Bit chilly today, isn't it?","আজ একটু ঠান্ডা, তাই না?","Yes, it's quite cold!",["Yes, I like chilli."],"হ্যাঁ, বেশ ঠান্ডা!",null,"Chilly = ঠান্ডা 🥶, Chilli = লঙ্কা 🌶️ — শুনতে এক, মানে আলাদা!",'c3');
P("I'm enjoying my visit very much.","আমার বেড়ানোটা খুব ভালো লাগছে।","People love to hear this. Say it with a big smile!",null,'c4');
P("Where's the loo, please?","বাথরুমটা কোথায়?","'Toilet' is fine too. 'Loo' is the friendly, everyday word.","লু — দিল্লির গরম 'লু' হাওয়া নয়! বিলেতে 'loo' মানে বাথরুম।",'c5');
R("Fancy a cuppa?","এক কাপ চা চলবে?","Yes, please! That would be lovely.",["No, I am not fancy."],"হ্যাঁ, দারুণ হয়!","'Cuppa' = cup of tea. 'Fancy…?' = 'Would you like…?'","'Cuppa' = 'কাপ অফ চা' — ব্রিটিশরাও আমাদের মতোই চা-পাগল!",'c6');
G("I have a question.","I have a doubt.","আমার একটা প্রশ্ন আছে।","In India 'doubt' often means 'question'. In Britain, 'doubt' means you don't believe something — so say 'I have a question.'",null,'c7');
G("I arrived this morning.","I arrived today morning.","আমি আজ সকালে এসেছি।","Say 'this morning', 'this evening' — not 'today morning'.",null,'c8');
L("Sorry, you can't sit here.",["You must not sit here.","এখানে বসা যাবে না।"],[["You can sit here.","এখানে বসতে পারেন।"]],"British 'can't' sounds like 'kaant' — with a long 'aa'. 'Can' is short. Listen for the long 'aa'!","Can't = কা-আ-ন্ট — লম্বা 'আ' মানেই 'না'!",'c9');
P("It was lovely talking to you. Bye!","আপনার সাথে কথা বলে খুব ভালো লাগল। আসি!","A warm goodbye. You can also just say 'Bye! Take care.'",null,'c10');

lesson('now',3,'⏳',"Happening now: I'm waiting","এখন চলছে");
C({title:"I am waiting · she is cooking",bnTitle:"-ing = 'চলছে'",pattern:"{s:I} {v:am waiting} {o:for the bus}.",
 en:"For something happening right now, use am / is / are + action-ing.",
 bn:"এখন যা চলছে: am / is / are + ing। I am going = আমি যাচ্ছি।",
 ex:[["{s:I} {v:am waiting} {o:for my son}.","{s:আমি} {o:ছেলের জন্য} {v:অপেক্ষা করছি}।"],["{s:It} {v:is raining}.","{v:বৃষ্টি হচ্ছে}।"],["{s:We} {v:are going} {o:to the park}.","{s:আমরা} {o:পার্কে} {v:যাচ্ছি}।"]],
 mn:"-ing = '-ছি / -ছে' — going যাচ্ছি, eating খাচ্ছি, waiting অপেক্ষা করছি!"});
F("I am ___ for the bus.","waiting",["wait"],"আমি বাসের জন্য অপেক্ষা করছি।");
F("My daughter ___ cooking dinner.","is",["are"],"আমার মেয়ে রাতের খাবার রান্না করছে।");
G("I am waiting.","I am wait.","আমি অপেক্ষা করছি।");
B("We are going to the park.","আমরা পার্কে যাচ্ছি।");
P("I'm waiting for {who}.","আমি আমার {whoBn} জন্য অপেক্ষা করছি।");
L("Are you being served?",["Is someone already helping you?","কেউ কি আপনাকে দেখছে?"],[["Are you hungry?","খিদে পেয়েছে?"]],"In shops this means 'Is anyone helping you?' Answer: 'Yes, thank you' or 'No, not yet'.");
R("What are you doing?","কী করছেন?","I'm learning English!",["I am learn English."],"আমি ইংরেজি শিখছি!");

lesson('phone',3,'📱',"On the phone","ফোনে কথা");
P("Hello, it's {name} here.","হ্যালো, আমি {name} বলছি।","On the phone, the British say 'It's … here' or 'This is …'.");
P("Can you hear me?","শুনতে পাচ্ছেন?");
P("Sorry, the line is very bad.","দুঃখিত, লাইনটা খুব খারাপ।");
P("Could you speak up a bit, please?","একটু জোরে বলবেন?","'Speak up' = speak louder.");
P("I'll call you back.","আমি পরে ফোন করছি।");
L("Who's calling, please?",["Who is this on the phone?","কে বলছেন?"],[["Please call me later.","পরে ফোন করবেন।"]]);
L("Hold on a moment.",["Please wait a little.","এক মিনিট ধরুন।"],[["Hold my hand.","আমার হাত ধরুন।"]],"'Hold on' = wait on the phone. Don't hang up!");

lesson('was',3,'🗓️',"Yesterday: was & were","গতকাল: ছিল");
C({title:"is → was · are → were",bnTitle:"অতীতের 'ছিল'",pattern:"Today {s:it} {v:is} cold. Yesterday {s:it} {v:was} cold.",
 en:"For the past: am / is → was. are → were.",
 bn:"'ছিল' = was (একজন) / were (অনেকে, বা you)।",
 ex:[["{s:The flight} {v:was} {o:long}.","{s:ফ্লাইটটা} {o:লম্বা} {v:ছিল}।"],["{s:We} {v:were} {o:very happy}.","{s:আমরা} {o:খুব খুশি} {v:ছিলাম}।"],["{s:It} {v:was} {o:lovely}!","{o:দারুণ} {v:ছিল}!"]],
 mn:"অতীতে সবাই 'w' পায়: is → was, are → were। 'w' = 'ওয়াস্তে', মানে আগের কথা!"});
F("Yesterday it ___ very cold.","was",["is"],"গতকাল খুব ঠান্ডা ছিল।");
F("We ___ very tired after the flight.","were",["was"],"ফ্লাইটের পর আমরা খুব ক্লান্ত ছিলাম।");
B("The flight was long.","ফ্লাইটটা লম্বা ছিল।");
R("How was your flight?","ফ্লাইট কেমন ছিল?","It was long, but fine, thank you.",["It is long yesterday."],"লম্বা ছিল, কিন্তু ঠিক ছিল, ধন্যবাদ।","You'll hear this question many times when you arrive!");
R("How was your day?","দিন কেমন কাটল?","It was very nice, thank you.",["It were nice."],"খুব ভালো কেটেছে, ধন্যবাদ।");
P("It was lovely to see you.","আপনাকে দেখে খুব ভালো লাগল।");

lesson('past',3,'👣',"Yesterday I walked","অতীতের কাজ: -ed");
C({title:"walk → walked",bnTitle:"-ed = '-লাম'",pattern:"Today {s:I} {v:walk}. Yesterday {s:I} {v:walked}.",
 en:"For finished actions in the past, most action words add -ed. Good news: it's the same for everyone — I walked, she walked, they walked!",
 bn:"-ed = হাঁটলাম, রান্না করলাম, দেখলাম। সবার জন্য একই — he/she-র 's'-এর ঝামেলা নেই!",
 ex:[["{s:I} {v:cooked} {o:fish} yesterday.","{s:আমি} গতকাল {o:মাছ} {v:রান্না করলাম}।"],["{s:We} {v:visited} {o:my sister}.","{s:আমরা} {o:বোনের বাড়ি} {v:গেলাম}।"],["{s:She} {v:watched} {o:a film}.","{s:ও} {o:একটা সিনেমা} {v:দেখল}।"]],
 mn:"-ed = 'এড' — 'এখন নয়, ডান হয়ে গেছে!' উচ্চারণ: walked = 'ওয়াক্‌ট', 'ওয়াকেড' নয়।"});
F("Yesterday I ___ in the park.","walked",["walk"],"গতকাল আমি পার্কে হাঁটলাম।");
F("Last week we ___ my sister.","visited",["visit"],"গত সপ্তাহে আমরা বোনের কাছে গেলাম।");
G("Yesterday I watched TV.","Yesterday I watch TV.","গতকাল আমি টিভি দেখলাম।");
B("I cooked fish yesterday.","আমি গতকাল মাছ রান্না করলাম।");
P("I talked to my sister last night.","কাল রাতে বোনের সাথে কথা বললাম।","'Last night' = yesterday evening or night.");
L("We stayed at home and relaxed.",["We were at home, resting.","আমরা বাড়িতে বিশ্রাম নিলাম।"],[["We went out all day.","আমরা সারাদিন বাইরে ছিলাম।"]]);

lesson('irregular',3,'🌟',"went, ate, saw…","বিশেষ অতীত শব্দ");
C({title:"go → went · eat → ate · see → saw",bnTitle:"যারা -ed নেয় না",pattern:"Yesterday {s:we} {v:went} {o:to London}.",
 en:"Some everyday words have their own past form. Learn these few — they're used all the time.",
 bn:"কিছু শব্দ নিজের মতো বদলায়।",
 ex:[["go → {v:went}","যাই → {v:গেলাম}"],["eat → {v:ate}","খাই → {v:খেলাম}"],["see → {v:saw}","দেখি → {v:দেখলাম}"],["have → {v:had}","আছে → {v:ছিল}"],["buy → {v:bought}","কিনি → {v:কিনলাম}"],["come → {v:came}","আসি → {v:এলাম}"]],
 mn:"ate = 'এইট' (৮) — আটটা লুচি খেলাম! 🫓 bought = 'বট' — বটতলায় কিনলাম! saw = 'স' — সব দেখলাম!"});
F("Yesterday we ___ to the museum.","went",["goed"],"গতকাল আমরা জাদুঘরে গেলাম।");
F("I ___ a lovely scarf.","bought",["buyed"],"আমি একটা সুন্দর স্কার্ফ কিনলাম।");
F("We ___ fish and chips for lunch.","ate",["eated"],"দুপুরে আমরা ফিশ অ্যান্ড চিপস খেলাম।");
F("I ___ a very good time.","had",["haved"],"আমার খুব ভালো সময় কাটল।");
B("We saw Buckingham Palace.","আমরা বাকিংহাম প্যালেস দেখলাম।");
P("I had a lovely time.","খুব ভালো সময় কাটল।","Say this when leaving a party or after a day out.");
R("What did you do at the weekend?","সপ্তাহান্তে কী করলেন?","We went to the park.",["We go to park."],"আমরা পার্কে গেলাম।","'Weekend' = Saturday and Sunday.");

lesson('did',3,'🔍',"Did you…? I didn't…","Did দিয়ে প্রশ্ন");
C({title:"Did you…? · I didn't…",bnTitle:"অতীতের প্রশ্ন",pattern:"{v:Did} {s:you} {v:sleep} well? · {s:I} {v:didn't hear}.",
 en:"To ask about the past: Did + person + plain action word. 'Did' already shows the past, so the action word stays simple: Did you go? (not 'Did you went?')",
 bn:"Did থাকলে পরের শব্দ বদলায় না — Did you go? ('went' নয়)।",
 ex:[["{v:Did} {s:you} {v:sleep} well?","{s:আপনার} ভালো {v:ঘুম হয়েছে}?"],["{s:I} {v:didn't understand}.","{s:আমি} {v:বুঝতে পারিনি}।"],["{v:Did} {s:you} {v:enjoy} it?","{v:ভালো লেগেছে}?"]],
 mn:"অতীতের দায়িত্ব Did নিয়ে নিয়েছে, বাকিরা আরাম করে! 😌"});
F("___ you sleep well?","Did",["Do"],"রাতে ভালো ঘুম হয়েছে?");
F("Did you ___ the castle?","see",["saw"],"দুর্গটা দেখেছেন?","After 'Did', use the simple word: see, go, eat.");
P("Sorry, I didn't understand.","দুঃখিত, বুঝতে পারিনি।","Very useful! Then add: 'Could you say it again, please?'");
P("Sorry, I didn't hear you.","দুঃখিত, শুনতে পাইনি।");
R("Did you sleep well?","ভালো ঘুম হয়েছে?","Yes, very well, thank you.",["Yes, I slept good yes."],"হ্যাঁ, খুব ভালো, ধন্যবাদ।","The British ask this every morning when you're a guest.");
R("Did you enjoy it?","ভালো লেগেছে?","Yes, I loved it!",["Yes, I enjoy."],"হ্যাঁ, খুব ভালো লেগেছে!");
G("Did you go to the market?","Did you went to the market?","বাজারে গিয়েছিলেন?");

lesson('future',3,'🔮',"Tomorrow: going to & will","আগামীকাল");
C({title:"going to · will",bnTitle:"ভবিষ্যতের কথা",pattern:"{s:I}'m {v:going to visit} {o:the museum}. · {s:I}'ll {v:help} {o:you}.",
 en:"'Going to' = a plan you already have. 'Will' ('ll) = deciding right now, offering or promising.",
 bn:"going to = আগে থেকে ঠিক করা পরিকল্পনা। will = এখনই ঠিক করলাম / কথা দিলাম।",
 ex:[["{s:We}'re {v:going to see} {o:a play} on Saturday.","শনিবার {s:আমরা} {o:নাটক} {v:দেখতে যাব}।"],["{s:I}'ll {v:have} {o:the fish}, please.","{s:আমি} {o:মাছটা} {v:নেব}।"],["{s:I}'ll {v:call} {o:you} tonight.","আজ রাতে {s:আমি} {o:তোমাকে} {v:ফোন করব}।"]],
 mn:"will = 'উইল' — দলিলের উইল, মানে কথা দেওয়া! going to = রাস্তায় 'যাচ্ছি' — প্ল্যান চলছে।"});
F("Tomorrow I'm ___ to visit my friend.","going",["go"],"কাল আমি বন্ধুর বাড়ি যাব।");
F("Don't worry, I ___ help you.","will",["am"],"চিন্তা করবেন না, আমি সাহায্য করব।");
B("We are going to see a play.","আমরা নাটক দেখতে যাব।");
P("I'll have the fish, please.","আমি মাছটা নেব।","In a restaurant, 'I'll have…' is the natural way to order.");
P("I'm going to stay for {stay}.","আমি {stayBn} জন্য থাকব।");
R("What are you going to do tomorrow?","কাল কী করবেন?","I'm going to visit the park.",["I go park tomorrow will."],"আমি পার্কে যাব।");
P("I'll call you tonight.","আজ রাতে ফোন করব।");

lesson('join',3,'🪢',"and, but, because, so","বাক্য জোড়া");
C({title:"and · but · because · so",bnTitle:"দুটো ভাবনা জুড়তে",pattern:"I'm tired, {v:so} I'm going to rest.",
 en:"Join two short sentences with these words to say more.",
 bn:"and = আর, but = কিন্তু, because = কারণ, so = তাই।",
 ex:[["I like tea {v:and} biscuits.","আমি চা {v:আর} বিস্কুট পছন্দ করি।"],["London is lovely, {v:but} it's cold.","লন্ডন সুন্দর, {v:কিন্তু} ঠান্ডা।"],["I'm learning English {v:because} I'm going to the UK.","আমি ইংরেজি শিখছি {v:কারণ} বিলেত যাচ্ছি।"],["It's raining, {v:so} I'll take an umbrella.","বৃষ্টি হচ্ছে, {v:তাই} ছাতা নেব।"]],
 mn:"but = 'বাট' — বাটখারার মতো উল্টোদিকে ভার! so = 'সো' — সোজা ফল: তাই।"});
F("I like tea, ___ I don't like coffee.","but",["and"],"আমি চা পছন্দ করি, কিন্তু কফি নয়।");
F("I'm tired, ___ I'm going to rest.","so",["because"],"আমি ক্লান্ত, তাই বিশ্রাম নেব।");
F("I'm happy ___ my family is here.","because",["so"],"আমি খুশি কারণ আমার পরিবার এখানে।");
B("I love London, but it's cold.","আমি লন্ডন ভালোবাসি, কিন্তু ঠান্ডা।");
P("I'd love to come, but I'm a bit tired today.","খুব আসতে ইচ্ছে করছে, কিন্তু আজ একটু ক্লান্ত।");
Sp("Make a sentence with 'because'.","'because' দিয়ে একটা বাক্য বানান।","I'm learning English because I want to talk to people in the UK.");

lesson('compare',3,'⚖️',"Bigger, colder, better","তুলনা");
C({title:"cold → colder · good → better",bnTitle:"তুলনা করতে",pattern:"{s:London} {v:is colder than} {o:Delhi}.",
 en:"Short words add -er + than. Long words use 'more' (more beautiful). Special ones: good → better, bad → worse.",
 bn:"-er than = '-এর চেয়ে বেশি'।",
 ex:[["London is {v:colder than} Delhi.","লন্ডন দিল্লি{v:র চেয়ে ঠান্ডা}।"],["This one is {v:cheaper}.","এটা {v:আরও সস্তা}।"],["The park is {v:more beautiful} in spring.","বসন্তে পার্কটা {v:আরও সুন্দর}।"],["I feel {v:better} today.","আজ {v:আগের চেয়ে ভালো} লাগছে।"]],
 mn:"than = 'দ্যান' = 'চেয়ে'। 'more better' কখনো নয় — better নিজেই 'বেশি ভালো'!"});
F("London is ___ than {home}.","colder",["more cold"],"লন্ডন {home}-এর চেয়ে ঠান্ডা।");
F("{home} is ___ than London in summer.","hotter",["more hot"],"গরমকালে {home} লন্ডনের চেয়ে গরম।");
G("I feel better today.","I feel more better today.","আজ আগের চেয়ে ভালো লাগছে।");
P("Do you have a smaller one?","এর চেয়ে ছোট আছে?","In shops: smaller, bigger, cheaper.");
B("The UK is colder than India.","বিলেত ভারতের চেয়ে ঠান্ডা।");
Sp("Compare {home} and London.","{home} আর লন্ডনের তুলনা করুন।","{home} is hotter than London. London is quieter than {home}.");

lesson('india',3,'🪔',"About India & Bengal","আমার দেশ, আমার বাংলা");
P("I'm from {home}, in India.","আমি ভারতের {home} থেকে এসেছি।");
P("{home} is a big, busy city.","{home} একটা বড়, ব্যস্ত শহর।","Change it if it doesn't fit: a quiet town, a lovely place…");
P("Durga Puja is the biggest festival in Bengal.","দুর্গাপুজো বাংলার সবচেয়ে বড় উৎসব।","British people are curious — they'll love hearing about it.","Festival = 'ফেস্টিভ্যাল' = উৎসব।");
P("It's usually in October.","এটা সাধারণত অক্টোবরে হয়।","Month → 'in'. (Day → on, time → at.)");
P("The streets are full of lights.","রাস্তাগুলো আলোয় ভরে যায়।");
P("Bengali sweets, like rasgulla, are famous.","রসগোল্লার মতো বাঙালি মিষ্টি বিখ্যাত।");
L("Have you always lived in {home}?",["Have you lived in {home} all your life?","সারাজীবন কি {home}-এই থেকেছেন?"],[["Do you like living in {home}?","{home}-এ থাকতে ভালো লাগে?"]]);
R("What's India like?","ভারত কেমন দেশ?","It's very big, colourful and busy.",["India is like curry."],"খুব বড়, রঙিন আর ব্যস্ত।","'What's it like?' = describe it. It is NOT asking what India likes!","'What's it like?' = 'কেমন?' — পছন্দের 'like' নয়!");
Sp("Tell me about your city.","আপনার শহরের কথা বলুন।","I live in {home}. It's a big city. The food is wonderful.");

lesson('often',3,'🔄',"always, sometimes, never","কত ঘনঘন");
C({title:"always · usually · sometimes · never",bnTitle:"কত ঘনঘন করেন",pattern:"{s:I} {t:always} {v:drink} {o:tea}. · {s:I} {v:am} {t:never} late.",
 en:"These words go just before the action word — but after am / is / are.",
 bn:"always = সবসময়, usually = সাধারণত, sometimes = মাঝে মাঝে, never = কখনো না।",
 ex:[["{s:I} {t:always} {v:drink} {o:tea} in the morning.","{s:আমি} সকালে {t:সবসময়} {o:চা} {v:খাই}।"],["{s:I} {t:sometimes} {v:watch} {o:TV}.","{s:আমি} {t:মাঝে মাঝে} {o:টিভি} {v:দেখি}।"],["{s:It} {v:is} {t:never} {o:hot} here!","এখানে {t:কখনো} {o:গরম} {v:হয় না}!"]],
 mn:"never = 'নেভার' — নিভে যাওয়া প্রদীপ, কখনো জ্বলে না! 🪔"});
G("I always go for a walk.","I go always for a walk.","আমি সবসময় হাঁটতে যাই।");
G("I am never late.","I never am late.","আমি কখনো দেরি করি না।");
F("I ___ eat rice for lunch.","usually",["usual"],"আমি সাধারণত দুপুরে ভাত খাই।");
B("I sometimes watch TV.","আমি মাঝে মাঝে টিভি দেখি।");
Sp("Say: I always…, I sometimes…, I never…","বলুন: আমি সবসময়…, মাঝে মাঝে…, কখনো না…","I always drink tea. I sometimes cook fish. I never drink coffee.");

lesson('friends',3,'🫖',"Friends & invitations","বন্ধুত্ব আর নিমন্ত্রণ");
R("Would you like to come for tea on Sunday?","রবিবার চা খেতে আসবেন?","I'd love to, thank you!",["Yes, I come tea."],"খুব ভালো লাগবে, ধন্যবাদ!");
R("Shall we go for a walk?","চলুন একটু হাঁটি?","Yes, good idea!",["Yes, we shall walk is."],"হ্যাঁ, ভালো কথা!","'Shall we…?' = 'Let's…?'");
P("Would you like to come to our house?","আমাদের বাড়ি আসবেন?");
P("Thank you for inviting me.","নিমন্ত্রণের জন্য ধন্যবাদ।");
L("Pop round any time!",["Come and visit whenever you like.","যখন খুশি চলে আসবেন!"],[["Go round the corner.","কোণটা ঘুরে যান।"]],null,"'Pop round' = টুক করে চলে আসা!");
P("Sorry, I can't come on Sunday.","দুঃখিত, রবিবার আসতে পারব না।","Add a reason if you like: '…because we're going to London.'");
P("Let's meet again soon.","শিগগির আবার দেখা হবে।");
L("Make yourself at home.",["Relax, as if it's your own house.","নিজের বাড়ি মনে করে আরাম করুন।"],[["Please go home now.","এবার বাড়ি যান।"]]);

lesson('ever',3,'✨',"Have you ever…?","কখনো করেছেন?");
C({title:"Have you ever…? · I've never…",bnTitle:"জীবনে কখনো",pattern:"{v:Have} {s:you} ever {v:been} {o:to Scotland}?",
 en:"To talk about experiences in your life (not exactly when): have + been / seen / tried.",
 bn:"Have you ever…? = কখনো …করেছেন? I've never… = কখনো …করিনি।",
 ex:[["{v:Have} {s:you} ever {v:tried} {o:fish and chips}?","{s:আপনি} কি কখনো {o:ফিশ অ্যান্ড চিপস} {v:খেয়েছেন}?"],["{s:I}'ve never {v:seen} {o:snow}.","{s:আমি} কখনো {o:বরফ পড়া} {v:দেখিনি}।"],["{s:I}'ve {v:been} here {t:for two weeks}.","{s:আমি} {t:দু-সপ্তাহ} হল এখানে {v:আছি}।"]],
 mn:"been = 'বিন' = 'গিয়েছেন?' — 'Have you been to the UK before?' প্রশ্নটা মনে আছে? এটাই!"});
L("Have you ever been to Scotland?",["Did you ever go to Scotland?","কখনো স্কটল্যান্ড গিয়েছেন?"],[["Are you going to Scotland?","স্কটল্যান্ড যাচ্ছেন?"]]);
R("Have you ever tried fish and chips?","কখনো ফিশ অ্যান্ড চিপস খেয়েছেন?","No, never! I'd like to try it.",["No, I never try it yesterday."],"না, কখনো না! খেয়ে দেখতে চাই।");
P("I've never seen snow.","আমি কখনো বরফ পড়া দেখিনি।");
P("I've been here for two weeks.","দু-সপ্তাহ হল এখানে এসেছি।","Change it: for three days, for a month…");
F("Have you ever ___ to London?","been",["go"],"কখনো লন্ডন গিয়েছেন?");

lesson('smooth',3,'🗨️',"Keeping the chat going","কথা চালিয়ে যাওয়া");
P("How do you say this in English?","এটাকে ইংরেজিতে কী বলে?","Point at something and ask. A brilliant way to learn new words!","এই প্রশ্নটা আপনার চাবিকাঠি 🔑 — নতুন শব্দের দরজা খোলে।");
P("What does 'queue' mean?","'queue' মানে কী?","Swap in any word you don't know.");
P("Do you mean the bus stop?","আপনি কি বাস স্টপের কথা বলছেন?","Check by repeating what you think they said: 'Do you mean…?'");
P("Let me think…","একটু ভাবি…","It's fine to take your time. This gives you a moment.");
P("Sorry, my English is not very good, but I'm learning.","দুঃখিত, আমার ইংরেজি খুব ভালো নয়, কিন্তু আমি শিখছি।","People will slow down and be extra kind.");
P("Would you mind helping me?","কিছু মনে না করলে একটু সাহায্য করবেন?","Very polite. They'll answer 'Not at all' (= happy to).");
L("No worries!",["It's OK, no problem.","কোনো ব্যাপার না!"],[["Please don't worry about me.","আমার জন্য চিন্তা করবেন না।"]]);
L("Not at all.",["You're welcome — no problem.","না না, কোনো ব্যাপার না।"],[["I don't like it at all.","একদম ভালো লাগে না।"]],"After 'thank you', 'Not at all' means 'You're welcome'.");
R("What a lovely shawl!","শালটা খুব সুন্দর!","Thank you! It's from {home}.",["Yes, it is."],"ধন্যবাদ! এটা {home}-এর।","When someone compliments you, say thank you and add a little detail — the chat continues!");

lesson('outing',3,'🏰',"Days out","বেড়াতে যাওয়া");
P("Two tickets, please.","দুটো টিকিট দিন।");
P("Is there a discount for seniors?","বয়স্কদের জন্য কোনো ছাড় আছে?","Many places in the UK have lower prices for older people — always ask!","Discount = ছাড়, যেমন পুজোর সেল!");
P("What time does it close?","কটায় বন্ধ হয়?");
P("Can I take a photo here?","এখানে ছবি তুলতে পারি?");
L("Sorry, no photos inside.",["You can't take pictures inside.","ভেতরে ছবি তোলা যাবে না।"],[["The photos are inside.","ছবিগুলো ভেতরে আছে।"]]);
L("The tour starts at eleven.",["The guided walk begins at 11.","ঘুরিয়ে দেখানো শুরু হবে এগারোটায়।"],[["The tower has eleven floors.","টাওয়ারটা এগারো তলা।"]]);
P("It's beautiful!","খুব সুন্দর!");
P("Where are the toilets, please?","বাথরুমগুলো কোথায়?","In big places, the sign says 'Toilets', with a picture.");

/* ================== PART 4 · PRACTICE CONVERSATIONS ================== */
lesson('talks',4,'🎭',"Practice conversations","পুরো কথোপকথন");
D("At the check-in desk","চেক-ইন কাউন্টারে",[
 ["Good morning. Where are you flying to today?","আজ কোথায় যাচ্ছেন?","To {city}, please.","Yes, flying today."],
 ["Can I see your passport, please?","পাসপোর্টটা দেখতে পারি?","Yes, here it is.","Yes, I can see."],
 ["How many bags are you checking in?","কটা ব্যাগ জমা দেবেন?","Just one, please.","I am checking."],
 ["Would you like a window or an aisle seat?","জানলার ধারে না করিডোরের ধারে?","An aisle seat, please.","Yes, please."],
 ["Here's your boarding pass. Gate twelve, boarding at ten fifteen.","এই নিন বোর্ডিং পাস। ১২ নম্বর গেট, সওয়া দশটায় ওঠা।","Thank you very much.","Gate is ten."]]);
Sp("Introduce yourself in four sentences.","চারটে বাক্যে নিজের পরিচয় দিন।","My name is {name}. I'm from {home}, in India. I'm visiting {who} in {city}. I'm staying for {stay}.");
D("On the plane","প্লেনে",[
 ["Hello, can I get you anything to drink?","কিছু পান করবেন?","Could I have some water, please?","Give water."],
 ["Would you like the chicken or the vegetarian?","চিকেন না নিরামিষ?","The vegetarian, please.","Yes, please."],
 ["Tea or coffee?","চা না কফি?","Tea, please, with milk.","I am liking tea."],
 ["We'll be landing in about twenty minutes.","প্রায় কুড়ি মিনিটে নামব।","Thank you. Should I fasten my seatbelt?","Landing is coffee?"]]);
D("Changing planes","প্লেন বদল",[
 ["Hello, can I help you?","কী সাহায্য করতে পারি?","Yes, please. I have a connecting flight to {city}.","Yes, I am connecting."],
 ["Can I see your boarding pass?","বোর্ডিং পাসটা দেখি?","Of course. Here you are.","Yes, I see."],
 ["Your flight leaves from gate B32. Follow the signs for B gates.","আপনার ফ্লাইট B32 গেট থেকে। B গেটের বোর্ড দেখে যান।","Sorry, could you write it down, please?","OK, I follow you."],
 ["Of course. It's about a ten-minute walk.","অবশ্যই। প্রায় দশ মিনিট হাঁটা।","Thank you so much. You're very kind.","Ten minutes is walk."]]);
Sp("Tell someone about your journey.","আপনার যাত্রার কথা বলুন।","The flight was long. I changed planes. Everyone was very kind.");
D("At the passport desk","পাসপোর্ট ডেস্কে",[
 ["Good afternoon. Passport, please.","পাসপোর্ট দিন।","Good afternoon. Here it is.","Yes, passport."],
 ["What's the purpose of your visit?","কেন এসেছেন?","I'm here to visit {who}.","Yes, I am visiting."],
 ["How long are you staying?","কতদিন থাকবেন?","For {stay}.","Since {stay}."],
 ["Where will you be staying?","কোথায় থাকবেন?","With {who}, in {city}.","I will be stay in {city}."],
 ["Have you got a return ticket?","ফেরার টিকিট আছে?","Yes, here it is.","Yes, I have got."],
 ["Thank you. Enjoy your stay.","ধন্যবাদ। ভালো কাটুক।","Thank you very much.","Yes, I enjoy."]],"Every traveller is asked these same questions. Short, calm answers are perfect.");
D("Meeting a neighbour","প্রতিবেশীর সাথে আলাপ",[
 ["Hello! I'm Sarah from next door.","নমস্কার! আমি পাশের বাড়ির সারা।","Hello, Sarah! I'm {name}. Lovely to meet you.","Yes, I am new."],
 ["Lovely to meet you too. Where are you from?","আপনার সাথে দেখা হয়েও ভালো লাগল। কোথা থেকে এসেছেন?","I'm from {home}, in India.","I am going India."],
 ["How wonderful! How are you finding the weather?","বাহ্‌! আবহাওয়া কেমন লাগছে?","It's much colder than {home}!","I am finding the weather."],
 ["You'll get used to it! How long are you here for?","অভ্যেস হয়ে যাবে! কতদিন থাকবেন?","For {stay}.","Since {stay}."],
 ["Well, pop round for a cuppa any time!","যখন খুশি চা খেতে চলে আসবেন!","Thank you, I'd love to!","No, I am not fancy."]],"'How are you finding…?' = 'How do you like…?'");
Sp("Say what you did yesterday.","কাল কী করলেন বলুন।","Yesterday I went to the park. I had lunch with my family. I watched TV.");
D("Buying a train ticket","ট্রেনের টিকিট কেনা",[
 ["Hello, where to?","কোথায় যাবেন?","A return to the city centre, please.","Give ticket."],
 ["Coming back today?","আজই ফিরবেন?","Yes, this afternoon.","Yes, yesterday."],
 ["That's eight pounds forty, please.","আট পাউন্ড চল্লিশ পেন্স।","Can I pay by card?","How much is eight?"],
 ["Yes, just tap it there. Platform three.","হ্যাঁ, ওখানে কার্ড ছোঁয়ান। তিন নম্বর প্ল্যাটফর্ম।","Thank you. Which way is platform three?","Three is platform."]]);
D("At a café","ক্যাফেতে",[
 ["Hiya, what can I get you?","কী দেব?","Could I have a cup of tea, please?","I want tea give."],
 ["Milk and sugar?","দুধ-চিনি?","Just milk, please.","Yes, milk is sugar."],
 ["Anything to eat?","কিছু খাবেন?","Yes, a piece of that cake, please.","Yes, I am eat."],
 ["Eat in or take away?","এখানে খাবেন না নিয়ে যাবেন?","Eat in, please.","Yes, eat."],
 ["That's five twenty, please.","পাঁচ পাউন্ড কুড়ি।","Here you are. Thank you!","Five is twenty."]],"'Hiya' = a friendly 'hello', very common in the north of England.");
Sp("Say what you're going to do tomorrow.","কাল কী করবেন বলুন।","Tomorrow I'm going to visit the market. I'm going to buy a present.");
D("Tea at a friend's house","বন্ধুর বাড়িতে চা",[
 ["Come in, come in! Let me take your coat.","আসুন আসুন! কোটটা দিন।","Thank you. What a lovely house!","Yes, take coat."],
 ["Thank you! Would you like a cup of tea?","ধন্যবাদ! চা খাবেন?","Yes, please. That would be lovely.","Yes, give tea."],
 ["Help yourself to biscuits.","বিস্কুট নিয়ে নিন।","Thank you. These are delicious!","Help me, please."],
 ["So, what did you do yesterday?","কাল কী করলেন?","We went to the park and had lunch in town.","We go park yesterday."],
 ["Lovely! What are you going to do this weekend?","বাহ্‌! এই সপ্তাহান্তে কী করবেন?","We're going to visit a museum.","We visit museum went."],
 ["It's been so nice to see you.","আপনার সাথে দেখা হয়ে খুব ভালো লাগল।","Thank you for inviting me. I had a lovely time.","Yes, nice."]]);
D("Asking the way","রাস্তা জিজ্ঞেস করা",[
 ["Are you all right there? You look a bit lost.","ঠিক আছেন তো? একটু দিশেহারা লাগছে।","Yes, a bit. How do I get to the station?","No, I am lost a bit station."],
 ["Go straight on, then turn left at the lights.","সোজা গিয়ে সিগন্যালে বাঁদিকে।","Sorry, could you say that again, slowly?","OK left is lights."],
 ["Of course. Straight on… then left at the traffic lights.","অবশ্যই। সোজা… তারপর সিগন্যালে বাঁদিকে।","Straight on, then left. Is it far?","Far is it straight."],
 ["No, it's just five minutes.","না, মাত্র পাঁচ মিনিট।","Thank you so much!","Five minutes is far."]]);
Sp("Talk about the weather and your city.","আবহাওয়া আর আপনার শহরের কথা বলুন।","It's cold here today. In {home} it's hot now. I prefer the sunshine!");
D("At the chemist","ওষুধের দোকানে",[
 ["Hello, can I help?","কী লাগবে?","Yes, please. I have a bad headache.","Yes, I am head."],
 ["Are you taking any other medicine?","অন্য কোনো ওষুধ খাচ্ছেন?","Yes. Here is the list.","Yes, I eat medicine."],
 ["OK. Take two of these, every four hours.","ঠিক আছে। চার ঘণ্টা অন্তর দুটো করে খাবেন।","Could you write that down, please?","Four is two."],
 ["Of course. I hope you feel better soon.","অবশ্যই। শিগগির সুস্থ হয়ে উঠুন।","Thank you very much.","Yes, better."]],"Keep a written list of your medicines in English, and show it to the chemist.");
D("On the bus","বাসে",[
 ["Hello. Where are you going?","কোথায় যাবেন?","Does this bus go to the city centre?","Bus is centre."],
 ["Yes, it does.","হ্যাঁ, যায়।","A single, please. Could you tell me when we get there?","Single me."],
 ["No problem. That's two pounds.","কোনো ব্যাপার না। দুই পাউন্ড।","Here you are.","Two is pound."],
 ["This is your stop, love!","এটাই আপনার স্টপ!","Thank you! Cheers!","Stop love."]]);
Sp("Describe a festival in Bengal.","বাংলার একটা উৎসবের কথা বলুন।","Durga Puja is the biggest festival in Bengal. The streets are full of lights. Everyone eats sweets.");

/* ================== PART 5 · GROWING CONFIDENCE ================== */
lesson('should',5,'🧭',"should · have to","উচিত আর দরকার");
C({title:"should · must · have to",bnTitle:"উচিত / করতেই হবে",pattern:"{s:You} {v:should try} {o:the soup}.",
 en:"'Should' = good advice. 'Have to' or 'must' = it's necessary. After should / must, use the plain action word (no 'to').",
 bn:"should = উচিত। have to / must = করতেই হবে।",
 ex:[["{s:You} {v:should wear} {o:a warm coat}.","{s:আপনার} {o:গরম কোট} {v:পরা উচিত}।"],["{s:I} {v:have to take} {o:my medicine}.","{s:আমাকে} {o:ওষুধ} {v:খেতেই হবে}।"],["{s:We} {v:must be} {o:at the airport} by six.","ছটার মধ্যে {s:আমাদের} {o:বিমানবন্দরে} {v:থাকতেই হবে}।"]],
 mn:"should = 'শুধু পরামর্শ'! must = 'মাস্টারমশাইয়ের হুকুম' — করতেই হবে!"});
F("You ___ try the fish curry. It's delicious!","should",["should to"],"মাছের ঝোলটা খেয়ে দেখা উচিত। দারুণ!");
F("I have ___ leave at five.","to",["for"],"আমাকে পাঁচটায় বেরোতেই হবে।");
G("You should rest.","You should to rest.","আপনার বিশ্রাম নেওয়া উচিত।","After should / must / can — no 'to'.");
B("I have to take my medicine.","আমাকে ওষুধ খেতে হবে।");
P("What should I wear?","কী পরা উচিত?");
R("Should I take an umbrella?","ছাতা নেব?","Yes, you should. It might rain.",["Yes, you should taking."],"হ্যাঁ, নেওয়া উচিত। বৃষ্টি হতে পারে।");
P("Do I have to pay now?","এখনই কি দাম দিতে হবে?");

lesson('opinion',5,'💭',"What I think","আমার মতামত");
P("I think it's lovely.","আমার মনে হয় এটা খুব সুন্দর।","'I think…' is a gentle way to give your opinion.","I think = 'আমার মনে হয়'।");
P("I don't think so.","আমার তা মনে হয় না।");
P("In my opinion, family comes first.","আমার মতে, পরিবার সবার আগে।");
P("I agree with you.","আমি আপনার সাথে একমত।");
P("I'm not sure.","আমি ঠিক জানি না।");
R("What do you think of London?","লন্ডন কেমন লাগছে?","I think it's beautiful, but very busy.",["I am thinking London."],"আমার মনে হয় খুব সুন্দর, কিন্তু খুব ব্যস্ত।");
G("I don't think it's far.","I think it's not far.","আমার মনে হয় না এটা দূরে।","The British usually say 'I don't think…' rather than 'I think … not'.");
Sp("Which is better — tea or coffee? Why?","চা না কফি — কোনটা ভালো? কেন?","I think tea is better, because it's lighter. I drink it every morning.");

lesson('describe',5,'🎨',"Describing people & things","বর্ণনা করা");
C({title:"Describing words come first",bnTitle:"বিশেষণ আগে — বাংলার মতোই!",pattern:"a {o:red} bag · a {o:kind} woman",
 en:"Describing words (big, red, kind, old) come BEFORE the thing — just like Bengali! Or after is / are: The bag is red.",
 bn:"বাংলার মতোই: লাল ব্যাগ = a red bag। এটা সহজ!",
 ex:[["a {o:big} {s:house}","একটা {o:বড়} {s:বাড়ি}"],["She is very {o:kind}.","উনি খুব {o:ভালো মানুষ}।"],["It's a {o:small}, {o:blue} {s:suitcase}.","একটা {o:ছোট}, {o:নীল} {s:সুটকেস}।"]],
 mn:"এখানে বাংলা আর ইংরেজি বন্ধু — বিশেষণ আগে! লাল শাড়ি = red sari।"});
P("My suitcase is big and black.","আমার সুটকেসটা বড় আর কালো।","Useful if a bag goes missing: describe it!");
P("She's very kind.","উনি খুব ভালো মানুষ।");
P("He's tall, with grey hair.","উনি লম্বা, চুল পাকা।");
L("What does it look like?",["Describe how it looks.","দেখতে কেমন?"],[["Do you like it?","আপনার পছন্দ?"]],"Answer like this: 'It's big and black.'");
G("I have a red suitcase.","I have a suitcase red.","আমার একটা লাল সুটকেস আছে।");
B("It is a small blue bag.","এটা একটা ছোট নীল ব্যাগ।");
P("What colour is it?","এটা কী রঙের?","British spelling: colour.");

lesson('memories',5,'📷',"Talking about the past","স্মৃতির কথা");
C({title:"used to",bnTitle:"আগে করতাম",pattern:"{s:I} {v:used to live} {o:in a village}.",
 en:"'Used to' = something you did often in the past, but not now.",
 bn:"used to = আগে করতাম (এখন আর নয়)।",
 ex:[["{s:We} {v:used to go} {o:to Puri} every year.","{s:আমরা} প্রতি বছর {o:পুরী} {v:যেতাম}।"],["{s:My father} {v:used to sing}.","{s:আমার বাবা} {v:গান গাইতেন}।"],["{s:I} {v:used to walk} {o:to school}.","{s:আমি} {o:হেঁটে স্কুলে} {v:যেতাম}।"]],
 mn:"used to = পুরোনো অভ্যেস, যেন পুরোনো ফটো অ্যালবাম 📷"});
P("When I was young, I lived in a village.","ছোটবেলায় আমি গ্রামে থাকতাম।","Change it to fit your life: in a small town, in Kolkata…");
P("We used to go to Puri every year.","আমরা প্রতি বছর পুরী যেতাম।");
F("I ___ to cook every day.","used",["use"],"আমি আগে রোজ রান্না করতাম।");
B("When I was young, I loved singing.","ছোটবেলায় গান গাইতে খুব ভালোবাসতাম।");
L("Things have changed a lot, haven't they?",["Many things are different now.","অনেক কিছু বদলে গেছে, তাই না?"],[["Things are very expensive.","জিনিসপত্রের খুব দাম।"]]);
Sp("Tell me about when you were young.","ছোটবেলার কথা বলুন।","When I was young, I lived in a small town. I used to walk to school. I loved mangoes!");

lesson('if',5,'🌈',"If…","যদি…");
C({title:"If…, …",bnTitle:"যদি … তাহলে …",pattern:"{v:If} it rains, {s:we}'ll stay at home.",
 en:"'If' joins a possible situation and its result. After 'if', use the present (if it rains), then 'will' for the result.",
 bn:"If = যদি। If it rains = যদি বৃষ্টি হয়।",
 ex:[["{v:If} it rains, we'll stay at home.","{v:যদি} বৃষ্টি হয়, আমরা বাড়িতে থাকব।"],["{v:If} you're tired, sit down.","{v:যদি} ক্লান্ত লাগে, বসে পড়ুন।"],["{v:If} I have time, I'll call you.","{v:যদি} সময় পাই, ফোন করব।"]],
 mn:"If = 'ইফ' = 'যদি'। ছোট্ট শব্দ, বড় সম্ভাবনা! 🌈"});
F("If it ___, we'll take a taxi.","rains",["will rain"],"যদি বৃষ্টি হয়, ট্যাক্সি নেব।","After 'if', no 'will'.");
F("If you're cold, I ___ close the window.","will",["am"],"যদি ঠান্ডা লাগে, জানলা বন্ধ করে দেব।");
B("If I get lost, I will call you.","যদি পথ হারাই, তোমাকে ফোন করব।");
P("If it's no trouble, could you help me?","যদি অসুবিধা না হয়, একটু সাহায্য করবেন?");
Sp("Finish this sentence: If the weather is nice tomorrow, …","বাক্যটা শেষ করুন: কাল আবহাওয়া ভালো থাকলে…","If the weather is nice tomorrow, I'll go for a walk in the park.");

lesson('clothes',5,'🧥',"Clothes & gifts","জামাকাপড় আর উপহার");
P("I'm looking for a warm jumper.","আমি একটা গরম সোয়েটার খুঁজছি।","In Britain, a sweater is called a 'jumper'.","Jumper = সোয়েটার — লাফ দেওয়ার জামা নয়! 😄");
P("Can I try it on?","পরে দেখতে পারি?");
P("It's too big. Do you have a smaller size?","বড্ড বড়। ছোট সাইজ আছে?");
L("The changing rooms are at the back.",["You can try clothes on at the back.","পেছনে জামা পরে দেখার ঘর আছে।"],[["Change your money at the back.","পেছনে টাকা বদলান।"]]);
P("I'm looking for a present for my grandson.","নাতির জন্য একটা উপহার খুঁজছি।","Change it: for my granddaughter, for my friend…");
R("Would you like a gift receipt?","উপহারের রসিদ লাগবে?","Yes, please. Thank you.",["Yes, gift me."],"হ্যাঁ, দিন। ধন্যবাদ।","A gift receipt lets the person exchange the present.");
P("I'll take it.","এটা নেব।");

lesson('doctor',5,'🏥',"At the doctor","ডাক্তারের কাছে");
P("I'd like to make an appointment, please.","ডাক্তার দেখানোর একটা সময় নিতে চাই।","In Britain you usually book a time to see the doctor (the GP).","Appointment = আগে থেকে ঠিক করা সময়।");
P("I've had a cough for three days.","তিন দিন ধরে কাশি হচ্ছে।","Remember: for + amount of time.");
P("It hurts here.","এখানে ব্যথা।","Point to the place as you say it.");
L("How long have you had it?",["Since when has it been like this?","কতদিন ধরে হচ্ছে?"],[["How long is the medicine?","ওষুধটা কতদিনের?"]]);
L("Take one tablet twice a day, after food.",["One tablet, two times a day, after eating.","দিনে দুবার, খাওয়ার পরে একটা করে।"],[["Two tablets, once a day.","দিনে একবার দুটো করে।"]]);
P("Here is a list of my medicines.","এই যে আমার ওষুধের তালিকা।","Keep this list, written in English, in your bag.");
P("Could you explain that again, more simply?","আর একবার, একটু সহজ করে বুঝিয়ে বলবেন?");

lesson('story',5,'📖',"Telling a little story","গল্প বলা");
C({title:"first · then · after that · finally",bnTitle:"ধাপে ধাপে বলা",pattern:"{t:First}, … {t:Then}, … {t:Finally}, …",
 en:"To tell what happened, use these step words with the past (went, saw, had).",
 bn:"First = প্রথমে, Then = তারপর, After that = তার পরে, Finally = শেষে।",
 ex:[["{t:First}, we went to the market.","{t:প্রথমে} আমরা বাজারে গেলাম।"],["{t:Then}, we had lunch.","{t:তারপর} দুপুরের খাবার খেলাম।"],["{t:Finally}, we came home.","{t:শেষে} বাড়ি ফিরলাম।"]],
 mn:"গল্পের সিঁড়ি: First → Then → After that → Finally 🪜"});
F("First we had tea. ___ we went for a walk.","Then",["First"],"প্রথমে চা খেলাম। তারপর হাঁটতে গেলাম।");
B("Then we went to the park.","তারপর আমরা পার্কে গেলাম।");
L("And then what happened?",["What happened next?","তারপর কী হল?"],[["What will happen?","কী হবে?"]],"People say this when they're enjoying your story — keep going!");
Sp("Tell me about a nice day you had. Use First, Then, Finally.","একটা ভালো দিনের কথা বলুন — First, Then, Finally দিয়ে।","First, we went to the park. Then, we had lunch at a café. Finally, we came home and had tea.");
Sp("Tell me about your journey to the UK.","বিলেতে আসার যাত্রার কথা বলুন।","First, I took a long flight. Then, I changed planes. Finally, I arrived in {city}. My family was waiting!");

