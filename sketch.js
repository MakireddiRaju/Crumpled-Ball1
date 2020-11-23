
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground
var ball
function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
    world = engine.world;
	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);
	ball= new Ball(200,460,10,10);
	ground = new Ground(400,600,1000,20);
	side1= new Dust(700,570,100)
	side2= new Dust(600,570,100)
}
function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:15,y:-15})
		}
}
function draw() {
background(0);
ground.display(); 
ball.display();
side1.display();
side2.display();
}
