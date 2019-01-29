var orc = {

	hair: "green",
	age: 26,
	stomachFull: false,
};

orc.hair = "purple";
orc.hair = 1;
orc.hair2 = "red";
delete.orc.hair2;
orc.hair2;

//document.write(orc.hair); //output 1
document.write(orc.hair2); //output red
document.write(orc.hair2); // output nothing
