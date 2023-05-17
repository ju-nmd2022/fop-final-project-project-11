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
  }
}
