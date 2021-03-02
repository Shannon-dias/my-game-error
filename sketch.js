var ground
var groundI
var dog 
var dogA
var cat 
var catA
var fenceI
var bushI
var obstacle
var obstaclesGroup

function preload(){
groundI = loadImage('images/background.png')
dogA = loadAnimation('images/dog1.png','images/dog2.png','images/dog3.png')
catA = loadAnimation('images/cat1.png','images/cat2.png','images/cat3.png')
bushI = loadImage('images/bush.png')
fenceI = loadImage('images/fence.png')
}

function setup() {
  createCanvas(800,400);
  
  ground = createSprite (200,20,10,10)
  ground.addImage(groundI)
  ground.velocityX = -5
  dog = createSprite(138,334)
  dog.addAnimation('runing dog',dogA)
  dog.scale=1.5
  cat =createSprite( 610,344)
  cat.addAnimation('running cat',catA)
  cat.scale = 1.5

}



function draw() {
  background(255,255,255);
  if(ground.x <0) {
    ground.x = 200 
  }
  spawnObstacles()
  
  if(obstaclesGroup.isTouching(dog)){
    dog.changeAnimation("collided",dog3.png);
}
drawSprites();
  text(mouseX + ', '+mouseY, 50,50)
}
  


function spawnObstacles() {
  if(frameCount % 60 === 0) {
    var obstacle = createSprite(600,165,10,40);
  
    obstacle.velocityX = -(6 + 3*score/100);
    
    var rand = Math.round(random(1,6));
    switch(rand) {
      case 1: obstacle.addImage(fence);
              break;
      case 2: obstacle.addImage(bush);
              break;
      default: break;
    }
             
    obstacle.scale = 0.5;
    obstacle.lifetime = 300;
    
    obstaclesGroup.add(obstacle);
  }
}