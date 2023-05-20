export default class Ufo {
  constructor() {
    this.x = innerWidth + Math.floor(Math.random() * 300) + 300;
    this.y = Math.floor(Math.random() * (innerHeight + 100) - 50);
    this.velocityX = -Math.random() * 3 - 2;
    this.velocityY = Math.random() * 1 - 1;
    this.hp = 200;
  }

  draw() {
    push();
    translate(this.x + window.movementX, this.y + window.movementY);
    scale(0.2);
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

    fill(50, 255, 50);
    textSize(50);
    text(this.hp, 0, -10);
    pop();
  }

  isDead() {
    if (this.x < -350 || this.hp < 1) {
      return true;
    } else {
      return false;
    }
  }
}
