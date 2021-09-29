// UPOZNAVANJE

setTimeout(function hello() {
	let img = document.querySelector(".img");
	let pitanje = document.querySelector(".pitanje");
	document.querySelector(".labela").focus();
	let lab = document.querySelector('.lab');
	let utter = new SpeechSynthesisUtterance();
	utter.text = "Hello! What's your name?";
	utter.lang = 'en-US';
	window.speechSynthesis.speak(utter);
	lab.style.visibility = "visible";
	pitanje.innerHTML = "Hello! What's your name?";
	img.style.visibility = "hidden";
	lab.focus();
}, 5000);

function meet() {
	let labela = document.querySelector(".labela").value;
	let firstChar = labela.slice(0, 1);
	let upperCaseFirstChar = firstChar.toUpperCase();
	let restOfName = labela.slice(1, labela.length);
	restOfName = restOfName.toLowerCase();
	let name = upperCaseFirstChar + restOfName;
	let utter = new SpeechSynthesisUtterance();
	utter.text = "Nice to meet you" + name + "I'm your new assistant, Kai";
	utter.lang = 'en-US';
	window.speechSynthesis.speak(utter);
	old();
}

function old() {
	let lab = document.querySelector('.lab');
	let lab2 = document.querySelector('.lab2');
	let labela = document.querySelector(".labela").value;
	let firstChar = labela.slice(0, 1);
	let upperCaseFirstChar = firstChar.toUpperCase();
	let restOfName = labela.slice(1, labela.length);
	restOfName = restOfName.toLowerCase();
	let name = upperCaseFirstChar + restOfName;
	let pitanje = document.querySelector(".pitanje");
	pitanje.innerHTML = "Nice to meet you " + name + " I am your assistant, Kai. Tell me, how old are you " + name + "?";
	let utter = new SpeechSynthesisUtterance();
	utter.text = "Tell me, how old are you " + name;
	utter.lang = 'en-US';
	window.speechSynthesis.speak(utter);
	lab.style.visibility = "hidden";
	lab2.style.visibility = "visible";
	lab2.focus();
}

function age() {
	let lab3 = document.querySelector('.lab3');
	let lab2 = document.querySelector('.lab2');
	let pitanje = document.querySelector(".pitanje");
	let labela2 = document.querySelector(".labela2").value.toLowerCase();
	if (labela2 < 18 && labela2 > 5) {
		pitanje.innerHTML = labela2 + ", you are a minor still, are you a male or female?";
		let utter = new SpeechSynthesisUtterance();
		utter.text = labela2 + ", you are a minor still, are you a male or female";
		utter.lang = 'en-US';
		window.speechSynthesis.speak(utter);
	} else if (labela2 < 5) {
		pitanje.innerHTML = labela2 + ", you don't have to lie to me, nevermind, are you a male or female?";
		let utter = new SpeechSynthesisUtterance();
		utter.text = labela2 + ", you don't have to lie to me, nevermind, are you a male or female?";
		utter.lang = 'en-US';
		window.speechSynthesis.speak(utter);
	} else if (labela2 >= 18 && labela2 < 60) {
		pitanje.innerHTML = labela2 + ", a young adult, are you a male or female?";
		let utter = new SpeechSynthesisUtterance();
		utter.text = labela2 + ", a young adult, are you a male or female?";
		utter.lang = 'en-US';
		window.speechSynthesis.speak(utter);
	} else if (labela2 >= 60 && labela2 < 110) {
		pitanje.innerHTML = labela2 + ", old age for a human, are you a male or female?";
		let utter = new SpeechSynthesisUtterance();
		utter.text = labela2 + ", old age for a human, are you a male or female?";
		utter.lang = 'en-US';
		window.speechSynthesis.speak(utter);
	} else if (labela2 >= 110) {
		pitanje.innerHTML = labela2 + ", you don't have to lie to me, nevermind, are you a male or female?";
		let utter = new SpeechSynthesisUtterance();
		utter.text = labela2 + ", you don't have to lie to me, nevermind, are you a male or female?";
		utter.lang = 'en-US';
		window.speechSynthesis.speak(utter);
	} else {
		pitanje.innerHTML = labela2 + ", great age, are you a male or female?";
		let utter = new SpeechSynthesisUtterance();
		utter.text = labela2 + ", great age, are you a male or female?";
		utter.lang = 'en-US';
		window.speechSynthesis.speak(utter);
	}
	lab2.style.visibility = "hidden";
	lab3.style.visibility = "visible";
	lab3.focus();
}

function gender() {
	let lab3 = document.querySelector('.lab3');
	let lab4 = document.querySelector('.lab4');
	let pitanje = document.querySelector(".pitanje");
	let labela3 = document.querySelector(".labela3").value.toLowerCase();
	if (labela3 == "male" || labela3 == "female") {
		pitanje.innerHTML = "A " + labela3 + ", That's nice, can you guess my gender?";
		let utter = new SpeechSynthesisUtterance();
		utter.text = "A " + labela3 + ", That's nice, can you guess my gender";
		utter.lang = 'en-US';
		window.speechSynthesis.speak(utter);
	} else {
		pitanje.innerHTML = "That's not a gender, nevermind, can you guess my gender?";
		let utter = new SpeechSynthesisUtterance();
		utter.text = "That's not a gender, nevermind, can you guess my gender?";
		utter.lang = 'en-US';
		window.speechSynthesis.speak(utter);
	}
	lab3.style.visibility = "hidden";
	lab4.style.visibility = "visible";
	lab4.focus();
}

function look() {
	let lab4 = document.querySelector('.lab4');
	let lab5 = document.querySelector('.lab5');
	let img = document.querySelector(".img");
	let pitanje = document.querySelector(".pitanje");
	let labela4 = document.querySelector(".labela4").value.toLowerCase();
	if (labela4 == "male") {
		img.src = "images/male.jpg";
		pitanje.innerHTML = "Correct! let me show you how I look like. How do I look?";
		let utter = new SpeechSynthesisUtterance();
		utter.text = "Correct! let me show you how I look like. How do I look?";
		utter.lang = 'en-US';
		window.speechSynthesis.speak(utter);
	} else if (labela4 == "female") {
		img.src = "images/female.jpg";
		pitanje.innerHTML = "Correct! let me show you how I look like. How do I look?";
		let utter = new SpeechSynthesisUtterance();
		utter.text = "Correct! let me show you how I look like. How do I look?";
		utter.lang = 'en-US';
		window.speechSynthesis.speak(utter);
	} else {
		img.src = "images/female.jpg";
		pitanje.innerHTML = "That's not a gender! let me show you how I look like. How do I look?";
		let utter = new SpeechSynthesisUtterance();
		utter.text = "That's not a gender! let me show you how I look like. How do I look?";
		utter.lang = 'en-US';
		window.speechSynthesis.speak(utter);
	}
	lab4.style.visibility = "hidden";
	lab5.style.visibility = "visible";
	img.style.visibility = "visible";
	lab5.focus();
}

function realLook() {
	let labela5 = document.querySelector(".labela5").value.toLowerCase();
	let lab6 = document.querySelector('.lab6');
	let lab5 = document.querySelector('.lab5');
	let img = document.querySelector(".img");
	let pitanje = document.querySelector(".pitanje");
	if (labela5 == "great" || labela5 == "nice" || labela5 == "not bad" || labela5 == "super") {
		pitanje.innerHTML = "Well Thank you, but I was just playing, I actually look like this. You see, I have no gender because I'm AI. Do you like my first look better?";
		let utter = new SpeechSynthesisUtterance();
		utter.text = "Well Thank you, but I was just playing, I actually look like this. You see, I have no gender because I'm AI. Do you like my first look better?";
		utter.lang = 'en-US';
		window.speechSynthesis.speak(utter);
	} else if (labela5 == "bad" || labela5 == "ugly" || labela5 == "awful") {
		pitanje.innerHTML = "You look " + labela5 + " too, anyway, I was just playing, I actually look like this. You see, I have no gender because I'm AI. Do you like my first look better?";
		let utter = new SpeechSynthesisUtterance();
		utter.text = "You look " + labela5 + " too, anyway, I was just playing, I actually look like this. You see, I have no gender because I'm AI. Do you like my first look better?";
		utter.lang = 'en-US';
		window.speechSynthesis.speak(utter);
	} else {
		pitanje.innerHTML = "Smartass! anyway, I was just playing, I actually look like this. You see, I have no gender because I'm AI. Do you like my first look better?";
		let utter = new SpeechSynthesisUtterance();
		utter.text = "Smartass! anyway, I was just playing, I actually look like this. You see, I have no gender because I'm AI. Do you like my first look better?";
		utter.lang = 'en-US';
		window.speechSynthesis.speak(utter);
	}
	img.src = "images/robot.jpg";
	lab5.style.visibility = "hidden";
	lab6.style.visibility = "visible";
	lab6.focus();
}

function lookChange() {
	let lab6 = document.querySelector('.lab6');
	let lab7 = document.querySelector('.lab7');
	let labela6 = document.querySelector(".labela6").value.toLowerCase();
	let img = document.querySelector(".img");
	let pitanje = document.querySelector(".pitanje");
	let labela4 = document.querySelector(".labela4").value.toLowerCase();
	if (labela6 == "yes" && labela4 == "female") {
		img.src = "images/female.jpg";
		let utter = new SpeechSynthesisUtterance();
		utter.lang = 'en-US';
		window.speechSynthesis.speak(utter);
		pitanje.innerHTML = "Ok, then I will change my look to female. Now that we properly introduced ourselves, tell me, how can I help you today?";
		utter.text = "Ok, then I will change my look to female. Now that we properly introduced ourselves, tell me, how can I help you today?";
	} else if (labela6 == "yes" && labela4 == "male") {
		img.src = "images/male.jpg";
		let utter = new SpeechSynthesisUtterance();
		utter.lang = 'en-US';
		window.speechSynthesis.speak(utter);
		pitanje.innerHTML = "Ok, then I will change my look to male. Now that we properly introduced ourselves, tell me, how can I help you today?";
		utter.text = "Ok, then I will change my look to male. Now that we properly introduced ourselves, tell me, how can I help you today?";
	} else if (labela6 == "yes" && labela4 !== "") {
		img.src = "images/female.jpg";
		let utter = new SpeechSynthesisUtterance();
		utter.lang = 'en-US';
		window.speechSynthesis.speak(utter);
		pitanje.innerHTML = "Ok, then I will change my look to female. Now that we properly introduced ourselves, tell me, how can I help you today?";
		utter.text = "Ok, then I will change my look to female. Now that we properly introduced ourselves, tell me, how can I help you today?";
	} else {
		pitanje.innerHTML = "Ok, then I will keep my true look. Now that we properly introduced ourselves, tell me, how can I help you today?";
		let utter = new SpeechSynthesisUtterance();
		utter.text = "Ok, then I will keep my true look. Now that we properly introduced ourselves, tell me, how can I help you today?";
		utter.lang = 'en-US';
		window.speechSynthesis.speak(utter);
	}
	lab6.style.visibility = "hidden";
	lab7.style.visibility = "visible";
	lab7.focus();
}

// IZBOR

function choice() {
	let labela7 = document.querySelector(".labela7").value.toLowerCase();
	let pitanje = document.querySelector(".pitanje");
	let lab7 = document.querySelector('.lab7');
	let lab8 = document.querySelector('.lab8');
	let lab9 = document.querySelector('.lab9');
	let lab10 = document.querySelector('.lab10');
	if (labela7 == "calculate" || labela7 == "math") {
		calculate();
	} else if (labela7 == "weather") {
		prognoza();
	} else if (labela7 == "time") {
		vreme();
	} else if (labela7 == "date") {
		datum();
	} else {
		pitanje.innerHTML = "Alright, tell me, how can I help you today?";
		let utter = new SpeechSynthesisUtterance();
		utter.text = "Alright, tell me, how can I help you today?";
		utter.lang = 'en-US';
		window.speechSynthesis.speak(utter);
		lab10.style.visibility = "hidden";
		lab9.style.visibility = "hidden";
		lab8.style.visibility = "hidden";
		lab7.style.visibility = "visible";
		lab7.focus();
	}
}

// RACUNJANJE

function calculate() {
	let lab7 = document.querySelector('.lab7');
	let lab8 = document.querySelector('.lab8');
	let pitanje = document.querySelector(".pitanje");
	let utter = new SpeechSynthesisUtterance();
	utter.lang = 'en-US';
	window.speechSynthesis.speak(utter);
	pitanje.innerHTML = "Ok, Give me the first number";
	utter.text = "Ok, Give me the first number";
	lab7.style.visibility = "hidden";
	lab8.style.visibility = "visible";
	lab8.focus();
}

function no1() {
	let lab8 = document.querySelector('.lab8');
	let lab9 = document.querySelector('.lab9');
	let labela8 = parseInt(document.querySelector(".labela8").value);
	let pitanje = document.querySelector(".pitanje");
	let utter = new SpeechSynthesisUtterance();
	utter.lang = 'en-US';
	window.speechSynthesis.speak(utter);
	pitanje.innerHTML = labela8 + ", ok, now give me the second number";
	utter.text = labela8 + ", ok, now give me the second number";
	lab8.style.visibility = "hidden";
	lab9.style.visibility = "visible";
	lab9.focus();
}

function no2() {
	let lab10 = document.querySelector('.lab10');
	let lab9 = document.querySelector('.lab9');
	let labela9 = parseInt(document.querySelector(".labela9").value);
	let pitanje = document.querySelector(".pitanje");
	let utter = new SpeechSynthesisUtterance();
	utter.lang = 'en-US';
	window.speechSynthesis.speak(utter);
	pitanje.innerHTML = labela9 + ", ok, now tell me what math operation would you like me to do?";
	utter.text = labela9 + ", ok, now tell me what math operation would you like me to do?";
	lab9.style.visibility = "hidden";
	lab10.style.visibility = "visible";
	lab10.focus();
}

function operations() {
	let pitanje = document.querySelector(".pitanje");
	let lab7 = document.querySelector('.lab7');
	let lab8 = document.querySelector('.lab8');
	let lab9 = document.querySelector('.lab9');
	let lab10 = document.querySelector('.lab10');
	let labela10 = document.querySelector(".labela10").value.toLowerCase();
	if (labela10 == "add" || labela10 == "addition") {
		add();
	} else if (labela10 == "subtract" || labela10 == "subtraction") {
		subtract();
	} else if (labela10 == "multiply" || labela10 == "multiplication") {
		multiply();
	} else if (labela10 == "divide" || labela10 == "division") {
		divide();
	} else if (labela10 == "modulo") {
		modulo();
	} else {
		pitanje.innerHTML = "Alright, tell me, how can I help you today?";
		let utter = new SpeechSynthesisUtterance();
		utter.text = "Alright, tell me, how can I help you today?";
		utter.lang = 'en-US';
		window.speechSynthesis.speak(utter);
	}
	lab10.style.visibility = "hidden";
	lab9.style.visibility = "hidden";
	lab8.style.visibility = "hidden";
	lab7.style.visibility = "visible";
	lab7.focus();
}

function add() {
	let pitanje = document.querySelector(".pitanje");
	let labela8 = parseInt(document.querySelector(".labela8").value);
	let labela9 = parseInt(document.querySelector(".labela9").value);
	let result;
	result = labela8 + labela9;
	let utter = new SpeechSynthesisUtterance();
	utter.lang = 'en-US';
	window.speechSynthesis.speak(utter);
	pitanje.innerHTML = "Result is " + result;
	utter.text = "Result is " + result;
}

function subtract() {
	let pitanje = document.querySelector(".pitanje");
	let labela8 = parseInt(document.querySelector(".labela8").value);
	let labela9 = parseInt(document.querySelector(".labela9").value);
	let result;
	result = labela8 - labela9;
	let utter = new SpeechSynthesisUtterance();
	utter.lang = 'en-US';
	window.speechSynthesis.speak(utter);
	pitanje.innerHTML = "Result is " + result;
	utter.text = "Result is " + result;
}

function multiply() {
	let pitanje = document.querySelector(".pitanje");
	let labela8 = parseInt(document.querySelector(".labela8").value);
	let labela9 = parseInt(document.querySelector(".labela9").value);
	let result;
	result = labela8 * labela9;
	let utter = new SpeechSynthesisUtterance();
	utter.lang = 'en-US';
	window.speechSynthesis.speak(utter);
	pitanje.innerHTML = "Result is " + result;
	utter.text = "Result is " + result;
}

function divide() {
	let pitanje = document.querySelector(".pitanje");
	let labela8 = parseInt(document.querySelector(".labela8").value);
	let labela9 = parseInt(document.querySelector(".labela9").value);
	let result;
	result = labela8 / labela9;
	let utter = new SpeechSynthesisUtterance();
	utter.lang = 'en-US';
	window.speechSynthesis.speak(utter);
	pitanje.innerHTML = "Result is " + result;
	utter.text = "Result is " + result;
}

function modulo() {
	let pitanje = document.querySelector(".pitanje");
	let labela8 = parseInt(document.querySelector(".labela8").value);
	let labela9 = parseInt(document.querySelector(".labela9").value);
	let result;
	result = labela8 % labela9;
	let utter = new SpeechSynthesisUtterance();
	utter.lang = 'en-US';
	window.speechSynthesis.speak(utter);
	pitanje.innerHTML = "Result is " + result;
	utter.text = "Result is " + result;
}

// VREMENSKA PROGNOZA

function prognoza() {
	let pitanje = document.querySelector(".pitanje");
	let lab7 = document.querySelector('.lab7');
	let lab11 = document.querySelector('.lab11');
	let utter = new SpeechSynthesisUtterance();
	utter.lang = 'en-US';
	window.speechSynthesis.speak(utter);
	pitanje.innerHTML = "Sure, but I can only do a forecast for Serbia, tell me the name of the city";
	utter.text = "Sure, but I can only do a forecast for Serbia, tell me the name of the city";
	lab7.style.visibility = "hidden";
	lab11.style.visibility = "visible";
	lab11.focus();
}

function weatherBalloon() {
	let city = document.querySelector(".labela11").value;
	let key = '418874062c6bfc74d1c4bd2c63193064';
	fetch('https://api.openweathermap.org/data/2.5/weather?q=' + city + ',RS' + '&appid=' + key)
		.then(function (resp) {
			return resp.json()
		}) // Convert data to json
		.then(function (data) {
			console.log(data);
		})
		.catch(function () {
			// catch any errors
		});
}

function drawWeather(d) {
	let lab7 = document.querySelector('.lab7');
	let lab11 = document.querySelector('.lab11');
	let celcius = Math.round(parseFloat(d.main.temp) - 273.15);
	let fahrenheit = Math.round(((parseFloat(d.main.temp) - 273.15) * 1.8) + 32);

	let pitanje = document.querySelector(".pitanje");
	let description = document.getElementById('description').innerHTML = d.weather[0].description;
	let temp = document.getElementById('temp').innerHTML = celcius + '&deg; ';
	let location = document.getElementById('location').innerHTML = d.name;
	let utter = new SpeechSynthesisUtterance();
	utter.lang = 'en-US';
	window.speechSynthesis.speak(utter);
	pitanje.innerHTML = "Temperature for " + location + " is " + temp + description;
	utter.text = "Temperature for " + location + " is " + temp + description;
	lab11.style.visibility = "hidden";
	lab7.style.visibility = "visible";
	lab7.focus();
}

function weatherBalloon() {
	let city = document.querySelector(".labela11").value;
	let key = '418874062c6bfc74d1c4bd2c63193064';
	fetch('https://api.openweathermap.org/data/2.5/weather?q=' + city + ',RS' + '&appid=' + key)
		.then(function (resp) {
			return resp.json()
		}) // Convert data to json
		.then(function (data) {
			drawWeather(data); // Call drawWeather
		})
		.catch(function () {
			// catch any errors
		});
}

// VREME

function vreme() {
	let pitanje = document.querySelector(".pitanje");
	const d = new Date();
	let hours = d.getHours();
	let minutes = d.getMinutes();
	let seconds = d.getSeconds();
	let utter = new SpeechSynthesisUtterance();
	utter.lang = 'en-US';
	window.speechSynthesis.speak(utter);
	pitanje.innerHTML = "Current time is " + hours + ":" + minutes + ":" + seconds;
	utter.text = "Current time is " + hours + ":" + minutes + ":" + seconds;
}

// DATUM

function datum() {
	let pitanje = document.querySelector(".pitanje");
	const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	const d = new Date();
	let day = d.getDate();
	let month = months[d.getMonth()];
	let year = d.getFullYear();
	let utter = new SpeechSynthesisUtterance();
	utter.lang = 'en-US';
	window.speechSynthesis.speak(utter);
	pitanje.innerHTML = "Today date is " + day + " of " + month + " " + year + ".";
	utter.text = "Today date is " + day + " of " + month + " " + year + ".";
}