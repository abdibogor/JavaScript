$(function() {
  // start up code goes here
  //alert("this works!");

  //$("#title").text("Yay, I can now get at the H1 immediately!");

  //$("#first").html("<h2>Great quotes</h2>");

/*
  jQuery('<div id="badge"><img src="badge.gif" alt="Badge earned for achievement"></div>')

   $.myCustomMethod = function() {alert('hi');};

   jQuery.listBox = {
    show: function() { };
    hide: function() { };
    position: function() { };
    initiate: function() { }
   };
*/

/*
$function() {
   //start up code goes here
   alert("this works!")
}

$function() {
   //start up code goes here
   alert("this works 1!")
}

$function() {
   //start up code goes here
   alert("this works 2!")
}

$function() {
   //start up code goes here
   alert("this works 3!")
}
*/

//jQuery('#myFirstParagraph').fadeOut(500).fadeIn(500);

  // append and prepend work INSIDE the given selection
  $("#first").prepend("<h2>Great quotes</h2>");
  $("#first").append("<h3>... for your to ponder ... </h3>");

  // before, after, insertBefore, insertAfter work OUTSIDE
  // the given selection.

  //$("#myAnchor").attr("href", "http://channel9.msdn.com");

  $("#title").addClass("standout");

});

















