function setup() {
  createCanvas(1000, 1000);
  frameRate(15);
}

function draw() {
  background(225, 16, 100, 10);
  if (mouseIsPressed) {
    Spider(mouseX, mouseY);
  }
}

function Spider(x, y) {
  translate(mouseX,mouseY);
  scale(mouseX/500.0);
  scale(random(0.5, 2), random(0.1, 1));

  push();

  //the body
  fill(random(125, 255), random(0, 200), random(16, 25));
  noStroke();
  ellipse(250, 250, 100, 100);
  ellipse(250, 300, 55, 50);


  fill(0);
  stroke(1);
  strokeWeight(1);

  //right legs
  //other bottom leg
  line (270, 280, 350, 250);
  line (350, 250, 400, 300);
  //other top leg
  line (270, 250, 350, 200);
  line (350, 200, 400, 230);
  //top leg
  line (250, 260, 325, 160);
  line (325, 160, 260, 150);
  //bottom leg
  line (280, 290, 345, 310);
  line (345, 310, 280, 350);

  //Left legs
  //bottom leg
  line (155, 310, 220, 350);
  line (220, 290, 155, 310);
  //other bottom leg
  line (230, 280, 150, 250);
  line (150, 250, 100, 300);
  //top leg
  line (250, 260, 175, 160);
  line (175, 160, 240, 150);
  //other top leg
  line (230, 250, 150, 200);
  line (150, 200, 100, 230);

  fill(255);
  noStroke();
  ellipse(230, 300, 10, 10);
  ellipse(270, 300, 10, 10);
  pop();

}
