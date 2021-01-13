
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var paper1;
var ground1;
var dustbin1;
var engine, world;


function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper1 = new Paper(200, 400,10);
	ground1=new Ground(width/2,670,width,20);
	//dustbin1= new Dustbin(700, 200, 10, 70, {isStatic:true});
	dustbin2 = new Dustbin(760, 200, 150, 200);
	//dustbin3 = new Dustbin(820, 200, 10, 70);
	
}


function draw() {
 
  background("white");
  Engine.update(engine);
  paper1.display();
  ground1.display();
 // dustbin1.display();
  dustbin2.display();
 //dustbin3.display();
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paper1.body, paper1.body.position, {x:265, y:-265});
	}
}

