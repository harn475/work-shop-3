let imgs = [];
let kitty1, kitty2, kitty3, kitty4, kitty5, cat1, cat2, cat3, cat4, cat5, cat6, cat7;
function preload(){
  kitty1 = loadImage('images/kitty 1.png');
  kitty2 = loadImage('images/kitty 2.png');
  kitty3 = loadImage('images/kitty 3.png');
  kitty4 = loadImage('images/kitty 4.png');
  kitty5 = loadImage('images/kitty 5.png');
  cat1 = loadImage('images/cat 1.jpg');
  cat2 = loadImage('images/cat 2.jpg');
  cat3 = loadImage('images/cat 3.jpg');
  cat4 = loadImage('images/cat 4.jpg');
  cat5 = loadImage('images/cat 5.jpg');
  cat6 = loadImage('images/cat 6.jpg');
  cat7 = loadImage('images/cat 7.jpg');
  cat8 = loadImage('images/cat 8.jpg');
  cat9 = loadImage('images/cat 9.jpg');
  cat10 = loadImage('images/cat 10.jpg');
  cat11 = loadImage('images/cat 11.jpg');
  cat12 = loadImage('images/cat 12.jpg');
  cat13 = loadImage('images/cat 13.jpg');
  cat14 = loadImage('images/cat 14.jpg');
  cat15 = loadImage('images/cat 15.jpg');
  cat16 = loadImage('images/cat 16.jpg');
}

function setup() {
  pixelDensity(1);
  createCanvas(400, 400);
  frameRate(1);
  imgs.push (kitty1);
  imgs.push (kitty2);
  imgs.push (kitty3);
  imgs.push (kitty4);
  imgs.push (kitty5);
 
}

function draw() {
  background(30, 200, 100);
  image(cat1, 0, 0, 100, 100);
  image(cat2, 0, 100, 100, 100);
  image(cat3, 0, 200, 100, 100);
  image(cat4, 0, 300, 100, 100);
  image(cat5, 100, 100, 100, 100);
  image(cat6, 100, 200, 100, 100);
  image(cat7, 100, 300, 100, 100);
  image(cat8, 200, 100, 100, 100);
  image(cat9, 200, 200, 100, 100);
  image(cat10, 200, 300, 100, 100)
  image(cat11, 300, 100, 100, 100);
  image(cat12, 300, 200, 100, 100);
  image(cat13, 300, 300, 100, 100);
}
