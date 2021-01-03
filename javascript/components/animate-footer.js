// Function that animates the footer
function animateFooter() {
  const footerAnchors = document.querySelectorAll('footer a');

  // For each of the anchors...
  for (const anchor of footerAnchors) {
    // If the user hovers over the anchor: add the 'expand-background' class
    anchor.addEventListener('mouseover', () => {
      if (!anchor.classList.contains('expand-background')) {
        anchor.classList.add('expand-background');
      }
    });

    // When the animation ends: remove the 'expand-background' class
    anchor.addEventListener('mouseout', () => {
      anchor.classList.remove('expand-background');
    });
  }
}

export { animateFooter };
