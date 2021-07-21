var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;
var ing
var c,Cing
function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  trex_collided = loadImage("trex_collided.png");
  groundImage = loadImage("ground2.png")
  Cing= loadImage("cloud.png")
}

function setup() {
  createCanvas(600, 200);
  
  //create a trex sprite
  trex = createSprite(50,180,20,50);
  trex.addAnimation("running", trex_running);
  
  //adding scale and position to trex
  trex.scale = 0.5;
  
  
  //create ground sprite
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ing=createSprite(200,185,400,10)
  ing.visible=false
}

function draw() {
  background(0);
  
  ground.velocityX = -2
 // console.log(ground.x)
  
  if (ground.x<0){
    ground.x = ground.width/2;
  }
  
  //jumping the trex on space key press
  if(keyDown("space")&&trex.y>100) {
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.8
  console.log(trex.y)
  cloudcreation()
  
 //stop trex from falling down 
  trex.collide(ing);
  drawSprites();
}
function cloudcreation()
{
  if(frameCount%60===0)
  {
  c=createSprite(580,100,10,10)
  c.addImage("cloud",Cing);
  c.y=Math.round(random(80,120))
  c.velocityX=-3
  c.depth=trex.depth
  trex.depth=trex.depth+1
 }
  
}