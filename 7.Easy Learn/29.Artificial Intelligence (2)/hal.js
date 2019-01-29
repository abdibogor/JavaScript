// Important Points
// #1: Using basic concepts of programming we can program 
// #2: There's always many, many way to solve a problem

// Takes input form input type=text
// @param textField HTML Element Where input is being taken from
function takeInput(textField) {
	//var question = textField.value;
	// e.which == 13 -> ENTER

	if (e.which != 13){
		return false;
	}

	var question = this.value;
	appendOutput("<p><b>Human &raquo;</b>" + question + "</p>", out);
	appendOutput("<p><b>HAL &raquo;</b>" + processInput(question) + "</p>", out);
	appendOutput("<hr/>", out);

	this.focus();
	this.select();
}

// Process input
function processInput(question){
	var answer = "I don't know";
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