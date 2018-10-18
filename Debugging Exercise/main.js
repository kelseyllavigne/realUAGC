var btn1 = getEl('btnSubmit');
btn1.addEventListener('click', submit);

var btn2 = getEl('btnReset');
btn2.addEventListener('click', reset);

var inputs = ['emailAddress', 'password', 'userName'];
var ERROR_CLASS = 'invalid';

function submit() {
    var elm;
    var errorList = [];

    for (var i = 0; i < inputs.length; i++) {
        elm = getEl(inputs[i]);
        if (elm.value === '') {
            errorList.push(elm.placeholder + ' is required');
            elm.classList.add(ERROR_CLASS);
        } else {
            elm.classList.remove(ERROR_CLASS);
        }
    }

    var email = getEl('emailAddress');
          debugger;
    if (email.value.indexOf('@') === -1) {
        errorList.push('Enter a valid Email');
    }

    var time = getEl('timezone');
    if (time.value === '') {
        errorList.push('Timezone is required');
        time.classList.add(ERROR_CLASS);
    } else {
        time.classList.remove(ERROR_CLASS);
    }

    var terms = getEl('terms');
    if (terms.checked === false) {

        errorList.push('You must accept the terms and conditions');
    }




    var html;
    if (errorList.length > 0) {
        html = '<ul class="errors"><li>' + errorList.join('</li><li>') + '</li></ul>';
    } else {
        html = '<h1>Thank you for registering</h1>';
        reset();
    }

    getEl('messages').innerHTML = html;
}

function reset() {
    for (var i = 0; i < inputs.length; i++) {
        var elm = getEl(inputs[i])
        elm.value = '';
        elm.classList.remove(ERROR_CLASS);
    }

    getEl('messages').innerHTML = '';

    getEl('timezone').value = '';
    getEl('terms').checked = false;
}

function getEl(id) {
    return document.getElementById(id);
}
