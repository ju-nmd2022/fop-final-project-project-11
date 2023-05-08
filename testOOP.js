import Asteroid from "./asteroid.js";

let particles = [];

function setup() {
  createCanvas(innerWidth, innerHeight);
}
window.setup = setup;

function draw() {
  background(0, 0, 0);

  for (let particle of particles) {
    particle.draw();
    particle.update();
    if (particle.isDead()) {
      const particleIndex = particles.indexOf(particle);
      particles.splice(particleIndex, 1);
    }
  }
}
window.draw = draw;

function mouseClicked() {
  for (let i = 0; i < 1; i++) {
    let particle = new Asteroid(mouseX, mouseY);
    particles.push(particle);
  }
}

window.mouseClicked = mouseClicked;
