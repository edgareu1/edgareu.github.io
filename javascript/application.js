// Prepare the app JS here
import { smoothNavbarAnchors } from './components/smooth-navbar-anchors.js'
import { techBackAnimation } from './components/tech-back-animation.js'
import { typeBannerCode } from './components/type-banner-code.js'
import { updateCanvasDimensions } from './components/update-canvas-dimensions.js'

smoothNavbarAnchors();
typeBannerCode();

var canvas = document.getElementById('tech-canvas');
if (canvas) {
  techBackAnimation(canvas);  // Create the background canvas animation

  // If the User resizes his device window, update the background canvas animation dimensions
  window.addEventListener('resize', () => {
    updateCanvasDimensions(canvas);
  });
}
