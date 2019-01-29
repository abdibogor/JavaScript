$(document).ready(function() { 
  //var hText = "This is just some text.";
  /*
  var text1 = "The heading text is ";
  var text2 = text1 + hText;
  */
  //var hText = "The heading text is " + $("#head1").text();
  //var lineNum = 0;
  /*
  var aNumber = 5;
  lineNum = aNumber - 4;
  */
  var imageName = ["bilal.jpg","floatinglobal.gif"];
  var indexNum = 0;


  $("#picture").click(function() {
      //$("p").text("hText");
      //$("p").text(text2);
      //$("p").text(hText);
      /*
      $("p").css("background-color", "red");
      $("p").eq(lineNum).css("background-color", "red");
      lineNum++;
      if (lineNum > 2) {lineNum = 0;}
      */
      $("#picture").attr("src", imageName[indexNum]);
      /*
      indexNum++;
      if (indexNum > 2) {indexNum = 0;}
      */
      $("#picture").fadeOut(300, function() {
           $("#picture").attr("src", imageName[indexNum]);
           indexNum++;
           if (indexNum > 2) {indexNum = 0;}
           $("#picture").fadeIn(500);
      });
  });
});
