class Paper{
  constructor(x, y, r){
    var options={
    isStatic:false,
    restitution:0.3,
    friction:0.5,
    density:1.2
   }

this.body=Bodies.circle(x,y, r*4,options);
this.r=r*4;
this.image=loadImage("sprites/paper.png");
World.add(world, this.body);
}
display(){
    var pos=this.body.position;
    push();
    translate(pos.x,pos.y)
    imageMode(CENTER);    
    fill("teal");
    image(this.image, 0,0,this.r, this.r);
    pop();
}
}