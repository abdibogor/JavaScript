// Context === this

/*
var a = 1;
//console.log(this.a)
console.log(window.a);
*/

/*
function foo() {
	console.log(this);
}

foo();
*/

var obj = {
	foo: function (){
		//console.log(this === obj);
		//console.log(this === window);
		console.log(this);
	}
};

//obj.foo();
//call, apply, bind
//obj.foo.call(window, 1,2,3);
//obj.foo.apply(window, 1,2,3);
//obj.foo.bind(window, 1,2,3);
/*
var myBoundFoo = obj.foo.bind(window);
myBoundFoo();
obj.foo();
*/
/*
$('body').on('click', obj.foo);
*/

/*
$('li').on('click', function() {
	//console.log(this);
	var currentTimes = parseInt( $(this).find ('span').html() );
	//$('li span').html(currentTimes+1);
	$(this).find('span').html(currentTimes+1);
})
*/

$('opendiv').on('click', function() {
	var self = this;
	//var a = 1;
	//$(this).toggleClass("active");
	$(#div1).slideToggle(300, function () {
	//var a = 2;
	//$("#div1").slideToggle();
	//$(this).toggleClass("active");
	$(self).toggleClass("active");
});