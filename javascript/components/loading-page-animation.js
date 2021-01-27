import { techWordsAnimation } from './tech-words-animation.js'
import { typeBannerCode } from './type-banner-code.js'

function loadingPageAnimation() {
  const loadingScreen = document.getElementById('page-loading'),
    pageContent= document.getElementById('page-content'),
    canvas = document.getElementById('tech-canvas'),
    profileContainer = document.getElementById('profile-container');

  document.addEventListener('readystatechange', () => {
    if (document.readyState === 'complete') {
      pageContent.style.display = 'block';
      loadingScreen.style.display = 'none';

      typeBannerCode();
      techWordsAnimation(canvas, profileContainer);
    }
  });
}

export { loadingPageAnimation };
