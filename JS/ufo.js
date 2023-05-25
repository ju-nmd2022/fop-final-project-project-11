export default class Ufo {
  constructor() {
    this.x = innerWidth + Math.floor(Math.random() * 600) + 300;
    this.y = Math.floor(Math.random() * (innerHeight + 100) - 50);
    this.velocityX = -Math.random() * 3 - 1;
    this.velocityY = Math.random() * 1 - 1;
    this.scale = this.velocityX * -0.35;
    this.hp = 200;
  }

  draw() {
    push();
    translate(this.x + window.movementX, this.y + window.movementY);
    scale(this.scale);
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
    pop();
    push();
    translate(this.x + window.movementX - 25, this.y + window.movementY);

    //change the color of the hp bar depending on how much hp is left
    if (this.hp < 25) {
      stroke(255, 50, 50);
    } else if (this.hp < 75) {
      stroke(220, 120, 40);
    } else if (this.hp < 125) {
      stroke(250, 220, 40);
    } else {
      stroke(50, 255, 50);
    }
    strokeWeight(3.5);
    scale(0.25);
    line(0, -54 * this.scale, this.hp, -54 * this.scale);
    pop();

    this.x = this.x + this.velocityX;
    this.y = this.y + this.velocityY;
  }

  isDead() {
    if (this.x < -350 || this.hp < 1) {
      return true;
    } else {
      return false;
    }
  }
}
