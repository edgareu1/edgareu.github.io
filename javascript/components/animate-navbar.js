import { updateDimensionsNavbar } from './update-dimensions-navbar.js'

// Function that animates the navbar
function animateNavbar() {
  const anchors = document.querySelectorAll("#navbar .btn-nav"),  // Navbar anchors
        linksList = document.querySelector('.navbar-links'),      // Navbar links list
        moreLink = document.querySelector('.navbar-show-more');   // Navbar show-more button

  smoothNavbarAnchors();    // Make the navbar anchors scroll smoothly to their respective destination
  refreshActiveElement();   // Refresh the navbar active element
  animateShowMore();        // Animate the show-more feature
  updateDimensionsNavbar(linksList, moreLink);  // Update the navbar dimensions

  // If the user scrolls his device window, refresh the navbar active element
  document.addEventListener('scroll', () => {
    refreshActiveElement();
  });

  // Function that makes the navbar anchors scroll smoothly to their respective destination
  function smoothNavbarAnchors() {
    // For each of the anchors...
    for (let anchor of anchors) {
      const anchorRef = anchor.getAttribute('data-target');

      anchor.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent the anchor default click behavior

        // Get the anchor destination distance from the top of the page
        // Banner height (+) distance of the section from the top of the 'profile-content' element (-) Navbar height
        const offsetTop = document.getElementById('banner').offsetHeight + document.querySelector(anchorRef).offsetTop - 50;

        // Smoothly scroll to the section
        scroll({
          top: anchorRef == '#banner' ? 0 : offsetTop,
          behavior: "smooth"
        });
      });
    }
  }

  // Function that refreshes the navbar active element
  function refreshActiveElement() {
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
      } else if (linksList.classList.contains('show') && !event.target.classList.contains('btn-nav')) {
        linksList.classList.remove('show');
      }
    });
  }
}

export { animateNavbar }
