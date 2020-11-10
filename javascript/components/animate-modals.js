function animateModals() {
  const modalButtons = document.querySelectorAll('.btn-modal');
  const modalContainer = document.querySelector('.modal-container');
  const modals = document.querySelectorAll('.modal');

  for (const button of modalButtons) {
    const dataTarget = button.getAttribute('data-target');
    const modal = document.getElementById(dataTarget);

    button.addEventListener("click", (event) => {
      event.preventDefault();

      document.body.classList.add('modal-active');

      modal.style.display = "block";
      modalContainer.style.display = "flex";
      modalContainer.classList.remove('modal-close');
      modalContainer.classList.add('modal-open');
    });
  }

  modalContainer.addEventListener("click", () => {
    modalContainer.classList.add('modal-close');

    setTimeout(() => {
      document.body.classList.remove('modal-active');

      modalContainer.style.display = "none";

      for (const modal of modals) {
        modal.style.display = "none";
      }
    }, 500);
  });
}

export { animateModals }
