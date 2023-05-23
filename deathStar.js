background(0, 0, 0);
translate(400, 0);

fill(200, 200, 200);
beginShape();
vertex(-200, 250);
bezierVertex(-200, -20, 200, -20, 200, 250);
endShape();

beginShape();
vertex(-200, 270);
bezierVertex(-200, 530, 200, 530, 200, 270);
endShape();

noStroke();
beginShape();
fill(160, 160, 160);
vertex(-200, 270);
bezierVertex(-180, 270, -180, 250, -200, 250);
vertex(200, 250);
bezierVertex(180, 250, 180, 270, 200, 270);
endShape();

push();

translate(-100, 150);
rotate(0.7);
ellipse(0, 0, 100, 120);
pop();
