  var age21 = confirm("Are you 21+ years old?");

// loop function //

var cigbrands = ["American Spirits", "Marlboro", "Camel", "Norweigan Shag"];

var i;
var text = "";

// Loops through the array to print each cig brand //
for (i = 0; i < cigbrands.length; i++) {

  $(".brands").html(text += cigbrands[i] + "<br>");
};

// End For Loop //







// Java hover (mouseovers) //
  // button1 //
$(".button1").mouseover(function(){
  $(".button1").css("background-color", "rgb(233, 15, 140)");
});

$(".button1").mouseleave(function(){
  $(".button1").css("background-color", "white");
});
/* possible simplified version of mouseover/mouseleave...

$(".button1").on({
  mouseover: function(){
    $(".button1").css("background-color", "")
  }
})

*/
  // button2 //
  $(".button2").mouseover(function(){
    $(".button2").css("background-color", "rgb(233, 15, 140)");
  });

  $(".button2").mouseleave(function(){
    $(".button2").css("background-color", "white");
  });

  // button3 //
  $(".button3").mouseover(function(){
    $(".button3").css("background-color", "rgb(233, 15, 140)");
  });

  $(".button3").mouseleave(function(){
    $(".button3").css("background-color", "white");
  });

  // button4 //
  $(".button4").mouseover(function(){
    $(".button4").css("background-color", "rgb(233, 15, 140)");
  });

  $(".button4").mouseleave(function(){
    $(".button4").css("background-color", "white");
  });

  // prompt //
  $(".prompt").mouseover(function(){
    $(".prompt").css("background-color", "rgb(233, 15, 140)");
  });

  $(".prompt").mouseleave(function(){
    $(".prompt").css("background-color", "white");
  });


  // button5 //
  $(".button5").mouseover(function(){
    $(".button5").css("background-color", "rgb(233, 15, 140)");
  });

  $(".button5").mouseleave(function(){
    $(".button5").css("background-color", "white");
  });

  // button6 //
  $(".button6").mouseover(function(){
    $(".button6").css("background-color", "rgb(233, 15, 140)");
  });

  $(".button6").mouseleave(function(){
    $(".button6").css("background-color", "white");
  });

  // button7 //
  $(".button7").mouseover(function(){
    $(".button7").css("background-color", "rgb(233, 15, 140)");
  });

  $(".button7").mouseleave(function(){
    $(".button7").css("background-color", "white");
  });


// end mouseover code //





//linking prompt with button //
$(document).ready(function(){
$(".prompt").on("click", function() {
  var filter= prompt("Would you like to use a filter?");

  $(".userText").html(filter);
});
});




// show hide //
//opening show hide (makes everything hide when opening page)//
$(document).ready(function() {

  $(".2").hide();
  $(".3").hide();
  $(".4").hide();
  $(".5").hide();
  $(".prompt").hide();
  $(".forming").hide();
  $(".rolling").hide();

  var hideStatus = true;



// when click button1 ... this will happen //
// show hide after 1. //
  var hideStatus = true;
$(".first").on("click", function(){

  //if true
  if(hideStatus == true){


    $(".3").hide();
    $(".4").hide();
    $(".5").hide();
    $(".prompt").hide();
    $(".1").show();
    $(".2").show();

    hideStatus = false;
}
  else{

    $(".2").hide();
    $(".3").hide();
    $(".4").hide();
    $(".5").hide();
    $(".prompt").hide();

    hideStatus = true;

}
});

// show hide after 2. //
var hideStatus2 = true;
$(".second").on("click", function(){

  //if true
  if(hideStatus2 == true){


    $(".3").hide();
    $(".4").hide();
    $(".5").hide();
    $(".prompt").show();
    $(".1").show();
    $(".2").show();

    hideStatus2 = false;
}
  else{

    $(".2").show();
    $(".3").hide();
    $(".4").hide();
    $(".5").hide();
    $(".prompt").show();

    hideStatus2 = true;

}
});

// show hide after 3. //
var hideStatus3 = true;
$(".buttondiv").on("click", function(){

  //if true
  if(hideStatus3 == true){


    $(".3").show();
    $(".4").hide();
    $(".5").hide();
    $(".prompt").show();
    $(".1").show();
    $(".2").show();

    hideStatus3 = false;
}
  else{

    $(".2").show();
    $(".3").show();
    $(".4").hide();
    $(".5").hide();
    $(".prompt").show();

    hideStatus3 = true;

}
});

// show hide after 4. //
var hideStatus4 = true;
$(".button5").on("click", function(){

  //if true
  if(hideStatus4 == true){


    $(".3").show();
    $(".4").show();
    $(".5").hide();
    $(".prompt").show();
    $(".1").show();
    $(".2").show();
    $(".forming").show();

    hideStatus4 = false;
}
  else{

    $(".2").show();
    $(".3").show();
    $(".4").show();
    $(".5").hide();
    $(".prompt").show();

    hideStatus4 = true;

}
});

// show hide after 5. //
var hideStatus5 = true;
$(".button6").on("click", function(){

  //if true
  if(hideStatus5 == true){



    $(".rolling").show();

    hideStatus5 = false;
}
  else{

    $(".2").show();
    $(".3").show();
    $(".4").show();
    $(".5").show();
    $(".prompt").show();

    hideStatus5 = true;

}
});








});
