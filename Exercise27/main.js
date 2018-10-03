/*
    Exercise 27
*/
$(document).ready(function(){
    /*=======================
        Regular Expressions
     =======================*/


$('#btnvalidate').click(function(){
    /*=======================
       RegExp functionality
     =======================*/

     var email = document.getElementById("email");
     var patt = new RegExp(/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/);
     var res = patt.test(email.value);

     if (res === false) {
       document.getElementById("email").classList.add("is-invalid");
     }
debugger;
     var numbers = document.getElementById("numeric");
     var patt = /[a-z]/gi;
     var newNumbers = numbers.value.replace(patt,'');
     console.log(newNumbers);

});



     /*=======================
       Array Methods
     =======================*/
let numbers = [2, 5, 14, 9, 564, 10025];
const squaredNumbers = numbers.map(function(element, index, array) {
  return element * element;
})
console.log(squaredNumbers);



});
