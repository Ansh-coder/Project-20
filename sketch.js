var wall,car,speed,weight;


function setup() {
  createCanvas(1200,400);
  speed = random(55,90);
  weight = random(400,1500);
  wall = createSprite(1000,200,60,height/2);
  wall.shapeColor = color(80,80,80);
  car = createSprite(50, 200, 50, 50);
  car.velocityX = speed;
  car.shapeColor = "white";
}

function draw() {
  background(0);
  if(wall.x-car.x<wall.width/2 + car.width/2){
    car.velocityX = 0;
    var deformation = 0.5*weight*speed*speed/22500;
    console.log(deformation);
  if(deformation>180){
    wall.shapeColor = "yellow";
  }
  if(deformation<180 && deformation>100){
    wall.shapeColor = "red";
  }
  if(deformation<100){
    wall.shapeColor = "green";
  }
  
  }  
  
  drawSprites();
}