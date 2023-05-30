export default class StartScreen {
  constructor() {
    this.x = innerWidth / 2;
    this.y = innerHeight / 2;
  }

  draw() {
    push();
    translate(this.x, this.y);
    fill(window.startScreenColor);
    rect(-400, -350, 800, 700);
    strokeWeight(0);
    fill(window.rectanglesColor);
    //Long "rectangles" Left side
    rect(-380, 10, 20, 330, 20);
    rect(-380, -10, 20, -330, 20);
    rect(-300, 10, 20, 330, 20);
    rect(-300, -10, 20, -330, 20);

    //Short rectangles Left side
    rect(-340, 260, 20, 80, 20);
    rect(-340, 160, 20, 80, 20);
    rect(-340, 60, 20, 80, 20);
    rect(-340, -40, 20, 80, 20);
    rect(-340, -140, 20, 80, 20);
    rect(-340, -240, 20, 80, 20);
    rect(-340, -340, 20, 80, 20);

    //Long "rectangles" Right side
    rect(360, 10, 20, 330, 20);
    rect(360, -10, 20, -330, 20);
    rect(280, 10, 20, 330, 20);
    rect(280, -10, 20, -330, 20);

    //Short rectangles Right side
    rect(320, 260, 20, 80, 20);
    rect(320, 160, 20, 80, 20);
    rect(320, 60, 20, 80, 20);
    rect(320, -40, 20, 80, 20);
    rect(320, -140, 20, 80, 20);
    rect(320, -240, 20, 80, 20);
    rect(320, -340, 20, 80, 20);

    if (window.startState === 1) {
      push();
      strokeWeight(1.5);
      stroke(5, 5, 5);
      textSize(20);

      fill(255, 255, 255);
      textSize(24);
      text("How to play?", -50, -190);
      rect(-110, -218, 40, 40);
      fill(0, 0, 0);
      text("H", -100, -190);
      fill(255, 255, 255);
      text("Select Mission", -50, -130);
      rect(-110, -158, 40, 40);
      fill(0, 0, 0);
      text("M", -100, -130);

      //Press Space
      fill(255, 255, 255);
      textSize(30);
      text("PRESS", -52, 120);
      text("TO START", -71, 250);
      rect(-120, 150, 240, 40);
      fill(0, 0, 0);
      textSize(20);
      text("SPACE", -33, 178);
      pop();
    } else if (window.startState === 2) {
      push();

      //Backspace button
      fill(255, 255, 255);
      rect(90, -290, 120, 40);
      fill(0, 0, 0);
      triangle(100, -270, 120, -285, 120, -255);
      stroke(0, 0, 0);
      strokeWeight(4);
      line(105, -270, 200, -270);
      push();
      fill(205, 205, 205);
      strokeWeight(1);
      textAlign(CENTER);
      text("(BACKSPACE)", 150, -295);
      pop();

      //Mission 6 box
      if (window.mission5Completed) {
        fill(150, 150, 150);
      } else {
        fill(10, 10, 10);
      }
      if (window.mission === 6) {
        stroke(50, 180, 50);
      } else {
        stroke(0, 0, 0);
      }
      rect(10, 130, 200, 150);

      //Mission 5 box
      if (window.mission4Completed) {
        fill(150, 150, 150);
      } else {
        fill(10, 10, 10);
      }
      if (window.mission === 5) {
        stroke(50, 180, 50);
      } else {
        stroke(0, 0, 0);
      }
      rect(-210, 130, 200, 150);

      //Mission 4 box
      if (window.mission3Completed) {
        fill(150, 150, 150);
      } else {
        fill(10, 10, 10);
      }
      if (window.mission === 4) {
        stroke(50, 180, 50);
      } else {
        stroke(0, 0, 0);
      }
      rect(10, -40, 200, 150);

      //Mission 3 box
      if (window.mission2Completed) {
        fill(150, 150, 150);
      } else {
        fill(10, 10, 10);
      }
      if (window.mission === 3) {
        stroke(50, 180, 50);
      } else {
        stroke(0, 0, 0);
      }
      rect(-210, -40, 200, 150);

      //Mission 2 box
      if (window.mission1Completed) {
        fill(150, 150, 150);
      } else {
        fill(10, 10, 10);
      }
      if (window.mission === 2) {
        stroke(50, 180, 50);
      } else {
        stroke(0, 0, 0);
      }
      rect(10, -210, 200, 150);

      //Mission1  box
      fill(150, 150, 150);
      if (window.mission === 1) {
        stroke(50, 180, 50);
      } else {
        stroke(0, 0, 0);
      }
      rect(-210, -210, 200, 150);
      noStroke();
      fill(0, 0, 0);
      textSize(20);
      text("Mission 1", -200, -175);
      text("Mission 2", 25, -175);
      text("Mission 3", -200, -5);
      text("Mission 4", 25, -5);
      text("Mission 5", -200, 165);
      text("Mission 6", 25, 165);
      textSize(10);
      text("THE PHANTOM MENACE", -200, -160);
      text("ATTACK OF THE CLONES", 25, -160);
      text("REVENGE OF THE SITH", -200, 10);
      text("A NEW HOPE", 25, 10);
      text("THE EMPIRE STRIKES BACK", -200, 180);
      text("THE RETURN OF THE JEDI", 25, 180);

      //Makes the mission not completed or shows the best time
      if (window.timerBestCompleted1 === undefined) {
        text("NOT COMPLETED YET", -200, -100);
      } else {
        text("Best Time: " + window.timerBestCompleted1 + "s", -200, -90);
      }
      if (window.timerBestCompleted2 === undefined) {
        text("NOT COMPLETED YET", 25, -100);
      } else {
        text("Best Time: " + window.timerBestCompleted2 + "s", 25, -90);
      }
      if (window.timerBestCompleted3 === undefined) {
        text("NOT COMPLETED YET", -200, 70);
      } else {
        text("Best Time: " + window.timerBestCompleted3 + "s", -200, 80);
      }
      if (window.timerBestCompleted4 === undefined) {
        text("NOT COMPLETED YET", 25, 70);
      } else {
        text("Best Time: " + window.timerBestCompleted4 + "s", 25, 80);
      }
      if (window.timerBestCompleted5 === undefined) {
        text("NOT COMPLETED YET", -200, 240);
      } else {
        text("Best Time: " + window.timerBestCompleted5 + "s", -200, 250);
      }
      if (window.timerBestCompleted6 === undefined) {
        text("NOT COMPLETED YET", 25, 240);
      } else {
        text("Best Time: " + window.timerBestCompleted6 + "s", 25, 250);
      }

      //The "headline text for select mission press key...."
      textSize(17);
      fill(255, 255, 255);
      text("Press key 1-6 to choose mission", -200, -255);
      text("(You need to unlock the mission first)", -200, -235);

      //The "rectangles" and text for 1,2,3,4,5,6 at select mission
      fill(100, 100, 100);
      rect(-55, -200, 35, 35);
      rect(-55 + 220, -200, 35, 35);
      rect(-55, -200 + 170, 35, 35);
      rect(-55 + 220, -200 + 170, 35, 35);
      rect(-55, -200 + 340, 35, 35);
      rect(-55 + 220, -200 + 340, 35, 35);
      fill(40, 40, 40);
      rect(-55, -165, 35, 3);
      rect(-20, -200, 3, 38);
      rect(-55 + 220, -165, 35, 3);
      rect(-20 + 220, -200, 3, 38);
      rect(-55, -165 + 170, 35, 3);
      rect(-20, -200 + 170, 3, 38);
      rect(-55 + 220, -165 + 170, 35, 3);
      rect(-20 + 220, -200 + 170, 3, 38);
      rect(-55, -165 + 340, 35, 3);
      rect(-20, -200 + 340, 3, 38);
      rect(-55 + 220, -165 + 340, 35, 3);
      rect(-20 + 220, -200 + 340, 3, 38);
      textSize(17);
      fill(255, 255, 255);
      text("1", -38, -187, 35, 35);
      text("2", -38 + 220, -187, 35, 35);
      text("3", -38, -187 + 170, 35, 35);
      text("4", -38 + 220, -187 + 170, 35, 35);
      text("5", -38, -187 + 340, 35, 35);
      text("6", -38 + 220, -187 + 340, 35, 35);
      pop();
    } else if (window.startState === 3) {
      push();
      fill(255, 255, 255);
      rect(90, -290, 120, 40);
      fill(0, 0, 0);
      triangle(100, -270, 120, -285, 120, -255);
      stroke(0, 0, 0);
      strokeWeight(4);
      line(105, -270, 200, -270);

      scale(0.8);

      push();
      fill(200, 200, 200);
      stroke(0, 0, 0);
      strokeWeight(6);
      rect(-230, -230, 100, 100, 5);
      rect(-230, -80, 100, 100, 5);
      rect(-230, 70, 100, 100, 5);
      pop();

      beginShape();
      vertex(-200, -180);
      vertex(-160, -180);
      endShape();

      beginShape();
      vertex(-180, -200);
      vertex(-180, -160);
      endShape();

      push();
      noStroke();
      fill(200, 200, 200);
      rect(-183, -183, 5, 5);
      pop();

      rect(-185, -50, 10, 10);
      rect(-185, -33, 10, 10);
      rect(-167, -33, 10, 10);
      rect(-203, -33, 10, 10);

      noFill();
      rect(-187, 90, 15, 60);
      fill(0, 0, 0);
      rect(-187, 123, 15, 24);

      push();
      strokeWeight(0.3);
      stroke(255, 255, 255);
      fill(255, 255, 255);
      textSize(20);
      text("Shoot", -110, -205);
      text("Move", -110, -60);
      text("Boost", -110, 90);
      pop();

      push();
      strokeWeight(0);
      fill(255, 255, 255);
      textSize(14);
      text(
        "Use your mouse/mousepad to move your aim around.\nPress and hold mouse1 to shoot your laser cannon.\nWatch out for overheating the cannon and DON'T shoot Eve!",
        -110,
        -183
      );
      text(
        "Move around in space using either the W A S D \nor arrow keys.",
        -110,
        -37
      );
      text(
        "To the right of your hands in the cockpit, there is a\nprogress bar for the boost. When ready,\npress the B key to activate boost and get increased damage.",
        -110,
        110
      );
      pop();

      stroke(255, 255, 255);
      strokeWeight(0);
      fill(255, 255, 255);
      textSize(14);
      text("Complete your mission to move on to further levels!", -110, 210);
      pop();
    } else if (window.startState === 4) {
      push();
      textAlign(CENTER);
      textSize(40);
      stroke(1);
      strokeWeight(10);
      fill(255, 255, 255);
      text("MISSION COMPLETED", 0, -150);
      strokeWeight(6);
      textSize(25);
      text("Statistics:", 0, -70);
      strokeWeight(2);
      textSize(20);
      text("Obstacles destroyed: " + window.obstaclesDestroyed, 0, -30);
      text("Boost used: " + window.boostUsedCounter, 0, 0);
      if (window.mission === 1) {
        text("Time: " + window.timerCompleted1 + "s", 0, 30);
      } else if (window.mission === 2) {
        text("Time: " + window.timerCompleted2 + "s", 0, 30);
      } else if (window.mission === 3) {
        text("Time: " + window.timerCompleted3 + "s", 0, 30);
      } else if (window.mission === 4) {
        text("Time: " + window.timerCompleted4 + "s", 0, 30);
      } else if (window.mission === 5) {
        text("Time: " + window.timerCompleted5 + "s", 0, 30);
      } else if (window.mission === 6) {
        text("Time: " + window.timerCompleted6 + "s", 0, 30);
      }

      strokeWeight(6);
      textSize(30);
      text("Press ENTER to Leave", 0, 200);
      pop();
    } else if (window.startState === 5) {
      push();
      textAlign(CENTER);
      textSize(40);
      stroke(1);
      strokeWeight(10);
      fill(255, 255, 255);
      text("MISSION FAILED", 0, -150);
      strokeWeight(6);
      textSize(25);
      text("REASON:", 0, -70);
      if (window.reason === 1) {
        text("OUT OF TIME!", 0, 0);
      } else if (window.reason === 2) {
        text("YOU SHOT EVE!", 0, 0);
      }
      strokeWeight(6);
      textSize(30);
      text("Press ENTER to Leave", 0, 200);
      pop();
    }
    pop();
  }
}
