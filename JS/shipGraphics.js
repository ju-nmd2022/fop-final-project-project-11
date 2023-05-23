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
    textSize(50);
    rect(innerWidth / 2 - 420, innerHeight - 115, 200, 90);

    //changes the text between green or red depending if the mission is completed
    //or not for the specific object
    textSize(15);
    if (window.asteroidCounter < window.asteroidMission) {
      fill(255, 50, 50);
    } else {
      fill(50, 255, 50);
    }
    text(
      window.asteroidCounter + "/" + window.asteroidMission,
      innerWidth / 2 - 398,
      innerHeight - 45
    );
    if (window.ufoCounter < window.ufoMission) {
      fill(255, 50, 50);
    } else {
      fill(50, 255, 50);
    }
    text(
      window.ufoCounter + "/" + window.ufoMission,
      innerWidth / 2 - 330,
      innerHeight - 45
    );

    if (window.falconCounter < window.falconMission) {
      fill(255, 50, 50);
    } else {
      fill(50, 255, 50);
    }
    text(
      window.falconCounter + "/" + window.falconMission,
      innerWidth / 2 - 262,
      innerHeight - 45
    );

    //asteroid drawing for the "progress board"
    translate(innerWidth / 2 - 385, innerHeight - 85);
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
  }
}
