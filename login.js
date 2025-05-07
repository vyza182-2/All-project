function checkLogin() {
    const fixedUsername = "admin";
    const fixedPassword = "1234";
  
    const enteredUsername = document.getElementById("username").value;
    const enteredPassword = document.getElementById("password").value;
    const message = document.getElementById("message");
  
    if (enteredUsername === fixedUsername && enteredPassword === fixedPassword) {
      message.style.color = "green";
      message.innerHTML = "Login successful!";
      setTimeout(() => {
        window.location.href = "about.html";
      }, 1000);
      // You can redirect the user to another page here:
      // window.location.href = "dashboard.html";
    } else {
      message.style.color = "red";
      message.innerHTML = "Invalid username or password.";
    }
  }
  