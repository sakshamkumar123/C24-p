
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper=new Paper(100,500,40)
  ground=new Ground(800,670,1600,100)
  
  d1= new Dustbin (600,610,120,25)
  d2= new Dustbin (530,570,25,100)
  d3= new Dustbin (670,570,25,100)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  Engine.update(engine);
  background(0);

  d1.display();
  d2.display();
  d3.display();
  paper.display();
  ground.display();
  drawSprites();
 
}
function keyPressed(){
  if (keyCode===UP_ARROW){
    Matter.Body.applyForce(paper.body,paper.body.position, {x:200,y:-250})
    }
}



