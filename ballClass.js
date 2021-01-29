class Ball{
constructor(x,y,radius){
var option={
    density: 1, 
    frictionAir: 0.005
}
this.body = Bodies.circle(x,y,radius,option);
this.radius= radius
World.add(world,this.body);
}
display(){
var position = this.body.position;
circle(position.x,position.y,this.radius)
}
}
