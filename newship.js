function falcon(x, y) {
  push();
  scale(0.2);
  translate(x, y);
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
  fill(250, 0, 0);
  rect(20, 10, 42, 53);
}

function draw() {
  background(0, 0, 0);
  falcon(200, 200);
}
