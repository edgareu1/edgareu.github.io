// Function that animates the toggle positioning
// Keep the toggle in a fixed position at the bottom/right corner after scrolling by the banner
function animateTogglePositioning() {
  const toogleContainer = document.querySelector('.animation-toggle-container');
  const banner = document.querySelector('#banner');

  updateTogglePosition();

  document.addEventListener('scroll', () => {
    updateTogglePosition();
  });

  // Function that updates the positioning class of the toggle depending on the user scroll position;
  // If the user is in the initial banner position, keep it as pos-rel (position: relative),
  // otherwise change it to pos-fixed (position: fixed);
  // The 70 in the calculation refers to the 50px (distance of the content from the banner) plus
  // 20px (distance from the bottom of the post-fixed class)
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
