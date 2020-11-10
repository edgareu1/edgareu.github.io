// Function that updates the Canvas dimensions to fill the whole profile content
// Arguments:
//   canvas: Canvas element that will have its dimensions updated
function updateCanvasDimensions(canvasElement) {
  // Get the profile-content element dimensions (which the canvas should mimic)
  let profileContent = document.getElementById('profile-content'),
      canvasWidth = profileContent.offsetWidth,
      canvasHeight = profileContent.offsetHeight;

  // Set the canvas dimensions
  canvasElement.width = canvasWidth;
  canvasElement.height = canvasHeight;

  // Set the canvas container dimensions
  canvasElement.style.width = `${canvasWidth}px`;
  canvasElement.style.height = `${canvasHeight}px`;

  // Make sure the canvas characteristics stay the same
  let canvas = canvasElement.getContext('2d');
  canvas.strokeStyle = 'rgba(100, 100, 100, 0.6)';
  canvas.fillStyle = 'rgba(100, 100, 100, 0.6)';
  canvas.lineWidth = 5;
}

export { updateCanvasDimensions };
