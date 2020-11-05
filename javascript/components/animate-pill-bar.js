function animatePillBar() {
  const anchors = document.querySelectorAll(".pill-items .pill-item");
  const tabItems = document.querySelectorAll(".tab-items .tab-item");

  for (let anchor of anchors) {
    const anchorRef = anchor.getAttribute('data-target');

    anchor.addEventListener('click', () => {
      if (!anchor.classList.contains('active')) {
        for (let i = 0; i < anchors.length; i++) {
          anchors[i].classList.remove('active');
        }

        anchor.classList.add('active');

        for (let i = 0; i < tabItems.length; i++) {
          (tabItems[i].id == anchorRef) ? tabItems[i].classList.add('active') : tabItems[i].classList.remove('active');
        }
      }
    });
  }
}

export { animatePillBar };
