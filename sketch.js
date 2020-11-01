var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,ground_options,package_options;
var state;
var done=0;
var not_done=1;
state=not_done;
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
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	ground_options = {
		isStatic : true
	  }
	groundSprite=createSprite(width/2, height-35, width,10,ground_options);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	
	package_options={
		restitution:10, 
		isStatic:true
	}
	packageBody = Bodies.circle(width/2 , 200 , 5 ,package_options);
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	Engine.run(engine);
  
}


function draw() {
	if(state===not_done){

		if(keyCode===DOWN_ARROW){
			keyPressed();
			state=done;
		}
	}
	

  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x ;
  packageSprite.y= packageBody.position.y ;
  //translator(100,100);
  drawSprites();
 
}

function keyPressed() {
 
    // Look at the hints in the document and understand how to make the package body fall only on
	package_options={
		isStatic:false,
		restitution:0.8
	}
	
	packageBody = Bodies.circle(width/2 , 200 , 5 ,package_options);
	World.add(world, packageBody);
  }





