class Laser{
    constructor(shooterP,angle){
    this.position=createVector(shooterP.x,shooterP.y)
    this.velocity=p5.Vector.fromAngle(angle)
this.velocity.mult(10)
    }
update(){
this.position.add(this.velocity)
}
display(){
push()
stroke(255)
strokeWeight(5)
point(this.position.x,this.position.y)
pop()

}
hits(asteroid){
var d=dist(this.position.x,this.position.y,asteroid.position.x,asteroid.position.y)
if(d<asteroid.radius){
return true
}
else{return false}
}
}