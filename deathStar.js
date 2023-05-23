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
strokeWeight(7);
stroke(190, 190, 190);
noFill();
rect(-180, 280, 30, 60);
rect(-115, 280, 30, 60);
rect(-50, 280, 30, 60);
rect(15, 280, 30, 60);
rect(83, 280, 30, 60);
rect(150, 280, 30, 60);

rect(-180, 180, 30, 60);
rect(-115, 180, 30, 60);
rect(-50, 180, 30, 60);
rect(15, 180, 30, 60);
rect(83, 180, 30, 60);
rect(150, 180, 30, 60);

rect(-80, 370, 30, 60);
rect(-18, 370, 30, 60);
rect(50, 370, 30, 60);

rect(-80, 90, 30, 60);
rect(-18, 90, 30, 60);
rect(50, 90, 30, 60);

beginShape();
vertex(-110, 370);
vertex(-110, 420);
vertex(-160, 370);
vertex(-110, 370);
endShape();

beginShape();
vertex(110, 370);
vertex(110, 420);
vertex(160, 370);
vertex(110, 370);
endShape();

beginShape();
vertex(110, 150);
vertex(110, 90);
vertex(160, 150);
vertex(110, 150);
endShape();
pop();

push();
translate(-100, 150);
rotate(0.7);
ellipse(0, 0, 100, 120);
fill(100, 100, 100);
ellipse(0, 0, 50, 60);
stroke(1);
stroke(100, 100, 100);
beginShape();
vertex(0, -59);
vertex(0, 59);
endShape();

beginShape();
vertex(49, 0);
vertex(-49, 0);
endShape();

beginShape();
vertex(43, 30);
vertex(-43, -30);
endShape();

beginShape();
vertex(-43, 30);
vertex(43, -30);
endShape();
pop();
