let reviews;

fetch("../json/product-list.json")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Ой, ошибка в fetch: " + response.statusText);
    }
    return response.json();
  })
  .then((jsonData) => {
    reviews = jsonData;
  })
  .catch((error) => console.error("Ошибка при исполнении запроса: ", error));

let activep = 0;

const btnLeft = document.getElementById("left-arrow");
const btnRight = document.getElementById("right-arrow");

btnLeft.addEventListener("click", slideleft);
btnRight.addEventListener("click", slideright);

function slideleft() {
  activep = activep === 0 ? reviews.length - 1 : activep - 1;
  setdata();
}

function slideright() {
  activep = activep === reviews.length - 1 ? 0 : activep + 1;
  setdata();
}
function setdata() {
  for (let i = 0; i < 3; i++) {
    const productIndex = (activep + i) % reviews.length;
    document.getElementById("img" + i).src = reviews[productIndex].image;
    document.getElementById("name" + i).textContent =
      i18Obj[currentLanguage]["name" + productIndex];
    document.getElementById("price" + i).textContent =
      reviews[productIndex].price;
  }
}
