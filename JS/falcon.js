export default class Falcon {
  constructor() {
    this.x = Math.floor(Math.random() * (innerWidth + 600) - 300);
    this.y = innerHeight + 300 + Math.random(500);
    this.velocityY = Math.random() * -4 - 4;
    this.hp = 50;
  }

  draw() {
    push();
    translate(this.x + window.movementX, this.y + window.movementY);
    scale(0.2);
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
    push();
    translate(this.x + window.movementX - 25, this.y + window.movementY);
    //change the color of the hp bar depending on how much hp is left
    if (this.hp < 10) {
      stroke(255, 50, 50);
    } else if (this.hp < 17) {
      stroke(220, 120, 40);
    } else if (this.hp < 25) {
      stroke(250, 220, 40);
    } else {
      stroke(50, 255, 50);
    }
    strokeWeight(1);
    line(0, -40, this.hp, -40);
    pop();
  }

  isDead() {
    if (this.y < -300 || this.hp < 1) {
      return true;
    } else {
      return false;
    }
  }
}
