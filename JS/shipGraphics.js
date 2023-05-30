export default class Ship {
  constructor() {
    this.x = 0;
    this.y = 0;
  }

  draw() {
    push();
    translate(this.x, this.y);
    fill(100, 110, 110);
    rect(0, innerHeight - 140, innerWidth, 140);
    rect(0, 0, innerWidth, 100);
    beginShape();
    vertex(-50, innerHeight);
    vertex(0, innerHeight);
    vertex(60, innerHeight - 140);
    vertex(10, innerHeight / 2);
    vertex(60, 100);
    vertex(0, 0);
    vertex(-50, 0);
    endShape();
    beginShape();
    vertex(innerWidth + 50, innerHeight);
    vertex(innerWidth, innerHeight);
    vertex(innerWidth - 60, innerHeight - 140);
    vertex(innerWidth - 10, innerHeight / 2);
    vertex(innerWidth - 60, 100);
    vertex(innerWidth, 0);
    vertex(innerWidth + 50, 0);
    endShape();

    //The Boost section (ACTIVATE BUTTON etc.)
    push();
    fill(50, 50, 50);
    rect(innerWidth / 2 + 223, innerHeight - 77, 104, 14);
    fill(0, 200, 200);
    rect(innerWidth / 2 + 225, innerHeight - 75, window.boostCounter, 10);
    textSize(24);
    fill(50, 50, 50);
    text("Boost", innerWidth / 2 + 243, innerHeight - 90);
    fill(50, 50, 50);
    rect(innerWidth / 2 + 240, innerHeight - 45, 70, 25);

    //If the boost is ready to be activated, make the activate button green
    if (window.boostReady) {
      fill(50, 200, 50);
    }
    //But if not, red activate button
    else {
      fill(200, 50, 50);
    }
    rect(innerWidth / 2 + 242, innerHeight - 43, 66, 21);
    fill(255, 255, 255);
    textSize(10);
    text("ACTIVATE", innerWidth / 2 + 252, innerHeight - 29);
    rect(innerWidth / 2 + 215, innerHeight - 43, 20, 20);
    rect(innerWidth / 2 + 315, innerHeight - 43, 20, 20);
    fill(0, 0, 0);
    text("B", innerWidth / 2 + 221, innerHeight - 30);
    text("B", innerWidth / 2 + 321, innerHeight - 30);
    pop();

    push();
    translate(innerWidth / 2, 0);
    noStroke();
    fill(100, 110, 110);
    rect(-102, 38, 204, 104);
    fill(0, 0, 0);
    rect(-100, 40, 200, 100);
    if (window.timerS < 10) {
      fill(255, 0, 0);
    } else if (window.timerS < 20) {
      fill(220, 120, 40);
    } else if (window.timerS < 60) {
      fill(250, 220, 40);
    } else {
      fill(50, 255, 50);
    }
    textSize(50);
    textAlign(CENTER);
    text(window.timerS + "s", 0, 110);

    pop();
    pop();
  }
}
