const lightThemeButton = document.getElementById("lightTheme");
const darkThemeButton = document.getElementById("darkTheme");

function setDarkTheme() {
  document.body.setAttribute("dark", "");
  localStorage.setItem("theme", "dark");
  darkThemeButton.classList.add("dark-theme");
  lightThemeButton.classList.remove("light-theme");
}

function setLightTheme() {
  document.body.removeAttribute("dark");
  localStorage.setItem("theme", "light");
  lightThemeButton.classList.add("light-theme");
  darkThemeButton.classList.remove("dark-theme");
}

document.getElementById("darkTheme").addEventListener("click", setDarkTheme);
document.getElementById("lightTheme").addEventListener("click", setLightTheme);

/*смена для бургер меню*/
const lightThemeButtonB = document.getElementById("lightTheme-burger");
const darkThemeButtonB = document.getElementById("darkTheme-burger");

function setDarkTheme() {
  document.body.setAttribute("dark", "");
  localStorage.setItem("theme", "dark");
  darkThemeButtonB.classList.add("dark-theme");
  lightThemeButtonB.classList.remove("light-theme");
}

function setLightTheme() {
  document.body.removeAttribute("dark");
  localStorage.setItem("theme", "light");
  lightThemeButtonB.classList.add("light-theme");
  darkThemeButtonB.classList.remove("dark-theme");
}

document
  .getElementById("darkTheme-burger")
  .addEventListener("click", setDarkTheme);
document
  .getElementById("lightTheme-burger")
  .addEventListener("click", setLightTheme);

// Проверяем, есть ли сохраненная тема в локальном хранилище и применяем её
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
  setDarkTheme();
} else {
  setLightTheme();
}
