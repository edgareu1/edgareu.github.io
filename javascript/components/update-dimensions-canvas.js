// Function that updates the Canvas dimensions to fill the whole 'main' element
// Arguments:
//   canvas:            Canvas element that will have its dimensions updated
//   profileContainer:  Canvas container that will have its height updated
function updateDimensionsCanvas(canvasElement, profileContainer) {
  // Get the 'main' element dimensions (which the canvas should mimic)
  let profileContent = document.querySelector('main'),
      canvasWidth = profileContent.offsetWidth,
      canvasHeight = profileContent.offsetHeight;

  // Set the canvas dimensions
  canvasElement.width = canvasWidth;
  canvasElement.height = canvasHeight;

  // Set the canvas inner container dimensions
  canvasElement.style.width = `${canvasWidth}px`;
  canvasElement.style.height = `${canvasHeight}px`;

  // Set the 'profile-container' height
  profileContainer.style.height = `${canvasHeight}px`;

  // Make sure the canvas characteristics stay the same
  let canvas = canvasElement.getContext('2d');
  canvas.strokeStyle = 'rgba(50, 50, 50, 0.4)';
  canvas.fillStyle = 'rgba(50, 50, 50, 0.4)';
  canvas.lineWidth = 5;
}

export { updateDimensionsCanvas };
