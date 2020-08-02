var movingrect,fixedrect;
var rect2,rect3;
function setup() {

  
  createCanvas(800,400);
 movingrect= createSprite(200, 200, 50, 50);
 movingrect.shapeColor="green"
 fixedrect=createSprite(300,200,50,50);
 fixedrect.shapeColor="green";
 rect2=createSprite(300,300,30,30);
 rect2.shapeColor="blue"
 rect3=createSprite(150,200,30,30)
 rect3.shapeColor="blue"
}

function draw() {
  background(0);
  movingrect.y=mouseY;
  movingrect.x=mouseX;
  if(isTouching(movingrect,rect2)){
    movingrect.shapeColor="yellow"
    rect2.shapeColor="yellow"
  }
  else {
    movingrect.shapeColor="green"
    rect2.shapeColor="blue"
  }

  drawSprites();
}
