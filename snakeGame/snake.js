class Snake {
  constructor() {
    this.pos = createVector( 0,0 );
  }
  
    moveDir(){
    }
    
    eatsFood(){ 
    }

    losesTail(){
    }

    update(){
    }

    show(){
      fill(255);
      rect(this.pos.x, this.pos.y, SCL, SCL);
    }
  
}
