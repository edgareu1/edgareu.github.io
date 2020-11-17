function animateFooter() {
  const footerAnchors = document.querySelectorAll('.footer a');

  for (const anchor of footerAnchors) {
    anchor.addEventListener('mouseover', () => {
      if (anchor.classList != 'splash') anchor.classList.add('splash');
    });

    anchor.addEventListener('mouseout', () => {
      anchor.classList.remove('splash');
    });
  }
}
