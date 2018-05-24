let snake;
let cols;
let rows;
let food;
const SCL = 20;

function setUp(){
  createCanvas(600, 600);
  cols = floor( width/SCL );
  rows = floor( height/SCL );
  pickFoodLocation();
  snake = new Snake;
  frameRate(10);
}

function pickFoodLocation(){
  food = createVector( floor(random(cols)), floor(random(rows) ));
  food.mult( SCL );
}

function draw(){
  background(51);
  if (eatsFood( food )){
    pickFoodLocation();     
  }
  fill( 255, 0, 0 );
  rect( food.x, food.y, SCL, SCL );
  snake.update();
  snake.show();
  snake.losesTail();
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
