

function eve(evex, evey) {
fill(255, 255, 255);
strokeWeight(1.5);
stroke(0, 0, 0);
beginShape();
vertex(evex - 40, evey + 50);
bezierVertex(
  evex - 30,
  evey + 200,
  evex + 30,
  evey + 200,
  evex + 40,
  evey + 50
);
endShape();

ellipse(evex, evey + 50, 80, 15);

beginShape();
vertex(evex, evey);
bezierVertex(evex + 50, evey, evex + 40, evey + 50, evex, evey + 50);
bezierVertex(evex - 40, evey + 50, evex - 50, evey, evex, evey);
endShape();

fill(0, 0, 0);
ellipse(evex, evey + 27, 45, 27);

push();
fill(100, 160, 255);
translate(evex - 8, evey + 27);
rotate(0.2);
ellipse(0, 0, 15, 7);
pop();

push();
fill(100, 160, 255);
translate(evex + 8, evey + 27);
rotate(-0.2);
ellipse(0, 0, 15, 7);
pop();

noFill();
beginShape();
vertex(evex - 43, evey + 52);
bezierVertex(
  evex - 45,
  evey + 100,
  evex - 50,
  evey + 90,
  evex - 27,
  evey + 150
);
endShape();

beginShape();
vertex(evex + 43, evey + 52);
bezierVertex(
  evex + 45,
  evey + 100,
  evex + 50,
  evey + 90,
  evex + 27,
  evey + 150
);
endShape();
}

function ufo(ufox, ufoy){
fill(130, 0, 0);
beginShape();
vertex(ufox - 100, ufoy + 50);
bezierVertex(
  ufox - 90,
  ufoy + 100,
  ufox + 90,
  ufoy + 100,
  ufox + 100,
  ufoy + 50
);
endShape();
push();
fill(230, 0, 0);
ellipse(ufox, ufoy + 50, 200, 50);
fill(0, 200, 255);
beginShape();
vertex(ufox - 30, ufoy + 50);
bezierVertex(ufox - 30, ufoy - 10, ufox + 30, ufoy - 10, ufox + 30, ufoy + 50);
vertex(ufox - 30, ufoy + 50);
endShape();
fill(0, 200, 0);
ellipse(ufox - 80, ufoy + 54, 10);
ellipse(ufox - 50, ufoy + 60, 10);
ellipse(ufox - 15, ufoy + 64, 10);
ellipse(ufox + 15, ufoy + 64, 10);
ellipse(ufox + 80, ufoy + 54, 10);
ellipse(ufox + 50, ufoy + 60, 10);
pop();
}


function draw() {
  background(255, 255, 255);
  eve(200, 200);
  ufo(200, 400);
}