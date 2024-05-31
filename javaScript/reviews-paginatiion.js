let reviews;
let activeIndex = 0;
const reviewsPerPage = 2;
const totalReviews = 8;
const paggination = document.querySelector(".slider-paggination");
const selector = paggination.querySelectorAll("li");

fetch("../json/reviews.json")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Fetch error: " + response.statusText);
    }
    return response.json();
  })
  .then((jsonData) => {
    reviews = jsonData;
    displayReviews();
  })
  .catch((error) => console.error("Fetch error: ", error));

paggination.querySelector(".left").addEventListener("click", slideLeft);
paggination.querySelector(".right").addEventListener("click", slideRight);
paggination.querySelector(".left-side").addEventListener("click", toStart);
paggination.querySelector(".right-side").addEventListener("click", toEnd);

selector.forEach((item, index) => {
  item.addEventListener("click", () => active(index, true));
});

function active(index, updateActive) {
  if (updateActive) {
    activeIndex = index * reviewsPerPage;
  }

  selector.forEach((item) => item.classList.remove("active"));
  selector[Math.floor(activeIndex / reviewsPerPage)].classList.add("active");

  displayReviews();
}

function slideLeft() {
  if (activeIndex > 0) {
    activeIndex -= reviewsPerPage;
  }
  active(Math.floor(activeIndex / reviewsPerPage), false);
}

function slideRight() {
  if (activeIndex < totalReviews - reviewsPerPage) {
    activeIndex += reviewsPerPage;
  }
  active(Math.floor(activeIndex / reviewsPerPage), false);
}

function toStart() {
  activeIndex = 0;
  active(0, false);
}

function toEnd() {
  activeIndex = totalReviews - reviewsPerPage;
  active(Math.floor(activeIndex / reviewsPerPage), false);
}

function displayStars(starsElement, starCount) {
  starsElement.innerHTML = ""; // Clear any existing stars
  for (let i = 0; i < 5; i++) {
    const star = document.createElement("div");
    star.classList.add("star");
    if (i < starCount) {
      star.classList.add("yellow");
    } else {
      star.classList.add("black");
    }
    starsElement.appendChild(star);
  }
}

function displayReviews() {
  for (let i = 0; i < reviewsPerPage; i++) {
    const review = reviews[activeIndex + i];
    if (review) {
      const nameKey = `info${activeIndex + i + 1}`;
      const descriptionKey = `description${activeIndex + i + 1}`;

      document.getElementById("info" + (i + 1)).textContent =
        i18Obj[currentLanguage][nameKey] || review.name;
      document.getElementById("photo" + (i + 1)).src = review.image;
      document.getElementById("description" + (i + 1)).textContent =
        i18Obj[currentLanguage][descriptionKey] || review.review;

      const starsElement = document.getElementById("stars" + (i + 1));
      displayStars(starsElement, parseInt(review.star, 10));
    }
  }
}
