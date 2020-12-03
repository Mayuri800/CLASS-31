class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smokeImage = loadImage("sprites/smoke.png");
    this.arr4 = []
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    super.display();
    if(this.body.velocity.x>10 && this.body.position.x>200){
      var arr5 = [this.body.position.x,this.body.position.y]
      this.arr4.push(arr5);
    }
    
    for(var i = 0; i < this.arr4.length ; i++){
      image(this.smokeImage,this.arr4[i][0],this.arr4[i][1])
    }
  }
}
