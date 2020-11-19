// Function that animates the navbar
function animateNavbar() {
  const anchors = document.querySelectorAll("#navbar .btn-nav");  // Get the navbar anchors

  smoothNavbarAnchors();    // Make the navbar anchors scroll smoothly to their respective destination
  refreshNavbarPosition();  // Refresh the navbar active anchor

  // If the user scrolls his device window, refresh the navbar active anchor
  document.addEventListener('scroll', () => {
    refreshNavbarPosition();
  });

  // Function that makes the navbar anchors scroll smoothly to their respective destination
  function smoothNavbarAnchors() {
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

  // Function that refreshes the navbar active anchor
  function refreshNavbarPosition() {
    // Get the user current window position and the navbar and banner elements height
    const currentPos = window.scrollY,
          navbarHeight = 50,
          bannerHeight = document.getElementById('banner').offsetHeight;

    // For each of the anchors...
    for (const anchor of anchors) {
      // Get the anchor target element and his distance from the top
      const anchorRef = anchor.getAttribute('data-target'),
            target = document.querySelector(anchorRef),
            targetOffsetTop = ( anchorRef == '#banner' ?  0 : bannerHeight + target.offsetTop );

      // Get the element the user is currently on and 'activate' its respective navbar anchor
      if (targetOffsetTop - navbarHeight  <= currentPos && targetOffsetTop + target.offsetHeight - navbarHeight > currentPos) {
        anchor.classList.add('active');
      } else {
        anchor.classList.remove('active');
      }
    }
  }
}

export { animateNavbar }
