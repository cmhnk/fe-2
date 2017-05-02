$(document).ready(function() {
  var $form = $('.date-form');

    $('button[name="submit"]').click(function(){
      var mathResponse = $('input[id="math"]').val()

      var felonyNotBlank = $('input[name="felonyRadios"]').is(':checked')

      console.log(felonyNotBlank)
    });


  //   var validateForm = function() {
  //   var actualValue = $('input[name="felonyRadios"]').val();
  //
  //   if (actualValue === 'yes') {
  //     console.log('IS VALID');
  //   } else {
  //     console.log("BOOOOOOOOOOOOOOO");
  //   }
  // };


});
