import { updateCanvasDimensions } from './update-canvas-dimensions.js'

// Function that will create the Technologies section background animation
// Arguments:
//   canvas: Canvas element of the Technologies section
function techBackAnimation(canvasElement) {
  // Variable that stores the technologies names and their respective importance
  var techList = { "Ruby": 28, "Rails": 25, "JavaScript": 22, "HTML": 21, "CSS": 23, "SQL": 12, "REGEX": 10, "Canvas": 5, "Git": 16, "GitHub": 14, "Bootstrap": 10, "AJAX": 16, "jQuery": 12, "Web API": 16, "Stripe": 8, "Heroku": 6, "Cloudinary": 7, "OOP": 14, "MVC": 15, "Mailer": 18 },
      techAttr = [];

  // Update the canvas dimensions to the ones of the User device
  updateCanvasDimensions(canvasElement);

	if (canvasElement.getContext) {
		var canvas = canvasElement.getContext('2d'),
        canvasWidth = canvasElement.width,
        canvasHeight = canvasElement.height;

    // Constructor of a Technology element to display in the canvas
    class Tech {
      constructor(key) {
        this.text = key;
        this.x = Math.random() * canvasWidth;
        this.y = Math.random() * (canvasHeight - (techList[key] * 2)) + techList[key];
        this.font = techList[key] * 3;
        this.speed = (techList[key] / 8) + (Math.random() * 0.2);
      }
    }

    // Construct a Technology element for each of the techList key/value pairs
		for (let key in techList) {
      techAttr.push(new Tech(key));
		}

    // Function that creates the canvas animation
		function animation() {
      // For each of the techologies...
			for (var i = 0; i < techAttr.length; i++) {
        // Display it in the canvas
				canvas.font = techAttr[i].font + 'px arial';
				canvas.fillText(techAttr[i].text, techAttr[i].x, techAttr[i].y);
				techAttr[i].width = canvas.measureText(techAttr[i].text).width;
				canvas.stroke();

        // Update it's attributes to simulate it moving in the next animation
        if (techAttr[i].x > canvasElement.width) {
          techAttr[i].x = - techAttr[i].width;
          techAttr[i].y = Math.random() * (canvasElement.height - (techAttr[i].font * 2)) + techAttr[i].font;
        } else {
          techAttr[i].x += techAttr[i].speed;
        }
			}
		}

    // Create an infinite loop that moves the canvas technologies every 20ms
		setInterval(function() {
			canvas.clearRect(0, 0, canvasElement.width, canvasElement.height);
			animation();
		}, 20);
	}
}

export { techBackAnimation };
