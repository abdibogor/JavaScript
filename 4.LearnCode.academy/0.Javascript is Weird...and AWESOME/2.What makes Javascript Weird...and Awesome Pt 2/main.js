var a = 1;
console.log('setting this up');

$(document).ready(function() {
	$('button').on('click', function() {
        //alert('yay!');
        alert(a);
	});
});