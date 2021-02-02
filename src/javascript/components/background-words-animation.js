import { updateDimensionsCanvas } from "./update-dimensions-canvas.js";

// Function that will create the background running technology words animation
function backgroundWordsAnimation() {
  // Variables:
  //   canvasElement:   Canvas element to fill
  //   canvasContainer: Canvas container
  //   techList:        Object that stores the tech names and their relevance
  //   numTech:         Number of technologies in the 'techList'
  //   helperArray:     Array to help the vertical positioning of the words
  //   techAttr:        Array that stores the Tech objects
  //   rAF:             Store the animation
  const canvasElement = document.getElementById("tech-canvas"),
    canvasContainer = document.getElementById("profile-container"),
    techList = {
      Ruby: 24,
      Rails: 24,
      JavaScript: 24,
      HTML: 24,
      CSS: 24,
      API: 18,
      AJAX: 18,
      React: 16,
      "Node.js": 16,
      Sass: 16,
      Git: 16,
      GitHub: 14,
      SQL: 14,
      OOP: 14,
      MVC: 14,
      REST: 14,
      PostgreSQL: 12,
      JSON: 12,
      REGEX: 12,
      jQuery: 12,
      Bootstrap: 12,
      Webpack: 10,
      Stripe: 10,
      Heroku: 10,
      Canvas: 6,
      SVG: 6,
    },
    numTech = objLength(techList),
    helperArray = randomArray(numTech);
  let techAttr = [],
    rAF;

  // Update the canvas dimensions to match the 'main' element
  updateDimensionsCanvas(canvasElement, canvasContainer);

  if (canvasElement.getContext) {
    // Variables:
    //   canvas:            Canvas element context
    //   toggleButton:      Button that toggles the animation on/off
    //   toogleContainer:   Container of the toggle button
    //   canvasWidth:       Canvas element width
    //   canvasHeight:      Canvas element height
    //   sliceHeight:       Slice of the canvas height for each word
    //   currentArrayIndex: Current index on the 'helperArray'
    const canvas = canvasElement.getContext("2d"),
      toggleButton = document.querySelector(".switch"),
      toogleContainer = toggleButton.parentElement;
    let canvasWidth,
      canvasHeight,
      sliceHeight,
      currentArrayIndex = 0;

    // Constructor of a Technology element to display on the canvas
    class Tech {
      constructor(key) {
        this.text = key;
        this.x = Math.random() * canvasWidth;
        this.posY = helperArray[currentArrayIndex];
        this.y = helperArray[currentArrayIndex] * sliceHeight;
        this.font = techList[key] * 2.5;
        this.speed = (techList[key] + Math.random()) / 16;
      }
    }

    resetCanvasVariablesSizing();

    // Construct a Tech object for each of the 'techList' key/value pairs
    for (let key in techList) {
      techAttr.push(new Tech(key));
      currentArrayIndex++;
    }

    // Initiate the animation that moves the canvas technologies
    animateCanvas();

    // If the User clicks on the toggle button, stop/resume the animation
    toggleButton.addEventListener("click", () => {
      if (toogleContainer.classList.contains("on")) {
        toogleContainer.classList.remove("on");
        cancelAnimationFrame(rAF);
        canvas.clearRect(0, 0, canvasWidth, canvasHeight);
      } else {
        toogleContainer.classList.add("on");
        animateCanvas();
      }
    });

    // If the User resizes his device window, update the canvas dimensions, the
    // canvas sizing variables and the vertical position of the words
    window.addEventListener("resize", () => {
      updateDimensionsCanvas(canvasElement, canvasContainer);
      resetCanvasVariablesSizing();
      for (let i = 0; i < techAttr.length; i++) {
        techAttr[i].y = techAttr[i].posY * sliceHeight;
      }
    });

    // Function that creates the canvas animation
    function animateCanvas() {
      // Clear the canvas
      canvas.clearRect(0, 0, canvasWidth, canvasHeight);

      // For each of the techologies...
      for (let i = 0; i < techAttr.length; i++) {
        if (currentArrayIndex === numTech) {
          currentArrayIndex = 0;
        }
        // Display it in the canvas
        canvas.font = techAttr[i].font + "px arial";
        canvas.fillText(techAttr[i].text, techAttr[i].x, techAttr[i].y);
        techAttr[i].width = canvas.measureText(techAttr[i].text).width;
        canvas.stroke();
        // Update it's attributes to simulate it moving in the next animation
        if (techAttr[i].x > canvasWidth) {
          techAttr[i].x = -techAttr[i].width;
          techAttr[i].posY = helperArray[currentArrayIndex];
          techAttr[i].y = helperArray[currentArrayIndex] * sliceHeight;
          currentArrayIndex++;
        } else {
          techAttr[i].x += techAttr[i].speed;
        }
      }
      // Call the animation recursively and save it on the 'rAF' variable
      rAF = requestAnimationFrame(animateCanvas);
    }

    // Function that resets the sizing related canvas variables values
    function resetCanvasVariablesSizing() {
      canvasWidth = canvasElement.width;
      canvasHeight = canvasElement.height;
      // 20 is an arbitrary value that distances the last word from the bottom
      // of the page
      sliceHeight = (canvasHeight - 20) / numTech;
    }
  }
}

// Function that returns the length of an object
function objLength(obj) {
  let size = 0;
  for (let i in obj) {
    size++;
  }
  return size;
}

// Function that returns a shuffled array with a certain num of elements;
// From 1 to 'num'
function randomArray(num) {
  return Array.from({ length: num }, (a, b) => b + 1)
    .map((a) => [Math.random(), a])
    .sort((a, b) => a[0] - b[0])
    .map((a) => a[1]);
}

export { backgroundWordsAnimation };
