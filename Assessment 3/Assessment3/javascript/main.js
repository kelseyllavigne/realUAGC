/*=========================
    JavaScript Array Methods
=========================*/

/* Use this array for Q1 through Q3 */
var users = [
    {id:1, username: 'luke.sky', firstName: 'Luke', age: 20, race: 'human'},
    {id:2, username: 'leia.org', firstName: 'Leia', age: 20, race: 'human'},
    {id:3, username: 'han.solo', firstName: 'Han', age: 25, race: 'human'},
    {id:4, username: 'chewy', firstName: 'Chewbacca', age:200, race: 'wookie'}
];

/*==============
    Q1 -  Use JavaScript to retrieve all the 'humans' in the array.
================*/
var humans = [];
humans = users.filter(function(element, index, array) {
  return element.race === "human";
})
console.log(humans);


test('q1', humans);

/*==============
    Q2 -  Use JavaScript to retrieve the object in the array with the 'id' equal to 2.
================*/
var leia;

function getById(id) {
  return users.find(function(user) {
    return user.id === id;
  })
}

leia = getById(2);
console.log(getById(2));

test('q2', leia);

/*==============
    Q3 - Use JavaScript to calculate the total age of all users.
================*/
var totalAge = 0;
var ages = [];

ages = users.map(function(element, index, array){
  return element.age;
})
console.log(ages);

for (var i=0; i<ages.length; i++) {
  totalAge = totalAge + ages[i];
}


test('q3', totalAge);
/*==============
    Q4 - Use JavaScript to create a new array that contains only the username of each user
    Expected Output: userNames = ["luke.sky", "leia.org", "han.solo", "chewy"]
================*/
var userNames = [];
userNames = users.map(function(element, index, array){
  return element.username;
})
console.log(userNames);

test('q4', userNames);

/*==============
    Q5 - Use JavaScript to sort this array of numbers ascending.
================*/
var numbers = [15,16,8,4,23,42]
for (var i=0; i<numbers.length; i++) {
        var first;
        var second;
        if (numbers[i] >= numbers[i+1]) {
           first = numbers[i+1];
           second = numbers[i];
           numbers[i] = first;
           numbers[i+1] = second;
           i=-1; continue;}
    }

test('q5', numbers);

/*==============
    Q6 - Use JavaScript to replace all instances of the word 'lorem' in this string using regular expressions
================*/
var replacement = 'Lorem ipsum dolor sit lorem consectetur adipisicing lorem. Numquam, dicta repellendus excepturi consequatur sint ipsum quibusdam delectus lorem laborum eveniet fuga officiis nesciunt nemo ab dignissimos eos doloremque consectetur quod praesentium reprehenderit. Incidunt voluptate, quo rerum mollitia adipisci nam dignissimos, ex cupiditate accusamus cumque sunt corrupti lorem vlorem nemo explicabo.';
var pattern = /lorem/ig

var replacement = replacement.replace(pattern, 'HANSON IS THE BEST BAND EVER');

test('q6', replacement);


/*==============
    Q7 - What is the difference between .forEach() and .map()
================*/
//.forEach() allows you to loop through an array and write custom code that will happen to each item in the array, but it doesn't have an output.
//.map() also allows you to loop through an array and write custom code, but it does have an output: another array. This array is developed by running the custom code on each item in the original array and then placing it's updated value in the mapped array.

/*==============
    Q8 - What is the difference between .filter() and .find()
================*/
//.filter() will output an array of all of the array's values that meet the filter criteria.
//.find() will output the first instance it finds within the array that meets the find criteria.





function test(id,result){
    document.getElementById(id).innerHTML = JSON.stringify(result);
}
