class Dustbin{
    //Declaring all of the properties of box
       constructor(x,y, width, height){
              
           var options={
               restitution:0,
               density:1.0,
               friction:0
           }
   
           //"this" represents something to replace and is replaced with the name
        
           this.body=Bodies.rectangle(x,y,width,height,options);
           this.image=loadImage("sprites/dustbingreen.png")
           this.height=height;
           this.width=width;
           World.add(world,this.body);
       }
       display(){
   
           var pos=this.body.position;
           var angle=this.body.angle;
            push();
            translate(pos.x,pos.y)
            rotate(angle)
            imageMode(CENTER);
            strokeWeight(4);
            stroke("green");
            fill("purple");
            image(this.image,0,0,this.width,this.height);
            pop();
   
       }
   
   
   
   
   
   
   
   
           
       
       
   
   
   
   
   
   
   
   
   
   
   }