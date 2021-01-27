import { techWordsAnimation } from './tech-words-animation.js'
import { typeBannerCode } from './type-banner-code.js'

function loadingPageAnimation() {
  const loadingScreen = document.getElementById('page-loading'),
    canvas = document.getElementById('tech-canvas'),
    profileContainer = document.getElementById('profile-container');

  document.addEventListener('readystatechange', () => {
    if (document.readyState === 'complete') {
      loadingScreen.classList.add('close');

      setTimeout(() => {
        document.body.removeChild(loadingScreen);
        document.body.classList.remove('modal-active');

        typeBannerCode();
        techWordsAnimation(canvas, profileContainer);
      }, 350);
    }
  });
}

export { loadingPageAnimation };
