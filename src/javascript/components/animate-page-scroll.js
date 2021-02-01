// Function that makes the same page anchors scroll smoothly to their
// respective destination
function animatePageScroll() {
  // Variables:
  //   anchors: Anchors that scroll to a page element
  //   navbar:  Navbar element
  //   banner:  Banner element
  const anchors = document.querySelectorAll(".page-scroll"),
    navbar = document.querySelector("nav"),
    banner = document.getElementById("banner");

  // For each of the anchors...
  for (let anchor of anchors) {
    // CSS selector of the anchor target
    const anchorRef = anchor.getAttribute("href");

    anchor.addEventListener("click", (event) => {
      event.preventDefault();
      // Get the anchor destination distance from the top of the page;
      // Banner height + distance of the section from the top of the 'main'
      // element - Navbar height
      const offsetTop =
        banner.offsetHeight +
        document.querySelector(anchorRef).offsetTop -
        navbar.offsetHeight;
      // Smoothly scroll to the section
      scroll({
        top: anchorRef === "#banner" ? 0 : offsetTop,
        behavior: "smooth",
      });
    });
  }
}

export { animatePageScroll };
