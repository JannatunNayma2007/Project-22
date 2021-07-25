const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
var bob, bob2, bob3, bob4, bob5;
var rope1, rope2, rope3, rope4, rope5;



function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	
	var roof_options={
		isStatic:true			
	}

	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);


	 bob = new Bob(460,200,15);
	 bob2 = new Bob(430,200,15);
	 bob3 = new Bob(400,200,15);
   bob4 = new Bob(370,200,15);
	 bob5 = new Bob(340,200,15);


   rope1 = new Rope({x:460,y:100},bob.body);
   rope2 = new Rope({x:430,y:100},bob2.body);
   rope3 = new Rope({x:400,y:100},bob3.body);
   rope4 = new Rope({x:370,y:100},bob4.body);
   rope5 = new Rope({x:340,y:100},bob5.body);

   Engine.run(engine);


	
  
}

function draw() {
  rectMode(CENTER);
  background("#99004d");


  bob.show();
  bob2.show();
  bob3.show();
  bob4.show();
  bob5.show();


 

  rect(roof.position.x,roof.position.y,230,20);

  rope1.show();
  rope2.show();
  rope3.show();
  rope4.show();
  rope5.show();


 
}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.

function keyPressed(){

	if(keyCode === UP_ARROW){

		Matter.Body.applyForce(bob5.body,{x:0,y:0},{x:-0.03,y:0});
  
	}

  }
