function newParagraph() {
 
var element = document.createElement("p");
 
var main = document.getElementById("main");
 
main.appendChild(element);
 
var text = document.createTextNode("The Battle of Salamis was fought between an alliance of Greek cities and the Persian Empire in 480 BC.  The Greeks decisively defeated the Persian navy.");
 
element.appendChild(text);

}