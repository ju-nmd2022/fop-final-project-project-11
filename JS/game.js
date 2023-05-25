import Asteroid from "./asteroid.js";
import Ufo from "./ufo.js";
import Eve from "./eve.js";
import Falcon from "./falcon.js";
import Ship from "./shipGraphics.js";
import RedExplosion from "./explosionRed.js";
import GrayExplosion from "./explosionGray.js";
import Joystick from "./joystick.js";
import PauseMenu from "./pauseMenu.js";
import StartScreen from "./startScreen.js";
import ProgressBoard from "./progressBoard.js";

//Removes the mouse
document.querySelector("body").style.cursor = "none";

//To make the screen a little bit smaller without having to change all in code
innerHeight = innerHeight - 50;
innerWidth = innerWidth - 50;

//Canvas setup
function setup() {
  const canvas = createCanvas(innerWidth, innerHeight);
  canvas.parent("midScreen");
}
window.setup = setup;

let pauseMenu = new PauseMenu(innerWidth / 2, innerHeight / 2);

//Values
let aimDamage = 1;
window.asteroidCounter = 0;
window.ufoCounter = 0;
window.eveCounter = 0;
window.falconCounter = 0;
window.obstaclesDestroyed = 0;
window.boostUsedCounter = 0;

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
let progressBoard = new ProgressBoard(innerWidth / 2 - 420, innerHeight - 115);
let progressBoardPause = new ProgressBoard(
  innerWidth / 2 - 100,
  innerHeight / 2 - 150
);

//GameState Start
let gameState = 1;
window.startState = 1;
window.reason = 1;

//Variables for the heater
window.heater = 0;
window.overHeated = false;
let cooldown = 0;

//Variables for the boost
window.boostCounter = 0;
window.boostReady = false;
window.boostTimer = 0;

//Timer variables
window.timerS = 60;
window.timer = 0;
let endTimer = 0;

//Mission related variables
window.mission = 1;
window.asteroidMission = 10;
window.ufoMission = 0;
window.falconMission = 0;

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
window.startScreenColor = [50, 50, 50];
window.rectanglesColor = [235, 235, 235];

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

function resetGame() {
  //Splice all lists (empty the field)
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
  for (let explosion of explosions) {
    explosions.splice(explosions.indexOf(explosion), 1);
  }

  if (window.mission === 1) {
    window.timerS = 60;
  } else if (window.mission === 2) {
    window.timerS = 80;
  } else if (window.mission === 3) {
    window.timerS = 120;
  } else if (window.mission === 4) {
    window.timerS = 150;
  } else if (window.mission === 5) {
    window.timerS = 180;
  } else if (window.mission === 6) {
    window.timerS = 210;
  }

  //Reset variables
  window.asteroidCounter = 0;
  window.ufoCounter = 0;
  window.eveCounter = 0;
  window.falconCounter = 0;
  window.movementX = 0;
  window.movementY = 0;
  window.movementXstar = 0;
  window.boostCounter = 0;
  window.boostReady = false;
  window.boostTimer = 0;
  window.heater = 0;
  window.overHeated = false;
  cooldown = 0;
  aimDamage = 1;
  endTimer = 0;
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

    //functions for startscreen 1 (first screen)
    if (window.startState === 1) {
      if (keyIsDown(32)) {
        gameState = 2;
        window.obstaclesDestroyed = 0;
      }
      if (keyIsDown(77)) {
        window.startState = 2;
      }
      if (keyIsDown(72)) {
        window.startState = 3;
      }
    }
    //Functions for startscreen "select mission" (state 2)
    if (window.startState === 2) {
      if (keyIsDown(8)) {
        window.startState = 1;
      }

      if (keyIsDown(49)) {
        window.mission = 1;
        window.asteroidMission = 10;
        window.ufoMission = 0;
        window.falconMission = 0;
        window.timerS = 60;
      } else if (keyIsDown(50) && window.mission1Completed) {
        window.mission = 2;
        window.asteroidMission = 8;
        window.ufoMission = 4;
        window.falconMission = 0;
        window.timerS = 80;
      } else if (keyIsDown(51) && window.mission2Completed) {
        window.mission = 3;
        window.asteroidMission = 5;
        window.ufoMission = 10;
        window.falconMission = 0;
        window.timerS = 120;
      } else if (keyIsDown(52) && window.mission3Completed) {
        window.mission = 4;
        window.asteroidMission = 8;
        window.ufoMission = 10;
        window.falconMission = 2;
        window.timerS = 150;
      } else if (keyIsDown(53) && window.mission4Completed) {
        window.mission = 5;
        window.asteroidMission = 10;
        window.ufoMission = 5;
        window.falconMission = 20;
        window.timerS = 180;
      } else if (keyIsDown(54) && window.mission5Completed) {
        window.mission = 6;
      }
    }
    //Functions for startscreen "How to play" (state 3)
    if (keyIsDown(8) && window.startState === 3) {
      window.startState = 1;
    }

    //function for winscreen and loosescreen (state 4 & 5)
    if (
      (window.startState === 4 && keyIsDown(13)) ||
      (window.startState === 5 && keyIsDown(13))
    ) {
      window.startScreenColor = [50, 50, 50];
      window.rectanglesColor = [235, 235, 235];
      window.startState = 1;
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
      if (mouseIsPressed) {
        if (
          mouseX > asteroid.x + window.movementX - 30 * asteroid.scale &&
          mouseX < asteroid.x + window.movementX + 30 * asteroid.scale &&
          mouseY > asteroid.y + window.movementY - 27 * asteroid.scale &&
          mouseY < asteroid.y + window.movementY + 25 * asteroid.scale &&
          window.overHeated === false
        ) {
          asteroid.hp = asteroid.hp - aimDamage;
          let explosion = new GrayExplosion(asteroid.x, asteroid.y);
          explosions.push(explosion);
        }
      }

      if (asteroid.isDead()) {
        asteroids.splice(asteroids.indexOf(asteroid), 1);
        if (asteroid.hp < 1) {
          window.asteroidCounter++;
          for (let i = 0; i < 250; i++) {
            let explosion = new GrayExplosion(asteroid.x + 5, asteroid.y);
            explosions.push(explosion);
          }
        }
      }
    }

    //Ufo generating
    if (ufos.length < 5) {
      let ufo = new Ufo();
      ufos.push(ufo);
    }
    for (let ufo of ufos) {
      ufo.draw();
      if (mouseIsPressed) {
        if (
          mouseX > ufo.x + window.movementX - 20 * ufo.scale &&
          mouseX < ufo.x + window.movementX + 20 * ufo.scale &&
          mouseY < ufo.y + window.movementY + 20 * ufo.scale &&
          mouseY > ufo.y + window.movementY &&
          window.overHeated === false
        ) {
          ufo.hp = ufo.hp - aimDamage;
          let explosion = new RedExplosion(ufo.x, ufo.y);
          explosions.push(explosion);
        }
      }

      if (ufo.isDead()) {
        ufos.splice(ufos.indexOf(ufo), 1);
        if (ufo.hp < 1) {
          window.ufoCounter++;
          for (let i = 0; i < 250; i++) {
            let explosion = new RedExplosion(ufo.x - 5, ufo.y);
            explosions.push(explosion);
          }
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
      if (mouseIsPressed) {
        if (
          mouseX > eve.x + window.movementX - 20 &&
          mouseX < eve.x + window.movementX + 20 &&
          mouseY < eve.y + window.movementY + 20 &&
          mouseY > eve.y + window.movementY &&
          window.overHeated === false
        ) {
          window.startState = 5;
          window.startScreenColor = [150, 50, 50];
          window.rectanglesColor = [85, 5, 5];
          window.reason = 2;
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
          let explosion = new GrayExplosion(falcon.x, falcon.y);
          explosions.push(explosion);
        }
      }

      if (falcon.isDead()) {
        falcons.splice(falcons.indexOf(falcon), 1);
        if (falcon.hp < 1) {
          window.falconCounter++;
          for (let i = 0; i < 250; i++) {
            let explosion = new GrayExplosion(falcon.x, falcon.y - 5);
            explosions.push(explosion);
          }
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
      window.boostTimer = 100;
      laserColor = [230, 185, 0];
      aimDamage = 15;
      window.boostUsedCounter++;
      console.log(window.boostUsedCounter);
      window.boostReady = false;
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

    //Moves screen when using arrows or ASDW
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
    progressBoard.draw();

    //if mission is completed
    if (
      window.asteroidCounter >= window.asteroidMission &&
      window.ufoCounter >= window.ufoMission &&
      window.falconCounter >= window.falconCounter
    ) {
      window.startState = 4;
      window.startScreenColor = [50, 150, 50];
      window.rectanglesColor = [5, 85, 5];
      window.overHeated = true;
      window.obstaclesDestroyed =
        window.asteroidCounter + window.ufoCounter + window.falconCounter;
      endTimer++;
      if (endTimer > 20) {
        gameState = 1;
      }
      if (window.mission === 1) {
        window.mission1Completed = true;
        window.timerCompleted1 = 60 - window.timerS;
        if (
          window.timerCompleted1 < window.timerBestCompleted1 ||
          window.timerBestCompleted1 === undefined
        ) {
          window.timerBestCompleted1 = window.timerCompleted1;
        }
      } else if (window.mission === 2) {
        window.mission2Completed = true;
        window.timerCompleted1 = 80 - window.timerS;
        if (
          window.timerCompleted2 < window.timerBestCompleted2 ||
          window.timerBestCompleted2 === undefined
        ) {
          window.timerBestCompleted2 = window.timerCompleted2;
        }
      } else if (window.mission === 3) {
        window.mission3Completed = true;
        window.timerCompleted1 = 120 - window.timerS;
        if (
          window.timerCompleted3 < window.timerBestCompleted3 ||
          window.timerBestCompleted3 === undefined
        ) {
          window.timerBestCompleted3 = window.timerCompleted3;
        }
      } else if (window.mission === 4) {
        window.mission4Completed = true;
        window.timerCompleted1 = 150 - window.timerS;
        if (
          window.timerCompleted4 < window.timerBestCompleted4 ||
          window.timerBestCompleted4 === undefined
        ) {
          window.timerBestCompleted4 = window.timerCompleted4;
        }
      } else if (window.mission === 5) {
        window.mission5Completed = true;
        window.timerCompleted1 = 180 - window.timerS;
        if (
          window.timerCompleted5 < window.timerBestCompleted5 ||
          window.timerBestCompleted5 === undefined
        ) {
          window.timerBestCompleted5 = window.timerCompleted5;
        }
      } else if (window.mission === 6) {
        window.mission6Completed = true;
        window.timerCompleted1 = 210 - window.timerS;
        if (
          window.timerCompleted6 < window.timerBestCompleted6 ||
          window.timerBestCompleted6 === undefined
        ) {
          window.timerBestCompleted6 = window.timerCompleted6;
        }
      }
    }

    //Timer (End if time is out, converting to s)
    window.timer++;
    if (window.timer >= 60) {
      window.timer = 0;
      window.timerS--;
    }
    if (window.timerS < 1) {
      window.startState = 5;
      window.startScreenColor = [150, 50, 50];
      window.rectanglesColor = [85, 5, 5];
      window.reason = 1;
      gameState = 1;
    }

    //Changes the state to pause
    if (keyIsDown(27)) {
      gameState = 3;
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
    progressBoardPause.draw();
  }
  aim(mouseX, mouseY);
}
window.draw = draw;
