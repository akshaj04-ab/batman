const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const body=Matter.Body;

var drops;
var Bruce;
var thunderBolt,boltIMG;
var engine,world;

function preload(){

  
    
}

function setup(){
  createCanvas(800,750);
  engine=Engine.create(engine);
  world=engine.world; 

  Bruce=new bruce_wayne(200,200,5,5);


  Engine.run(engine);
    
}

function draw(){
   background(40,40,40);
   
   Engine.update(engine);

   Bruce.display();

   drawSprites();
}   

