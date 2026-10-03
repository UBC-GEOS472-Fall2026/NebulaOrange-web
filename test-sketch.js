var goingLeft = true;
var numStep = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  rect (numStep,10,10,10);

  if (numStep < width-20 & goingLeft) {
    numStep ++;
  }

  if (numStep == 380) {
    goingLeft = false;
    
  }
  if (goingLeft == false) {
    numStep--;
  }
  if (numStep == 0){
    goingLeft = true;
  }
}