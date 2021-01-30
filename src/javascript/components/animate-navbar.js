import { updateDimensionsNavbar } from './update-dimensions-navbar.js'

// Function that animates the navbar
function animateNavbar() {
  // Variables:
  //   navbar:    Navbar element
  //   banner:    Banner element
  //   anchors:   Navbar anchors
  //   linksList: Navbar links list
  //   moreLink:  Navbar show-more button
  const navbar = document.querySelector('nav'),
    banner = document.getElementById('banner'),
    anchors = navbar.querySelectorAll('.btn-nav'),
    linksList = navbar.querySelector('.nav-links'),
    moreLink = navbar.querySelector('.nav-show-more');

  // Turn the 'Edgar' navbar anchor the active link
  // The 'refreshActiveElement' function would not work as the page content is
  // under the CSS 'display: none' property while the page is loading
  anchors[0].classList.add('active');
  // Animate the show-more feature
  animateShowMore();
  // Update the navbar dimensions
  updateDimensionsNavbar(linksList, moreLink);

  // If the user scrolls his device window, refresh the navbar active element
  document.addEventListener('scroll', () => {
    refreshActiveElement();
  });

  // If the User resizes his device window, update the navbar dimensions
  window.addEventListener('resize', () => {
    updateDimensionsNavbar(linksList, moreLink);
  });

  // Function that refreshes the navbar active element
  function refreshActiveElement() {
    // Get the user current window position and the navbar and banner height
    const currentPos = window.scrollY,
      navbarHeight = navbar.offsetHeight,
      bannerHeight = banner.offsetHeight;

    // For each of the anchors...
    for (const anchor of anchors) {
      // Get the anchor target element and his distance from the top
      const anchorRef = anchor.getAttribute('href'),
        target = document.querySelector(anchorRef),
        targetOffsetTop = ( anchorRef === '#banner' ?  0 : bannerHeight + target.offsetTop );

      // Get the element the user is currently on and 'activate' its respective
      // navbar anchor
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
