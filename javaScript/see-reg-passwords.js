function togglePassword(icon) {
  const passwordField = document.getElementById("passwordField2");
  if (passwordField.type === "password") {
    passwordField.type = "text";
    icon.src = "../img/signInUp/unlock.png";
  } else {
    passwordField.type = "password";
    icon.src = "../img/signInUp/lock.png";
  }
  const repeatPasswordField = document.getElementById("passwordField3");
  if (repeatPasswordField.type === "password") {
    repeatPasswordField.type = "text";
    icon.src = "../img/signInUp/unlock.png";
  } else {
    repeatPasswordField.type = "password";
    icon.src = "../img/signInUp/lock.png";
  }
}
