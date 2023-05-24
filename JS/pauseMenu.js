export default class PauseMenu {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  draw() {
    push();
    translate(this.x, this.y);
    fill(50, 50, 50);
    rect(-400, -350, 800, 700);

    fill(20, 20, 20);
    strokeWeight(2);
    stroke(5, 5, 5);
    fill(0, 205, 0);
    textSize(20);
    push();
    textAlign(CENTER);
    text("Current Progress:", 0, -180);
    pop();

    fill(255, 255, 255);
    rect(-120, 100, 40, 40);
    rect(-120, 180, 40, 40);
    textSize(25);
    text("Continue Game", -50, 128);
    text("Leave Game", -50, 208);
    fill(0, 0, 0);
    text("C", -110, 128);
    text("L", -107, 208);

    strokeWeight(0);
    fill(235, 235, 235);
    //Long "rectangles" Left side
    rect(-380, 10, 20, 330, 20);
    rect(-380, -10, 20, -330, 20);
    rect(-300, 10, 20, 330, 20);
    rect(-300, -10, 20, -330, 20);

    //Short rectangles Left side
    rect(-340, 260, 20, 80, 20);
    rect(-340, 160, 20, 80, 20);
    rect(-340, 60, 20, 80, 20);
    rect(-340, -40, 20, 80, 20);
    rect(-340, -140, 20, 80, 20);
    rect(-340, -240, 20, 80, 20);
    rect(-340, -340, 20, 80, 20);

    //Long "rectangles" Right side
    rect(360, 10, 20, 330, 20);
    rect(360, -10, 20, -330, 20);
    rect(280, 10, 20, 330, 20);
    rect(280, -10, 20, -330, 20);

    //Short rectangles Right side
    rect(320, 260, 20, 80, 20);
    rect(320, 160, 20, 80, 20);
    rect(320, 60, 20, 80, 20);
    rect(320, -40, 20, 80, 20);
    rect(320, -140, 20, 80, 20);
    rect(320, -240, 20, 80, 20);
    rect(320, -340, 20, 80, 20);
    pop();
  }
}
