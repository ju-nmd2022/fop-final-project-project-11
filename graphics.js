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

function pauseMenu() {}

function draw() {
  background(0, 0, 0);
  eve(200, 200);
  button(400, 400);
}

// explosion

let particles = [];

function createParticle(x, y) {
  const v = 0.2 + Math.random();
  const a = Math.PI * 2 + Math.random() * Math.PI;
  const maxLife = 100 + Math.floor(Math.random() * 100);
  return { x: x, y: y, velocity: v, angle: a, life: 0, maxLife: maxLife };
}

function drawParticle(particle) {
  push();
  translate(particle.x, particle.y);
  noStroke();
  fill(255, 110, 0, 20);
  ellipse(0, 0, 15);
  pop();
}

function updateParticle(particle) {
  particle.x = particle.x + Math.cos(particle.angle) * particle.velocity;
  particle.y = particle.y + Math.sin(particle.angle) * particle.velocity;
  particle.velocity = particle.velocity * 1.04;
  particle.life = particle.life + 4;

  if (particle.life > particle.maxLife) {
    const particleIndex = particles.indexOf(particle);
    particles.splice(particleIndex, 1);
  }
}

//activate explosion

function draw() {
  clear();
  for (let particle of particles) {
    drawParticle(particle);
    updateParticle(particle);
  }

  if (keyIsDown(32)) {
    for (let i = 0; i < 80; i++) {
      let particle = createParticle(400, 300);
      particles.push(particle);
    }
  }
}
