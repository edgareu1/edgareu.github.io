// Function that animates the navbar
function animateNavbar() {
  const anchors = document.querySelectorAll("#navbar a"); // Get the navbar anchors
  refreshNavbar();  // Refresh the navbar active anchor

  // If the user scrolls his device window, refresh the navbar active anchor
  document.addEventListener('scroll', () => {
    refreshNavbar();
  });

  // Function that refreshes the navbar active anchor
  function refreshNavbar() {
    var currentPos = window.scrollY;  // Get the user current window position

    // For each of the anchors...
    for (const anchor of anchors) {
      // Get the anchor target element
      const anchorRef = anchor.getAttribute('data-target');
      const target = document.querySelector(anchorRef);

      // Get the element the user is currently on and 'activate' its respective navbar anchor
      if (target.offsetTop - 50  <= currentPos && target.offsetTop + target.offsetHeight - 50 > currentPos) {
        anchor.classList.add('active');
      } else {
        anchor.classList.remove('active');
      }
    }
  }
}

export { animateNavbar }
