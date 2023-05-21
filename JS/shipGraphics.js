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
    triangle(0, 0, 60, innerHeight - 140, 0, innerHeight);
    triangle(
      innerWidth,
      0,
      innerWidth - 60,
      innerHeight - 140,
      innerWidth,
      innerHeight
    );
    fill(30, 30, 30);
    rect(95, innerHeight - 120, 210, 100);
    fill(0, 0, 0);
    textSize(50);
    rect(100, innerHeight - 115, 200, 90);
    textSize(15);
    if (window.asteroidCounter < window.asteroidMission) {
      fill(255, 50, 50);
    } else {
      fill(50, 255, 50);
    }
    text(
      window.asteroidCounter + "/" + window.asteroidMission,
      122,
      innerHeight - 45
    );
    if (window.ufoCounter < window.ufoMission) {
      fill(255, 50, 50);
    } else {
      fill(50, 255, 50);
    }
    text(window.ufoCounter + "/" + window.ufoMission, 190, innerHeight - 45);

    //asteroid
    translate(135, innerHeight - 85);
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

    push();
    //ufo push();
    translate(201, innerHeight - 90);
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

    if (window.ufoCounter < window.ufoMission) {
      fill(255, 50, 50);
    } else {
      fill(50, 255, 50);
    }
    textSize(50);
    text(this.hp, 0, -10);
    pop();
  }
}
