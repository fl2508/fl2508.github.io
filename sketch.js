let cx, cy;
let secondsRadius;
let minutesRadius;
let hoursRadius;
let clockDiameter;
var inOut = true;

function setup() {
  createCanvas(800,600);
  stroke(255);

  let radius = min(width, height) / 2;
  secondsRadius = radius * 0.71;
  minutesRadius = radius * 0.6;
  hoursRadius = radius * 0.5;
  clockDiameter = radius * 1.7;

  cx = width / 2;
  cy = height / 2;
}

function draw() {
  //background(230);
  background(225);
  textSize(32);
  fill(180);
  text(hour(), 10, 30);
  fill(100);
  text(minute(), 10, 60);
  fill(0);
  text(second(), 10, 90);

  // Draw the clock background
  noStroke();
  fill(244, 122, 158);
  ellipse(cx, cy, clockDiameter + 25, clockDiameter + 25);
  fill(237, 34, 93);
  ellipse(cx, cy, clockDiameter, clockDiameter);

  // Angles for sin() and cos() start at 3 o'clock;
  // subtract HALF_PI to make them start at the top
  let s = map(second(), 0, 60, 0, TWO_PI) - HALF_PI;
  let m = map(minute() + norm(second(), 0, 60), 0, 60, 0, TWO_PI) - HALF_PI;
  let h = map(hour() + norm(minute(), 0, 60), 0, 24, 0, TWO_PI * 2) - HALF_PI;

  // Draw the hands of the clock
  stroke(255);
  strokeWeight(1);
  line(cx, cy, cx + cos(s) * secondsRadius, cy + sin(s) * secondsRadius);
  strokeWeight(2);
  line(cx, cy, cx + cos(m) * minutesRadius, cy + sin(m) * minutesRadius);
  strokeWeight(4);
  line(cx, cy, cx + cos(h) * hoursRadius, cy + sin(h) * hoursRadius);

  // Draw the minute ticks
  strokeWeight(2);
  beginShape(POINTS);
  for (let a = 0; a < 360; a += 6) {
    let angle = radians(a);
    let x = cx + cos(angle) * secondsRadius;
    let y = cy + sin(angle) * secondsRadius;
    vertex(x, y);
  }
  
  let millisecond = millis();

  if(frameCount % 60 == 0){
    if(!inOut){
      inOut = true;
    }
    else if(inOut){
      inOut = false;
    } 
  }

  /*if (clockDiameter < 100) {
    inOut = true;
  } */ 

  if (inOut) {
    clockDiameter++
  }

  if (!inOut) {
    clockDiameter--
  }
  
  endShape();
}
