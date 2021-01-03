// Function that animates the footer
function animateFooter() {
  const footerAnchors = document.querySelectorAll('footer a');

  // For each of the anchors...
  for (const anchor of footerAnchors) {
    // If the user hovers over the anchor: add the 'expand-element' class
    anchor.addEventListener('mouseover', () => {
      if (!anchor.classList.contains('expand-element')) {
        anchor.classList.add('expand-element');
      }
    });

    // When the animation ends: remove the 'expand-element' class
    anchor.addEventListener('mouseout', () => {
      anchor.classList.remove('expand-element');
    });
  }
}

export { animateFooter };
