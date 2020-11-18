// Function that animates the 'modal-git' opening/closing
function animateGitModal() {
  const modalButton = document.querySelector('[data-target="modal-git"]');
  const modalContainer = document.querySelector('.modal-container');

  // If the user clicks on the button...
  modalButton.addEventListener("click", (event) => {
    event.preventDefault();                       // Prevent the anchor default click behavior
    document.body.classList.add('modal-active');  // Update the body style (overflow: hidden)

    // Using jQuery, smoothly scroll to the top of the page
    // Necessary in order for the 'day-tooltip' to work correctly
    $("html, body").animate( { scrollTop: $('#banner').offset().top }, 500);

    // Make the modal container visible and add the opening modal animation
    modalContainer.style.display = "block";
    modalContainer.classList.remove('modal-close');
    modalContainer.classList.add('modal-open');
  });

  // If the user clicks inside the modal container (action that is only possible if a modal is open)...
  modalContainer.addEventListener("click", (event) => {
    // If the target was the modal content then do not proceed
    if (!event.target.classList.contains('modal')) { return; }

    // Add the closing modal animation
    modalContainer.classList.add('modal-close');

    // After the animation finishes...
    setTimeout(() => {
      document.body.classList.remove('modal-active'); // Turn the body back to normal
      modalContainer.style.display = "none";          // Hide the modal container
    }, 350);
  });
}

export { animateGitModal }