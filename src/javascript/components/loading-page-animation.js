import { backgroundWordsAnimation } from "./background-words-animation.js";
import { animateSkillColumnsHeight } from "./animate-skill-columns-height.js";
import { typeBannerCode } from "./type-banner-code.js";

// Function that creates a loading animation while the page loads and,
// after loading, prepares the page content
function loadingPageAnimation() {
  // Variables:
  //   loadingScreen: Container for the loading animation
  //   pageContent:   Page content
  //   beginTime:     Timestamp of when the loading begins
  const loadingScreen = document.getElementById("page-loading"),
    pageContent = document.getElementById("page-content"),
    beginTime = Date.now();

  // When the page finishes loading, display the page content, but make sure
  // the loading animation lasts at least 1s (1000 ms)
  document.addEventListener("readystatechange", () => {
    if (document.readyState === "complete") {
      // Variables:
      //   elapsedTime: Time that took for the page to load
      //   delayTime:   How much time to delay the display of the page content
      const elapsedTime = Date.now() - beginTime;
      let delayTime = 0;

      if (elapsedTime < 1000) {
        delayTime = 1000 - elapsedTime;
      }
      setTimeout(() => {
        displayContent();
      }, delayTime);
    }
  });

  // Function that displays the page content
  function displayContent() {
    // Display the page content
    pageContent.style.display = "block";
    // Add a transition to the loading animation
    loadingScreen.classList.add("close");
    // Wait for the completion of the transition of the loading animation
    setTimeout(() => {
      document.body.removeChild(loadingScreen);
      document.body.classList.remove("modal-active");
      // Begin the page animations
      typeBannerCode();
      backgroundWordsAnimation();
      animateSkillColumnsHeight();
    }, 350);
  }
}

export { loadingPageAnimation };
