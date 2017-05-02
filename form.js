$(document).ready(function() {
  var $form = $('.date-form');

  $form.on('submit', function(event){
    event.preventDefault();

    // Handling blanks:
    var mathBlank = $('input[id="math"]').val().length == 0
    var petBlank = $('input[name="petsRadios"]:checked').length == 0
    var haikuBlank = $('textarea[name="haiku"]').val().length == 0
    var felonyBlank = $('input[name="felonyRadios"]:checked').length == 0

    if (felonyBlank || mathBlank || petBlank || haikuBlank){
      console.log("ERROR! Please answer all questions.")
    }

    var mathResponse = $('input[id="math"]').val()

    if (!mathBlank && mathResponse != 5){
      console.log("ERROR! Answer is 5.");
    }

    var petSelected = $('input[name="petsRadios"]:checked').val()

    if (!petBlank && petSelected != "frogs") {
      console.log("ERROR! You must select Frogs to be considered further.")
    }

    if (!mathBlank && !petBlank && !haikuBlank && !felonyBlank && petSelected == "frogs" && mathResponse == 5){
      console.log("Thank you for your response. I will get back to you in 5-7 business days.")
    }

  });
});
