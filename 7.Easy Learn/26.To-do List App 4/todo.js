function updateItemStatus() {
	/*
	var me = this;
	//console.log(me);
	*/
	//var cbId = this.id;
	var cbId = this.id.replace("cb_", "");
	//alert(cbId);
	var itemText = document.getElementById("item_" + cbId);

	//itemText.innerText = "CLICKED";
	//console.log(itemText.checked);
	//console.log(this.checked);
/*
	if (this.checked){
			itemText.style.textDecoration = "line-through";
			itemText.style.color = "#c00";
			itemText.style.fontWeight = "800";
	} else {
		itemText.style.textDecoration = "none";
		itemText.style.color = "#c00";
	    iTemText.style.fontWeight = "400";
	}
}
*/
		if (this.checked) {
			itemText.className = "checked";
		} else {
			itemText.style.fontWeight = "";
	}
}

function addNewItem(list, itemText) {
	   totalItems++;

	  var listItem = document.createElement("li");
	  
	  var checkBox = document.createElement("input");
	  checkBox.type = "checkBox";
	  checkBox.id = "cb_" + totalItems;
	  checkBox.onclick = updateItemStatus;

	  var span = document.createElement("span");
	  span.id = "item_" + totalItems;
	  span.innerText = itemText;	  

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


