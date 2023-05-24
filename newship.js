function grayBackground(x, y) {
  push();
  translate(x, y);
  fill(50, 150, 50);
  rect(-400, -350, 800, 700);
  strokeWeight(0);
  fill(5, 85, 5);
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

function jimDraw(x, y) {
  push();
  translate(x, y);
  textAlign(CENTER);
  textSize(40);
  stroke(1);
  strokeWeight(10);
  fill(255, 255, 255);
  text("MISSION COMPLETED", 0, -150);
  strokeWeight(6);
  textSize(25);
  text("Statistics:", 0, -70);
  strokeWeight(2);
  textSize(20);
  text("Obstacles destroyed: 10", 0, -30);
  text("Boost used: 2", 0, 0);
  text("Time: 2s", 0, 30);
  text("Best Time: 1s", 0, 60);
  strokeWeight(6);
  textSize(30);
  text("Press Space to Leave", 0, 200);
  pop();
}

function draw() {
  background(0, 0, 0);
  grayBackground(innerWidth / 2, innerHeight / 2);
  jimDraw(innerWidth / 2, innerHeight / 2);
}
