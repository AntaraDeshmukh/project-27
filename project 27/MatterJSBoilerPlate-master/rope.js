class Rope{
    constructor(body1,body2,offsetX,offsetY){
        this.offsetX = offsetX;
        this.offsetY = offsetY;
        var options = {
            bodyA: body1,
            bodyB: body2,
            pointB:{x:this.offsetX,y:offsetY}
        }
        this.rope = Constraint.create(options);
        World.add(world,this.rope);

       // rope1= new this.rope(bobObject1.body,roofObject.body,-bobDiameter*2,0)


    }
    display(){
        var point1 = this.rope.bodyA.position;
        var point2 = this.rope.bodyB.position;

        strokeWeight(2);
        var Anchor1X = point.x;
        var Anchor1Y = point.y;

        var Anchor2X = point.x + this.offsetX;
        var Anchor2Y = point.y + this.offsety;

line (Anchor1X,Anchor1Y,Anchor2X,Anchor2Y);

    }
}