export default class RedExplosion {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.v = Math.random();
    this.a = Math.random() * 2 * Math.PI;
    this.maxLife = 50 + Math.floor(Math.random() * 100);
    this.life = 0;
  }

  draw() {
    push();
    translate(this.x + window.movementX, this.y + window.movementY);
    noStroke();
    fill(255, 0, 0, 80);
    ellipse(0, 0, 3);
    pop();
  }

  update() {
    this.x = this.x + Math.cos(this.a) * this.v;
    this.y = this.y + Math.sin(this.a) * this.v;
    this.v = this.v * 1.04;
    this.life = this.life + 3;
  }

  isDead() {
    if (this.life > this.maxLife) {
      return true;
    } else {
      return false;
    }
  }
}

// //grey
// function createParticle(x, y) {
//   const v = Math.random();
//   const a = Math.random() * 2 * Math.PI;
//   const maxLife = 20 + Math.floor(Math.random() * 100);
//   return { x: x, y: y, velocity: v, angle: a, life: 0, maxLife: maxLife };
// }

// //inside
// function createParticle2(x, y) {
//   const v = Math.random();
//   const a = Math.random() * 2 * Math.PI;
//   const maxLife = 10 + Math.floor(Math.random() * 100);
//   return { x: x, y: y, velocity: v, angle: a, life: 0, maxLife: maxLife };
// }

// function drawParticle(particle) {
//   push();
//   translate(particle.x, particle.y);
//   noStroke();
//   fill(255, 0, 0, 40);
//   ellipse(0, 0, 3);
//   pop();
// }

// function drawParticle2(particle2) {
//   push();
//   translate(particle2.x, particle2.y);
//   noStroke();
//   fill(0, 255, 0, 40);
//   ellipse(0, 0, 7);
//   pop();
// }

// //update

// function updateParticle(particle) {
//   particle.x = particle.x + Math.cos(particle.angle) * particle.velocity;
//   particle.y = particle.y + Math.sin(particle.angle) * particle.velocity;
//   particle.velocity = particle.velocity * 1.04;
//   particle.life = particle.life + 3;

//   if (particle.life > particle.maxLife) {
//     const particleIndex = particles.indexOf(particle);
//     particles.splice(particleIndex, 1);
//   }
// }

// //inside update
// function updateParticle2(particle2) {
//   particle2.x = particle2.x + Math.cos(particle2.angle) * particle2.velocity;
//   particle2.y = particle2.y + Math.sin(particle2.angle) * particle2.velocity;
//   particle2.velocity = particle2.velocity * 1.04;
//   particle2.life = particle2.life + 3;

//   if (particle2.life > particle2.maxLife) {
//     const particleIndex = particles2.indexOf(particle2);
//     particles2.splice(particleIndex, 1);
//   }
// }
