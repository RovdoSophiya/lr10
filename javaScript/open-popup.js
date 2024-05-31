const popupController = ({ popup, btnOpen, btnClose }) => {
  const buttonElems = document.querySelectorAll(btnOpen);
  const popupElem = document.querySelector(popup);
  const email = document.querySelector(".email-input");
  popupElem.style.cssText = `
    display: flex;
    visibility: hidden;
    opacity: 0;
    transition: opacity 300ms ease-in-out;
`;
  const closePopup = (event) => {
    const target = event.target;
    if (
      target === popupElem ||
      target.closest(btnClose) ||
      event.code === "Escape"
    ) {
      popupElem.style.opacity = "0";
    }
    setTimeout(() => {
      popupElem.style.visibility = "hidden";
    }, 300);
    window.removeEventListener("keydown", closePopup);
  };

  const openPopup = () => {
    const emailForm = email.value.trim();
    if (emailForm) {
      popupElem.style.visibility = "visible";
      popupElem.style.opacity = "1";
      window.addEventListener("keydown", closePopup);
    }
  };

  buttonElems.forEach((btn) => {
    btn.addEventListener("click", openPopup);
  });
  popupElem.addEventListener("click", closePopup);
};
popupController({
  popup: ".popup",
  btnOpen: ".open-popup",
  btnClose: ".popup-close",
});
