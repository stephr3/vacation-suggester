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

    if(question1 = "car"){
      staycation += 1;
      seattle += 2;
    } else if (question1 = "fly"){
      sanFrancisco += 5;
    }
    alert(["staycation: " + staycation, "seattle: " + seattle, "sanFrancisco: " + sanFrancisco]);
  });
});
