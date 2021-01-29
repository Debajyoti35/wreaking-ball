class Ground{
    constructor(x,y){
        var option={
            isStatic:true
        }
    this.body = Bodies.rectangle(x,y,1200,20,option)
    World.add(world, this.body)
    }
    display(){
    var position = this.body.position;
    rectMode(CENTER);
    rect(position.x,position.y,1200,20) 
    }
}