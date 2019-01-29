function updateItemStatus() {
	/*
	var me = this;
	//console.log(me);
	*/
	//var cbId = this.id;
	var cbId = this.id.replace("cb_", "");
	//alert(cbId);
	var itemText = document.getElementById("item_" + cbId);

		if (this.checked) {
			itemText.className = "checked";
		} else {
			itemText.style.fontWeight = "";
	}
}

function renameItem() {
	 var newText = prompt("What should this item be renamed to?");
	 if (newText == "" || itemText == "") {
	 	return false;
	 }
	 this.innerText = newText;
}

function removeItem() {
    var spanId = this.id.replace("item_", "");
    document.getElementById("li_" + spanId).style.display = "none";
}

function addNewItem(list, itemText) {

	  //var id = Math.random();
	  var date = new Date();
	  var id = "" + date.getHours() + Date.getMinutes() + date.getSeconds() + date.getMinutes();

	  var id = Date();
	  var listItem = document.createElement("li");
	  listItem.id = "li_" + id;
	  listItem.ondbclick = removeItem;
	  
	  var checkBox = document.createElement("input");
	  checkBox.type = "checkBox";
	  checkBox.id = "cb_" + id;
	  checkBox.onclick = updateItemStatus;

	  var span = document.createElement("span");
	  span.id = "item_" + id;
	  span.innerText = itemText;
	  span.onclick = renameItem;
	  span.ondbclick = removeItem;

	  listItem.appendChild(checkBox);
	  listItem.appendChild(span);

	  list.appendChild(listItem);

}

var totalItems = 0;
var inItemText = document.getElementById("inItemText");
	inItemText.focus();
	inItemText.onkeyup = function(event) {

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


