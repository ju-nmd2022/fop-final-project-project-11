import Asteroid from "./asteroid.js";
import Ufo from "./ufo.js";
import Eve from "./eve.js";
import Falcon from "./falcon.js";
import Ship from "./shipGraphics.js";
import UfoExplosion from "./explosionUFO.js";
import AsteroidExplosion from "./explosionAsteroid.js";
import Joystick from "./joystick.js";
import PauseMenu from "./pauseMenu.js";
import StartScreen from "./startScreen.js";

//Removes the mouse
document.querySelector("body").style.cursor = "none";

//Canvas setup
function setup() {
  createCanvas(innerWidth, innerHeight);
}
window.setup = setup;

let pauseMenu = new PauseMenu(innerWidth / 2, innerHeight / 2);

//Values
let aimDamage = 1;
window.asteroidCounter = 0;
window.ufoCounter = 0;
window.eveCounter = 0;
window.falconCounter = 0;

window.asteroidMission = 3;
window.ufoMission = 2;
window.falconMission = 1;

//Variables to move obstacles positions when using "arrows".
window.movementX = 0;
window.movementY = 0;
window.movementXstar = 0;
let movementSpeedX = 8;
let movementSpeedY = 8;

//Joystick / hand graphics
window.shooting = false;
let start = new StartScreen();
let shipGraphics = new Ship();
let joyStick1 = new Joystick(-innerWidth / 2 + 65, innerHeight - 100, -1);
let joyStick2 = new Joystick(innerWidth / 2 + 63, innerHeight - 100, 1);

//GameState Start
let gameState = 1;
window.startState = 1;

//Variables for the heater
window.heater = 0;
window.overHeated = false;
let cooldown = 0;

//Variables for the boost
window.boostCounter = 0;
window.boostReady = false;
window.boostTimer = 0;

window.timerS = 120;
window.timer = 0;

//Stars
let stars = [];
for (let i = 0; i < 2000; i++) {
  const star = {
    x: Math.floor(Math.random() * (innerWidth + 600) - 300),
    y: Math.floor(Math.random() * (innerHeight + 500) - 250),
  };
  stars.push(star);
}

//all lists
let asteroids = [];
let ufos = [];
let eves = [];
let falcons = [];
let explosions = [];
let laserColor = [255, 0, 0];

//laser
function laser(x, y) {
  push();
  stroke(laserColor);
  strokeWeight(3);
  line(0, innerHeight, x, y);
  line(innerWidth, innerHeight, x, y);
  stroke(255, 255, 255);
  strokeWeight(1);
  line(0, innerHeight, x, y);
  line(innerWidth, innerHeight, x, y);

  pop();
}
// Aim Crosshair
function aim(x, y) {
  push();
  translate(x, y);
  stroke(255, 255, 255);
  line(0, 2, 0, 10);
  line(2, 0, 10, 0);
  line(0, -2, 0, -10);
  line(-2, 0, -10, 0);
  pop();
}

//reset all values function
function resetGame() {
  for (let asteroid of asteroids) {
    asteroids.splice(asteroids.indexOf(asteroid), 1);
  }
  for (let ufo of ufos) {
    ufos.splice(ufos.indexOf(ufo), 1);
  }
  for (let eve of eves) {
    eves.splice(eves.indexOf(eve), 1);
  }
  for (let falcon of falcons) {
    falcons.splice(falcons.indexOf(falcon), 1);
  }

  window.asteroidCounter = 0;
  window.ufoCounter = 0;
  window.eveCounter = 0;
  window.falconCounter = 0;
  window.movementX = 0;
  window.movementY = 0;
  window.boostCounter = 0;
  window.boostReady = false;
  window.boostTimer = 0;
  aimDamage = 1;
}

function draw() {
  //Spacebackground with stars
  background(0, 0, 0);
  for (let star of stars) {
    fill(255, 255, 255);
    ellipse(star.x + window.movementXstar, star.y + window.movementY, 2);
    star.x = star.x + 1;
    if (star.x > innerWidth + 300) {
      star.x = -300;
    }
  }

  //Menu state
  if (gameState === 1) {
    resetGame();
    start.draw();

    if (keyIsDown(77)) {
      window.startState = 2;
    }
    if (keyIsDown(72)) {
      window.startState = 3;
    }
    if (keyIsDown(65)) {
      window.startState = 4;
    }
    if (keyIsDown(8)) {
      window.startState = 1;
    }
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

    //every each asteroid's moving, change hp and splice if destroyed
    for (let asteroid of asteroids) {
      asteroid.draw();
      asteroid.x = asteroid.x + asteroid.velocityX;
      asteroid.y = asteroid.y + asteroid.velocityY;
      asteroid.rotation = asteroid.rotation + 0.1;

      if (mouseIsPressed) {
        if (
          mouseX > asteroid.x + window.movementX - 30 * asteroid.scale &&
          mouseX < asteroid.x + window.movementX + 30 * asteroid.scale &&
          mouseY > asteroid.y + window.movementY - 27 * asteroid.scale &&
          mouseY < asteroid.y + window.movementY + 25 * asteroid.scale &&
          window.overHeated === false
        ) {
          asteroid.hp = asteroid.hp - aimDamage;
          let explosion = new AsteroidExplosion(asteroid.x, asteroid.y);
          explosions.push(explosion);
        }
      }

      if (asteroid.isDead()) {
        asteroids.splice(asteroids.indexOf(asteroid), 1);
        if (asteroid.hp < 1) {
          window.asteroidCounter++;
        }
      }
    }

    //Ufo generating
    if (ufos.length < 5) {
      let ufo = new Ufo();
      ufos.push(ufo);
    }
    //every each ufo's moving, change hp and splice if destroyed
    for (let ufo of ufos) {
      ufo.draw();
      ufo.x = ufo.x + ufo.velocityX;
      ufo.y = ufo.y + ufo.velocityY;
      if (mouseIsPressed) {
        if (
          mouseX > ufo.x + window.movementX - 20 * ufo.scale &&
          mouseX < ufo.x + window.movementX + 20 * ufo.scale &&
          mouseY < ufo.y + window.movementY + 20 * ufo.scale &&
          mouseY > ufo.y + window.movementY &&
          window.overHeated === false
        ) {
          ufo.hp = ufo.hp - aimDamage;
          let explosion = new UfoExplosion(ufo.x, ufo.y);
          explosions.push(explosion);
        }
      }

      if (ufo.isDead()) {
        ufos.splice(ufos.indexOf(ufo), 1);
        if (ufo.hp < 1) {
          window.ufoCounter++;
        }
      }
    }

    //Eve generating
    if (eves.length < 5) {
      let eve = new Eve();
      eves.push(eve);
    }
    //every each eve's moving, change hp and splice if destroyed
    for (let eve of eves) {
      eve.draw();
      eve.x = eve.x + eve.velocityX;
      eve.y = eve.y + eve.velocityY;
      if (mouseIsPressed) {
        if (
          mouseX > eve.x + window.movementX - 20 &&
          mouseX < eve.x + window.movementX + 20 &&
          mouseY < eve.y + window.movementY + 20 &&
          mouseY > eve.y + window.movementY &&
          window.overHeated === false
        ) {
          eve.hp = eve.hp - aimDamage;
          gameState = 1;
        }
      }

      if (eve.isDead()) {
        eves.splice(eves.indexOf(eve), 1);
      }
    }

    //Falcon generating
    if (falcons.length < 2) {
      let falcon = new Falcon();
      falcons.push(falcon);
    }

    //every each falcon's moving, change hp and splice if destroyed
    for (let falcon of falcons) {
      falcon.draw();
      falcon.y = falcon.y + falcon.velocityY;
      if (mouseIsPressed) {
        if (
          mouseX > falcon.x + window.movementX - 20 &&
          mouseX < falcon.x + window.movementX + 20 &&
          mouseY > falcon.y + window.movementY - 30 &&
          mouseY < falcon.y + window.movementY + 20 &&
          window.overHeated === false
        ) {
          falcon.hp = falcon.hp - aimDamage;
        }
      }

      if (falcon.isDead()) {
        falcons.splice(falcons.indexOf(falcon), 1);
        if (falcon.hp < 1) {
          window.falconCounter++;
        }
      }
    }

    //Laser graphic
    if (mouseIsPressed && window.overHeated === false) {
      laser(mouseX, mouseY);
      window.shooting = true;
      if (window.heater < 100) {
        window.heater++;
      } else {
        window.overHeated = true;
      }
    } else {
      window.shooting = false;
      if (window.heater > 0) {
        window.heater--;
      }
    }
    //If the leaser is overheated, give cooldown
    if (window.overHeated) {
      if (cooldown < 100) {
        cooldown++;
      }

      if (cooldown === 100) {
        window.overHeated = false;
        cooldown = 0;
      }
    }

    //Loading the booster and makes it "ready at end of timer"
    if (window.boostCounter < 100) {
      window.boostCounter = window.boostCounter + 0.1;
    } else {
      window.boostReady = true;
    }

    //When you activate booster with B and change some values
    if (window.boostReady && keyIsDown(66)) {
      window.boostCounter = 0;
      window.boostReady = false;
      window.boostTimer = 100;
      laserColor = [230, 185, 0];
      aimDamage = 15;
    }

    //the time the boost will be active and reset values at end
    if (window.boostTimer > 0) {
      window.boostTimer--;
    } else {
      aimDamage = 1;
      laserColor = [255, 0, 0];
    }

    //explosion's particles moving and "splice if dead"
    for (let explosion of explosions) {
      explosion.draw();
      explosion.update();
      if (explosion.isDead()) {
        explosions.splice(explosions.indexOf(explosion), 1);
      }
    }

    //Moves screen when using arrows or ASDW and makes sure you cant
    // go further than "allowed"
    if (
      (window.movementX < 300 && keyIsDown(65)) ||
      (window.movementX < 300 && keyIsDown(37))
    ) {
      window.movementX = window.movementX + movementSpeedX;
      window.movementXstar = window.movementXstar + movementSpeedX;
    }
    if (
      (window.movementX > -300 && keyIsDown(68)) ||
      (window.movementX > -300 && keyIsDown(39))
    ) {
      window.movementX = window.movementX - movementSpeedX;
      window.movementXstar = window.movementXstar - movementSpeedX;
    }
    if (
      (window.movementY < 250 && keyIsDown(87)) ||
      (window.movementY < 250 && keyIsDown(38))
    ) {
      window.movementY = window.movementY + movementSpeedY;
    }
    if (
      (window.movementY > -250 && keyIsDown(83)) ||
      (window.movementY > -250 && keyIsDown(40))
    ) {
      window.movementY = window.movementY - movementSpeedY;
    }

    //Draws ship from other JS
    shipGraphics.draw();
    joyStick1.draw();
    joyStick2.draw();

    //Changes the state to pause
    if (keyIsDown(27)) {
      gameState = 3;
    }

    //Change gamestate if mission is completed
    if (
      window.asteroidCounter >= window.asteroidMission &&
      window.ufoCounter >= window.ufoMission &&
      window.falconCounter >= window.falconCounter
    ) {
      gameState = 1;
    }

    //Timer, converting timer to 1 timerS every sec (60 tics)
    window.timer++;
    if (window.timer >= 60) {
      window.timer = 0;
      window.timerS--;
    }

    //If timer runs out, change gamestate
    if (window.timerS < 1) {
      gameState = 1;
    }
  }

  //When game is paused
  if (gameState === 3) {
    pauseMenu.draw();

    if (keyIsDown(76)) {
      gameState = 1;
    }
    if (keyIsDown(67)) {
      gameState = 2;
    }
  }

  //when you win
  if (gameState === 4) {
  }

  //when you fail a mission
  if (gameState === 5) {
  }

  //aim
  aim(mouseX, mouseY);
}

window.draw = draw;
