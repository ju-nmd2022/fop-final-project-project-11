export default class Ship {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.xJoystick1 = 300;
    this.yJoystick1 = 460;
  }

  draw() {
    push();
    translate(this.x, this.y);
    fill(150, 170, 190);
    rect(0, innerHeight - 140, innerWidth, 140);
    triangle(0, 0, 60, innerHeight - 140, 0, innerHeight);
    triangle(
      innerWidth,
      0,
      innerWidth - 60,
      innerHeight - 140,
      innerWidth,
      innerHeight
    );
    fill(255, 0, 0);
    textSize(50);
    text(asteroidCounter, 600, 550);
    text(ufoCounter, 150, 550);
    pop();
  }
}
