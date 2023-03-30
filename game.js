//colors
let white = [255, 255, 255];
let black = [0, 0, 0];
let asteroidGray = [150, 150, 150];
let shipBackgroundColor = [150, 170, 190];

let asteroidHP = 100;
let obstacleRotation = 0;

//Variables to move obstacles positions when using "arrows".
let movementX = 0;
let movementY = 0;
let movementSpeed = 15;
let positionTrackerX = 0;
let positionTrackerY = 0;

//Stars
let stars = [];
for (let i = 0; i < 2000; i++) {
  const star = {
    x: Math.floor(Math.random() * (width + 600) - 300),
    y: Math.floor(Math.random() * (height + 500) - 250),
  };
  stars.push(star);
}

//Obstacles
let obstacles = [];
for (let i = 0; i < 6; i++) {
  const obstacle = {
    x: Math.floor(Math.random() * 100 - 400),
    y: Math.floor(Math.random() * height),
    hp: Math.floor(Math.random() * 100) + 100,
    scale: Math.random() * 0.2 + 0.1,
    velocityX: Math.random() * 3 + 2,
    velocityY: Math.random() * 1 - 1,
  };
  obstacles.push(obstacle);
}

let obstacleVelocity = Math.random() * 5 - 2.5;
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
  rect(0, height - 140, width, 140);
  triangle(0, 0, 60, height - 140, 0, height);
  triangle(width, 0, width - 60, height - 140, width, height);
}

function draw() {
  //Spacebackground with stars
  background(black);
  for (let star of stars) {
    fill(white);
    ellipse(star.x + movementX, star.y + movementY, 2);
  }

  for (let obstacle of obstacles) {
    if (
      obstacle.hp > 0 &&
      obstacle.y > -280 &&
      obstacle.y < width + 280 &&
      obstacle.x < width + 280
    ) {
      asteroid(
        obstacle.x + movementX,
        obstacle.y + movementY,
        obstacle.scale,
        obstacleRotation
      );
      obstacle.x = obstacle.x + obstacle.velocityX;
      obstacle.y = obstacle.y + obstacle.velocityY;
    }
  }

  //Moves screen when using arrows
  if (
    (positionTrackerX < 300 && keyIsDown(65)) ||
    (positionTrackerX < 300 && keyIsDown(37))
  ) {
    movementX = movementX + movementSpeed;
    positionTrackerX = positionTrackerX + movementSpeed;
  }
  if (
    (positionTrackerX > -300 && keyIsDown(68)) ||
    (positionTrackerX > -300 && keyIsDown(39))
  ) {
    movementX = movementX - movementSpeed;
    positionTrackerX = positionTrackerX - movementSpeed;
  }
  if (
    (positionTrackerY < 250 && keyIsDown(87)) ||
    (positionTrackerY < 250 && keyIsDown(38))
  ) {
    movementY = movementY + movementSpeed;
    positionTrackerY = positionTrackerY + movementSpeed;
  }
  if (
    (positionTrackerY > -250 && keyIsDown(83)) ||
    (positionTrackerY > -250 && keyIsDown(40))
  ) {
    movementY = movementY - movementSpeed;
    positionTrackerY = positionTrackerY - movementSpeed;
  }

  aim(mouseX, mouseY);
  shipBackground();
}

// function mouseClicked() {
//   if (
//     mouseX > obstacle.x - 30 &&
//     mouseX < obstacle.x + 30 &&
//     mouseY > obstacle.y - 27 &&
//     mouseY < obstacle.y + 25
//   ) {
//     obstacle.hp = obstacle.hp - 20;
//   }
// }
