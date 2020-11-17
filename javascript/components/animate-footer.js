// Function that animates the footer
function animateFooter() {
  const footerAnchors = document.querySelectorAll('.footer a');

  // For each of the anchors...
  for (const anchor of footerAnchors) {
    // If the user hovers over the anchor: add the splash animation
    anchor.addEventListener('mouseover', () => {
      if (anchor.classList != 'splash') anchor.classList.add('splash');
    });

    // If the user removes his mouse from the anchor: remove the splash class
    // Necessary in order for the next animation to work
    anchor.addEventListener('mouseout', () => {
      anchor.classList.remove('splash');
    });
  }
}

export { animateFooter };
