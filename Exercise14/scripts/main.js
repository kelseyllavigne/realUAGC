function reset() {
  document.getElementById("form").reset();
}

function submit() {
  document.getElementById('name').classList.remove("invalid");
  document.getElementById('password').classList.remove("invalid");
  document.getElementById('email').classList.remove("invalid");
  document.getElementById('timeZone').classList.remove("invalid");
  document.getElementById('terms').classList.remove("invalid");

  var message = [];
  var name = getValue('name');
  if (!name) {
    document.getElementById('name').classList.add("invalid");
    message.push("<li>" + "First name is required" + "</li>");
  }

  var email = getValue('email');
  var pattern = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
  if (!email || !pattern.test(email)) {
    document.getElementById('email').classList.add("invalid");
    message.push("<li>" + "Enter a valid email" + "</li>");
  }

  var password = getValue('password');
  if (!password) {
    document.getElementById('password').classList.add("invalid");
    message.push("<li>" + "Password is required");
  }

  var timezone = getValue('timeZone');
  if (timezone === "1") {
    document.getElementById('timeZone').classList.add("invalid");
    message.push("<li>" + "Time zone is required" + "</li>");
  }

  if (!document.getElementById('terms').checked) {
    document.getElementById('terms').classList.add("invalid");
    message.push("<li>" + "You must accept the terms and conditions" + "</li>");
  }

  displayError = document.getElementById('error');
  var finalMessage = "";
  for (i=0; i<message.length; i++) {
      finalMessage = finalMessage + message[i];
  }
  displayError.innerHTML = finalMessage;

  if (name && email && pattern.test(email) && password && timeZone && terms) {
    alert("Your form has been successfully submitted!");
  }
}

document.getElementById("submit").addEventListener('click', submit);
document.getElementById("resetForm").addEventListener('click', reset);

function getValue(id) {
    return getElm(id).value;
}

function getElm(id) {
    return document.getElementById(id);
}
