class Rope{
    constructor(bodyA,pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness:0.04,
            lenght:2
        }
        this.pointB = pointB;
        this.rope = Constraint.create(options);
        World.add(world,this.rope);
    }
    attach(bodyA){
     this.rope.bodyA = bodyA;
    }  
      free(){
        this.rope.bodyA = null;
    }

    display(){
        if(this.rope.bodyA){
            var pos = this.rope.bodyA.position;
            var pos2 = this.pointB;
            push();
            strokeWeight(5);
            line(pos.x,pos.y,pos2.x,pos2.y);
            pop();
        }
    }
}