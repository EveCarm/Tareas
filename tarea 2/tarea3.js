function setup() {
  let c = createCanvas(400, 400);
  c.parent("lienzo");
}

function draw() {
  background(245, 230, 200);

  fill(100, 180, 255);
  stroke(0);
  rect(80, 60, 120, 120);

  fill(255, 200, 120);
  noStroke();
  ellipse(260, 110, 140, 90);

  stroke(50);
  strokeWeight(3);
  line(50, 300, 350, 320);

  stroke(0);
  strokeWeight(6);
  point(150, 250);
  point(170, 260);
  point(190, 270);

  fill(180, 100, 200);
  stroke(70, 30, 120);
  rect(230, 240, 90, 110);
}
