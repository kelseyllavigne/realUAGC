var fruits = ["Orange", "Orange", "Apple", "Apple", "Apple"];

for (x=0; x<fruits.length-1; x++) {
  if (fruits[x]===fruits[x+1]) {
  fruits.shift();
  }
  else {
    console.log(fruits[x]);
  }
}
