//PART ONE
let name = "Kelsey";
document.getElementById("partOne").innerHTML = name;

//PART TWO
foo = "This is not an integer";
document.getElementById("partTwo").innerHTML = foo;

//PART THREE
let partThree = 5;
partThree += 10;
partThree *= 14;
partThree -= 25;
document.getElementById("partThree").innerHTML = partThree;

//PART FOUR
let fName = "Kelsey";
let lName = "Lavigne";
let fullName = fName + " " + lName;
document.getElementById("partFour").innerHTML = fullName;

//PART FIVE
let myHtml = "";
myHtml += "<h2>Title</h2>";
myHtml += "<p>Lorem ipsum dolor</p>";
myHtml += "<h3>Pellentesque habitant morbi</h3>";
myHtml += "<p>Morbi in sem quis dui placerat ornare. </p>";
document.getElementById("partFive").innerHTML = myHtml;

//PART SIX
var part6Number = getRandomNumber();
var part6Result;
if (part6Number > 50) {
    part6Result = "Above 50";
}
  else {
    part6Result = "Below or equal to 50";
  }
document.getElementById("part6Number").innerHTML = part6Number;
document.getElementById("part6Result").innerHTML = part6Result;

//PART SEVEN
var part7Number = getRandomNumber();
var part7Result;
if (part7Number < 25) {
  part7Result = "Below 25";
}
else if (part7Number < 50 && part7Number >= 25) {
  part7Result = "Between 25 and 50";
}
else if (part7Number < 75 && part7Number >= 50) {
  part7Result = "Between 50 and 75";
}
else {
  part7Result = "Above 75";
}
document.getElementById("part7Number").innerHTML = part7Number;
document.getElementById("part7Result").innerHTML = part7Result;



//BONUS SECTION
//PROBLEM ONE
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (i = 0; i < numbers.length-1; i++) {
  var pos = numbers.indexOf(i);
  console.log(pos);
}


////////////////////////////////////////////////////////////////
//////Ignore everything below this line////////////////////////

function getRandomNumber() {
  return Math.floor(Math.random() * (100 - 1)) + 1;
}
