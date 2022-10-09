t = 0;

function setup() {
  createCanvas(400, 400);
  background(0);
  stroke(255);
  strokeWeight(5);
}

function draw() {
  while (t <= 400){
    point(x(t), y(t) +200);
    t++;
  }
  noLoop()
  save()
}


// parametric equations

function x(t){
  return t
}

function y(t){
  return sin(t/20) * -150
}
