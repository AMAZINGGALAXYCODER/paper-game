
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;


	paper = new crumpledpaper(200,300,50,50);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);

   paper.display();

  background(0);
  
  drawSprites();
 
}


function keyPressed() {

   if (keyCode === UP_ARROW){

     Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});

   }

}



