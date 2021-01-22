import { updateDimensionsNavbar } from './update-dimensions-navbar.js'

// Function that animates the navbar
function animateNavbar() {
  const anchors = document.querySelectorAll('nav .btn-nav'),  // Navbar anchors
        linksList = document.querySelector('.nav-links'),     // Navbar links list
        moreLink = document.querySelector('.nav-show-more');  // Navbar show-more button

  refreshActiveElement();   // Refresh the navbar active element
  animateShowMore();        // Animate the show-more feature
  updateDimensionsNavbar(linksList, moreLink);  // Update the navbar dimensions

  // If the user scrolls his device window, refresh the navbar active element
  document.addEventListener('scroll', () => {
    refreshActiveElement();
  });

  // Function that refreshes the navbar active element
  function refreshActiveElement() {
    // Get the user current window position and the navbar and banner elements height
    const currentPos = window.scrollY,
          navbarHeight = 50,
          bannerHeight = document.getElementById('banner').offsetHeight;

    // For each of the anchors...
    for (const anchor of anchors) {
      // Get the anchor target element and his distance from the top
      const anchorRef = anchor.getAttribute('href'),
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

  // Function that animates the show-more feature
  function animateShowMore() {
    document.addEventListener('click', (event) => {
      if (event.target.classList.contains('nav-show')) {
        event.preventDefault();

        if (!linksList.classList.contains('show')) {
          linksList.classList.add('show');
        } else {
          linksList.classList.remove('show');
        }
      } else if (linksList.classList.contains('show') && !event.target.classList.contains('nav-link')) {
        linksList.classList.remove('show');
      }
    });
  }
}

export { animateNavbar }
