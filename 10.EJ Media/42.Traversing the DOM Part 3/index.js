function changeText () {

	var para2= document.getElementById('p2');
	//var sibling = para2.nextElementSibling;
	var sibling = para2.previousElementSibling;
	sibling.style.color = "blue";

}