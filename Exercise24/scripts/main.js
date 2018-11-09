$(document).ready(function() {
  $("#btnSubmit").on("click", function() {
    

    $("#form").fadeOut("slow", function() {
      $("#thankyou").fadeIn("slow");
    });
  });
});
