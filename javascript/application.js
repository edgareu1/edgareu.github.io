// Prepare the app JS here
import { smoothNavbarAnchors } from './components/smooth-navbar-anchors.js'
import { techBackAnimation } from './components/tech-back-animation.js'
import { typeBannerCode } from './components/type-banner-code.js'

smoothNavbarAnchors();
typeBannerCode();

var canvas = document.getElementById('tech-canvas');
if (canvas) {
  techBackAnimation(canvas);
}
