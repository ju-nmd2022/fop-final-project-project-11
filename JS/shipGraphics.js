export default class Ship {
  constructor() {
    this.x = 0;
    this.y = 0;
  }

  draw() {
    push();
    translate(this.x, this.y);
    fill(100, 110, 110);
    rect(0, innerHeight - 140, innerWidth, 140);
    rect(0, 0, innerWidth, 100);
    beginShape();
    vertex(-50, innerHeight);
    vertex(0, innerHeight);
    vertex(60, innerHeight - 140);
    vertex(10, innerHeight / 2);
    vertex(60, 100);
    vertex(0, 0);
    vertex(-50, 0);
    endShape();
    beginShape();
    vertex(innerWidth + 50, innerHeight);
    vertex(innerWidth, innerHeight);
    vertex(innerWidth - 60, innerHeight - 140);
    vertex(innerWidth - 10, innerHeight / 2);
    vertex(innerWidth - 60, 100);
    vertex(innerWidth, 0);
    vertex(innerWidth + 50, 0);
    endShape();
    fill(30, 30, 30);
    rect(innerWidth / 2 - 425, innerHeight - 120, 210, 100);
    fill(0, 0, 0);
    rect(innerWidth / 2 - 420, innerHeight - 115, 200, 90);

    //changes the text between green or red depending if the mission is completed
    //or not for the specific object
    textSize(15);
    textAlign(CENTER);
    if (window.asteroidCounter < window.asteroidMission) {
      fill(255, 50, 50);
    } else {
      fill(50, 255, 50);
    }
    text(
      window.asteroidCounter + "/" + window.asteroidMission,
      innerWidth / 2 - 370,
      innerHeight - 45
    );
    if (window.ufoCounter < window.ufoMission) {
      fill(255, 50, 50);
    } else {
      fill(50, 255, 50);
    }
    text(
      window.ufoCounter + "/" + window.ufoMission,
      innerWidth / 2 - 320,
      innerHeight - 45
    );

    if (window.falconCounter < window.falconMission) {
      fill(255, 50, 50);
    } else {
      fill(50, 255, 50);
    }
    text(
      window.falconCounter + "/" + window.falconMission,
      innerWidth / 2 - 270,
      innerHeight - 45
    );

    //asteroid drawing for the "progress board"
    translate(innerWidth / 2 - 370, innerHeight - 83);
    scale(0.1);
    fill(150, 150, 150);
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

    //Ufo drawing for the "progress board"
    push();
    translate(innerWidth / 2 - 319, innerHeight - 90);
    scale(0.15);
    fill(130, 0, 0);
    beginShape();
    vertex(-100, 50);
    bezierVertex(-90, 100, 90, 100, 100, 50);
    endShape();
    fill(230, 0, 0);
    ellipse(0, 50, 200, 50);
    fill(0, 200, 255);
    beginShape();
    vertex(-30, 50);
    bezierVertex(-30, -10, 30, -10, 30, 50);
    vertex(-30, 50);
    endShape();
    fill(0, 200, 0);
    ellipse(-80, 54, 10);
    ellipse(-50, 60, 10);
    ellipse(-15, 64, 10);
    ellipse(15, 64, 10);
    ellipse(80, 54, 10);
    ellipse(50, 60, 10);
    pop();

    //millenium falcon drawing for the "progress board"
    push();
    translate(innerWidth / 2 - 270, innerHeight - 80);
    scale(0.12);
    noStroke();
    fill(100, 170, 255, 50);
    rect(-50, 20, 100, 100);
    fill(100, 170, 255);
    ellipse(0, 14, 180);
    fill(160, 160, 160);
    quad(-97, -20, -50, -150, -20, -150, -20, 0);
    quad(97, -20, 50, -150, 20, -150, 20, 0);
    rect(-17, -50, 34, -60);
    ellipse(0, 0, 200);
    stroke(1);
    line(0, 0, -75, 66);
    line(0, 0, 75, 66);
    line(-19, 0, -19, -110);
    line(19, 0, 19, -110);
    fill(50, 50, 50);
    ellipse(-30, 60, 13);
    ellipse(0, 65, 13);
    ellipse(30, 60, 13);
    ellipse(-15, 45, 13);
    ellipse(15, 45, 13);
    push();
    fill(200, 70, 70);
    rect(-60, 0, 20, 8);
    rotate(0.5);
    rect(-60, 0, 20, 8);
    rotate(1.1);
    rect(-120, 22, 25, 10);
    rect(-120, 22, 25, 10);
    pop();
    fill(30, 30, 30);
    ellipse(95, -70, 28);
    fill(160, 160, 160);
    quad(0, -10, 0, 20, 100, -35, 85, -60);
    quad(80, -58, 100, -35, 110, -70, 80, -70);
    ellipse(0, 0, 50);
    pop();

    //The Boost section (ACTIVATE BUTTON etc.)
    push();
    fill(50, 50, 50);
    rect(innerWidth / 2 + 223, innerHeight - 77, 104, 14);
    fill(0, 200, 200);
    rect(innerWidth / 2 + 225, innerHeight - 75, window.boostCounter, 10);
    textSize(24);
    fill(50, 50, 50);
    text("Boost", innerWidth / 2 + 243, innerHeight - 90);
    fill(50, 50, 50);
    rect(innerWidth / 2 + 240, innerHeight - 45, 70, 25);

    //If the boost is ready to be activated, make the activate button green
    if (window.boostReady) {
      fill(50, 200, 50);
    }
    //But if not, red activate button
    else {
      fill(200, 50, 50);
    }
    rect(innerWidth / 2 + 242, innerHeight - 43, 66, 21);
    fill(255, 255, 255);
    textSize(10);
    text("ACTIVATE", innerWidth / 2 + 252, innerHeight - 29);
    rect(innerWidth / 2 + 215, innerHeight - 43, 20, 20);
    rect(innerWidth / 2 + 315, innerHeight - 43, 20, 20);
    fill(0, 0, 0);
    text("B", innerWidth / 2 + 221, innerHeight - 30);
    text("B", innerWidth / 2 + 321, innerHeight - 30);
    pop();

    push();
    translate(innerWidth / 2, 0);
    noStroke();
    fill(100, 110, 110);
    rect(-102, 38, 204, 104);
    fill(0, 0, 0);
    rect(-100, 40, 200, 100);
    if (window.timerS < 10) {
      fill(255, 0, 0);
    } else if (window.timerS < 20) {
      fill(220, 120, 40);
    } else if (window.timerS < 60) {
      fill(250, 220, 40);
    } else {
      fill(50, 255, 50);
    }
    textSize(50);
    textAlign(CENTER);
    text(window.timerS + "s", 0, 110);

    pop();
  }
}
