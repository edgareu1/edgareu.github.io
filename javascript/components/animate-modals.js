// Function that animates the app modals opening/closing
function animateModals() {
  // Variables:
  //   modalButtons:   List of the modal buttons
  //   modalContainer: Container of the modals
  //   modals:         List of the modals
  const modalButtons = document.querySelectorAll('.btn-modal');
  const modalContainer = document.querySelector('.modal-container');
  const modals = document.querySelectorAll('.modal');

  // For each of the buttons...
  for (const button of modalButtons) {
    // Get the modal corresponding to the button
    const dataTarget = button.getAttribute('data-target');
    const modal = document.getElementById(dataTarget);

    // If the user clicks on the button...
    button.addEventListener("click", (event) => {
      event.preventDefault();                       // Prevent the anchor default click behavior
      document.body.classList.add('modal-active');  // Update the body style (overflow: hidden)
      modal.style.display = "block";                // Display the relevant modal

      // Make the modal container visible and add the opening modal animation
      modalContainer.style.display = "flex";
      modalContainer.classList.remove('modal-close');
      modalContainer.classList.add('modal-open');
    });
  }

  // If the user clicks on the modal container (action that is only possible if a modal is open)...
  modalContainer.addEventListener("click", () => {
    // Add the closing modal animation
    modalContainer.classList.add('modal-close');

    // After the animation finishes...
    setTimeout(() => {
      document.body.classList.remove('modal-active'); // Turn the body back to normal
      modalContainer.style.display = "none";          // Hide the modal container

      // Hide the modal
      for (const modal of modals) {
        modal.style.display = "none";
      }
    }, 500);
  });
}

export { animateModals }