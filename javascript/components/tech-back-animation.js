import { updateCanvasDimensions } from './update-canvas-dimensions.js'

function techBackAnimation(canvasElement) {
	var techList = { "Ruby": 24, "Rails": 20, "JavaScript": 18, "HTML": 16, "CSS": 15, "SQL": 8, "REGEX": 7, "Canvas": 4, "Git": 11, "GitHub": 10, "Bootstrap": 8, "AJAX": 13, "jQuery": 9, "Web API": 11, "Stripe": 7, "Heroku": 5 },
      techAttr = [];

  updateCanvasDimensions(canvasElement);

	if (canvasElement.getContext) {
		var canvas = canvasElement.getContext('2d'),
        canvasWidth = canvasElement.width,
        canvasHeight = canvasElement.height;

    class Tech {
      constructor(key) {
        this.text = key;
        this.x = Math.random() * canvasWidth;
        this.y = Math.random() * canvasHeight;
        this.font = techList[key] * (1 + (Math.random() * 0.35)) * 3 + 'px arial';
        this.speed = techList[key] / 5;
      }
    }

		for (let key in techList) {
			techAttr.push(new Tech(key));
		}

		function animation() {
			for (var i = 0; i < techAttr.length; i++) {
				canvas.font = techAttr[i].font;
				canvas.fillText(techAttr[i].text, techAttr[i].x, techAttr[i].y);
				techAttr[i].width = canvas.measureText(techAttr[i].text).width;
				canvas.stroke();

        if (techAttr[i].x > canvasElement.width) {
          techAttr[i].x = - techAttr[i].width;
          techAttr[i].y = Math.random() * canvasElement.height;
        } else {
          techAttr[i].x += techAttr[i].speed;
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
