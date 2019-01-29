//scope === variable access
// context === this

//var a = 1;
//parent - cookies
/*
function foo() {
	//child - cookies
	//var b = 2;
	//console.log(b);
	//console.log(a);
	//console.log(window.a);
	//var a =1;
	//var a = 2;
	 a = 2;
}

foo();
//console.log(b);
console.log(a);
*/

var a = 1;

 function foo() {
        var a = 2;
        console.log(a);
 }

 function bar() {
 	 a = 3;
 	 console.log(a);
 }

 foo();
 bar();
 console.log(a);