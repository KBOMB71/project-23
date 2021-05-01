var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
bodyLeftSprite=createSprite(300,620,20,100)
bodyLeftSprite.shapeColor="red"

bodyRightSprite=createSprite(500,620,20,100)
bodyRightSprite.shapeColor="red"

bodyBottomSprite=createSprite(400,650,200,20)
bodyBottomSprite.shapeColor="red"

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.8, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

bodyLeft = Bodies.rectangle(300,620,20,100,{isStatic:true})
bodyRight = Bodies.rectangle(500,620,20,100,{isStatis:true})
bodyBottom = Bodies.rectangle(400,650,200,20,{isStatic:true})
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 

bodyLeftSprite.x=bodyLeft.position.x
bodyLeftSprite.y=bodyLeft.position.y
bodyRightSprite.x=bodyRight.position.x
bodyRightSprite.y=bodyRight.position.y
bodyBottomSprite.x=bodyBottom.position.x
bodyBottomSprite.y=bodyBottom.position.y


}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
Matter.Body.setStatic(packageBody,false)
    
  }
}



