class slingShot{
    constructor(bodyA, pointB){
        var option = {
            bodyA: bodyA,
            pointB: pointB,
            length: 500
        }

        this.pointB = pointB
        this.rope = Constraint.create(option);
        World.add(world, this.rope)
    }
    attach(body){
        this.rope.bodyA = body;
    }
    display(){
        var pointA = this.rope.bodyA.position;
        var pointB = this.pointB;
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
}