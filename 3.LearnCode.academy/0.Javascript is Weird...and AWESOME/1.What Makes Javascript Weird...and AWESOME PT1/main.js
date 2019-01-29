function add(first, second, callback) {
	console.log(first+second);
	if (callback) {
	   callback();
	}
}

function logDone() {
	console.log('done');
}

/*
add(2,3, function(){
	console.log('done');
});
add(4,5, function(){
	console.log('done again');
});
*/

add(2,3, logDone);
add(4,5);
/*
add(4,5, function() {
	console.log('done again');
});
*/

/*
function handleClick() {
	//Something smart
}
$('#myDiv').click(function(handleClick);
*/