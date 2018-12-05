
  document.write("Hello, World!");

  var select = "Hot";
  var select = "Cold";
  var age21 = confirm("Are you 21+ years old?");

  for (var i = 9; i < 10; i++) {
    document.write("You Smoked..." + i + "!!!");
}

// Java hover (mouseovers) //
$(".button1").mouseover(function(){
  $(".button1").css("background-color", "rgb(233, 15, 140)");
});

$(".button1").mouseleave(function(){
  $(".button1").css("background-color", "white");
});


//linking prompt with button //
$(document).ready(function(){
$(".prompt").on("click", function() {
  var filter= prompt("Would you like to use a filter?");

  $(".userText").html(filter);
});
});

/*
// show hide //
//opening show hide //
$(document).ready(function() {

  $(".choices2").hide();
  $(".choices3").hide();
  $(".choices4").hide();
  $(".choices5").hide();
  $(".prompt").hide();

  var hideStatus = true;



// when click button1 ... this will happen //
// show hide after 1. //
  var hideStatus = true;
$(".button1").on("click", function(){


  //if true
  if(hideStatus == true){


    $(".choices3").hide();
    $(".choices4").hide();
    $(".choices5").hide();
    $(".prompt").hide();
    $(".choices1").show();
    $(".choices2").show();

    hideStatus = false;
}
  else{

    $(".choices2").hide();
    $(".choices3").hide();
    $(".choices4").hide();
    $(".choices5").hide();
    $(".prompt").hide();

    hideStatus = true;

}
});

// show hide after 2. //
$(".button3").on("click", function(){

  //if true
  if(hideStatus == true){


    $(".choices3").hide();
    $(".choices4").hide();
    $(".choices5").hide();
    $(".buttondiv").show();
    $(".choices1").show();
    $(".choices2").show();

    hideStatus = false;
}
  else{

    $(".choices2").show();
    $(".choices3").hide();
    $(".choices4").hide();
    $(".choices5").hide();
    $(".prompt").hide();

    hideStatus = true;

}
});






});
*/ 
