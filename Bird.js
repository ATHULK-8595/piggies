class Bird{
constructor(x,y){

    var options = {
restitution:0.5,
friction:1.0,
density:1.5
}

this.body = Bodies.rectangle(x,y,20,20,options)
World.add(world,this.body)
this.width = 20;
this.height = 20;
}
display(){
var pos = this.body.position;
pos.x = mouseX
pos.y = mouseY
var angle = this.body.angle;
push()
translate (pos.x,pos.y)
rotate (angle)
rectMode(CENTER)
fill("blue")
rect(0,0,this.width,this.height)
pop()



}


}