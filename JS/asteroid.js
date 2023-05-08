export default class Asteroid {
  constructor(x, y) {
    this.x = Math.floor(Math.random() * 300 - 600);
    this.y = Math.floor(Math.random() * (innerHeight + 100) - 50);
    this.velocityX = Math.random() * 3 + 2;
    this.velocityY = Math.random() * 1 - 1;
    this.rotation = 0;
    this.hp = 100;
  }

  draw() {
    push();
    translate(this.x + movementX, this.y + movementY);
    scale(0.2);
    rotate(this.rotation);

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
  }

  isDead() {
    if (this.x > innerWidth + 350 || this.hp < 1) {
      return true;
    } else {
      return false;
    }
  }
}
