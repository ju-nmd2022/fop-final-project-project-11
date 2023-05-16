function ship() {
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
  pop();
}
function spak(x, y) {
  push();
  noStroke();
  fill(20, 20, 20);
  ellipse(330, 502, 34, 20);
  fill(60, 60, 60);
  ellipse(330, 500, 30, 15);
  beginShape();
  vertex(340, 500);
  bezierVertex(345, 480, 345, 465, 340, 450);
  bezierVertex(330, 430, 355, 425, 330, 420);
  bezierVertex(330, 420, 305, 420, 315, 430);
  bezierVertex(320, 435, 320, 440, 315, 450);
  bezierVertex(310, 465, 315, 485, 320, 500);
  endShape();
  fill(255, 0, 0);
  ellipse(328, 430, 12, 12);
  pop();
}
function handshoot() {
  push();
  noStroke();
  fill(166, 124, 82);
  beginShape();
  vertex(350, 515);
  bezierVertex(330, 480, 345, 485, 350, 475);
  bezierVertex(352, 470, 350, 460, 350, 460);
  bezierVertex(345, 450, 340, 460, 334, 452);
  bezierVertex(330, 445, 330, 450, 333, 430);
  bezierVertex(327, 425, 327, 425, 324, 430);
  bezierVertex(320, 460, 320, 485, 330, 510);
  endShape();
  pop();
  noStroke();
  fill(200, 200, 200);
  rect(325, 505, 25, 100, 5);
  fill(255, 255, 255, 150);
  beginShape();
  vertex(325, 436);
  vertex(331, 436);
  vertex(331, 430);
  bezierVertex(328, 428, 327, 428, 326, 430);
  endShape();
}

function hand() {
  push();
  noStroke();
  fill(166, 124, 82);
  beginShape();
  vertex(350, 515);
  bezierVertex(330, 480, 345, 485, 350, 475);
  bezierVertex(352, 470, 350, 460, 350, 460);
  bezierVertex(345, 450, 340, 460, 304, 452);
  bezierVertex(300, 457, 300, 462, 310, 465);
  bezierVertex(320, 460, 320, 485, 330, 520);
  endShape();
  pop();
  noStroke();
  fill(200, 200, 200);
  rect(325, 505, 25, 100, 5);
  fill(255, 255, 255, 150);
  beginShape();
  vertex(325, 436);
  vertex(331, 436);
  vertex(331, 430);
  bezierVertex(328, 428, 327, 428, 326, 430);
  endShape();
}

function draw() {
  ship();
  spak();
  //handshoot();
  hand();
}
