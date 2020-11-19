// Prepare the app JS here
import { animateCarousels } from './components/animate-carousels.js'
import { animateFooter } from './components/animate-footer.js'
import { animateGitModal } from './components/animate-git-modal.js'
import { animateNavbar } from './components/animate-navbar.js'
import { animatePillBar } from './components/animate-pill-bar.js'
import { createGitCalendar } from './components/create-git-calendar.js'
import { techWordsAnimation } from './components/tech-words-animation.js'
import { typeBannerCode } from './components/type-banner-code.js'
import { updateDimensionsCanvas } from './components/update-dimensions-canvas.js'

animateCarousels();
animateFooter();
animateGitModal();
animateNavbar();
animatePillBar();
createGitCalendar();
typeBannerCode();

var canvas = document.getElementById('tech-canvas');
if (canvas) {
  techWordsAnimation(canvas);  // Create the background canvas animation

  // If the User resizes his device window, update the background canvas animation dimensions
  window.addEventListener('resize', () => {
    updateDimensionsCanvas(canvas);
  });
}
