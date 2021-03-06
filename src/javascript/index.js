// Import the app JS here
import { animateCarousels } from "./components/animate-carousels.js";
import { animateGitModal } from "./components/animate-git-modal.js";
import { animateLoadingPage } from "./components/animate-loading-page.js";
import { animateNavbar } from "./components/animate-navbar.js";
import { animatePageScroll } from "./components/animate-page-scroll.js";
import { animateTogglePositioning } from "./components/animate-toggle-positioning.js";
import { createGitCalendar } from "./components/create-git-calendar.js";

// Import the app CSS here
import "../stylesheets/index.scss";

// Prepare the app JS here
animateLoadingPage();
animateGitModal();
animateNavbar();
animatePageScroll();
animateTogglePositioning();
animateCarousels();
createGitCalendar();
