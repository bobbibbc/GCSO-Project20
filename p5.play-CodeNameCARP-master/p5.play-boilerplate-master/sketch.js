var car, wall;
var rail;
var speed, weight;

function setup() {
  createCanvas(1600,400);
  wall=createSprite(1500, 100, 60, 1600);
  wall.shapeColor=color(200,0,0)
  car=createSprite(50, 200, 50, 50);
  car.shapeColor=color(255,255,255)
  rail=createSprite(800,200,1600,10);
  rail.shapeColor=color(255,255,255)
  speed=random(55,90);
  weight=random(400,1500);
}

function draw() {
  background(50,50,50);  
  drawSprites();
  car.velocityX=speed;
  
  if(wall.x-car.x<(car.width+wall.width)/2)
  {
    car.velocityX=0;
    var deform=0.5 * weight * speed * speed/22509;
    if(deform>180)
    {
      car.shapeColor=color(255,0,0);
    }
    if(deform<180)
    {
      car.shapeColor=color(0,255,0)
    }
    if(deform<180 && deform>100){
      car.shapeColor=color(230,230,0)
    }
  }
}