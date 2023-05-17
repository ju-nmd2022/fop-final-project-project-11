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
  ellipse(330 - 30, 502, 34, 20);
  fill(60, 60, 60);
  ellipse(330 - 30, 500, 30, 15);
  beginShape();
  vertex(340 - 30, 500);
  bezierVertex(345 - 30, 480, 345 - 30, 465, 340 - 30, 450);
  bezierVertex(330 - 30, 430, 355 - 30, 425, 330 - 30, 420);
  bezierVertex(330 - 30, 420, 305 - 30, 420, 315 - 30, 430);
  bezierVertex(320 - 30, 435, 320 - 30, 440, 315 - 30, 450);
  bezierVertex(310 - 30, 465, 315 - 30, 485, 320 - 30, 500);
  endShape();
  fill(255, 0, 0);
  ellipse(328 - 30, 430, 12, 12);
  pop();
}

function spak2(x, y) {
  push();
  noStroke();
  fill(20, 20, 20);
  ellipse(330 + 170, 502, 34, 20);
  fill(60, 60, 60);
  ellipse(330 + 170, 500, 30, 15);
  beginShape();
  vertex(340 + 170, 500);
  bezierVertex(345 + 170, 480, 345 + 170, 465, 340 + 170, 450);
  bezierVertex(330 + 170, 430, 355 + 170, 425, 330 + 170, 420);
  bezierVertex(330 + 170, 420, 305 + 170, 420, 315 + 170, 430);
  bezierVertex(320 + 170, 435, 320 + 170, 440, 315 + 170, 450);
  bezierVertex(310 + 170, 465, 315 + 170, 485, 320 + 170, 500);
  endShape();
  fill(255, 0, 0);
  ellipse(328 + 170, 430, 12, 12);
  pop();
}

function handshoot() {
  push();
  noStroke();
  fill(166, 124, 82);

  //chatgpt help to flip hand
  scale(-1, 1); // Flip the hand horizontally
  translate(-596, 0); // Move the hand to the left
  //end here
  beginShape();
  vertex(350 - 30, 515);
  bezierVertex(330 - 30, 480, 345 - 30, 485, 350 - 30, 475);
  bezierVertex(352 - 30, 470, 350 - 30, 460, 350 - 30, 460);
  bezierVertex(345 - 30, 450, 340 - 30, 460, 334 - 30, 452);
  bezierVertex(330 - 30, 445, 330 - 30, 450, 333 - 30, 430);
  bezierVertex(327 - 30, 425, 327 - 30, 425, 324 - 30, 430);
  bezierVertex(320 - 30, 460, 320 - 30, 485, 330 - 30, 510);
  endShape();

  pop();
  noStroke();
  fill(200, 200, 200);
  rect(325 - 48, 505, 25, 100, 5);
  fill(255, 255, 255, 100);
  beginShape();
  vertex(325 - 30, 436);
  vertex(331 - 30, 436);
  vertex(331 - 30, 430);
  bezierVertex(328 - 30, 428, 327 - 30, 428, 326 - 30, 430);
  endShape();
}

function handshoot2() {
  push();
  noStroke();
  fill(166, 124, 82);
  beginShape();
  vertex(350 + 170, 515);
  bezierVertex(330 + 170, 480, 345 + 170, 485, 350 + 170, 475);
  bezierVertex(352 + 170, 470, 350 + 170, 460, 350 + 170, 460);
  bezierVertex(345 + 170, 450, 340 + 170, 460, 334 + 170, 452);
  bezierVertex(330 + 170, 445, 330 + 170, 450, 333 + 170, 430);
  bezierVertex(327 + 170, 425, 327 + 170, 425, 324 + 170, 430);
  bezierVertex(320 + 170, 460, 320 + 170, 485, 330 + 170, 510);
  endShape();
  pop();
  noStroke();
  fill(200, 200, 200);
  rect(325 + 170, 505, 25, 100, 5);
  fill(255, 255, 255, 100);
  beginShape();
  vertex(325 + 170, 436);
  vertex(331 + 170, 436);
  vertex(331 + 170, 430);
  bezierVertex(328 + 170, 428, 327 + 170, 428, 326 + 170, 430);
  endShape();
}

function hand() {
  push();
  noStroke();
  fill(166, 124, 82);
  beginShape();
  vertex(350 + 170, 515);
  bezierVertex(330 + 170, 480, 345 + 170, 485, 350 + 170, 475);
  bezierVertex(352 + 170, 470, 350 + 170, 460, 350 + 170, 460);
  bezierVertex(345 + 170, 450, 340 + 170, 460, 312 + 170, 452);
  bezierVertex(300 + 170, 457, 305 + 170, 462, 310 + 170, 465);
  bezierVertex(320 + 170, 470, 320 + 170, 485, 330 + 170, 520);
  endShape();
  pop();
  noStroke();
  fill(200, 200, 200);
  rect(325 + 170, 505, 25, 100, 5);
  endShape();
}

function hand2() {
  //chatgpt help to flip hand
  scale(-1, 1); // Flip the hand horizontally
  translate(-596, 0); // Move the hand to the left
  //end here
  push();
  noStroke();
  fill(166, 124, 82);
  beginShape();
  vertex(350 - 30, 515);
  bezierVertex(330 - 30, 480, 345 - 30, 485, 350 - 30, 475);
  bezierVertex(352 - 30, 470, 350 - 30, 460, 350 - 30, 460);
  bezierVertex(345 - 30, 450, 340 - 30, 460, 312 - 30, 452);
  bezierVertex(300 - 30, 457, 305 - 30, 462, 310 - 30, 465);
  bezierVertex(320 - 30, 470, 320 - 30, 485, 330 - 30, 520);
  endShape();
  pop();
  noStroke();
  fill(200, 200, 200);
  rect(325 - 30, 505, 25, 100, 5);
  endShape();
}

function draw() {
  ship();
  spak();
  spak2();
  //handshoot();
  //handshoot2();
  hand();
  hand2();
}
