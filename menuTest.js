function test(x, y) {
  push();
  translate(x, y);
  fill(50, 50, 50);
  rect(-400, -350, 800, 700);

  rect(10, 130, 200, 150);
  rect(-210, 130, 200, 150);
  rect(10, -40, 200, 150);
  rect(-210, -40, 200, 150);
  rect(10, -210, 200, 150);
  rect(-210, -210, 200, 150);

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

function draw() {
  test(innerWidth / 2, innerHeight / 2);
}
