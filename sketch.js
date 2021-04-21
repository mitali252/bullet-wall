var wall, thickness,bullet,speed,weight;

function setup() {
  createCanvas(1600,400);
  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);
  bullet=createSprite(50,200,50,5);
  bullet.shapeColor=color(255);
  bullet.velocityX=speed;
  wall=createSprite(1200,200,thickness,height/2);
  wall.shapeColor=color(230,230,230);
  console.log(wall);
}

function draw() {
  background(0); 
  if(hasCollided(bullet,wall)){
    bullet.velocityX=0;
    var d=0.5*weight*speed*speed/(thickness*thickness*thickness);
    if(d>10){
      wall.shapeColor=color(255,0,0);
    }
    if(d<10){
      wall.shapeColor=color(0,255,0);
    }

  }
  drawSprites();
}
function hasCollided(lbullet,lwall){
  if(lbullet.x+lbullet.width>=lwall.x){
    return true;
  }
return false;
}