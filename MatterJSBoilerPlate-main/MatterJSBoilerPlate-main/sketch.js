const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
var ground;
var leftSide;
var rightSide;
var engine,world;
var radius=20;


function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;
	
	ground =new Ground(width/2,670,width,20);
	leftSide =new Ground(1100,600,20,120);
	rightSide =new Ground(1350,600,20,120);

	rectMode(CENTER);
	ellipseMode(RADIUS);




	//Create the Bodies Here.
var balls_option={
	isStatic:false,
	restitution:0.3,
	friction:0,
	density:1.2
	
}
ball=Bodies.circle(260,100,radius/2,balls_option);
World.add(world,ball);


Engine.run(engine);

	
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ground.show();
  leftSide.show();
  rightSide.show();

  ellipse(ball.position.x,ball.position.y,20,20)
  
  //rect(ground.position.x,ground.position.y,width*2,1);
  //drawSprites();
 // groundObj.display()
 
}

function keyPressed(){
	if (keyCode===UP_ARROW){
		Matter.Body.applyForce(ball,ball.position,{x:85,y:-85})
	}
	
}



