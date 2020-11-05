// Function that updates the Canvas dimensions to fill the whole window of the User device
// Arguments:
//   canvas: Canvas element that will have its dimensions updated
function updateCanvasDimensions(canvasElement) {
  // Get the height and width of the User device
  let windowWidth = window.innerWidth,
      windowHeight = window.innerHeight;

  // Set the canvas dimensions to be equal to the ones of the User device
  canvasElement.width = windowWidth;
  canvasElement.height = windowHeight;

  // Set the canvas container dimensions to equal to the ones of the User device
  canvasElement.style.width = `${windowWidth}px`;
  canvasElement.style.height = `${windowHeight}px`;

  // Make sure the canvas characteristics stay the same
  let canvas = canvasElement.getContext('2d');
  canvas.strokeStyle = 'rgba(100, 100, 100, 0.6)';
  canvas.fillStyle = 'rgba(100, 100, 100, 0.6)';
  canvas.lineWidth = 5;
}

export { updateCanvasDimensions };
