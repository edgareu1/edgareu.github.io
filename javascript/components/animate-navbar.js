function animateNavbar() {
  const anchors = document.querySelectorAll("#navbar a");
  refreshNavbar();

  document.addEventListener('scroll', () => {
    refreshNavbar();
  });

  function refreshNavbar() {
    var currentPos = window.scrollY;

    for (const anchor of anchors) {
      const anchorRef = anchor.getAttribute('data-target');
      const target = document.querySelector(anchorRef);

      if (target.offsetTop - 50  <= currentPos && target.offsetTop + target.offsetHeight - 50 > currentPos) {
        anchor.classList.add('active');
      } else {
        anchor.classList.remove('active');
      }
    }
  }
}

export { animateNavbar }
