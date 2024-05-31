const scrollController = {
  scrollPosition: 0,
  disacledScroll() {
    scrollController.scrollPosition = window.scrollY;
    document.body.style.cssText = `
    overflow:hidden;
    position: fixed;
    top:-${scrollController.scrollPosition}px;
    left:0;
    height:100vh;
    width:100vw;
    padding-right:${window.innerWidth - document.body.offsetWidth}px
    `;
  },
  enabledScroll() {
    document.body.style.cssText = "";
    window.scroll({ top: scrollController.scrollPosition });
  },
};
const modalController = ({ modal, btnOpen, btnClose }) => {
  const buttonElems = document.querySelectorAll(btnOpen);
  const modalElem = document.querySelector(modal);

  modalElem.style.cssText = `
    display: flex;
    visibility: hidden;
    opacity: 0;
    transition: opacity 300ms ease-in-out;
`;
  const closeModal = (event) => {
    const target = event.target;
    if (
      target === modalElem ||
      target.closest(btnClose) ||
      event.code === "Escape"
    ) {
      modalElem.style.opacity = "0";
    }
    setTimeout(() => {
      modalElem.style.visibility = "hidden";
      scrollController.enabledScroll();
    }, 300);
    window.removeEventListener("keydown", closeModal);
  };

  const openModal = () => {
    modalElem.style.visibility = "visible";
    modalElem.style.opacity = "1";
    window.addEventListener("keydown", closeModal);
    scrollController.disacledScroll();
  };

  buttonElems.forEach((btn) => {
    btn.addEventListener("click", openModal);
  });
  modalElem.addEventListener("click", closeModal);
};
modalController({
  modal: ".modal",
  btnOpen: ".open-modal",
  btnClose: ".modal-close",
});
