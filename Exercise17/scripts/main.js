$(document).ready(function(){
  $(".error").hide();
  $(".input-group").filter("div:even").addClass("even");
  $("#firstName").on("blur", function() {
    if(!$(this).val()) {
      $(this).closest('.input-group').find('.requiredMsg').fadeIn();
    }
    else {
      $(this).closest('.input-group').find('.requiredMsg').fadeOut();
    }
  })
  $("#lastName").on("blur", function() {
    if(!$(this).val()) {
      $(this).closest('.input-group').find('.requiredMsg').fadeIn();
    }
    else {
      $(this).closest('.input-group').find('.requiredMsg').fadeOut();
    }
  })
  $("#emailAddress").on("blur", function() {
    var patt = new RegExp(/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/);
    var res = patt.test($(this).val());
    if(!$(this).val()) {
      $(this).closest('.input-group').find('.requiredMsg').fadeIn();
    }
    else if($(this).val() && res===false) {
      $(this).closest('.input-group').find('.requiredMsg').fadeOut();
      $(this).closest('.input-group').find('.emailMsg').fadeIn();
    }
    else if($(this).val() && res===true) {
      $(this).closest('.input-group').find('.requiredMsg').fadeOut();
      $(this).closest('.input-group').find('.emailMsg').fadeOut();
    }
  })

});
