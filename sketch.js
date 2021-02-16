var back, backImg ;
var cat, catIMG ;
var mouse ;

var gameState = "PLAY" ;
function preload() {
  backImg = loadImage("images/garden.png")
  catImg1= loadAnimation("images/tomOne.png");
  catImg2=loadAnimation("images/tomTwo.png","images/tomThree.png");
  catImg3= loadAnimation("images/tomFour.png");
  mouseImg1=loadAnimation("images/jerryOne.png");
  mouseImg2= loadAnimation("images/jerryTwo.png","images/jerryThree.png");
  mouseImg3=loadAnimation("images/jerryFour.png");

}
function setup() {
  createCanvas(800,600);
  back = createSprite(400,250, 50, 50);
  back.addImage(backImg);
  back.scale = 1 ;

  cat = createSprite(600,500,1,1);
  cat.addAnimation("catSitting", catImg1);
  cat.scale = 0.2 ;

  mouse = createSprite(200,500,10,10);
  mouse.addAnimation("mousePlaying", mouseImg1);
  mouse.scale = 0.15 ;
}
 
function draw() {
  background(0);
  drawSprites();
  
  if(cat.x - mouse.x < (cat.width - mouse.width)/2)
    { 
        cat.velocityX= 0;
        cat.addAnimation("tomLastImage", catImg3);
        cat.x = 300;
        cat.scale= 0.2;
        cat.changeAnimation("tomLastImage");
        mouse.addAnimation("jerryLastImage", mouseImg3);
        mouse.scale= 0.15 ;
        mouse.changeAnimation("jerryLastImage");
    }  
}

function keyPressed(){

  if(keyCode === LEFT_ARROW){
      cat.velocityX = -5; 
      cat.addAnimation("catRunning", catImg2);
      cat.changeAnimation("catRunning");
      
      mouse.addAnimation("jerryPlaying", mouseImg2);
      mouse.changeAnimation("jerryPlaying");
  }
}