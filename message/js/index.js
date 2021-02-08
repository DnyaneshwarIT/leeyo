this.$dom = {};
this.$dom.animatedText = document.createElement('div');
this.text = "__________Date 08/08/2018 wednesday  time ⌚ appropriate morning 10:45AM ya diwasi mi tula fist time pahil hot. tevhas tu mla aavadali hoti tevha mla tuz name ani tu kontya branch madhe ahe te pn mahit navhat Because tevha mi Computer 💻 bramch madhe hoto And then,Date 28/08/2018 ya diwasi mazha CAP through IT branch milali tevha mi fist time IT-SE class madhe Enter zhalo tevha I think 🤔 AEC lecture chalu hot tevha mi tula second time fist banch var pahil ani tuz name mla mahit navhat tevha pasun mi tuz nav  SIRI theval hot; and them mi tula pahat gelo pahat gelo pahat gelo but kadhihi bolnyachi himmat zali nhi pan mla to diwas aadhvato Thursday 7 8 2019 tevha tumch COA practical chalu hot tevha tu fist time mazhasi bolalli hoti ani mi fakt ho ho mhanalo hoto ani tyacha char pach diwasani  tu mla fist time whats app massage kela tyat tu mla birthday 🎂 wish kela hota Date 28-9-2019 time ⌚ mornig 8:30 AM tevha Fresher-Party ch decorations chalu hot tevha tu black t-shirt ani tuzhe tuzhe ole ole kes tevha tu mla khup aavadali hoti ani mi tya diwasi tula propose karnar hoto pn purn diwas bhar tushar tumcha sobat hota 10-12 2019 ya diwasi mi tula whats app la approximately 10 vela message type kela asel ani pusla asel tri pan unfortunately tula ha 💗 send zhala hota ani tyavar tuzha asa 'What this🤨' reply ala hota ani tyacha dusarya diwasi CLE cha semister cha papaer hota pn mi purna diwas bhar tuzha ch vichar kart hota ani CLE madhe fail zhalo tevha pasun mi tuzhasi bolan khupas kami kel because i think ki tu mala reject karsil mhanun mi kittek vela reply dila nhi";
this.$dom.container = document.getElementById('container');
this.$dom.container.appendChild(this.$dom.animatedText);
animateText();
function animateText(){
	var arrayOfLetters = this.text.split("");
	var animatedSpan = [];
	arrayOfLetters.forEach(function(item){
		var span = document.createElement('span');
		span.innerHTML = item;
		animatedSpan.push(span);
		span.style.opacity = 0;
		span.style.color = 'white';
		this.$dom.animatedText.appendChild(span);
	});
	TweenMax.staggerTo(animatedSpan, .2,{
		opacity : 1,
		delay : 2
	},0.05);
}
