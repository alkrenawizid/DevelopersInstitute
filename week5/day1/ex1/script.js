// // Exercise
// In the HTML file create a form containing 2 inputs, username and password
//   2. In the JS file, validate the data before processing it
// * Username must be trimed, minimum 4 characters and start with a first letter uppercased
// * Password shoudn't be empty
// 3. If the values are not right, don't submit the form, and set the background color  to red
// 4. If the values are right, display the queries key value pair, on the page


(function () {
    let form = document.querySelector("form");
  
    form.addEventListener("submit", validation);
  })();
  
  function validation(event) {
    if (userValid() && passwordValid()) {
      return;
    } else {
      event.preventDefault();
      main.style.backgroundColor = "red";
    }
  }
  
  function userValid() {
    let user = document.getElementById("username").value;
    if (user[0] === user[0].toUpperCase() && user.trim().length >= 4) {
      return true;
    } else {
      return false;
    }
  }
  
  function passwordValid() {
    let pass = document.getElementById("password").value;
    if (pass.trim().length > 0) {
      return true;
    } else {
      return false;
    }
  }
  
  (function () {
    console.log("Hello i am the 2nd self invoked function!");
    const URLParams = new URLSearchParams(window.location.search);
    let mainDiv = document.getElementById("main");
  
    for (const [key, value] of URLParams.entries()) {
      let newP = document.createElement("p");
      let newtxt = document.createTextNode(`${key} : ${value.trim()}`);
      newP.appendChild(newtxt);
      mainDiv.appendChild(newP);
    }
  })();