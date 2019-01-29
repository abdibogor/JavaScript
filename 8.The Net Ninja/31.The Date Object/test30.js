var birthday = new Date(1985, 0, 15, 11, 15, 25);
var birthday2 = new Date(1985, 0, 15, 11, 15, 25);

/*
var myDate = new Date();
console.log(myDate);
*/

/*
var myPastDate = new Date(1545, 11, 2, 10, 30, 15);
var myFutureDate = new Date(2515, 0, 31, 10, 30, 15);

console.log(myPastDate);
console.log(myFutureDate);
*/

console.log(birthday.getMonth());
console.log(birthday.getFullYear());
console.log(birthday.getDate());
console.log(birthday.getDay());

if(birthday.getTime() == birthday2.getTime()){
	console.log("birthday are equal");
} else {
	   console.log("birthday are not equal");
}