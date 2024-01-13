var max,maxImg
var king,kingImg, king_running, king_runningImg
var money, moneyImg
var castle,castleImg
var house, houseImg
var rock,rockImg
var road, roadImg
var game

function preload(){
maxImg= loadImage("thief.png");
kingImg= loadImage ("king.png");
king_runningImg= loadImage ("king_running.png");
moneyImg= loadImage ("]small money.png");
//castleImg=loadImage ("castle.jpg");
//houseImg= loadImage  ("house.jpg");
roadImg = loadImage ("road.png")
}

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  game =  new Game();
  game.getState();
  game.start();

  road = createSprite(displayWidth/2-20,displayHeight/2-40,20,20);
  road.addImage(roadImg);
 road.scale = 1.1


  max = createSprite (displayWidth-1150,displayHeight-300,50,50);
  max.addImage(maxImg);
  max.scale=0.3


  money = createSprite ()
}

function draw() {
  background(255,255,255);    
  drawSprites();

  if( keyDown("RIGHT_ARROW")){
    max.x = max.x+30
  }

  if(keyDown("LEFT_ARROW")){
    max.x = max.x-30
  }

  if(keyDown("UP_ARROW")){
    max.y = max .y+35
  }

  if(max.isTouching(money)){
    money.hide()
  }
 
if(max.isTouching(rock)){
  rock.destroy()
  gamestate:2
 }

if(max.isTouching(money)){
  king.addAnimation("king_running")
king.velocityX=0.2
}

 } //for the function draw

 




