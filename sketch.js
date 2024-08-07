let xTwo, yTwo, xThree, yThree, xFour, yFour, r, g, b;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
}

function draw() {
  r = random(255);
  g = 0;
  b = random(255);
  xTwo = random(width);
  yTwo = random(height);
  xThree = random(width);
  yThree = random(height);
  xFour = random(width);
  yFour = random(height);
  noStroke();
  fill(r, g, b, 100);
  square(50, 50, xTwo, yTwo, xThree, yThree, xFour, yFour);
}
