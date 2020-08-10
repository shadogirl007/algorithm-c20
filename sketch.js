var moving, fixed;

function setup() {
  createCanvas(1200,800);
  moving = createSprite(400, 400, 50, 80);
  fixed = createSprite(200, 400, 80, 30);

  moving.debug = true;
  fixed.debug = true;

  moving.velocityX = -5;
  fixed.velocityX = 5;
}

function draw() {
  background(0);  

  //moving.x = mouseX;
  //moving.y = mouseY;

  //DETECTING COLLISION ALGORITHM
 if(fixed.x - moving.x < (moving.width+ fixed.width)/2
    && moving.x - fixed.x < (moving.width+ fixed.width)/2
    && fixed.y - moving.y < (moving.height+ fixed.height)/2
    && moving.y - fixed.y < (moving.height+ fixed.height)/2){
      moving.shapeColor = "red";
      fixed.shapeColor = "red";
 }
 else {
      moving.shapeColor = "green";
      fixed.shapeColor = "green";
 }

 //BOUNCING OBJECTS ALGORITHM
 if(fixed.x - moving.x < (moving.width+ fixed.width)/2
 && moving.x - fixed.x < (moving.width+ fixed.width)/2){
  moving.velocityX = moving.velocityX*(-1);
  fixed.velocityX=fixed.velocityX*(-1);
 }
 if(fixed.y - moving.y < (moving.height+ fixed.height)/2
 && moving.y - fixed.y < (moving.height+ fixed.height)/2){
  moving.velocityY= moving.velocityY*(-1);
  fixed.velocityY=fixed.velocityY*(-1);
}

  drawSprites();
}

/*
ALGORITHMS
-way to solve a problem

Pre-defined algorithms
-detecting collision: isTouching()
-bouncing off objects: bounceOff() bounce()

ball.x<0 ball.x>400 ball.y<0 ball.y>400
ball.isTouching(edges)
*/
