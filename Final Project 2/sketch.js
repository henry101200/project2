const snowflakes = [];
const snowflakesP = [];
const minSpeed = 1;
const maxSpeed = 5;
var wind;
var canvas;

function windowResized(){
  resizeCanvas(windowWidth,windowHeight);
}

function setup() {
  canvas = createCanvas(windowWidth, 5000);
  canvas.position(0,0);
  canvas.style('z-index','-1');//send to back
  noSmooth();
  stroke(255);
  fill(255);
}

function draw() {
  background(0, 0, 32);

    //makes the snow falling to the ground
    for(const snowflake of snowflakes) {
      snowflake.y += snowflake.z;
    //shape and size of the snow
      rect(snowflake.x, snowflake.y, 1, 1); 
    }
  
      for(const snowflake of snowflakesP) {
      snowflake.y += snowflake.z;
    //star snowflakes
  line(30+snowflake.x+wind, 20+snowflake.y, 70+snowflake.x+wind, 60+snowflake.y);
  line(20+snowflake.x+wind, 40+snowflake.y, 85+snowflake.x+wind, 40+snowflake.y);
  line(30+snowflake.x+wind, 60+snowflake.y, 70+snowflake.x+wind, 20+snowflake.y);
  line(50+snowflake.x+wind, 70+snowflake.y, 50+snowflake.x+wind, 10+snowflake.y);
  wind= random(4,10);//X coordinate of the star snowflakes
    }
}

  //creat a vector that show a star snowflakes after a press
function mousePressed() {
  snowflakesP.push(createVector(mouseX, mouseY,random(minSpeed, maxSpeed)));
}

  //creat a vector that show the snowflakes when drag
function mouseDragged() {
  snowflakes.push(createVector(mouseX, mouseY, random(minSpeed, maxSpeed)));
}
