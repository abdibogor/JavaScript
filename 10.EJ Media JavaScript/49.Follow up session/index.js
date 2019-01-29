function changeStyle() {
 
var paragraph = document.getElementsByClassName('para');
 
var firstParaText = paragraph[0].innerHTML;
var SecondParaText = paragraph[1].innerHTML;
var addThem = paragraph[2].innerHTML = firstParaText + SecondParaText ;
 
var firstParaText = paragraph[0].innerHTML = " ";
var SecondParaText = paragraph[1].innerHTML = " ";
 
document.getElementById("test").style.visibility = "hidden";
 
}