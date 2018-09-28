var arrayItems = [];

function update() {
    //////////////////////Your Code Starts here
    document.getElementById('firstName').classList.remove("invalid");
    document.getElementById('lastName').classList.remove("invalid");
    document.getElementById('emailAddress').classList.remove("invalid");
    document.getElementById('randomNumber').classList.remove("invalid");

    ///Part 1
    var firstName = getValue('firstName');
    var lastName = getValue('lastName');
    console.log(firstName);
    console.log(lastName);
    document.getElementById('p1_fullName').innerHTML = firstName + " " + lastName;
    if (firstName && lastName) {
      document.getElementById('p1_valid').innerHTML = true;
    }
    else if (firstName && lastName != true) {
      document.getElementById('p1_valid').innerHTML = false;
    }
    if (!firstName) {
      document.getElementById('firstName').classList.add("invalid");
    }
    if (!lastName) {
      document.getElementById('lastName').classList.add("invalid");
    }
    var fullName = firstName + lastName;
    document.getElementById('p1_fullNameLength').innerHTML = fullName.length;

    // Part 2
    var emailAddress = getValue('emailAddress');
    console.log(emailAddress);
    document.getElementById('p2_email').innerHTML = emailAddress;
    if (emailAddress.indexOf('@') > -1) {
      document.getElementById('p2_valid').innerHTML = true;
    }
    else {
      document.getElementById('p2_valid').innerHTML = false;
    }
    if (!emailAddress) {
      document.getElementById('emailAddress').classList.add("invalid");
    }
    document.getElementById('p2_emailLength').innerHTML = emailAddress.length;

    // Part 3
    var randomNumber = getValue('randomNumber');
    console.log(randomNumber);
    document.getElementById('p3_number').innerHTML = randomNumber;
    if (parseInt(randomNumber)) {
      document.getElementById('p3_valid').innerHTML = true;
    }
    else {
      document.getElementById('p3_valid').innerHTML = false;
    }
    if (!randomNumber) {
      document.getElementById('randomNumber').classList.add("invalid");
    }

    // Part 4
    var arrayInput = getValue('arrayValue');
    console.log(arrayInput);
    arrayItems.push(arrayInput);
    document.getElementById('p4_arraylength').innerHTML = arrayItems.length;
    document.getElementById('p4_valid').innerHTML = arrayItems;











    ////////////////////////Your code ends here.

}


////
var btn = document.getElementById('btnUpdate');
btn.addEventListener('click', update);

function getValue(id) {
    return getElm(id).value;
}

function getElm(id) {
    return document.getElementById(id);
}
