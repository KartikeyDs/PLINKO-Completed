class plinko{
constructor(x,y){
var options = {
isStatic : true
}
this.x = x;
this.y = y;
this.r = 10;
this.body = Bodies.circle(x,y,this.r,options);

World.add(world, this.body);
}
display(){
var pos = this.body.position;
push();
translate(pos.x, pos.y);
ellipseMode(CENTER);
fill("white")
ellipse(0,0,20,20);
pop();
}
}