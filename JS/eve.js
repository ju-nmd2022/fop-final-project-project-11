export default class Eve {
  constructor() {
    this.x = Math.floor(Math.random() * (innerWidth + 600) - 300);
    this.y = -300 - Math.floor(Math.random() * 600);
    this.velocityY = Math.random() * 3 + 2;
    this.velocityX = Math.random() * 1 - 1;
  }

  draw() {
    push();
    translate(this.x + window.movementX, this.y + window.movementY);
    scale(0.2);
    fill(255, 255, 255);
    strokeWeight(1.5);
    stroke(0, 0, 0);
    beginShape();
    vertex(-40, 50);
    bezierVertex(-30, 200, 30, 200, 40, 50);
    endShape();

    ellipse(0, 50, 80, 15);

    beginShape();
    vertex(0, 0);
    bezierVertex(50, 0, 40, 50, 0, 50);
    bezierVertex(-40, 50, -50, 0, 0, 0);
    endShape();

    fill(0, 0, 0);
    ellipse(0, 27, 45, 27);

    push();
    fill(100, 160, 255);
    translate(-8, 27);
    rotate(0.2);
    ellipse(0, 0, 15, 7);
    pop();

    push();
    fill(100, 160, 255);
    translate(8, 27);
    rotate(-0.2);
    ellipse(0, 0, 15, 7);
    pop();

    noFill();
    beginShape();
    vertex(-43, 52);
    bezierVertex(-45, 100, -50, 90, -27, 150);
    endShape();

    beginShape();
    vertex(43, 52);
    bezierVertex(45, 100, 50, 90, 27, 150);
    endShape();
    pop();

    this.x = this.x + this.velocityX;
    this.y = this.y + this.velocityY;
  }

  isDead() {
    if (this.y > innerHeight + 300) {
      return true;
    } else {
      return false;
    }
  }
}
