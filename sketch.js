var AstrouantSleeping, sleepImage
var AstrouantBackground,backgroundImage 
var AstrouantRunning,runningImage
var AstrouantEat,eatImage
var AstrouantBrush,brushImage
var AstrouantDrink,drinkImage
var AstrouantMove,moveImage

function setup() {
  createCanvas(1000,400);

}

function preload() {
  bgImage = loadImage("iss.png");
  sleepImage = loadAnimation("sleep.png");
  eatImage = loadAnimation("eat1.png","eat2.png");
  brushImage = loadAnimation("brush.png");
  runningImage = loadAnimation("gym1.png","gym2.png");
  drinkImage = loadAnimation("drink1.png","drink2.png")
  moveImage = loadAnimation("move.png","move1.png")

}

function draw() {
  background(bgImage);  
  
  
//  topEdge = createEdgeSprites();
 // leftEdge = createEdgeSprites();
 // rightEdge =  createEdgeSprites();
  //bottemEdge = createEdgeSprites();

  if(keyDown("UP_ARROW")){
  AstrouantSleeping = createSprite(40, 280, 50, 50);
  AstrouantSleeping.addAnimation("sleeping",sleepImage);
  AstrouantSleeping.scale = 0.07;
}

if(keyDown("DOWN_ARROW")){
  AstrouantBrush = createSprite(400,200,50,50);
  AstrouantBrush.addAnimation("brushing",brushImage);
  AstrouantBrush.scale = 0.07;
}

if(keyDown("RIGHT_ARROW")){
  AstrouantDrink = createSprite(700,300,50,50);
  AstrouantDrink.addAnimation("drinking",drinkImage);  
  AstrouantDrink.scale = 0.07;
  
}

if(keyDown("LEFT_ARROW")){
  AstrouantEat = createSprite(900,100,50,50);
  AstrouantEat.addAnimation("eating",eatImage);
  AstrouantEat.scale = 0.07
 // AstrouantEat.velocityX=0.8
  //AstrouantEat.velocityY=0.9
 // AstrouantEat.bounceOff(topEdge);
 // AstrouantEat.bounceOff(leftEdge);
 // AstrouantEat.bounceOff(rightEdge);
}

//if(keyDown("m_KEY")){
  //AstrouantMove = createSprite(800,400,50,50);
  //AstrouantMove.addAnimation("moving",moveImage);
  
//}

drawSprites();
}