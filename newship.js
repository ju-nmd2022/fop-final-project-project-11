function grayBackground(x, y) {
  push();
  translate(x, y);
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
  pop();
}

function jimDraw(x, y) {
  push();
  translate(x, y);
  fill(255, 255, 255);
  rect(90, -290, 120, 40);
  fill(0, 0, 0);
  triangle(100, -270, 120, -285, 120, -255);
  stroke(0, 0, 0);
  strokeWeight(4);
  line(105, -270, 200, -270);

  scale(0.8);

  push();
  fill(200, 200, 200);
  stroke(0, 0, 0);
  strokeWeight(6);
  rect(-230, -230, 100, 100, 5);
  rect(-230, -80, 100, 100, 5);
  rect(-230, 70, 100, 100, 5);
  pop();

  push();
  beginShape();
  vertex(-200, -180);
  vertex(-160, -180);
  endShape();

  beginShape();
  vertex(-180, -200);
  vertex(-180, -160);
  endShape();
  pop();

  push();
  noStroke();
  fill(200, 200, 200);
  rect(-183, -183, 5, 5);
  pop();

  push();
  rect(-185, -50, 10, 10);
  rect(-185, -33, 10, 10);
  rect(-167, -33, 10, 10);
  rect(-203, -33, 10, 10);
  pop();

  push();
  noFill();
  rect(-187, 90, 15, 60);
  fill(0, 0, 0);
  rect(-187, 123, 15, 24);
  pop();

  push();
  strokeWeight(0.3);
  stroke(255, 255, 255);
  fill(255, 255, 255);
  textSize(20);
  text("Shoot", -110, -205);
  text("Move", -110, -60);
  text("Boost", -110, 90);
  pop();

  push();
  strokeWeight(0);
  fill(255, 255, 255);
  textSize(14);
  text(
    "Use your mouse/mousepad to move your aim around.\nPress and hold mouse1 to shoot your laser cannon.\nWatch out for overheating the cannon and Eve!",
    -110,
    -183
  );
  text(
    "Move around in space using either the W A S D \nor arrow keys.",
    -110,
    -37
  );
  text(
    "To the left of your hands in the cockpit, there is a\nprogress bar for the boost. When ready,\npress the B key to activate boost and get increased damage.",
    -110,
    110
  );
  pop();

  push();
  stroke(255, 255, 255);
  strokeWeight(0);
  fill(255, 255, 255);
  textSize(14);
  text("Complete your mission to move on to further levels!", -110, 210);
  pop();
  pop();
}

function draw() {
  background(0, 0, 0);
  grayBackground(innerWidth / 2, innerHeight / 2);
  jimDraw(innerWidth / 2, innerHeight / 2);
}
