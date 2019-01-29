$(document).ready(function() {

	//$("h1").click(function() {
		/*
		$("h1").mousedown(function() {
		$(this).css("background-color", "red");
	});
	*/
		$("h1").mouseenter(function() {
		$(this).css("background-color", "red");
	});
    $("h1").mouseleave(function() {
		$(this).css("background-color", "yellow");
		//$(this).unbind();
		//$("*").unbind();
		$("*").unbind("mouseleave");
	});
});