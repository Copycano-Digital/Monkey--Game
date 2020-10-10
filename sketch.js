
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score = 0;
var invisibleGround;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,400);
  
  monkey = createSprite(100,350,50,50);
  monkey.addAnimation("running",monkey_running);
  monkey.scale = 0.125;

  FoodGroup = new Group();
  obstacleGroup = new Group();
  
  invisibleGround = createSprite(0,394,400,10);
}


function draw() {
  background("white");
  rect(-10,380,450,400);
  text("Survival Rate: "+ score, 100,50);
  score = score + Math.round(getFrameRate() / 60);
  
  monkey.collide(invisibleGround);
  
  if(keyDown("space")&& monkey.y >= 350) {
    monkey.velocityY = -16;
  }
  
  monkey.velocityY = monkey.velocityY + 0.8
  
  console.log(monkey.y);
  
  food();
  
  stone();
  
  drawSprites();
}

function food() {
  //write code here to spawn the clouds
  if (frameCount % 60 === 0) {
    banana = createSprite(600,100,40,10);
    banana.y = Math.round(random(250,160));
    banana.addImage(bananaImage);
    banana.scale = 0.065;
    banana.velocityX = -3;
    banana.lifetime = 300;
    FoodGroup.add(banana);
    }
}

function stone() {
  //write code here to spawn the clouds
  if (frameCount % 60 === 0) {
    obstacle = createSprite(600,365,40,10);
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.125;
    obstacle.velocityX = -3;
    obstacle.lifetime = 300;
    obstacleGroup.add(obstacle);
    }
}



