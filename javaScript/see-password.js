function togglePassword(icon) {
  const passwordField = document.getElementById("passwordField");
  if (passwordField.type === "password") {
    passwordField.type = "text";
    icon.src = "../img/signInUp/unlock.png";
  } else {
    passwordField.type = "password";
    icon.src = "../img/signInUp/lock.png";
  }
}
