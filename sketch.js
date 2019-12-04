function setup () {
  createCanvas (600,600);
  }

function draw () {
  background (0);
  point(mouseX, mouseY);
  translate(300,300);
  rotate(-90);

  let hr = hour();
  let min = minute();
  let sec = second();


  strokeWeight(8);
  stroke(255, 100, 150);
  noFill();
  let secondAngle = map(sec, 0, 60, 0, 360);
  arc(0, 0, 400, 400, 0, secondAngle);



  stroke(150, 100, 255);
  let minuteAngle = map(min, 0, 60, 0, 360);
  arc(0, 0, 380, 380, 0, minuteAngle);

  stroke(150, 255, 100);
  let hourAngle = map(hr % 12, 0, 12, -90, 360);
  arc(0, 0, 360, 360, 0, hourAngle);

  push();
  rotate(secondAngle);
  stroke(255, 100, 150);
  line(0, 0, 100, 0);
  pop();

  
  push();
  rotate(minuteAngle);
  stroke(150, 100, 255);
  line(0, 0, 75, 0);
  pop();

  push();
  rotate(hourAngle);
  stroke(150, 255, 100);
  line(0, 0, 50, 0);
  pop();

  stroke(255);
  point(0, 0);




}
