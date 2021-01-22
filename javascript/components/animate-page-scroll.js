// Function that makes the same page anchors scroll smoothly to their respective destination
function animatePageScroll() {
  const anchors = document.querySelectorAll('.page-scroll');

  // For each of the anchors...
  for (let anchor of anchors) {
    const anchorRef = anchor.getAttribute('href');

    anchor.addEventListener('click', (event) => {
      event.preventDefault(); // Prevent the anchor default click behavior

      // Get the anchor destination distance from the top of the page
      // Banner height (+) distance of the section from the top of the 'main' element (-) Navbar height
      const offsetTop = document.getElementById('banner').offsetHeight + document.querySelector(anchorRef).offsetTop - 50;

      // Smoothly scroll to the section
      scroll({
        top: anchorRef == '#banner' ? 0 : offsetTop,
        behavior: 'smooth'
      });
    });
  }
}

export { animatePageScroll };
