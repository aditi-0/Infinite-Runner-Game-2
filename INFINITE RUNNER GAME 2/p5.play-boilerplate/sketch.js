var player,playerimg;
var bg,bgimg;
function preload(){
playerimg=loadImage("car.png");
bgimg=loadImage("road.jpg");

}

function setup() {
  createCanvas(400,400);
  bg=createSprite(0,200,400,400);
  bg.addImage(bgimg);
  bg.scale=6;
  player=createSprite(50, 200, 50, 50);
  player.addImage(playerimg);
 player.scale=0.3;
}

function draw() {
  background("black");  
  player.x=50;
  if(keyDown("right")){
  player.x=player.x+5;
  }
  camera.position.x=player.x;
  drawSprites();
}