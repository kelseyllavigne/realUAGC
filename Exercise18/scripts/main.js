$(document).ready(function() {

    //List Titles
    var appendUrl = 'http://jsonplaceholder.typicode.com/posts?userId=1';
    $.ajax({
      url: appendUrl,
      method: "GET",
      success: function(response) {
        var appendList = $("#append");
        for (var i=0; i<response.length; i++) {
        appendList.append('<li>Index: '+i+' Title: '+response[i].title+'</li>');
        }
      },
      failure: function(response) {
        alert("Failure!");
      }
    });

    //
    var prependUrl = 'http://jsonplaceholder.typicode.com/photos?albumId=1';
    $.ajax({
      url: prependUrl,
      method: "get",
      success: function(response) {
        var prependList = $("#prepend");
        for (var i=0; i<response.length; i++) {
        prependList.prepend('<li>Index: '+i+' Title: '+response[i].title+'</li>');
        }
      },
      failure: function(response) {
        alert("Failure!");
      }
    });

});
