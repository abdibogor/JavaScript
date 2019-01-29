// Important Points
// #1: Using basic concepts of programming we can program 
// #2: There's always many, many way to solve a problem
// #3: Solving problem in CS takes creativity

// Takes input form input type=text
// @param textField HTML Element Where input is being taken from

function takeInput(textField) {
	//var question = textField.value;
	// e.which == 13 -> ENTER

	if (e.which != 13){
		return false;
	}

	var question = this.value;
	appendOutput("<p><b class='us'>Human &raquo;</b>" + question + "</p>", out);
	appendOutput("<p><b class='hal'>HAL &raquo;</b>" + processInput(question) + "</p>", out);
	appendOutput("<hr/>", out);

	this.focus();
	this.select();

	out.scrollByLines(100);

}

// Process input
function processInput(question){
	var answer = "I'm sorry dave, I'm afraid I can't do that...";
	
	// #1 lots of conditionals
	/*
	if(question.toUpperCase() == "Hello") {
		answser ="Hi!";
		if (question.toUpperCase() ==  "WHO ARE YOU")
			answer = "My name is HAL 9000";
		else if (question.toUpperCase() ==  "WHO ARE YOU FROM")
			answer = "My name is HAL 9000";
		else if (question.toUpperCase() ==  "WILL YOU MARRY ME")
			answer = "My name is HAL 9000";
		else if (question.toUpperCase() ==  "WHAT TIME IS IT")
			var date = new Date();
			//answer = date.getTime();
			//answer = date.getFullYear();
			//answer = date.getFullTime();
			answer = "It's " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
	}
*/

	// #2 using a dictionary
	if (dictionary[question.toUpperCase()]){
		// Math.random() * X
		var randKey = parseInt(Math.random() * dictionary[question.toUpperCase()].length);
	answer = dictionary[question.toUpperCase()][randKey];
}

	return answer;
}

// Displays output
// @param message string Message to be displayed
// @param dest HTML Element Where message is to be displayed
/*
function displayOutput(message, dest){
		dest.innerHTML = message;
}
*/

function appendOutput(message, dest){
	dest.innerHTML += message;
}

// Init code
var input = document.getElementById("inText");
input.onkeyup = takeInput;

var out = document.getElementById("dialog");

input.focus();