let cx, cy;
let secondsRadius;
let minutesRadius;
let hoursRadius;
let clockDiameter;
var state = 1
var size = 20
var word = 'inhale'
var logged = false;
let circle_size = 2


function setup() {
  createCanvas(windowWidth, windowHeight);
  startAt = millis();

  stroke(255);

  let radius = min(windowWidth, windowHeight) / 4;
  secondsRadius = radius * 0.7;
  minutesRadius = radius * 0.6;
  hoursRadius = radius * 0.5;
  clockDiameter = radius * 1.5;

  cx = windowWidth / 2;
  cy = windowHeight / 2;

  r = 255;
  g = 160; //145
  b = 180; //175
}

function draw() {

  // Print out every new minute
  let s = second()
  if(s == 1){
	  if(!logged){
		console.log(minute())
		logged = true;
	  }
  } 

  background(225);

  // Draw the clock background
  noStroke();
  fill(r + 5 , g + 5, b);
  ellipse(cx, cy, clockDiameter + 25, clockDiameter + 25);
  fill(r, g, b);
  ellipse(cx, cy, clockDiameter, clockDiameter);
  
  // Draw circles representing minutes passed
  for (let a = 0; a <= minute(); a++) {
	let minute_angle = radians(a * 6) - HALF_PI;
    let x = cx + cos(minute_angle) * secondsRadius;
	let y = cy + sin(minute_angle) * secondsRadius;
	stroke(238, 241, 252)
	fill(238, 241, 252)
	circle(x, y, circle_size);
  }

  // Draw circles representing future minutes
  for(let b = minute(); b < 60; b++){
	let minute_angle = radians(b * 6) - HALF_PI;
	let x = cx + cos(minute_angle) * secondsRadius;
	let y = cy + sin(minute_angle) * secondsRadius;
	stroke(105,105,105)
	fill(105,105,105)
	circle(x, y, circle_size);
  }

  // Draw circles representing hours passed
  for (let c = 0; c <= hour(); c++) {
    let hour_angle = radians(c * 15) - HALF_PI;
    let q = cx + cos(hour_angle) * minutesRadius;
	let w = cy + sin(hour_angle) * minutesRadius;
	stroke(238, 241, 252)
	fill(238, 241, 252)
	circle(q, w, circle_size);
  }

  // Draw circles representing future hours 
  for(let d = hour(); d < 24; d++){
	let hour_angle = radians(d * 15) - HALF_PI;
	let q = cx + cos(hour_angle) * minutesRadius;
	let w = cy + sin(hour_angle) * minutesRadius;
	stroke(105,105,105)
	fill(105,105,105)
	circle(q, w, circle_size);
  }
  
  // Text in circle 
  textSize(size);
  fill(255); 
  textAlign(CENTER, CENTER);
  textFont('Serif');
  text(word, cx, cy);


  // Every 4 seconds, change the state of the breathing circle
  if (frameCount % 240 == 0){
	if(state == 1){
		state = 2;
	}
	else if(state == 2){
		state = 3;
	}
	else if(state == 3){
		state = 4;
	}
	else{
		state = 1
	}
  }

  // Expands circle 
  if (state == 1) {
	secondsRadius = secondsRadius + .3
	minutesRadius = minutesRadius + .3
	clockDiameter++
	r = r - .2
	g = g - .2
	b = b - .2
	word = 'inhale'
	if(size < 100){
		size = size + .2
	}
	circle_size = circle_size + .01
  }

  // Retracts circle
  if (state == 3) {
	secondsRadius = secondsRadius - .3
	minutesRadius = minutesRadius - .3
	clockDiameter--
	r = r + .2
	g = g + .2
	b = b + .2
	word = 'exhale'
	size = size - .2
	circle_size = circle_size - .01
  }

  // Holds circle 
  if(state == 2 || state == 4){
	word = 'hold'
  }
  
  endShape();
}

// Resize circle to window size
function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
 }
