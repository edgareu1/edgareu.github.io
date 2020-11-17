// Function that animates the pill-bar
function animatePillBar() {
  const anchors = document.querySelectorAll(".pill-items .pill-item");  // Get the Pill Bar anchors
  const tabItems = document.querySelectorAll(".tab-items .tab-item");   // Get the Pill Bar content items

  // For each of the anchors...
  for (let anchor of anchors) {
    const anchorRef = anchor.getAttribute('data-target');

    // If the User clicks on an anchor that is not active...
    anchor.addEventListener('click', () => {
      if (!anchor.classList.contains('active')) {
        // Remove the active class from the previous anchor and add it to the new one
        for (let i = 0; i < anchors.length; i++) {
          anchors[i].classList.remove('active');
        }

        anchor.classList.add('active');

        // Remove the active class from the previous item and add it to the new one
        // Do the same for the fade class to create a fading transition
        for (let i = 0; i < tabItems.length; i++) {
          if (tabItems[i].id == anchorRef) {
            tabItems[i].classList.add('active');
            setTimeout(() => { tabItems[i].classList.add('fade'); }, 150);
          } else {
            tabItems[i].classList.remove('fade');
            setTimeout(() => { tabItems[i].classList.remove('active'); }, 150);
          }
        }
      }
    });
  }
}

export { animatePillBar };
