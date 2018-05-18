let snake;
const SCL = 20;

function setUp(){
  createCanvas(600, 600); 
  snake = new Snake;
}

function draw(){
  background(51);
  snake.show();
}  

