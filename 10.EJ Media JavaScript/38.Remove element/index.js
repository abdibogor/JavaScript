function newParagraph() {

	// this creates a heading.
	var elementH = document.createElement("h2");
	var main = document.getElementById("main");
	main.appendChild(elementH);
	var textH = document.createTextNode("The Battle of salamis");
	elementH.appendChild(textH);

//This creates a paragraph
 
var element = document.createElement("p");
 
main.appendChild(element);
 
var text = document.createTextNode("The Battle of Salamis was fought between an alliance of Greek cities and the Persian Empire in 480 BC.  The Greeks decisively defeated the Persian navy.");
 
element.appendChild(text);

  }

  function removeHeader() 
  {
  		var elementH = document.getElementsByTagName("h2")[2];
  		var parent = elementH.parentNode;
  	    parent.removeChild(elementH);

  	    var elementH = document.getElementsByTagName("p")[4];
  	    parent.removeChild(elementP);
  }