import { smoothScrolling } from './smooth-scrolling.js';

// Function that makes the navbar anchors scroll smoothly to their respective destination
function smoothNavbarAnchors() {
  const anchors = document.querySelectorAll("#navbar [data-target]"); // Get the anchors of the navbar

  // For each of the anchors...
  for (let anchor of anchors) {
    const anchorRef = anchor.getAttribute('data-target');

    // Make sure the anchor has a page destination
    if (typeof anchorRef !== "undefined") {
      // Upon clicking on the anchor, scroll smoothly to the respective destination
      smoothScrolling(anchor, anchorRef, 250);
    }
  }
}
