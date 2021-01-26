// Function that animates the toggle positioning
// Keep the toggle in a fixed position at the bottom/right corner after scrolling by the banner
function animateTogglePositioning() {
  const toogleContainer = document.querySelector('.animation-toggle-container'),
    banner = document.querySelector('#banner'),
    main = document.querySelector('main');

  updateTogglePosition();

  document.addEventListener('scroll', () => {
    updateTogglePosition();
  });

  // Function that updates the positioning class of the toggle depending on the user scroll position;
  // If the user is in the banner: position absolute at the top of the main;
  // If the user is in the main: position fixed at the bottom of the window;
  // Otherwise, the user is in the footer: position absolute at the bottom of the main;
  // The 40 in the calculation refers to the 20px (distance of the content from the banner) plus
  // 20px (distance from the bottom of the post-fixed class)
  function updateTogglePosition() {
    if (window.innerHeight + window.scrollY > banner.offsetHeight + main.offsetHeight) {
      toogleContainer.classList.remove('pos-fixed', 'top');
      toogleContainer.classList.add('pos-abs', 'bottom');
    } else if (window.innerHeight + window.scrollY > banner.offsetHeight + toogleContainer.offsetHeight + 40) {
      toogleContainer.classList.remove('pos-abs', 'bottom', 'top');
      toogleContainer.classList.add('pos-fixed');
    } else {
      toogleContainer.classList.remove('pos-fixed', 'bottom');
      toogleContainer.classList.add('pos-abs', 'top');
    }
  }
}

export { animateTogglePositioning };
