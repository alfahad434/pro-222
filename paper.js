class paper{
    constructor(x,y,radius){
        var option = {
            isStatic:false,
            'restitution':0.3,
            'friction':0.5,
            'density':1.2
        }
        this.body = Bodies.circle(x,y,radious,option);
        this.radius = radius;
        

        World.add(World,this.body)
    }
display(){
ellipseMode(RADIOUS);
fill("yellow")
circle(this.body.position.x,this.body.position.y,this.radious)
}
}