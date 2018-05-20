let snake;
let cols;
let rows;
const SCL = 20;

function setUp(){
  createCanvas(600, 600);
  cols = floor( width/SCL );
  rows = floor( height/SCL );
  pickFoodLocation();
  snake = new Snake;
  frameRate(10);
}

function draw(){
  background(51);
  snake.show();
}  

function keyPressed(){
  if (keyCode === UP_ARROW) {
    moveDir(0, -1);
  }
  else if (keyCode === DOWN_ARROW) {
    moveDir(0, 1);
  }
  else if (keyCode === LEFT_ARROW) {
    moveDir(-1, 0);
  }
  else if (keyCode === RIGHT_ARROW) {
    moveDir(1, 0);
  }  
}
