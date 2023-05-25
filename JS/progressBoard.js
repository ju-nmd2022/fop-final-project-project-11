export default class ProgressBoard {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  draw() {
    push();
    translate(this.x, this.y);
    fill(30, 30, 30);
    rect(-5, -5, 210, 100);
    fill(0, 0, 0);
    rect(0, 0, 200, 90);

    //changes the text between green or red depending if the mission is completed
    //or not for the specific object
    textSize(15);
    textAlign(CENTER);
    if (window.asteroidCounter < window.asteroidMission) {
      fill(255, 50, 50);
    } else {
      fill(50, 255, 50);
    }
    text(window.asteroidCounter + "/" + window.asteroidMission, 50, 70);
    if (window.ufoCounter < window.ufoMission) {
      fill(255, 50, 50);
    } else {
      fill(50, 255, 50);
    }
    text(window.ufoCounter + "/" + window.ufoMission, 100, 70);
    if (window.falconCounter < window.falconMission) {
      fill(255, 50, 50);
    } else {
      fill(50, 255, 50);
    }
    text(window.falconCounter + "/" + window.falconMission, 150, 70);

    //asteroid drawing for the "progress board"
    push();
    translate(50, 32);
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
    translate(101, 25);
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
    translate(150, 35);
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
    pop();
  }
}
