import { updateCanvasDimensions } from './update-canvas-dimensions.js'

function techBackAnimation(canvasElement) {
	var words = { "Ruby": 24, "Rails": 20, "JavaScript": 18, "HTML": 16, "CSS": 15, "SQL": 8, "REGEX": 7, "Canvas": 4, "Git": 11, "GitHub": 10, "Bootstrap": 8, "AJAX": 13, "jQuery": 9, "Web API": 11, "Stripe": 7, "Heroku": 5 };
  var wordsAttr = [];

  updateCanvasDimensions(canvasElement);

	if (canvasElement.getContext) {
		var canvas = canvasElement.getContext('2d'),
        canvasWidth = canvasElement.width,
        canvasHeight = canvasElement.height;

    class Tech {
      constructor(word) {
        this.text = word;
        this.x = Math.random() * canvasWidth;
        this.y = Math.random() * canvasHeight;
        this.font = words[word] * (1 + (Math.random() * 0.35)) * 3 + 'px arial';
        this.speed = words[word] / 5;
      }
    }

		for (let word in words) {
			wordsAttr.push(new Tech(word));
		}

		function animation() {
			for (var i = 0; i < wordsAttr.length; i++) {
				canvas.font = wordsAttr[i].font;
				canvas.fillText(wordsAttr[i].text, wordsAttr[i].x, wordsAttr[i].y);
				wordsAttr[i].width = canvas.measureText(wordsAttr[i].text).width;
				canvas.stroke();

        if (wordsAttr[i].x > canvasElement.width) {
          wordsAttr[i].x = - wordsAttr[i].width;
          wordsAttr[i].y = Math.random() * canvasElement.height;
        } else {
          wordsAttr[i].x += wordsAttr[i].speed;
        }
			}
		}

		setInterval(function() {
			canvas.clearRect(0, 0, canvasElement.width, canvasElement.height);
			animation();
		}, 20);
	}
}

export { techBackAnimation };
