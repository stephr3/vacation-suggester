//Business logic
var result;

var calcResult = function (tally1, tally2, tally3){
  if(tally1 >= tally2 && tally1 >= tally3){
    result = "tally1";
  } else if (tally2 >= tally1 && tally2 >= tally3){
    result = "tally2";
  } else {
    result = "tally3";
  }
  alert(result);//for debugging
};

// User-interface logic
$(document).ready(function(){
  //Submit button functionality
  $("#quiz").submit(function(event){
    event.preventDefault();
    // Set variables
    var question1 = $("#question1").val();
    var question2 = $("#question2").val();
    var question3 = $("#question3").val();
    var question4 = $("#question4").val();
    var question5 = $("#question5").val();
    var question6 = $("#question6").val();

    var staycation = 0;
    var seattle = 0;
    var sanFrancisco = 0;
    var destination;

    // Add to tally
    if(question1 === "car"){
      staycation += 1;
      seattle += 2;
    } else if (question1 === "fly"){
      sanFrancisco += 5;
    }

    if(question2 === "budget"){
      staycation += 5;
      seattle += 2;
    } else if (question2 === "money"){
      sanFrancisco += 5;
    }

    if(question3 === "ownBed"){
      staycation += 5;
    } else if (question3 === "hotel"){
      sanFrancisco += 2;
      seattle += 1;
    }

    if(question4 === "river"){
      staycation += 5;
    } else if (question4 === "sea"){
      sanFrancisco += 2;
      seattle += 1;
    }

    if(question5 === "spaceNeedle"){
      seattle += 5;
    } else if (question5 === "bridges"){
      sanFrancisco += 3;
      staycation += 2;
    }

    if(question6 === "starbucks"){
      seattle += 5;
    } else if (question6 === "otherCoffee"){
      sanFrancisco += 2;
      staycation += 1;
    }

    //Calculate result
    calcResult(staycation, seattle, sanFrancisco);

    if (result === "tally1"){
      $(".destinationName").text("have a staycation in Portland");
      $("#seattle, #sanFrancisco").hide();
      $("#staycation").show();
    } else if (result === "tally2") {
      $(".destinationName").text("Seattle");
      $("#staycation, #sanFrancisco").hide();
      $("#seattle").show();
    } else {
      $(".destinationName").text("San Francisco");
      $("#seattle, #staycation").hide();
      $("#sanFrancisco").show();
    }

    $("#quiz").hide();
    $("#results").show();

    alert(["staycation: " + staycation, "seattle: " + seattle, "sanFrancisco: " + sanFrancisco, "q1:" + question1, "q2:"+question2, "q3:"+question3, "q4:"+question4, "q5:" +question5, "q6:"+question6]); //for debugging
  });

  //Results button functionalit
  $("#results button").click(function(event){
    event.preventDefault();
    $("#quiz").removeAttr("checked");
    $("#results").hide();
    $("#quiz").show();
  });
});
