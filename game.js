document.querySelector("body").style.cursor = "none";

//colors
let white = [255, 255, 255];
let black = [0, 0, 0];
let asteroidGray = [150, 150, 150];
let shipBackgroundColor = [150, 170, 190];

let asteroidHP = 100;
let obstacleRotation = 0;

let timerFPS = 0;
let timerS = 0;

let aimDamage = 20;

//Variables to move obstacles positions when using "arrows".
let movementX = 0;
let movementY = 0;
let movementSpeed = 15;

let gameState = 1;

//Stars
let stars = [];
for (let i = 0; i < 2000; i++) {
  const star = {
    x: Math.floor(Math.random() * (width + 600) - 300),
    y: Math.floor(Math.random() * (height + 500) - 250),
  };
  stars.push(star);
}

//Obstacles list
let obstacles = [];

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

//start "button" info
function startButton(x, y) {
  push();
  translate(x, y);
  fill(white);
  textFont("Inconsolata");
  textSize(40);
  text("Press SPACE to Start!", -170, 0);
  pop();
}

function shipBackground() {
  push();
  fill(shipBackgroundColor);
  rect(0, height - 140, width, 140);
  triangle(0, 0, 60, height - 140, 0, height);
  triangle(width, 0, width - 60, height - 140, width, height);
  pop();
}

function draw() {
  //Spacebackground with stars
  background(black);
  for (let star of stars) {
    fill(white);
    ellipse(star.x + movementX, star.y + movementY, 2);
  }

  if (gameState === 1) {
    startButton(windowWidth / 2, windowHeight / 2);

    if (keyIsDown(32)) {
      gameState = 2;
    }
  }

  if (gameState === 2) {
    //timer
    timerFPS++;
    if (timerFPS > 29) {
      timerS++;
      timerFPS = 0;
    }

    //generates value for obstacle
    if (obstacles.length < 5) {
      const obstacle = {
        x: Math.floor(Math.random() * 300 - 600),
        y: Math.floor(Math.random() * (height + 100) - 50),
        velocityX: Math.random() * 3 + 2,
        velocityY: Math.random() * 1 - 1,
        typeOfObstacle: Math.ceil(Math.random() * 10),
        rotation: Math.random() * 0.02,
        hp: 100,
      };
      obstacles.push(obstacle);
      timerS = 0;
    }

    //Obstacle spawn
    for (let obstacle of obstacles) {
      if (obstacle.typeOfObstacle < 6) {
        asteroid(
          obstacle.x + movementX,
          obstacle.y + movementY,
          0.2,
          obstacle.Rotation
        );
      } else if (obstacle.typeOfObstacle > 5) {
        ellipse(obstacle.x + movementX, obstacle.y + movementY, 50);
      }

      //Moves the obstacles with their velocity generated
      obstacle.x = obstacle.x + obstacle.velocityX;
      obstacle.y = obstacle.y + obstacle.velocityY;
      obstacleRotation = obstacleRotation + obstacle.rotation;

      if (obstacle.x > width + 350) {
        obstacles.splice(obstacles.indexOf(obstacle), 1);
      }
    }

    //Moves screen when using arrows / ASDW
    if (
      (movementX < 300 && keyIsDown(65)) ||
      (movementX < 300 && keyIsDown(37))
    ) {
      movementX = movementX + movementSpeed;
    }
    if (
      (movementX > -300 && keyIsDown(68)) ||
      (movementX > -300 && keyIsDown(39))
    ) {
      movementX = movementX - movementSpeed;
    }
    if (
      (movementY < 250 && keyIsDown(87)) ||
      (movementY < 250 && keyIsDown(38))
    ) {
      movementY = movementY + movementSpeed;
    }
    if (
      (movementY > -250 && keyIsDown(83)) ||
      (movementY > -250 && keyIsDown(40))
    ) {
      movementY = movementY - movementSpeed;
    }

    aim(mouseX, mouseY);
    shipBackground();
  }
}

function mouseClicked() {
  for (let obstacle of obstacles) {
    if (
      mouseX > obstacle.x + movementX - 30 &&
      mouseX < obstacle.x + movementX + 30 &&
      mouseY > obstacle.y + movementY - 27 &&
      mouseY < obstacle.y + movementY + 25
    ) {
      obstacle.hp = obstacle.hp - aimDamage;
    }

    if (obstacle.hp < 1) {
      obstacles.splice(obstacles.indexOf(obstacle), 1);
    }
  }
}
