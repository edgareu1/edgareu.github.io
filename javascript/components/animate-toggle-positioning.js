function animateTogglePositioning() {
  const toogleContainer = document.querySelector('.animation-toggle-container');
  const banner = document.querySelector('#banner');

  updateTogglePosition();

  document.addEventListener('scroll', () => {
    updateTogglePosition();
  });

  function updateTogglePosition() {
    if (banner.offsetHeight + window.scrollY > window.innerHeight + toogleContainer.offsetHeight + 70) {
      toogleContainer.classList.remove('pos-rel');
      toogleContainer.classList.add('pos-fixed');
    } else {
      toogleContainer.classList.remove('pos-fixed');
      toogleContainer.classList.add('pos-rel');
    }
  }
}

export { animateTogglePositioning };
