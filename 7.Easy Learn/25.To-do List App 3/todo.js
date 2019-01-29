//alert("todo.js");
// <li><input type="checkbox" /> <span>Write this tutorial</span></li>
// Lessons learned
// Avoid global variables
// Strive to make functions reusable

/*
var btnNew = document.getElementById("btnAdd");
btnNew.onclick = function() {
	  alert("Too: Add new item");
	};
*/
/*
function addNewItem() {
	  var listItem = document.createElement("li");
	  listItem.innerText = "Hello";
	  
	  var list = document.getElementById("todoList");
	  list.appendChild(listItem);
	  
}
var btnNew = document.getElementById("btnAdd");
btnNew.onclick = addNewItem;
*/

function addNewItem(list, itemText) {
	  var listItem = document.createElement("li");
	  listItem.innerText = itemText;
	  
	  list.appendChild(listItem);	  
}

var inItemText = document.getElementById("inItemText");
	inItemText.focus();
	inItemText.onkeyup = function(event) {

//var btnNew = document.getElementById("btnAdd");
//btnNew.onclick = function(){
	//var itemText = prompt("What should we name this item?");
	
	//var itemText = event.which;
	// Only proceded 
	if (event.which == 13) {
		var itemText = inItemText.value;
	
	if (!itemText || itemText == "" || itemText == " ") {
		return false;
	}
	
	   addNewItem(document.getElementById("todoList"), itemText);
       inItemText.focus();
	   inItemText.select();
  }
};


