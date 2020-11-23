// Function that updates the Canvas dimensions to fill the whole 'profile-content'
// Arguments:
//   canvas:            Canvas element that will have its dimensions updated
//   profileContainer:  Canvas container that will have its height updated
function updateDimensionsCanvas(canvasElement, profileContainer) {
  // Get the profile-content element dimensions (which the canvas should mimic)
  let profileContent = document.getElementById('profile-content'),
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
  canvas.strokeStyle = 'rgba(100, 100, 100, 0.6)';
  canvas.fillStyle = 'rgba(100, 100, 100, 0.6)';
  canvas.lineWidth = 5;
}

export { updateDimensionsCanvas };
