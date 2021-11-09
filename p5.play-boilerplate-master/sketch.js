var shooter
var asteroids=[]
var laser=[]
var score=0
function setup() {
  createCanvas(windowWidth,windowHeight);
  shooter= new Shooter()
  
  for(var i=0;i<10;i++){
  asteroids.push(new Asteroid())
  }
}

function draw() {
  background(0);  
  angleMode(RADIANS)
  shooter.display()
  shooter.update()
  shooter.turn()
  shooter.edges()
  text("score:"+score,500,500)
  for(var i=0;i<asteroids.length;i++){
    asteroids[i].display()
    asteroids[i].update()
    asteroids[i].edeges()

  
   

    
  }
  for(var i=laser.length-1;i>=0;i--){
    laser[i].display()
    laser[i].update()
    for(var j=asteroids.length-1;j>=0;j--){
  if(laser[i].hits(asteroids[j])){
  if(asteroids[j].radius>10){
  var newAsteroids=asteroids[j].brk()
  asteroids=asteroids.concat(newAsteroids)
  }
  asteroids.splice(j,1)
  laser.splice(i,1)
  break
  }
    }
  }
}
function keyPressed(){
if(keyCode===32){
laser.push(new Laser(shooter.position,shooter.head))
}
else if(keyCode===RIGHT_ARROW){
  shooter.setRotation(0.3)
}
else if(keyCode===LEFT_ARROW){
shooter.setRotation(-0.3)
}
else if(keyCode===UP_ARROW){
shooter.moveUp(true)
}
}
function keyReleased(){
  shooter.setRotation(0)
  shooter.moveUp(false)

}
