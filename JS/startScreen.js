export default class StartScreen {
  constructor() {
    this.x = innerWidth / 2;
    this.y = innerHeight / 2;
  }

  draw() {
    push();
    translate(this.x, this.y);
    fill(50, 50, 50);
    rect(-400, -350, 800, 700);

    strokeWeight(1.5);
    stroke(5, 5, 5);
    textSize(20);

    fill(255, 255, 255);
    rect(-120, 150, 240, 40);
    rect(-120, -20, 40, 40);
    textSize(30);
    text("PRESS", -52, 120);
    text("TO START", -71, 250);
    fill(0, 0, 0);
    textSize(20);
    text("SPACE", -33, 178);
    text("L", -107, 8);

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
