class Shooter{
constructor(){
this.velocity=createVector(0,0)
this.position=createVector(width/2,height/2)
this.r=20
this.rotation=0
this.head=0
this.isMoving=false
} 
display(){
push()
translate(this.position.x,this.position.y)
rotate(this.head+PI/2)
fill(0)
stroke(255)
triangle(0,-this.r,-this.r,this.r,this.r,this.r)
pop()
}
update(){
if(this.isMoving){
var f=p5.Vector.fromAngle(this.head)
f.mult(0.1)
this.velocity.add(f)
}
this.position.add(this.velocity)
this.velocity.mult(0.9)

}
moveUp(x){
this.isMoving=x
}
setRotation(x){
this.rotation=x
}
turn(){
this.head+=this.rotation
}
edges(){
    if(this.position.x>width+this.r){
     this.position.x=-this. r 
    }
    else if(this.position.x<-this.r){
    this.position.x=width+this.r
    }
    if(this.position.y>height+this.r){
    this.position.y=-this.r
    }
    else if(this.position.y<-this.r){
    this.position.y=height+this.r
    }
     }
}