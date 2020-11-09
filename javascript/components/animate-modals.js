function animateModals() {
  const modalButton = document.querySelector('.modal-contributions');
  const modalContainer = document.querySelector('.modal-container');

  modalButton.addEventListener("click", () => {
    document.body.classList.add('modal-active');
    modalContainer.style.display = "flex";
    modalContainer.classList.remove('modal-close');
    modalContainer.classList.add('modal-open');
  });

  modalContainer.addEventListener("click", () => {
    document.body.classList.remove('modal-active');
    modalContainer.classList.add('modal-close');

    setTimeout(() => {
      modalContainer.style.display = "none";
    }, 500);
  });
}

export { animateModals }
