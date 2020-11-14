// Prepare the app JS here
import { animateCarousels } from './components/animate-carousels.js'
import { animateModals } from './components/animate-modals.js'
import { animateNavbar } from './components/animate-navbar.js'
import { animatePillBar } from './components/animate-pill-bar.js'
import { smoothNavbarAnchors } from './components/smooth-navbar-anchors.js'
import { techWordsAnimation } from './components/tech-words-animation.js'
import { typeBannerCode } from './components/type-banner-code.js'
import { updateCanvasDimensions } from './components/update-canvas-dimensions.js'

animateCarousels();
animateModals();
animateNavbar();
animatePillBar();
smoothNavbarAnchors();
typeBannerCode();

const moreInfo = 'For more complete info check <a href="https://github.com/edgareu1" style="color: white; text-decoration: none" target="blank">@edgareu1</a>';

GitHubCalendar(".calendar", "edgareu1", { responsive: true, tooltips: true, summary_text: moreInfo });

var canvas = document.getElementById('tech-canvas');
if (canvas) {
  techWordsAnimation(canvas);  // Create the background canvas animation

  // If the User resizes his device window, update the background canvas animation dimensions
  window.addEventListener('resize', () => {
    updateCanvasDimensions(canvas);
  });
}
