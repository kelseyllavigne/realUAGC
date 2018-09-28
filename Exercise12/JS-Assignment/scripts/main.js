function update() {
    /* ===================
        Your code starts here
    =====================*/
		var firstName = getValue('firstName');
		var lastName = getValue('lastName');
		var emailAddress = getValue('emailAddress');
    //Create new array.
		var messages = [];
    //If first name is empty. Add it to the array
		if (!firstName) {
			messages.push('First Name is required');
		}

    //If last name is empty. Add it to the array
		if (!lastName) {
			messages.push('Last Name is required');
		}

    //Email is empty. Add it to the array
		if (!emailAddress) {
			messages.push('Email is required');
		}

    //Loop through array
		var html = "<ul>"
		for (i = 0; i < messages.length; i++) {
			html = html + "<li>" + messages[i] + "</li>"
		}
		html = html + "</ul>";
		document.getElementById("error-list").innerHTML = html;


    //Create javascript object for the user
		var user = {
			firstname: firstName,
			lastname: lastName,
			email: emailAddress,
			fullname: function() {
				return this.firstname + " " + this.lastname;
			}
		}


    //log the user object to the console
		console.log(user.fullname());

    //Check to see if everything is valid
		if (messages.length == 0) {


    //Create string for today's date. Remember, if you hard code this, it will be invalid tomorrow.
		var submittedDate = new Date();

    //Make the alert box.
		alert(submittedDate.toString());
		}
    /* ===================
        Your code ends here
    =====================*/


}



var btn = document.getElementById('btnUpdate');
btn.addEventListener('click', update);

function getValue(id) {
    return getElm(id).value;
}

function getElm(id) {
    return document.getElementById(id);
}
