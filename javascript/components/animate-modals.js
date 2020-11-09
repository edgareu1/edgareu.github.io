function animateModals() {
  const modalButton = document.querySelector('.modal-contributions');
  const modalContainer = document.querySelector('.modal-container');

  modalButton.addEventListener("click", () => {
    modalContainer.style.display = "flex";
  });

  modalContainer.addEventListener("click", () => {
    modalContainer.style.display = "none";
  });
}
