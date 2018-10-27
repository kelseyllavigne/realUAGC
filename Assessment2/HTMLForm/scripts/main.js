$(function(){
    $('#submit').click(submit);


    function submit(){
      document.getElementById('first-name').classList.remove("invalid");
      document.getElementById('email').classList.remove("invalid");
      document.getElementById('how-did-find-us').classList.remove("invalid");
      var finalMessage = "";

      var message = [];
      var name = getValue('first-name');
      if (!name) {
        document.getElementById('first-name').classList.add("invalid");
        message.push("<li>" + "First name is required" + "</li>");
      }

      var email = getValue('email');
      var pattern = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
      if (!email || !pattern.test(email)) {
        document.getElementById('email').classList.add("invalid");
        message.push("<li>" + "Enter a valid email" + "</li>");
      }

      var howFindUs = getValue('how-did-find-us');
      if (howFindUs === "1") {
        document.getElementById('how-did-find-us').classList.add("invalid");
        message.push("<li>" + "'How did you find us?' is required" + "</li>");
      }

      displayError = document.getElementById('error');
      for (i=0; i<message.length; i++) {
          finalMessage = finalMessage + message[i];
      }
      displayError.innerHTML = finalMessage;

      if (name && email && pattern.test(email) && howFindUs!=="1") {
        alert("Your form has been successfully submitted!");
      }

      $.ajax({
          url: '/AddEntry',
          method: "POST",
          success: function(msg) {
            alert("Great job on posting that form! You rock!");
          },
          failure: function(resp) {
            alert("This form did not post properly. Try again. You can do it!");
          }
        })
    }//close submit function

    function getValue(id) {
      return getElm(id).value;
    }

    function getElm(id) {
    return document.getElementById(id);
    }
});
