import { techWordsAnimation } from './tech-words-animation.js'
import { typeBannerCode } from './type-banner-code.js'

// Function that creates a loading animation while the page loads and, after loading,
// prepares the page content
function loadingPageAnimation() {
  const loadingScreen = document.getElementById('page-loading'),
    pageContent = document.getElementById('page-content'),
    canvas = document.getElementById('tech-canvas'),
    profileContainer = document.getElementById('profile-container'),
    beginTime = Date.now();

  // When the page finishes loading, display the page content, but make sure the loading
  // animation lasts at least 1s (1000 ms)
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

  // Function that displays the page content
  function displayContent() {
    pageContent.style.display = 'block';
    loadingScreen.classList.add('close');

    // Wait for the completion of the fading animation of the 'close' class
    setTimeout(() => {
      document.body.removeChild(loadingScreen);
      document.body.classList.remove('modal-active');

      typeBannerCode();
      techWordsAnimation(canvas, profileContainer);
    }, 350);
  }
}

export { loadingPageAnimation };
