$(document).ready(function(){
  $("#quiz").submit(function(event){
    event.preventDefault();
    var question1 = $("#question1").val();
    var question2 = $("#question2").val();
    var question3 = $("#question3").val();
    var question4 = $("#question4").val();
    var question5 = $("#question5").val();
    var question6 = $("#question6").val();

    var staycation = 0;
    var seattle = 0;
    var sanFrancisco = 0;
    var result;

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


    alert(["staycation: " + staycation, "seattle: " + seattle, "sanFrancisco: " + sanFrancisco, "q1:" + question1, "q2:"+question2, "q3:"+question3, "q4:"+question4, "q5:" +question5, "q6:"+question6]);
  });
});
