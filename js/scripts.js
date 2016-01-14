$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var blanks = ["chocolate", "vanilla", "strawberry"];


    blanks.forEach(function(blank) {
      var userInput = $("input#" + blank).val();
      $("." + blank).text(userInput);
    });

    $("#blanks").show();

    event.preventDefault();
  });
});
