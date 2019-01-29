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

function addNewItem(list) {
	  var listItem = document.createElement("li");
	  listItem.innerText = "Hello";
	  
	  list.appendChild(listItem);	  
}


var btnNew = document.getElementById("btnAdd");
btnNew.onclick = function(){
	   addNewItem(document.getElementById("todoList"));
	   addNewItem(document.getElementById("List2"));
	};


