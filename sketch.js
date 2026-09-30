let x, y, d, numCircles, spacing;
let colors = [
  "#C04000",
  "#E5A93C",
  "#4A3B32",
  "#8A9A86",
  "#F5E6CA",
  "#902C26",
  "#F1C40F",
  "#314427",
  "#6B5B52",
  "#E8D7A5",
];

function setup() {
  // Create a canvas that fills the entire browser window
  createCanvas(windowWidth, windowHeight);

  x = width / 2;
  y = height / 2;
  d = width / 2;
  numCircles = 10;
  spacing = d / numCircles;
}

function draw() {
  // Set background
  background(0);
  d = width / 2;

  for (i = 0; i < numCircles; i++) {
    fill(colors[i]);
    circle(x, y, d);
    d = d - spacing;
  }
}
