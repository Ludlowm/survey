$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var formNameInput = $("input#name").val();
    var formBirthInput = $("input#birth").val();
    var formFoodInput= $("input#food").val();
    var formMusicInput = $("input#music").val();
    var formColorInput = $("input#color").val();

    $("#name").text(formNameInput);
    $("#birth").text(formBirthInput);
    $("#food").text(formFoodInput);
    $("#music").text(formMusicInput);
    $("#color").text(formColorInput);

    $(".initially-showing").hide();
    $(".initially-hidden").show();

    event.preventDefault();

  });
});
