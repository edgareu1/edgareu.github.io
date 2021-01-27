import { techWordsAnimation } from './tech-words-animation.js'
import { typeBannerCode } from './type-banner-code.js'

function loadingPageAnimation() {
  const loadingScreen = document.getElementById('page-loading'),
    pageContent = document.getElementById('page-content'),
    canvas = document.getElementById('tech-canvas'),
    profileContainer = document.getElementById('profile-container'),
    beginTime = Date.now();

  document.addEventListener('readystatechange', () => {
    if (document.readyState === 'complete') {
      const elapsedTime = Date.now() - beginTime;
      let waitTime = 0;

      if (elapsedTime < 1000) { waitTime = 1000 - elapsedTime; }

      setTimeout(() => {
        displayContent(waitTime);
      }, waitTime);
    }
  });

  function displayContent() {
    pageContent.style.display = 'block';
    loadingScreen.classList.add('close');

    setTimeout(() => {
      document.body.removeChild(loadingScreen);
      document.body.classList.remove('modal-active');

      typeBannerCode();
      techWordsAnimation(canvas, profileContainer);
    }, 350);
  }
}

export { loadingPageAnimation };
