
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score = 0;
var ground;
var survivalTime = 0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,600);
  
   monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale = 0.1
 
  
  ground = createSprite(400,350,1500,10);
  ground.x = ground.width/2;
  
  obstaclesGroup = createGroup();
  foodGroup = createGroup();
  

  
}


function draw() {
  background("white");
  
  ground.velocityX = -4;
  
  if (keyDown("space") && monkey.y >=  200) {
      monkey.velocityY = -10;
  }
  
if (ground.x < 0) {
      ground.x = ground.width / 2;
  }
  
  monkey.velocityY = monkey.velocityY + 0.3

  monkey.collide(ground);
  
  food();
  obstacles();
  
  stroke("white");
  textSize(20);
  fill("white");
  text(" Score: " + score,500,50);
  
  stroke("black");
  textSize(20)
  fill("black");
  survivalTime = Math.ceil(frameCount/frameRate())
  text(" survival Time: " + survivalTime, 100,50)
  
  drawSprites();
  
  
}

function food(){
  if(World.frameCount%80===0){
    banana = createSprite(300,150,20,20);
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.y = Math.round(random(150,200));
    banana.velocityX = -4;
    banana.lifetime = 60;
    foodGroup.add(banana)
  }
  
}

function obstacles(){
  if(World.frameCount%300===0){
     stone = createSprite(300,320,20,20);
     stone.addImage(obstacleImage);
    stone.scale = 0.12;
    stone.y = Math.round(random(323,323));
    stone.velocityX = -4;
    stone.lifetime = 60;
    //foodGroup.add(banana)
  }

}
