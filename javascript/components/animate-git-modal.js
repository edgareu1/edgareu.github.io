// Function that animates the 'modal-git' opening/closing
function animateGitModal() {
  const modalButton = document.querySelector('#banner .btn-light'),
    modalContainer = document.querySelector('.modal-container');

  // If the user clicks on the button...
  modalButton.addEventListener('click', (event) => {
    // Prevent the anchor default click behavior
    event.preventDefault();
    // Update the body style (overflow: hidden)
    document.body.classList.add('modal-active');
    // Smoothly scroll to the top of the page; Necessary in order for the
    // 'day-tooltip' to work correctly
    scroll( { top: 0, behavior: 'smooth' } );
    // Make the modal container visible and add the opening modal animation
    modalContainer.style.display = 'block';
    modalContainer.classList.remove('modal-close');
    modalContainer.classList.add('modal-open');
  });

  // If the user clicks inside the modal container (action that is only
  // possible if a modal is open)...
  modalContainer.addEventListener('click', (event) => {
    // If the target was the modal content then do not proceed
    if (!event.target.classList.contains('modal')) { return; }
    // Add the closing modal animation
    modalContainer.classList.add('modal-close');
    // After the animation finishes...
    setTimeout(() => {
      // Turn the body back to normal
      document.body.classList.remove('modal-active');
      // Hide the modal container
      modalContainer.style.display = 'none';
    }, 350);
  });
}

export { animateGitModal }
