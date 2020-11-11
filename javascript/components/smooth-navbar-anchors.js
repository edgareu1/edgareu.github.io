// Function that makes the navbar anchors scroll smoothly to their respective destination
function smoothNavbarAnchors() {
  const anchors = document.querySelectorAll("#navbar a"); // Get the anchors of the navbar

  // For each of the anchors...
  for (let anchor of anchors) {
    const anchorRef = anchor.getAttribute('data-target');

    anchor.addEventListener('click', (event) => {
      event.preventDefault(); // Prevent the anchor default click behavior

      // Use jQuery to perform a scrolling animation
      $("html, body").animate( {
        scrollTop: $(anchorRef).offset().top - 50
      }, 250);
    });
  }
}

export { smoothNavbarAnchors };
