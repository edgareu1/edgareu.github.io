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
import { updateDimensionsNavbar } from './components/update-dimensions-navbar.js'

animateCarousels();
animateFooter();
animateGitModal();
animateNavbar();
animatePillBar();
typeBannerCode();

const canvas = document.getElementById('tech-canvas'),
      profileContainer = document.getElementById('profile-container'),
      navbarLinksList = document.querySelector('.nav-links'),
      navbarMoreLink = document.querySelector('.nav-show-more');

techWordsAnimation(canvas, profileContainer);  // Create the background canvas animation

// If the User resizes his device window, update the canvas and navbar dimensions
window.addEventListener('resize', () => {
  updateDimensionsCanvas(canvas, profileContainer);
  updateDimensionsNavbar(navbarLinksList, navbarMoreLink);
});

createGitCalendar();
