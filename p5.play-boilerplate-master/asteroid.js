class Asteroid{
constructor(){
this.radius=random(10,50)
this.velocity=p5.Vector.random2D()
this.position=createVector(random(width),random(height))
}
 update(){
this.position.add(this.velocity)

 }
 display(){
     push()
     stroke(255)
     noFill()
     rectMode(CENTER)
     
     translate(this.position.x,this.position.y)
     //ellipse(0,0,this.radius*2)
     rect(0,0,this.radius,this.radius)
     pop()
 }
 edeges(){
if(this.position.x>width+this.radius){
 this.position.x=-this.radius  
}
else if(this.position.x<-this.radius){
this.position.x=width+this.radius
}
if(this.position.y>height+this.radius){
this.position.y=-this.radius
}
else if(this.position.y<-this.radius){
this.position.y=height+this.radius
}
 }
 brk(){
var newArray=[]
newArray[0]=new Asteroid(this.position,this.radius)
newArray[1]=new Asteroid(this.position,this.radius)
score++
return newArray

 }
 
}