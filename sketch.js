var Monkey, Player;
var bananaimg,foodGroup;
var obImg,ObstacleGroup;
var backImage, back;
var Ground;
var Play=1;
var End=0;
var GameState;
var Score=0;

function preload(){
  Player=loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  
  backImage=loadImage("jungle.jpg");
  
  bananaimg=loadImage("banana.png");
  obImg=loadImage("stone.png");
  
}

function setup() {
  createCanvas(600, 400);
  back=createSprite(0,0,600,400);
  back.addImage(backImage);
  
  Monkey=createSprite(230,370,20,10);
  Monkey.addAnimation(Player);
  Monkey.scale=0.5;
  
  Ground=createSprite(0,0,600,10);
  Ground.velocity=-6;
}

function draw() {
  edges=createEdgeSprites();
  background("white");
  Monkey.collide(Ground);
  Ground.visible=false;
  stroke("white");
  textSize(20);
  fill("white");
  text("Score: "+Score, 380,10);
  
  
  ObstacleGroup=new Group();
  foodGroup=new Group();
  
  if(GameState===Play){
    background.x=background.width/2
   if(keyDown("space")){
     Monkey.velocityY=-5;
     Monkey.velocityY=Monkey.velocityY+0.7;
     
     if(foodGroup.isTouching("Monkey")){
       Score=Score+2
       foodGroup.destroyEach();
     }
     
     if(ObstaclesGroup.isTouching("Monkey")){
       Monkey.scale=0.2;
     }
   } 
    
  }
  switch(Score){
      case 10:Monkey.scale=0.12;
      break;
      case 20:Monkey.scale=0.14;
      break;
      case 30: Monkey.scale=0.16;
      break;
      case 40:Monkey.scale=0.18;
      break;
      default: break;
  }  
  food();
  Obstacles();
  drawSprites();
}

function food(){
  var Banana=createSprite(200,random(200,300),10,20);
  Banana.addAnimation(bananaimg);
  Banana.scale=0.2;
  Banana.velocityX=-6;
  foodGroup.add(Banana);
}
function Obstacles(){
  var Obstacle=createSprite(random(350,400),380,10,10);
  Obstacle.addAnimation(obImg);
  Obstacle.scale=0.2;
  ObstacleGroup.add(Obstacle);
}



