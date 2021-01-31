// Function that updates the Canvas dimensions to match the 'main' element
// Arguments:
//   canvas:          Canvas element that will have its dimensions updated
//   canvasContainer: Canvas container that will have its height updated
function updateDimensionsCanvas(canvasElement, canvasContainer) {
  // Variables:
  //   profileContent: Main element
  //   canvasWidth:    Main element width
  //   canvasHeight:   Main element height
  //   canvas:         Canvas element context
  const profileContent = document.querySelector('main'),
    canvasWidth = profileContent.offsetWidth,
    canvasHeight = profileContent.offsetHeight,
    canvas = canvasElement.getContext('2d');

  // Set the canvas dimensions
  canvasElement.width = canvasWidth;
  canvasElement.height = canvasHeight;
  // Set the canvas inner container dimensions
  canvasElement.style.width = canvasWidth + 'px';
  canvasElement.style.height = canvasHeight + 'px';
  // Set the 'canvasContainer' height
  canvasContainer.style.height = canvasHeight + 'px';
  // Make sure the canvas characteristics stay the same
  canvas.strokeStyle = 'rgba(80, 80, 80, 0.4)';
  canvas.fillStyle = 'rgba(80, 80, 80, 0.4)';
  canvas.lineWidth = 5;
}

export { updateDimensionsCanvas }
