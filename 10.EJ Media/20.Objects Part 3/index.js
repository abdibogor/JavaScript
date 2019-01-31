/*
var orc = {

	hair: "green",
	age: 26,
	stomachFull: true,

};

var newAge = orc.age + 2;

//document.write(orc.age);

document.write(newAge);
*/

/*
var orc = {

	hair: "green",
	age: 26,
	stomachFull: true,
	eat: function() {
		document.write("YUM YUM!");}
};

orc.eat();
*/

/*
var orc = {

	hair: "green",
	age: 26,
	stomachFull: true,
	eat: function() {
		document.write("YUM YUM!");}
	};

	if (orc.stomachFull == true) {
		orc.eat();
}
*/

var orc = {

	hair: "green",
	age: 26,
	stomachFull: true,
	eat: function() {
		document.write("YUM YUM!");}
	};

	orc.stomachFull = false;

	if (orc.stomachFull == true) {
		orc.eat();
}

else {
	document.write("not eating");
}