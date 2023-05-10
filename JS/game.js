import Asteroid from "./asteroid.js";
import Ufo from "./ufo.js";
import Eve from "./eve.js";

document.querySelector("body").style.cursor = "none";
innerHeight = 600;
innerWidth = 800;
function setup() {
  createCanvas(innerWidth, innerHeight);
}
window.setup = setup;

//colors
let white = [255, 255, 255];
let black = [0, 0, 0];
let shipBackgroundColor = [150, 170, 190];

let aimDamage = 1;

let asteroidCounter = 0;
let ufoCounter = 0;
let boosterCounter = 0;

//Variables to move obstacles positions when using "arrows".
let movementX = 0;
let movementY = 0;
let movementSpeed = 15;

let gameState = 1;

//Stars
let stars = [];
for (let i = 0; i < 2000; i++) {
  const star = {
    x: Math.floor(Math.random() * (innerWidth + 600) - 300),
    y: Math.floor(Math.random() * (innerHeight + 500) - 250),
  };
  stars.push(star);
}

//Obstacles list
let asteroids = [];
let ufos = [];
let eves = [];

//laser
function laser(x, y) {
  push();
  stroke(255, 0, 0);
  strokeWeight(3);
  line(0, 600, x, y);
  line(800, 600, x, y);
  stroke(255, 255, 255);
  strokeWeight(1);
  line(0, 600, x, y);
  line(800, 600, x, y);

  pop();
}
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

//clear function
function resetGame() {
  for (let asteroid of asteroids) {
    asteroids.splice(asteroids.indexOf(asteroid), 1);
  }
  for (let ufo of ufos) {
    ufos.splice(ufos.indexOf(ufo), 1);
  }

  asteroidCounter = 0;
  ufoCounter = 0;
}

//Leave button in pause menu
function leaveButton(x, y) {
  push();
  translate(x, y);
  fill(255, 255, 255);
  rect(-180, -40, 360, 80);
  textSize(40);
  fill(200, 10, 10);
  text("Press L to Leave", -150, 15);
  pop();
}

//countinue button in pause menu
function continueButton(x, y) {
  push();
  translate(x, y);
  fill(255, 255, 255);
  rect(-180, -40, 360, 80);
  textSize(40);
  fill(200, 10, 10);
  text("Press C to Continue", -180, 15);
  pop();
}

//start info
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
  rect(0, innerHeight - 140, innerWidth, 140);
  triangle(0, 0, 60, innerHeight - 140, 0, innerHeight);
  triangle(
    innerWidth,
    0,
    innerWidth - 60,
    innerHeight - 140,
    innerWidth,
    innerHeight
  );
  fill(255, 0, 0);
  textSize(50);
  text(asteroidCounter, 600, 550);
  text(ufoCounter, 150, 550);
  pop();
}

function draw() {
  //Spacebackground with stars
  background(black);
  for (let star of stars) {
    fill(white);
    ellipse(star.x + movementX, star.y + movementY, 2);
  }

  //Menu state
  if (gameState === 1) {
    resetGame();
    startButton(innerWidth / 2, innerHeight / 2);

    if (keyIsDown(32)) {
      gameState = 2;
    }
  }

  //when game is "playing"
  if (gameState === 2) {
    //Asteroid generating
    if (asteroids.length < 10) {
      let asteroid = new Asteroid();
      asteroids.push(asteroid);
    }
    for (let asteroid of asteroids) {
      asteroid.draw();
      asteroid.x = asteroid.x + asteroid.velocityX;
      asteroid.y = asteroid.y + asteroid.velocityY;
      asteroid.rotation = asteroid.rotation + 0.1;
      if (mouseIsPressed) {
        if (
          mouseX > asteroid.x + movementX - 30 &&
          mouseX < asteroid.x + movementX + 30 &&
          mouseY > asteroid.y + movementY - 27 &&
          mouseY < asteroid.y + movementY + 25
        ) {
          asteroid.hp = asteroid.hp - aimDamage;
        }
      }
      if (asteroid.isDead()) {
        asteroids.splice(asteroids.indexOf(asteroid), 1);
        if (asteroid.hp < 1) {
          asteroidCounter++;
          boosterCounter++;
        }
      }
    }

    //Ufo generating
    if (ufos.length < 3) {
      let ufo = new Ufo();
      ufos.push(ufo);
    }
    for (let ufo of ufos) {
      ufo.draw();
      ufo.x = ufo.x + ufo.velocityX;
      ufo.y = ufo.y + ufo.velocityY;
      if (mouseIsPressed) {
        if (
          mouseX > ufo.x + movementX - 20 &&
          mouseX < ufo.x + movementX + 20 &&
          mouseY < ufo.y + movementY + 20 &&
          mouseY > ufo.y + movementY
        ) {
          ufo.hp = ufo.hp - aimDamage;
          boosterCounter++;
        }
      }

      if (ufo.isDead()) {
        ufos.splice(ufos.indexOf(ufo), 1);
        if (ufo.hp < 1) {
          ufoCounter++;
        }
      }
    }

    //Eve generating
    if (eves.length < 2) {
      let eve = new Eve();
      eves.push(eve);
    }
    for (let eve of eves) {
      eve.draw();
      eve.x = eve.x + eve.velocityX;
      eve.y = eve.y + eve.velocityY;
      if (mouseIsPressed) {
        if (
          mouseX > eve.x + movementX - 20 &&
          mouseX < eve.x + movementX + 20 &&
          mouseY < eve.y + movementY + 20 &&
          mouseY > eve.y + movementY
        ) {
          eve.hp = eve.hp - aimDamage;
        }
      }

      if (eve.isDead()) {
        eves.splice(eves.indexOf(eve), 1);
      }
    }

    //Laser graphic
    if (mouseIsPressed) {
      laser(mouseX, mouseY);
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

    shipBackground();

    if (keyIsDown(27)) {
      gameState = 3;
    }
  }

  //When game is paused
  if (gameState === 3) {
    leaveButton(400, 400);
    continueButton(400, 300);

    if (keyIsDown(76)) {
      gameState = 1;
    }
    if (keyIsDown(67)) {
      gameState = 2;
    }
  }
  aim(mouseX, mouseY);
}

window.draw = draw;
