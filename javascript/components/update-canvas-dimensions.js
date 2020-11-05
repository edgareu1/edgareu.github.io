function updateCanvasDimensions(canvasElement) {
  let windowWidth = window.innerWidth,
      windowHeight = window.innerHeight;

  canvasElement.width = windowWidth;
  canvasElement.height = windowHeight;

  canvasElement.style.width = `${windowWidth}px`;
  canvasElement.style.height = `${windowHeight}px`;

  let canvas = canvasElement.getContext('2d');
  canvas.strokeStyle = 'gray';
  canvas.fillStyle = 'gray';
  canvas.lineWidth = 5;
}
