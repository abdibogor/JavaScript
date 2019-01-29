function validateTextbox() {
 var box = document.getElementById("name");
 var box2 = document.getElementById("address");
 
 if (box.value == "" || box2.value == "" ) {
 alert("The field marked in red cannot be blank");
 return false;
 }

 }