// Function that animates the footer
function animateFooter() {
  const footerAnchors = document.querySelectorAll('footer a');

  // For each of the anchors...
  for (const anchor of footerAnchors) {
    // If the user hovers over the anchor: add the 'splash-animation' class
    anchor.addEventListener('mouseover', () => {
      if (!anchor.classList.contains('splash-animation')) {
        anchor.classList.add('splash-animation');
      }
    });

    // When the animation ends: remove the 'splash-animation' class
    anchor.addEventListener('animationend', () => {
      anchor.classList.remove('splash-animation');
    });
  }
}

export { animateFooter };
