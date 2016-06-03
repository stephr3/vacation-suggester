$(document).ready(function(){
  $("#quiz").submit(function(event){
    alert("submit button pushed!");
    event.preventDefault();
    var question1 = $("#question1").val();
    var question2 = $("#question2").val();
    var question3 = $("#question3").val();
    var question4 = $("#question4").val();
    var question5 = $("#question5").val();
    var question6 = $("#question6").val();
    var result;
    alert([question1,question2, question3, question4, question5, question6]);
  });
});
