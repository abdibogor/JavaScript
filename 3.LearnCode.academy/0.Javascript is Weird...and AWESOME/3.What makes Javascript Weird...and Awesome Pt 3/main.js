//retains state and scope after executes

$(document).ready(function() {
	var a = 1;


	$('button').on('click', function() {
		a = a+1;
        alert(a);
	});
	

	//$('button').off('click');
});