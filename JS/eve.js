export default class Eve {
  constructor() {
    this.x = Math.floor(Math.random() * 300 - 600);
    this.y = Math.floor(Math.random() * (innerHeight + 100) - 50);
    this.velocityX = Math.random() * 3 + 2;
    this.velocityY = Math.random() * 1 - 1;
    this.hp = 1;
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

    fill(250, 55, 50);
    textSize(50);
    text(this.hp, 0, -7);
    pop();
  }

  isDead() {
    if (this.x > innerWidth + 350 || this.hp < 1) {
      return true;
    } else {
      return false;
    }
  }
}
