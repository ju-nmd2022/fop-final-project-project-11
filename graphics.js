function pauseMenu() {}

function draw() {
  background(0, 0, 0);
  eve(200, 200);
  button(400, 400);
}

// explosion

let particles = [];
let particles2 = [];

//grey
function createParticle(x, y) {
  const v = Math.random();
  const a = Math.random() * 2 * Math.PI;
  const maxLife = 100 + Math.floor(Math.random() * 100);
  return { x: x, y: y, velocity: v, angle: a, life: 0, maxLife: maxLife };
}

//inside
function createParticle2(x, y) {
  const v = Math.random();
  const a = Math.random() * 2 * Math.PI;
  const maxLife = 10 + Math.floor(Math.random() * 100);
  return { x: x, y: y, velocity: v, angle: a, life: 0, maxLife: maxLife };
}

function drawParticle(particle) {
  push();
  translate(particle.x, particle.y);
  noStroke();
  fill(160, 170, 170, 40);
  ellipse(0, 0, 3);
  pop();
}

function drawParticle2(particle2) {
  push();
  translate(particle2.x, particle2.y);
  noStroke();
  fill(255, 100, 100, 40);
  ellipse(0, 0, 7);
  pop();
}

//update

function updateParticle(particle) {
  particle.x = particle.x + Math.cos(particle.angle) * particle.velocity;
  particle.y = particle.y + Math.sin(particle.angle) * particle.velocity;
  particle.velocity = particle.velocity * 1.04;
  particle.life = particle.life + 3;

  if (particle.life > particle.maxLife) {
    const particleIndex = particles.indexOf(particle);
    particles.splice(particleIndex, 1);
  }
}

//inside update
function updateParticle2(particle2) {
  particle2.x = particle2.x + Math.cos(particle2.angle) * particle2.velocity;
  particle2.y = particle2.y + Math.sin(particle2.angle) * particle2.velocity;
  particle2.velocity = particle2.velocity * 1.04;
  particle2.life = particle2.life + 3;

  if (particle2.life > particle2.maxLife) {
    const particleIndex = particles2.indexOf(particle2);
    particles2.splice(particleIndex, 1);
  }
}

//activate explosion

function draw() {
  //grey
  clear();
  for (let particle of particles) {
    drawParticle(particle);
    updateParticle(particle);
  }

  if (keyIsDown(32)) {
    for (let i = 0; i < 350; i++) {
      let particle = createParticle(400, 300);
      particles.push(particle);
    }
  }

  //Inside
  for (let particle2 of particles2) {
    drawParticle2(particle2);
    updateParticle2(particle2);
  }

  if (keyIsDown(32)) {
    for (let i = 0; i < 40; i++) {
      let particle2 = createParticle2(400, 300);
      particles2.push(particle2);
    }
  }
}
