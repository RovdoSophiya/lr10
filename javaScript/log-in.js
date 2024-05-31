document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.querySelector(".authorisation-form");
  const emailInput = document.getElementById("log-in-email");
  const passwordInput = document.getElementById("passwordField");
  const errorDiv = document.querySelector(".input-error.pswd-error");
  loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const users = JSON.parse(localStorage.getItem("userData")) || [];
    const enteredEmail = emailInput.value.trim();
    const enteredPassword = passwordInput.value.trim();

    const user = users.find(
      (user) => user.email === enteredEmail && user.password === enteredPassword
    );

    if (user) {
      window.location.href = "user.html";
    } else {
      errorDiv.classList.add("error");
    }
  });
});
