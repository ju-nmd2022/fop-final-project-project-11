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

    if (window.startState === 1) {
      strokeWeight(1.5);
      stroke(5, 5, 5);
      textSize(20);

      fill(255, 255, 255);
      textSize(24);
      text("How to play?", -50, -190);
      rect(-110, -218, 40, 40);
      fill(0, 0, 0);
      text("H", -100, -190);
      fill(255, 255, 255);
      text("Select Mission", -50, -130);
      rect(-110, -158, 40, 40);
      fill(0, 0, 0);
      text("M", -100, -130);

      //Press Space
      fill(255, 255, 255);
      textSize(30);
      text("PRESS", -52, 120);
      text("TO START", -71, 250);
      rect(-120, 150, 240, 40);
      fill(0, 0, 0);
      textSize(20);
      text("SPACE", -33, 178);
    } else if (window.startState === 2) {
      fill(255, 255, 255);
      rect(90, -290, 120, 40);
      fill(0, 0, 0);
      triangle(100, -270, 120, -285, 120, -255);
      stroke(0, 0, 0);
      strokeWeight(4);
      line(105, -270, 200, -270);

      fill(50, 50, 50);

      rect(10, 130, 200, 150);
      rect(-210, 130, 200, 150);
      rect(10, -40, 200, 150);
      rect(-210, -40, 200, 150);
      rect(10, -210, 200, 150);
      rect(-210, -210, 200, 150);
    } else if (window.startState === 3) {
      fill(255, 255, 255);
      rect(90, -290, 120, 40);
      fill(0, 0, 0);
      triangle(100, -270, 120, -285, 120, -255);
      stroke(0, 0, 0);
      strokeWeight(4);
      line(105, -270, 200, -270);
    } else if (window.startState === 4) {
      fill(255, 255, 255);
      rect(90, -290, 120, 40);
      fill(0, 0, 0);
      triangle(100, -270, 120, -285, 120, -255);
      stroke(0, 0, 0);
      strokeWeight(4);
      line(105, -270, 200, -270);
    }
    pop();
  }
}
