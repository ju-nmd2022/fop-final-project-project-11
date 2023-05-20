export default class Asteroid {
  constructor() {
    this.x = Math.floor(Math.random() * 600 - 1000);
    this.y = Math.floor(Math.random() * (innerHeight + 200) - 100);
    this.velocityX = Math.random() * 3 + 2;
    this.velocityY = Math.random() * 1 - 1;
    this.scale = Math.random();
    this.rotation = 0;
    this.hp = 100;
  }

  draw() {
    push();
    translate(this.x + window.movementX, this.y + window.movementY);
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
    push();
    translate(this.x + window.movementX - 25, this.y + window.movementY);
    if (this.hp < 25) {
      stroke(255, 50, 50);
    } else if (this.hp < 50) {
      stroke(220, 120, 40);
    } else if (this.hp < 75) {
      stroke(250, 220, 40);
    } else {
      stroke(50, 255, 50);
    }
    strokeWeight(3);
    scale(0.5);
    line(0, -74, this.hp, -74);
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
