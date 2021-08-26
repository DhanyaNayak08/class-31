class Bird extends BaseClass{
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.trejactory=[]
      this.smokeImage = loadImage("sprites/smoke (1).png")
    
  }
  display(){
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    super.display();
    if(this.body.velocity .x>1&& this.body.position.x>200){
    var position=[this.body.position.x,this.body.position.y]
    this.trejactory.push(position)
    }
    for(var i=0;i<this.trejactory.length;i++){
    image (this.smokeImage,this.trejactory[i][0],this.trejactory[i][1])
    }

  }
}
