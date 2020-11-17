// Prepare the app JS here
import { animateCarousels } from './components/animate-carousels.js'
import { animateGitModal } from './components/animate-git-modal.js'
import { animateNavbar } from './components/animate-navbar.js'
import { animatePillBar } from './components/animate-pill-bar.js'
import { createGitCalendar } from './components/create-git-calendar.js'
import { smoothNavbarAnchors } from './components/smooth-navbar-anchors.js'
import { techWordsAnimation } from './components/tech-words-animation.js'
import { typeBannerCode } from './components/type-banner-code.js'
import { updateCanvasDimensions } from './components/update-canvas-dimensions.js'

animateCarousels();
animateGitModal();
animateNavbar();
animatePillBar();
createGitCalendar();
smoothNavbarAnchors();
typeBannerCode();

var canvas = document.getElementById('tech-canvas');
if (canvas) {
  techWordsAnimation(canvas);  // Create the background canvas animation

  // If the User resizes his device window, update the background canvas animation dimensions
  window.addEventListener('resize', () => {
    updateCanvasDimensions(canvas);
  });
}
