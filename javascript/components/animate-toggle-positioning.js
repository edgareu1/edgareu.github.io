// Function that animates the toggle positioning
// Keep the toggle in a fixed position at the bottom/right corner after scrolling by the banner
function animateTogglePositioning() {
  const toogleContainer = document.querySelector('.animation-toggle-container'),
    banner = document.querySelector('#banner'),
    main = document.querySelector('main'),
    skillsContainer = document.querySelector('#skills .section-container');

  let skillsContainerPaddingTop,
    distanceBannerMain;

  updateTogglePosition();

  document.addEventListener('scroll', () => {
    updateTogglePosition();
  });

  // Function that updates the positioning class of the toggle depending on the user scroll position;
  // If the user is in the banner: position absolute at the top of the main;
  // If the user is in the main: position fixed at the bottom of the window;
  // Otherwise, the user is in the footer: position absolute at the bottom of the main;
  function updateTogglePosition() {
    skillsContainerPaddingTop = window.getComputedStyle(skillsContainer, null).getPropertyValue('padding-top');
    distanceBannerMain = Number(skillsContainerPaddingTop.slice(0, 2));

    if (window.innerHeight + window.scrollY > banner.offsetHeight + main.offsetHeight) {
      toogleContainer.classList.remove('pos-fixed', 'top');
      toogleContainer.style.top = '';
      toogleContainer.classList.add('pos-abs', 'bottom');
    } else if (window.innerHeight + window.scrollY > banner.offsetHeight + toogleContainer.offsetHeight + distanceBannerMain + 20) {
      toogleContainer.classList.remove('pos-abs', 'bottom', 'top');
      toogleContainer.style.top = '';
      toogleContainer.classList.add('pos-fixed');
    } else {
      toogleContainer.classList.remove('pos-fixed', 'bottom');
      toogleContainer.classList.add('pos-abs', 'top');
      toogleContainer.style.top = distanceBannerMain + 'px';
    }
  }
}

export { animateTogglePositioning };
