// let imgs = [];
// let cat1, cat2, cat3, cat4, cat5, cat6, cat7, cat8, cat9, cat10, cat11, cat12, cat13;
function preload(){
  cat1 = loadImage('images/cat1.jpg');
  cat2 = loadImage('images/cat2.jpg');
  cat3 = loadImage('images/cat3.jpg');
  cat4 = loadImage('images/cat4.jpg');
  cat5 = loadImage('images/cat5.jpg');
  cat6 = loadImage('images/cat6.jpg');
  cat7 = loadImage('images/cat7.jpg');
  cat8 = loadImage('images/cat8.jpg');
  cat9 = loadImage('images/cat9.jpg');
  cat10 = loadImage('images/cat10.jpg');
  cat11 = loadImage('images/cat11.jpg');
  cat12 = loadImage('images/cat12.jpg');
  cat13 = loadImage('images/cat13.jpg');
  cat14 = loadImage('images/cat14.jpg');
  cat15 = loadImage('images/cat15.jpg');
  cat16 = loadImage('images/cat16.jpg');
  dat1 = loadImage('drawings/cat1.png');
  dat2 = loadImage('drawings/cat2.png');
  dat3 = loadImage('drawings/cat3.png');
  dat4 = loadImage('drawings/cat4.png');
  dat5 = loadImage('drawings/cat5.png');
  dat6 = loadImage('drawings/cat6.png');
  dat7 = loadImage('drawings/cat7.png');
  dat8 = loadImage('drawings/cat8.png');
  dat9 = loadImage('drawings/cat9.png');
  dat10 = loadImage('drawings/cat10.png');
  dat11 = loadImage('drawings/cat11.png');
  dat12 = loadImage('drawings/cat12.png');
  dat13 = loadImage('drawings/cat13.png');
  dat14 = loadImage('drawings/cat14.png');
  dat15 = loadImage('drawings/cat15.png');
  dat16 = loadImage('drawings/cat16.png');
}

function setup() {
  pixelDensity(1);
  createCanvas(400, 400);
  
}

function draw() {
  background(0);
  // image(cat1, 0, 0, 100, 100);
  // image(cat2, 0, 100, 100, 100);
  // image(cat3, 0, 200, 100, 100);
  // image(cat4, 0, 300, 100, 100);
  // image(cat5, 100, 100, 100, 100);
  // image(cat6, 100, 200, 100, 100);
  // image(cat7, 100, 300, 100, 100);
  // image(cat8, 200, 100, 100, 100);
  // image(cat9, 200, 200, 100, 100);
  // image(cat10, 200, 300, 100, 100);
  // image(cat11, 300, 100, 100, 100);
  // image(cat12, 300, 200, 100, 100);
  // image(cat13, 300, 300, 100, 100);
  // image(cat14, 100, 0, 100, 100);
  // image(cat15, 200, 0, 100, 100);
  // image(cat16, 300, 0, 100, 100);
}

let cats = [];
let drawings = [];
let grid = []; // Store the current images (cats or drawings)
let imgSize = 100;
let hoverIndex = -1; // Keep track of the hovered image index
let showText = true; // Show the "click an image" text initially

function preload() {
  for (let i = 1; i <= 16; i++) {
    cats.push(loadImage(`images/cat${i}.jpg`));
    drawings.push(loadImage(`drawings/cat${i}.png`));
  }
}

function setup() {
  pixelDensity(1);
  createCanvas(400, 400);

  // Initialize grid with cat images
  for (let i = 0; i < 16; i++) {
    grid.push(cats[i]);
  }
}

function draw() {
  background(0);

  // Display the images in a 4x4 grid
  for (let i = 0; i < 16; i++) {
    let x = (i % 4) * imgSize; // Column
    let y = Math.floor(i / 4) * imgSize; // Row

    if (i === hoverIndex) {
      tint(173, 216, 230, 150); // Light blue tint
    } else {
      noTint(); // Reset to normal
    }

    image(grid[i], x, y, imgSize, imgSize);
  }

  // Display the text in the center of the canvas if showText is true
  if (showText) {
    fill(255); // White text
    textAlign(CENTER, CENTER); // Center text alignment
    textSize(24);
    text("Click an image", width / 2, height / 2);
  }
}

function mouseMoved() {
  // Determine which image the mouse is hovering over
  let col = Math.floor(mouseX / imgSize);
  let row = Math.floor(mouseY / imgSize);

  if (col >= 0 && col < 4 && row >= 0 && row < 4) {
    hoverIndex = row * 4 + col; // Update hover index
  } else {
    hoverIndex = -1; // If the mouse is outside the grid
  }

  // Redraw on hover for live updates
  redraw();
}

function mousePressed() {
  if (hoverIndex !== -1) {
    // Toggle between cat and drawing for the hovered image
    grid[hoverIndex] = grid[hoverIndex] === cats[hoverIndex] ? drawings[hoverIndex] : cats[hoverIndex];

    // Hide the text after the first click
    showText = false;
  }
}
