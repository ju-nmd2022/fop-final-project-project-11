export default class GrayExplosion {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.v = Math.random();
    this.a = Math.random() * 2 * Math.PI;
    this.maxLife = 70 + Math.floor(Math.random() * 100);
    this.life = 0;
  }

  draw() {
    push();
    translate(this.x + window.movementX, this.y + window.movementY);
    noStroke();
    fill(150, 150, 150, 200);
    ellipse(0, 0, 3);
    pop();
  }

  update() {
    this.x = this.x + Math.cos(this.a) * this.v;
    this.y = this.y + Math.sin(this.a) * this.v;
    this.v = this.v * 1.04;
    this.life = this.life + 3;
  }

  isDead() {
    if (this.life > this.maxLife) {
      return true;
    } else {
      return false;
    }
  }
}
