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
      fill(255, 255, 255);
      rect(90, -290, 120, 40);
      fill(0, 0, 0);
      triangle(100, -270, 120, -285, 120, -255);
      stroke(0, 0, 0);
      strokeWeight(4);
      line(105, -270, 200, -270);

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
      textAlign(CENTER);
      text("Mission 1", -145, -175);
      text("Mission 2", 75, -175);
      text("Mission 3", -145, -5);
      text("Mission 4", 75, -5);
      text("Mission 5", -145, 165);
      text("Mission 6", 75, 165);
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
      text("Time: 2s", 0, 30);
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
      strokeWeight(6);
      textSize(30);
      text("Press ENTER to Leave", 0, 200);
      pop();
    }
    pop();
  }
}
