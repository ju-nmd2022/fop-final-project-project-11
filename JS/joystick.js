export default class Joystick {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
  }

  draw() {
    push();
    scale(this.r, 1);
    translate(this.x, this.y);
    noStroke();
    fill(20, 20, 20);
    ellipse(20, 82, 34, 20);
    fill(60, 60, 60);
    ellipse(20, 80, 30, 15);
    beginShape();
    vertex(30, 80);
    bezierVertex(35, 60, 35, 45, 30, 30);
    bezierVertex(20, 10, 45, 5, 20, 0);
    bezierVertex(20, 0, -5, 0, 5, 10);
    bezierVertex(10, 15, 10, 20, 5, 30);
    bezierVertex(0, 45, 5, 65, 10, 80);
    endShape();
    fill(255, 0, 0);
    ellipse(18, 10, 12, 12);
    pop();

    if (window.shooting === false) {
      push();
      scale(this.r, 1);
      translate(this.x - 10, this.y + 25);
      noStroke();
      fill(166, 124, 82);
      beginShape();
      vertex(50, 65);
      bezierVertex(30, 30, 45, 35, 50, 25);
      bezierVertex(52, 20, 50, 10, 50, 10);
      bezierVertex(45, 0, 40, 10, 12, 2);
      bezierVertex(0, 7, 5, 12, 10, 15);
      bezierVertex(20, 20, 20, 35, 30, 70);
      endShape();
      noStroke();
      fill(200, 200, 200);
      rect(25, 55, 25, 100, 5);
      endShape();
      pop();
    } else {
      push();
      scale(this.r, 1);
      noStroke();
      fill(166, 124, 82);
      translate(this.x + 10, this.y);

      beginShape();
      vertex(30, 90);
      bezierVertex(10, 55, 25, 60, 30, 50);
      bezierVertex(32, 45, 30, 35, 30, 35);
      bezierVertex(25, 25, 20, 35, 14, 27);
      bezierVertex(10, 20, 10, 25, 13, 5);
      bezierVertex(7, 0, 7, 0, 4, 5);
      bezierVertex(0, 35, 0, 60, 10, 85);
      endShape();

      noStroke();
      fill(200, 200, 200);
      rect(6, 80, 25, 100, 5);
      fill(255, 255, 255, 100);
      beginShape();
      vertex(4, 11);
      vertex(11, 11);
      vertex(11, 5);
      bezierVertex(8, 3, 7, 3, 5, 5);
      endShape();
      pop();
    }

    push();
    fill(50, 50, 50);
    rect(innerWidth / 2 - 12, innerHeight - 13, 24, -104);
    fill(0, 0, 0);
    rect(innerWidth / 2 - 10, innerHeight - 15, 20, -100);
    if (window.overHeated === true) {
      fill(255, 0, 0);
    } else if (window.heater > 75) {
      fill(220, 120, 40);
    } else if (window.heater > 50) {
      fill(250, 220, 40);
    } else {
      fill(50, 255, 50);
    }
    rect(innerWidth / 2 - 10, innerHeight - 15, 20, -window.heater);
    pop();
  }
}
