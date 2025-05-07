"use strict";

function checkLogin() {
  var fixedUsername = "admin";
  var fixedPassword = "1234";
  var enteredUsername = document.getElementById("username").value;
  var enteredPassword = document.getElementById("password").value;
  var message = document.getElementById("message");

  if (enteredUsername === fixedUsername && enteredPassword === fixedPassword) {
    message.style.color = "green";
    message.innerHTML = "Login successful!";
    setTimeout(function () {
      window.location.href = "about.html";
    }, 1000); // You can redirect the user to another page here:
    // window.location.href = "dashboard.html";
  } else {
    message.style.color = "red";
    message.innerHTML = "Invalid username or password.";
  }
}
//# sourceMappingURL=login.dev.js.map
