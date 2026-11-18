"use strict";
/* ======================= ROLE-PLAYS =======================
   RP(title, bengali title, level 1-3, scene, scene in Bengali, turns, tip)
   each turn: [they say ("" = she starts), Bengali, her task, task in Bengali, example answer]
   Easy: she can see an example before answering. Medium: hints only.
   Hard: she answers freely; example shown afterwards.
   ========================================================== */
const RP=(title,bn,level,scene,sceneBn,turns,tip)=>add('roleplay',{title,bn,level,scene,sceneBn,turns:turns.map(t=>({they:t[0],theyBn:t[1],task:t[2],taskBn:t[3],ex:t[4]})),tip},title);

lesson('rp-easy',0,'🎭',"Role-plays: easy","অভিনয় করে কথা: সহজ");
RP("Finding the milk in a corner shop","পাড়ার দোকানে দুধ খোঁজা",1,"You're in a small shop and can't find the milk.","ছোট একটা দোকানে আছেন, দুধ খুঁজে পাচ্ছেন না।",[
 ["Hiya, you alright there?","নমস্কার, সব ঠিক আছে?","Say hello, and ask where the milk is.","নমস্কার বলুন, দুধ কোথায় জিজ্ঞেস করুন।","Hello! Yes, thank you. Excuse me, where is the milk, please?"],
 ["It's in the fridge at the back, on the left.","পেছনের ফ্রিজে, বাঁদিকে।","Say thank you. Ask if they have bread too.","ধন্যবাদ দিন। পাউরুটিও আছে কি না জিজ্ঞেস করুন।","Thank you. Do you have bread too?"],
 ["Yeah, the bread's just here by the till.","হ্যাঁ, পাউরুটি এখানেই, কাউন্টারের পাশে।","Say you'll take one, and ask how much it all is.","একটা নেবেন বলুন, সব মিলিয়ে কত জিজ্ঞেস করুন।","Lovely, I'll take this one. How much is it all?"],
 ["That's three pounds twenty altogether.","সব মিলিয়ে তিন পাউন্ড কুড়ি।","Ask to pay by card, then say thank you and goodbye.","কার্ডে দিতে চান বলুন, ধন্যবাদ দিয়ে বিদায় নিন।","Can I pay by card? Thank you very much. Bye!"]],"'The till' = the place where you pay.");
RP("Which platform?","কোন প্ল্যাটফর্ম?",1,"You're at a busy station. Ask a stranger for help.","ভিড়ের স্টেশনে আছেন। একজন অচেনা মানুষকে জিজ্ঞেস করুন।",[
 ["","","Say excuse me, and ask which platform the train to {city} leaves from.","'Excuse me' বলে {city}-এর ট্রেন কোন প্ল্যাটফর্মে জিজ্ঞেস করুন।","Excuse me, which platform is the train to {city}, please?"],
 ["Let me look… It's platform four, but it leaves in five minutes.","দেখি… চার নম্বর প্ল্যাটফর্ম, তবে পাঁচ মিনিটে ছাড়বে।","Repeat the platform number to check, and say thank you.","প্ল্যাটফর্ম নম্বরটা আবার বলে মিলিয়ে নিন, ধন্যবাদ দিন।","Platform four? Thank you so much!"],
 ["Yes, number four. Over the bridge and down the stairs.","হ্যাঁ, চার। ব্রিজ পেরিয়ে সিঁড়ি দিয়ে নিচে।","Ask if there is a lift.","লিফট আছে কি না জিজ্ঞেস করুন।","Is there a lift, please?"],
 ["Yes, the lift's just over there, next to the café.","হ্যাঁ, লিফট ওই যে, ক্যাফের পাশে।","Thank them warmly.","আন্তরিকভাবে ধন্যবাদ দিন।","Thank you, you're very kind. Have a nice day!"]],"Repeating the number back is the best way to be sure.");
RP("Asking the way to the bus stop","বাস স্টপের রাস্তা জিজ্ঞেস করা",1,"You're on a street and need the bus stop.","রাস্তায় আছেন, বাস স্টপ খুঁজছেন।",[
 ["","","Stop someone politely and ask the way to the bus stop.","ভদ্রভাবে কাউকে থামিয়ে বাস স্টপের রাস্তা জিজ্ঞেস করুন।","Excuse me, could you tell me where the bus stop is?"],
 ["Sure — go straight on, then turn left at the post office.","সোজা গিয়ে পোস্ট অফিসে বাঁদিকে ঘুরবেন।","Ask them to say it again slowly.","আবার আস্তে বলতে বলুন।","Sorry, could you say that again slowly, please?"],
 ["Of course. Straight on… then left… at the post office.","অবশ্যই। সোজা… তারপর বাঁদিকে… পোস্ট অফিসে।","Repeat the directions back, and ask if it's far.","রাস্তাটা আবার বলে মিলিয়ে নিন, দূরে কি না জিজ্ঞেস করুন।","Straight on, then left at the post office. Is it far?"],
 ["No, just two minutes' walk.","না, মাত্র দু-মিনিটের হাঁটা।","Thank them.","ধন্যবাদ দিন।","Thank you very much!"]]);
RP("Ordering at a café","ক্যাফেতে অর্ডার",1,"You're at the counter of a café.","ক্যাফের কাউন্টারে দাঁড়িয়ে আছেন।",[
 ["Hiya! What can I get you?","কী দেব?","Order a cup of tea with milk.","দুধ দিয়ে এক কাপ চা চান।","Could I have a cup of tea with milk, please?"],
 ["Sure. Anything to eat with that?","নিশ্চয়ই। সঙ্গে কিছু খাবেন?","Ask what cakes they have.","কী কী কেক আছে জিজ্ঞেস করুন।","What cakes do you have?"],
 ["We've got lemon cake, chocolate cake and scones.","লেবুর কেক, চকলেট কেক আর স্কোন আছে।","Choose one.","একটা বেছে নিন।","I'll have the lemon cake, please."],
 ["Eat in or take away?","এখানে খাবেন না নিয়ে যাবেন?","Say you'll eat here.","এখানে খাবেন বলুন।","Eat in, please."],
 ["That's six pounds forty.","ছয় পাউন্ড চল্লিশ।","Pay and thank them.","দাম দিয়ে ধন্যবাদ দিন।","Here you are. Thank you!"]],"A scone is a small British cake, often eaten with jam and cream.");
RP("On the bus","বাসে",1,"You're getting on a bus.","বাসে উঠছেন।",[
 ["Hello, love. Where to?","কোথায় যাবেন?","Ask if this bus goes to the city centre.","এই বাস সিটি সেন্টারে যায় কি না জিজ্ঞেস করুন।","Does this bus go to the city centre?"],
 ["It does, yeah.","হ্যাঁ, যায়।","Ask for a single ticket.","একটা সিঙ্গল টিকিট চান।","A single ticket, please."],
 ["That's two pounds. Just tap your card.","দুই পাউন্ড। কার্ডটা ছোঁয়ান।","Ask the driver to tell you when to get off.","কোথায় নামবেন বলে দিতে অনুরোধ করুন।","Could you tell me when we get to the city centre, please?"],
 ["No problem, I'll give you a shout.","কোনো ব্যাপার না, আমি ডেকে দেব।","Thank them.","ধন্যবাদ দিন।","Thank you very much."]],"'I'll give you a shout' = I'll call out to tell you.");
RP("Meeting your daughter's British friend","মেয়ের ব্রিটিশ বন্ধুর সাথে আলাপ",1,"Your daughter's friend Emma has come to the house.","মেয়ের বন্ধু এমা বাড়িতে এসেছে।",[
 ["Hello! You must be {name}. I'm Emma, a friend of your daughter's.","নমস্কার! আপনিই বুঝি {name}? আমি এমা, আপনার মেয়ের বন্ধু।","Greet her and say it's nice to meet her.","নমস্কার বলুন, আলাপ করে ভালো লাগল বলুন।","Hello, Emma! Lovely to meet you."],
 ["Lovely to meet you too! How was your journey?","আপনার সাথেও! যাত্রা কেমন হল?","Say it was long, but fine.","লম্বা ছিল, কিন্তু ঠিক ছিল বলুন।","It was long, but fine, thank you."],
 ["Are you enjoying {city} so far?","{city} কেমন লাগছে?","Say yes, and one thing you like.","হ্যাঁ বলুন, আর একটা ভালো লাগার কথা।","Yes, very much! I love the parks."],
 ["Oh, I'm so glad. Your daughter talks about you all the time!","খুব ভালো লাগল। আপনার মেয়ে সবসময় আপনার কথা বলে!","React warmly.","আন্তরিকভাবে উত্তর দিন।","Oh, that's so sweet! She talks about you too."]]);
RP("Saying hello to a neighbour","প্রতিবেশীকে নমস্কার",1,"A neighbour says hello over the garden fence.","প্রতিবেশী বাগানের বেড়ার ওপার থেকে কথা বলছেন।",[
 ["Morning! Lovely day, isn't it?","সুপ্রভাত! দিনটা সুন্দর, তাই না?","Say good morning and agree.","সুপ্রভাত বলুন, একমত হোন।","Good morning! Yes, it's beautiful."],
 ["Are you staying with the family next door?","পাশের বাড়ির পরিবারের কাছে আছেন?","Say yes, who you're visiting, and where you're from.","হ্যাঁ বলুন, কার কাছে আর কোথা থেকে এসেছেন।","Yes, I'm visiting {who}. I'm from India."],
 ["Oh, how lovely! How long are you here for?","বাহ্‌! কতদিন থাকবেন?","Say how long.","কতদিন বলুন।","For {stay}."],
 ["Well, enjoy your stay. I'm Margaret, by the way.","ভালো কাটুক। আমি মার্গারেট।","Tell her your name, and say goodbye.","নিজের নাম বলুন, বিদায় নিন।","Nice to meet you, Margaret. I'm {name}. See you soon!"]]);
RP("At the supermarket checkout","সুপারমার্কেটে দাম দেওয়া",1,"You're paying for your shopping.","কেনাকাটার দাম দিচ্ছেন।",[
 ["Hiya. Do you need a bag?","ব্যাগ লাগবে?","Say yes, one bag please.","হ্যাঁ, একটা ব্যাগ বলুন।","Yes, one bag, please."],
 ["Have you got a loyalty card?","লয়্যালটি কার্ড আছে?","Say no, and ask what that is.","না বলুন, আর জিনিসটা কী জিজ্ঞেস করুন।","No, I haven't. What is a loyalty card?"],
 ["It's a card that gets you discounts — don't worry. That's twelve pounds fifty.","ওতে ছাড় পাওয়া যায় — চিন্তা নেই। বারো পাউন্ড পঞ্চাশ।","Ask to pay by card.","কার্ডে দিতে চান বলুন।","OK. Can I pay by card?"],
 ["Yep, just tap there. Would you like your receipt?","হ্যাঁ, ওখানে ছোঁয়ান। রসিদ নেবেন?","Say yes please, and thank you.","হ্যাঁ বলুন, ধন্যবাদ দিন।","Yes, please. Thank you very much."]],"Asking 'What is…?' is always fine — it's how you learn new words.");

lesson('rp-medium',0,'🎭',"Role-plays: medium","অভিনয় করে কথা: মাঝারি");
RP("A fellow passenger on the flight","প্লেনে পাশের যাত্রী",2,"The person next to you on the plane starts chatting.","প্লেনে পাশের যাত্রী গল্প শুরু করলেন।",[
 ["Hi there. Is this your first time flying to the UK?","এই প্রথম বিলেত যাচ্ছেন?","Say yes, and why you're going.","হ্যাঁ বলুন, আর কেন যাচ্ছেন।","Yes, it is. I'm going to visit {who} in {city}."],
 ["Oh, how lovely! How long are you staying?","বাহ্‌! কতদিন থাকবেন?","Answer with 'for…'.","'for…' দিয়ে উত্তর দিন।","For {stay}. I'm very excited."],
 ["I'm from Leeds myself. Have you heard about the British weather?","আমি নিজে লিডসের। ব্রিটিশ আবহাওয়ার কথা শুনেছেন?","Make a light joke about the rain.","বৃষ্টি নিয়ে একটু মজা করুন।","Yes! Everyone says it rains every day. I've packed an umbrella!"],
 ["Ha! Very wise. What are you most looking forward to?","হা! বুদ্ধিমানের কাজ। কীসের জন্য সবচেয়ে মুখিয়ে আছেন?","Say what you're looking forward to (looking forward to + -ing).","কী নিয়ে মুখিয়ে আছেন বলুন (looking forward to + -ing)।","I'm looking forward to seeing my family and visiting London."],
 ["Well, I hope you have a wonderful time.","আশা করি দারুণ সময় কাটবে।","Thank them, and ask a question about them.","ধন্যবাদ দিন, ওঁকে একটা প্রশ্ন করুন।","Thank you! Were you in India on holiday?"]]);
RP("Dinner with your daughter's friend","মেয়ের বন্ধুর সাথে রাতের খাওয়া",2,"Emma is eating dinner with your family. You cooked.","এমা আপনাদের সাথে খাচ্ছে। রান্না আপনি করেছেন।",[
 ["This smells amazing! Did you make it?","দারুণ গন্ধ! আপনি বানিয়েছেন?","Say yes, and name the dish.","হ্যাঁ বলুন, খাবারের নাম বলুন।","Yes, I did. It's fish curry — a Bengali dish."],
 ["Is it very spicy? I'm not great with spicy food.","খুব ঝাল? আমি ঝাল খেতে পারি না।","Reassure her and offer something to help.","আশ্বস্ত করুন, কিছু একটা দিতে চান।","Don't worry, it's only a little spicy. Would you like some yoghurt with it?"],
 ["Mmm, it's delicious! How did you learn to cook?","দারুণ! রান্না শিখলেন কীভাবে?","Talk about learning (use the past).","কীভাবে শিখেছিলেন বলুন (অতীত কাল)।","My mother taught me when I was young. I've been cooking for fifty years!"],
 ["Fifty years! What's your favourite thing to cook?","পঞ্চাশ বছর! কী রাঁধতে সবচেয়ে ভালো লাগে?","Answer with 'because'.","'because' দিয়ে উত্তর দিন।","I love making sweets, because everyone is happy when they eat them."],
 ["You'll have to teach me one day!","একদিন আমাকে শেখাতে হবে!","Offer to teach her (Shall we…? / I'll…).","শেখানোর প্রস্তাব দিন (Shall we…? / I'll…)।","Of course! Shall we cook together on Sunday?"]]);
RP("Lost — asking the way","পথ হারিয়ে রাস্তা জিজ্ঞেস",2,"You've lost your way to the station.","স্টেশনের রাস্তা গুলিয়ে ফেলেছেন।",[
 ["","","Explain you're lost, and ask the way to the station.","বলুন পথ হারিয়েছেন, স্টেশনের রাস্তা জিজ্ঞেস করুন।","Excuse me, I'm a bit lost. Could you tell me how to get to the station?"],
 ["Right. Go down here, take the second left, go past the church and it's on your right.","এই রাস্তা দিয়ে গিয়ে দ্বিতীয় বাঁদিকে, গির্জা পেরিয়ে ডানদিকে।","Say you didn't catch it all, and ask for the first part again.","বলুন সবটা ধরতে পারেননি, প্রথম অংশটা আবার শুনতে চান।","Sorry, I didn't catch all of that. What was the first part again?"],
 ["Go down this road and take the second left.","এই রাস্তা দিয়ে গিয়ে দ্বিতীয় বাঁদিকে।","Repeat it back, and ask what comes next.","আবার বলে মিলিয়ে নিন, তারপর কী জিজ্ঞেস করুন।","Down this road, then the second left. And then?"],
 ["Then go past the church, and the station's on your right.","তারপর গির্জা পেরোলে ডানদিকে স্টেশন।","Check you understood, and ask how long it takes.","মিলিয়ে নিন, কতক্ষণ লাগবে জিজ্ঞেস করুন।","Past the church, on the right. How long does it take to walk?"],
 ["About ten minutes.","প্রায় দশ মিনিট।","Thank them.","ধন্যবাদ দিন।","Thank you so much for your help."]],"Breaking long directions into small pieces is a clever skill — use it everywhere.");
RP("At the pharmacy","ওষুধের দোকানে",2,"You've had a cold for a few days.","কদিন ধরে সর্দি-কাশি।",[
 ["Hello, how can I help?","বলুন, কী সাহায্য করতে পারি?","Say you have a cold and a sore throat.","বলুন সর্দি আর গলাব্যথা।","Hello. I've got a cold and a sore throat."],
 ["How long have you had it?","কতদিন ধরে?","Say how long (use 'for').","কতদিন বলুন ('for' দিয়ে)।","I've had it for three days."],
 ["Are you taking any other medicines?","অন্য কোনো ওষুধ খাচ্ছেন?","Say yes, and offer your list.","হ্যাঁ বলুন, ওষুধের তালিকা দিন।","Yes, I am. Here is a list of my medicines."],
 ["OK. These lozenges are fine with those. Take one every three hours.","ঠিক আছে। এই লজেন্সগুলো চলবে। তিন ঘণ্টা অন্তর একটা।","Ask them to write it down.","লিখে দিতে বলুন।","Sorry, could you write that down for me, please?"],
 ["Of course. And drink lots of water. I hope you feel better soon.","অবশ্যই। প্রচুর জল খাবেন। শিগগির সুস্থ হয়ে উঠুন।","Thank them.","ধন্যবাদ দিন।","Thank you very much. You've been very helpful."]]);
RP("Phoning the doctor's surgery","ডাক্তারখানায় ফোন",2,"You'd like to see a doctor this week.","এ সপ্তাহে ডাক্তার দেখাতে চান।",[
 ["Good morning, Parkside Surgery. How can I help?","সুপ্রভাত, পার্কসাইড সার্জারি। বলুন?","Say you'd like an appointment.","অ্যাপয়েন্টমেন্ট চান বলুন।","Good morning. I'd like to make an appointment, please."],
 ["Are you registered with us?","আপনি কি এখানে নথিভুক্ত?","Say you're visiting, and who you're staying with.","বলুন বেড়াতে এসেছেন, কার কাছে আছেন।","No, I'm visiting from India. I'm staying with {who}."],
 ["OK, we can see you as a temporary patient. Is it urgent?","ঠিক আছে, অস্থায়ী রোগী হিসেবে দেখা যাবে। খুব জরুরি?","Say it isn't urgent, but you'd like to come this week.","বলুন জরুরি নয়, তবে এ সপ্তাহে দেখাতে চান।","It isn't urgent, but I'd like to see a doctor this week, please."],
 ["We have Thursday at ten past eleven. Is that any good?","বৃহস্পতিবার এগারোটা বেজে দশ মিনিট। চলবে?","Repeat the time to check, then accept.","সময়টা আবার বলে মিলিয়ে নিন, তারপর রাজি হোন।","Thursday at ten past eleven? Yes, that's fine."],
 ["Lovely. Can I take your name, please?","বেশ। আপনার নামটা?","Say your name, and offer to spell it.","নাম বলুন, বানান করে দিতে চান বলুন।","My name is {name}. Shall I spell it for you?"]]);
RP("A taxi ride","ট্যাক্সিতে",2,"You've just got into a taxi.","সবে ট্যাক্সিতে উঠেছেন।",[
 ["Hiya, where are you heading?","কোথায় যাবেন?","Give an address.","ঠিকানা বলুন।","Hello. Could you take me to 14 Elm Road, please?"],
 ["No problem. Is this your first time in {city}?","ঠিক আছে। এই প্রথম {city}-এ?","Answer, and say where you're from.","উত্তর দিন, কোথা থেকে এসেছেন বলুন।","Yes, it is. I'm from {home}, in India."],
 ["Oh, brilliant. I've always wanted to go to India. What should I see?","বাহ্‌। আমার বরাবর ভারত যাওয়ার শখ। কী দেখা উচিত?","Recommend something (You should…).","পরামর্শ দিন (You should…)।","You should visit Kolkata in winter — and you must try the sweets!"],
 ["Here we are. That's twelve pounds.","এসে গেছি। বারো পাউন্ড।","Ask to pay by card, and thank them.","কার্ডে দিতে চান বলুন, ধন্যবাদ দিন।","Can I pay by card? Thank you for the lovely chat."]]);
RP("At the museum desk","জাদুঘরের কাউন্টারে",2,"You're buying a ticket at a museum.","জাদুঘরে টিকিট কাটছেন।",[
 ["Hello, welcome. How many tickets?","স্বাগত। কটা টিকিট?","Ask for one ticket, and ask about a senior discount.","একটা টিকিট চান, বয়স্কদের ছাড় আছে কি না জিজ্ঞেস করুন।","One ticket, please. Is there a discount for seniors?"],
 ["Yes, over-sixties are half price. That's eight pounds.","হ্যাঁ, ষাটের বেশি বয়সীদের অর্ধেক দাম। আট পাউন্ড।","Pay, and ask what time it closes.","দাম দিন, কটায় বন্ধ হয় জিজ্ঞেস করুন।","Lovely. What time does the museum close?"],
 ["We close at half past five. There's a free tour at two o'clock.","সাড়ে পাঁচটায় বন্ধ। দুটোয় বিনামূল্যে ঘুরিয়ে দেখানো হয়।","Ask where the tour starts.","ঘুরিয়ে দেখানো কোথা থেকে শুরু জিজ্ঞেস করুন।","Where does the tour start, please?"],
 ["Just by the big staircase in the main hall.","বড় হলঘরের সিঁড়ির পাশে।","Ask where the toilets and the café are (Could you tell me…?).","বাথরুম আর ক্যাফে কোথায় জিজ্ঞেস করুন (Could you tell me…?)।","Could you tell me where the toilets and the café are?"],
 ["The café's downstairs, and the toilets are next to it.","ক্যাফে নিচতলায়, বাথরুম তার পাশেই।","Thank them.","ধন্যবাদ দিন।","Thank you very much!"]]);
RP("Returning a jumper","সোয়েটার ফেরত দেওয়া",2,"You bought a jumper, but it's too small.","একটা সোয়েটার কিনেছিলেন, ছোট হয়েছে।",[
 ["Hi, can I help you?","বলুন?","Say you'd like to return this jumper.","সোয়েটারটা ফেরত দিতে চান বলুন।","Yes, please. I'd like to return this jumper."],
 ["Is there anything wrong with it?","কোনো সমস্যা আছে?","Explain it's too small.","বলুন ছোট হয়েছে।","No, it's just too small for me."],
 ["Would you like a bigger size, or a refund?","বড় সাইজ নেবেন, না টাকা ফেরত?","Ask for a bigger size.","বড় সাইজ চান।","Could I have a bigger size, please?"],
 ["Let me check… Sorry, we don't have a bigger one in blue. Would red be OK?","দেখি… দুঃখিত, নীলে বড় নেই। লাল চলবে?","Politely say no, and ask for a refund instead.","ভদ্রভাবে না বলুন, টাকা ফেরত চান।","I'm afraid I don't really like red. Could I have a refund instead?"],
 ["Of course. Have you got the receipt?","অবশ্যই। রসিদটা আছে?","Give the receipt.","রসিদ দিন।","Yes, here it is."]],"Keep receipts! Most UK shops give refunds within 28 or 30 days with a receipt.");

lesson('rp-hard',0,'🎭',"Role-plays: hard","অভিনয় করে কথা: কঠিন");
RP("A long chat with your daughter's friend","মেয়ের বন্ধুর সাথে লম্বা আড্ডা",3,"Emma wants to know about your life. Give longer answers.","এমা আপনার জীবনের কথা জানতে চায়। লম্বা উত্তর দিন।",[
 ["So, what was life like when you were growing up?","ছোটবেলায় জীবন কেমন ছিল?","Describe your childhood (used to / would).","ছোটবেলার কথা বলুন (used to / would)।","I grew up in a small town. We used to play outside all day, and in the evening my grandmother would tell us stories."],
 ["That sounds lovely. How is it different now?","কী সুন্দর। এখন কী বদলেছে?","Compare then and now.","তখন আর এখনের তুলনা করুন।","Life is much faster now. Everyone is on their phones, but things are easier in many ways."],
 ["What do you think of the UK so far?","বিলেত কেমন লাগছে?","Give a balanced opinion (I like…, but…).","দুদিক মিলিয়ে মত দিন (I like…, but…)।","I think it's beautiful, and people are very polite — but the weather is too cold for me!"],
 ["Fair enough! Would you ever live here?","তা ঠিক! কখনো এখানে থাকবেন?","Answer with 'If I were…, I would…'.","'If I were…, I would…' দিয়ে উত্তর দিন।","If I were younger, I might! But I'd miss my friends and the food in India."],
 ["What are you going to do for the rest of your stay?","বাকি কদিন কী করবেন?","Talk about plans (going to / -ing / might).","পরিকল্পনার কথা বলুন (going to / -ing / might)।","We're going to Scotland next week, and I might take a cooking class."]]);
RP("A missed connection","পরের ফ্লাইট ধরতে না পারা",3,"Your first flight was late and you've missed the next one. Go to the transfer desk.","প্রথম ফ্লাইট দেরি করেছে, পরেরটা ছেড়ে গেছে। ট্রান্সফার ডেস্কে যান।",[
 ["Next, please. How can I help?","পরের জন। বলুন?","Explain what happened.","কী হয়েছে বুঝিয়ে বলুন।","My first flight was delayed, and I've missed my connecting flight to {city}."],
 ["I'm sorry to hear that. Can I see your boarding pass and passport?","শুনে খারাপ লাগল। বোর্ডিং পাস আর পাসপোর্ট দেখি?","Hand them over and ask what happens now.","দিন, আর এখন কী হবে জিজ্ঞেস করুন।","Here you are. What should I do now?"],
 ["I've booked you on the next flight. It leaves at six forty tomorrow morning.","পরের ফ্লাইটে টিকিট করে দিয়েছি। কাল সকাল ছটা চল্লিশে।","Ask where you will stay tonight.","আজ রাতে কোথায় থাকবেন জিজ্ঞেস করুন।","Tomorrow morning? Where will I stay tonight?"],
 ["The airline will give you a hotel room and a meal voucher.","এয়ারলাইন হোটেল আর খাবারের কুপন দেবে।","Ask them to write the details, and ask how to tell your family.","বিস্তারিত লিখে দিতে বলুন, আর পরিবারকে কীভাবে জানাবেন জিজ্ঞেস করুন।","Could you write down the flight details, please? And how can I let my family know?"],
 ["Of course. You can use the free Wi-Fi to call them.","অবশ্যই। বিনামূল্যের ওয়াই-ফাই দিয়ে ফোন করতে পারবেন।","Thank them, and check your suitcase will be moved too.","ধন্যবাদ দিন, আর সুটকেসও যাবে কি না জিজ্ঞেস করুন।","Thank you. Will my suitcase go on the new flight too?"]],"This is rare — but now you know exactly what to say. Airline staff deal with it every day.");
RP("A lost suitcase","সুটকেস হারানো",3,"Your suitcase didn't come out at baggage reclaim.","ব্যাগেজ রিক্লেমে আপনার সুটকেস আসেনি।",[
 ["Hello, how can I help?","বলুন?","Explain that your suitcase hasn't arrived.","বলুন সুটকেস আসেনি।","Hello. I've just arrived from Delhi, and my suitcase hasn't come out."],
 ["I'm sorry. Can you describe it for me?","দুঃখিত। কেমন দেখতে বলবেন?","Describe it: size, colour, anything special.","বর্ণনা দিন: মাপ, রং, বিশেষ চিহ্ন।","It's a big black suitcase with a red ribbon on the handle."],
 ["Thank you. Was there anything valuable in it?","দামি কিছু ছিল?","Say what's inside.","ভেতরে কী আছে বলুন।","Mostly clothes and some presents. My important medicines are in my handbag."],
 ["We'll deliver it when it arrives. What's the address where you're staying?","এলে পৌঁছে দেব। কোথায় থাকছেন?","Give the address and a phone number.","ঠিকানা আর ফোন নম্বর দিন।","I'm staying with {who} at 14 Elm Road, {city}. Here is the phone number."],
 ["Here's your reference number. Bags usually arrive within two days.","এই নিন রেফারেন্স নম্বর। সাধারণত দু-দিনের মধ্যে চলে আসে।","Check you understood, and ask what to do if you need things tonight.","মিলিয়ে নিন, আর আজ রাতে জিনিস লাগলে কী করবেন জিজ্ঞেস করুন।","Within two days? And if I need some things tonight, can I buy them and get the money back?"]],"Tip for the real trip: always keep medicines and one change of clothes in your hand luggage.");
RP("Saying no to an invitation, kindly","ভদ্রভাবে নিমন্ত্রণে না বলা",3,"A neighbour invites you to a barbecue, but you're busy.","প্রতিবেশী বারবিকিউতে ডাকছেন, কিন্তু আপনি ব্যস্ত।",[
 ["We're having a barbecue on Saturday — would you like to come?","শনিবার বারবিকিউ করছি — আসবেন?","Thank them, but say you can't, and why (I'm afraid… because…).","ধন্যবাদ দিন, কিন্তু আসতে পারবেন না, কেন বলুন।","Thank you so much for inviting me. I'm afraid I can't come on Saturday, because we're visiting friends."],
 ["Oh, what a shame! Maybe another time?","ইশ্‌! অন্য একদিন?","Suggest another day (How about…? / Why don't we…?).","অন্য দিনের প্রস্তাব দিন (How about…?)।","Yes, definitely. How about having tea at our house next week?"],
 ["That would be lovely. Which day suits you?","খুব ভালো হবে। কোন দিন সুবিধা?","Suggest a day and time.","দিন আর সময় বলুন।","Would Wednesday afternoon be OK? About three o'clock?"],
 ["Perfect. Can I bring anything?","দারুণ। কিছু নিয়ে আসব?","Answer kindly.","আন্তরিকভাবে উত্তর দিন।","Just yourself! I'll make some Bengali snacks."]]);
RP("At the doctor's","ডাক্তারের চেম্বারে",3,"You're seeing a doctor about a cough.","কাশির জন্য ডাক্তার দেখাচ্ছেন।",[
 ["Hello, come in, take a seat. What seems to be the problem?","আসুন, বসুন। সমস্যাটা কী?","Describe the problem, and since when (for / since).","সমস্যা বলুন, কবে থেকে (for / since)।","I've had a bad cough since Monday, and I feel very tired."],
 ["I see. Have you had a temperature?","জ্বর এসেছিল?","Answer (I had… / I haven't had…).","উত্তর দিন।","I had a small temperature on Tuesday, but it's gone now."],
 ["Are you taking any regular medicines?","নিয়মিত কোনো ওষুধ খান?","Say yes, and give your list.","হ্যাঁ বলুন, তালিকা দিন।","Yes, I take some tablets every day. Here is a list of everything I take."],
 ["OK. I'm going to give you some tablets — take one three times a day for five days.","ঠিক আছে। কিছু ট্যাবলেট দিচ্ছি — দিনে তিনবার একটা করে, পাঁচ দিন।","Repeat the instructions back, and ask one question.","নির্দেশটা আবার বলে মিলিয়ে নিন, একটা প্রশ্ন করুন।","So, one tablet three times a day, for five days. Should I take them with food?"],
 ["Yes, with food is best. Come back if you're not better in a week.","হ্যাঁ, খাওয়ার পরে ভালো। এক সপ্তাহে না সারলে আবার আসবেন।","Thank the doctor.","ডাক্তারকে ধন্যবাদ দিন।","Thank you, doctor. That's very clear."]]);
RP("Telling a funny story","একটা মজার গল্প বলা",3,"New friends ask about your journey to the UK. Tell it as a story.","নতুন বন্ধুরা যাত্রার গল্প শুনতে চায়। গল্পের মতো বলুন।",[
 ["Your daughter says you've got a funny story about your journey here!","আপনার মেয়ে বলছিল যাত্রার একটা মজার গল্প আছে!","Start the story (When I…, I was…).","গল্প শুরু করুন (When I…, I was…)।","Oh yes! When I landed at the airport, I was very nervous, because my English wasn't very good."],
 ["Oh no! What happened?","ইশ্‌! তারপর?","Continue (I was … when …).","চালিয়ে যান (I was … when …)।","I was waiting for my suitcase when a man started talking to me very fast."],
 ["And did you understand him?","বুঝতে পারলেন?","Say what you did.","কী করলেন বলুন।","Not at first! So I said, 'Sorry, could you speak more slowly?' and he smiled."],
 ["So what did he want?","তা কী চাইছিলেন উনি?","Finish with a funny ending (Finally…).","মজার শেষ দিন (Finally…)।","He wanted to tell me I was at the wrong belt! Finally, I found my suitcase, and we both laughed."],
 ["That's brilliant! Your English is really good now.","দারুণ! আপনার ইংরেজি এখন খুব ভালো।","Accept the compliment, and say how you improved.","প্রশংসা গ্রহণ করুন, কীভাবে উন্নতি করলেন বলুন।","Thank you! I've been practising every day, and I'm getting more confident."]]);
