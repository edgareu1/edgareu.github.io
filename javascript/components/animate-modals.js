function animateModals() {
  const modalButton = document.querySelector('.modal-contributions');
  const modalContainer = document.querySelector('.modal-container');

  modalButton.addEventListener("click", () => {
    document.body.classList.add('modal-active');
    modalContainer.style.display = "flex";
  });

  modalContainer.addEventListener("click", () => {
    document.body.classList.remove('modal-active');
    modalContainer.style.display = "none";
  });
}

export { animateModals }
