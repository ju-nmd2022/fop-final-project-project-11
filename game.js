//colors
let white = [255, 255, 255];
let black = [0, 0, 0];
let asteroidGray = [150, 150, 150];
let shipBackgroundColor = [150, 170, 190];

let asteroidHP = 100;
let asteroidX = 200;
let asteroidY = 200;

// Aim Crosshair
function aim(x, y) {
  push();
  translate(x, y);

  stroke(white);
  line(0, 2, 0, 10);
  line(2, 0, 10, 0);
  line(0, -2, 0, -10);
  line(-2, 0, -10, 0);
  pop();
}

//asteroid "drawing"
function asteroid(xAsteroid, yAsteroid, scaleAsteroid, rotationAsteroid) {
  push();
  translate(xAsteroid, yAsteroid, scaleAsteroid, rotationAsteroid);
  scale(scaleAsteroid);
  rotate(rotationAsteroid);

  fill(asteroidGray);
  beginShape();
  vertex(-150, 0);
  bezierVertex(-130, -80, -130, -90, -50, -110);
  bezierVertex(-40, -115, -30, -115, -20, -120);
  bezierVertex(-10, -128, 20, -125, 40, -120);
  bezierVertex(70, -110, 150, -60, 150, 0);
  bezierVertex(130, 80, 130, 90, 100, 110);
  bezierVertex(40, 135, 20, 120, 0, 125);
  bezierVertex(-75, 130, -150, 120, -150, 0);
  endShape();

  fill(160, 170, 170);
  push();
  rotate(0.5);
  ellipse(40, -70, 30, 20);
  pop();
  push();
  rotate(-0.3);
  ellipse(70, 80, 50, 25);
  pop();

  ellipse(-70, -60, 50, 25);
  ellipse(-40, 30, 60, 35);
  ellipse(-70, 70, 20, 10);
  ellipse(60, 20, 20, 10);
  ellipse(0, -20, 30, 15);
  ellipse(-100, 0, 20, 10);
  ellipse(20, -100, 20, 10);
  ellipse(30, 100, 30, 15);

  pop();
}

function shipBackground() {
  fill(shipBackgroundColor);
  rect(0, height - 160, width, 160);
  triangle(0, 0, 80, height - 160, 0, height);
  triangle(width, 0, width - 80, height - 160, width, height);
}

function draw() {
  background(black);

  if (asteroidHP > 0) {
    asteroid(asteroidX, asteroidY, 0.2, 0);
  }

  aim(mouseX, mouseY);

  shipBackground();
}

function mouseClicked() {
  if (
    mouseX > asteroidX - 30 &&
    mouseX < asteroidX + 30 &&
    mouseY > asteroidY - 27 &&
    mouseY < asteroidY + 25
  ) {
    asteroidHP = asteroidHP - 20;
  }
}
