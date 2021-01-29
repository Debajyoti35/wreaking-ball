const Engine = Matter.Engine; 
const World = Matter.World; 
const Bodies = Matter.Bodies; 
const Constraint = Matter.Constraint;

function setup(){
createCanvas(1200,1200)
engine = Engine.create();
world = engine.world;

ball = new Ball(200,100,50)
ground = new Ground(400,750)
rope = new slingShot(ball.body,{x:200, y:50});
box1 = new Box(400,200,100,100);
box2= new Box(800,200,100,100);
box3 = new Box(800,400,100,100);
box4 = new Box(400,200,100,100);
box5 = new Box(800,400,100,100);
box6 = new Box(400,200,100,100);
box7 = new Box(800,400,100,100);
}

function draw(){
background("white")
Engine.update(engine)

ball.display()
ground.display()
rope.display()
box1.display()
box2.display()
box3.display()
box4.display()
box5.display()
box6.display()
box7.display()
}
function mouseDragged() {
    Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}
