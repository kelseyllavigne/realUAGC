$(document).ready(function(){

     ///// Code goes here

//PART ONE
$("#btnOne").on("click", function () {
  alert("Click event was triggered! You rock!")
})

//PART TWO
$("#btnTwo").on("click", function () {
  $(".update-html").html("Hello World!")
})

//PART THREE
$("#btnThree").on("click", function () {
  $("#text-update").val("Hello World!");
})

//PART FOUR

$("#btnCopyHtml").on("click", function () {
  debugger;
  var copiedHtml = $(".copy-html");
  $(".paste-html").html(copiedHtml);
})

//PART FIVE
$("#btnCopyValues").on("click", function () {
  var copiedValue = $("#copy-text").val();
  $("#paste-text").val(copiedValue);
})

});
