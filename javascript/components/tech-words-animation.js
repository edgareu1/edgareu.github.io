import { updateDimensionsCanvas } from './update-dimensions-canvas.js'

// Function that will create the Technologies words background animation
// Arguments:
//   canvas:            Canvas element to fill
//   profileContainer:  Canvas container
function techWordsAnimation(canvasElement, profileContainer) {
  // Variable that stores the technologies names and their respective importance
  var techList = { 'Ruby': 24, 'Rails': 24, 'JavaScript': 24, 'HTML': 24, 'CSS': 24, 'API': 18, 'AJAX': 18, 'Sass': 16, 'Git': 16, 'GitHub': 14, 'SQL': 14, 'OOP': 14, 'MVC': 14, 'REST': 14, 'PostgreSQL': 12, 'JSON': 12, 'REGEX': 12, 'jQuery': 12, 'Bootstrap': 12, 'Stripe': 10, 'React': 10, 'Node.js': 10, 'Heroku': 10, 'Canvas': 6, 'SVG': 6 },
      techAttr = [],
      isPaused = false,
      rAF;

  const numTech = objLength(techList),       // Number of technologies in the 'techList'
        helperArray = randomArray(numTech);  // Array to help the vertical positioning of the words

  // Update the canvas dimensions to fill the whole 'main' element
  updateDimensionsCanvas(canvasElement, profileContainer);

	if (canvasElement.getContext) {
		var canvas = canvasElement.getContext('2d'),
        canvasWidth = canvasElement.width,
        canvasHeight = canvasElement.height,
        currentArrayIndex = 0,                // Current index on the helperArray
        sliceHeight = canvasHeight / numTech; // Size of the canvas height that each word should occupy

    // Constructor of a Technology element to display in the canvas
    class Tech {
      constructor(key) {
        this.text = key;
        this.x = Math.random() * canvasWidth;
        this.y = helperArray[currentArrayIndex] * sliceHeight;
        this.font = techList[key] * 3;
        this.speed = (techList[key] + Math.random()) / 16;
      }
    }

    // Construct a Technology element for each of the techList key/value pairs
		for (let key in techList) {
      techAttr.push(new Tech(key));
      currentArrayIndex++;
    }

    // Function that creates the canvas animation
		function animation() {
      // Clear the canvas
      canvas.clearRect(0, 0, canvasElement.width, canvasElement.height);

      // For each of the techologies...
			for (var i = 0; i < techAttr.length; i++) {
        if (currentArrayIndex == numTech) { currentArrayIndex = 0; }

        // Display it in the canvas
				canvas.font = techAttr[i].font + 'px arial';
				canvas.fillText(techAttr[i].text, techAttr[i].x, techAttr[i].y);
				techAttr[i].width = canvas.measureText(techAttr[i].text).width;
				canvas.stroke();

        // Update it's attributes to simulate it moving in the next animation
        if (techAttr[i].x > canvasElement.width) {
          techAttr[i].x = - techAttr[i].width;
          techAttr[i].y = helperArray[currentArrayIndex] * sliceHeight;
          currentArrayIndex++;
        } else {
          techAttr[i].x += techAttr[i].speed;
        }
      }

      rAF = requestAnimationFrame(animation);
    }

    const toogleButton = document.querySelector('.switch');
    toogleButton.addEventListener('click', () => {
      toogleButton.parentElement.classList.toggle('on');

      if (isPaused) {
        isPaused = false;
        animation();
      } else {
        isPaused = true;
        cancelAnimationFrame(rAF);
        canvas.clearRect(0, 0, canvasElement.width, canvasElement.height);
      }
    });

    // Create an animation that moves the canvas technologies
    animation();
  }
}

// Function that returns the length of an object
function objLength(obj) {
  var size = 0;
  for (let i in obj) { size++; }
  return size;
}

// Function that returns a shuffled array with a certain num of elements (begin at 1 and increment by 1)
function randomArray(num) {
  return Array.from({length: num}, (a, b) => b + 1)
              .map(a => [Math.random(), a])
              .sort((a, b) => a[0] - b[0])
              .map(a => a[1]);
}

export { techWordsAnimation };
