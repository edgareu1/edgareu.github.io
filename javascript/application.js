// Prepare the app JS here
import { animateCarousels } from './components/animate-carousels.js'
import { animateGitModal } from './components/animate-git-modal.js'
import { animateNavbar } from './components/animate-navbar.js'
import { animatePageScroll } from './components/animate-page-scroll.js'
import { animateTogglePositioning } from './components/animate-toggle-positioning.js'
import { createGitCalendar } from './components/create-git-calendar.js'
import { loadingPageAnimation } from './components/loading-page-animation.js'
import { updateDimensionsCanvas } from './components/update-dimensions-canvas.js'
import { updateDimensionsNavbar } from './components/update-dimensions-navbar.js'

loadingPageAnimation();
animateGitModal();
animateNavbar();
animatePageScroll();
animateTogglePositioning();
animateCarousels();

const canvas = document.getElementById('tech-canvas'),
  profileContainer = document.getElementById('profile-container'),
  navbarLinksList = document.querySelector('.nav-links'),
  navbarMoreLink = document.querySelector('.nav-show-more');

// If the User resizes his device window, update the canvas and navbar dimensions
window.addEventListener('resize', () => {
  updateDimensionsCanvas(canvas, profileContainer);
  updateDimensionsNavbar(navbarLinksList, navbarMoreLink);
});

createGitCalendar();
