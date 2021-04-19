const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var engine, world;

var umbrella,rain;
var drops = [];
var maxDrops = 100;
var thunder, image1, image2, image3, image4;

function preload(){
    image1 = loadImage("thunderbolt/1.png");
    image2 = loadImage("thunderbolt/2.png");
    image3 = loadImage("thunderbolt/3.png");
    image4 = loadImage("thunderbolt/4.png");
}

function setup(){
    var canvas = createCanvas(400,700);
    engine = Engine.create();
    world = engine.world;
    umbrella = new Umbrella(200,560);
    if(frameCount%100 ===0){
       for(var i = 0; i<maxDrops; i++ ){
           drops.push(new Drop(random(0,400),random(0,400)));
       }
    }
}
function draw(){
    background("black");
    Engine.update(engine);
    umbrella.display();
    for(var i =0; i<maxDrops; i++){
        drops[i].display();
        drops[i].update();
        
    }
    thunderSpawn();
}

function thunderSpawn(){
    rand = Math.round(random(1,4));
    if(frameCount%80 === 0){
        thunderCreatedFrame = frameCount;
        thunder = createSprite(random(10,370), random(10,30), 10, 10);
        switch(rand){
            case 1: thunder.addImage(image1);
            break;
            case 2: thunder.addImage(image2);
            break;
            case 3: thunder.addImage(image3);
            break;
            case 4: thunder.addImage(image4);
            break;
            default: break;
        }
        thunder.scalr = random(0.3,0.6);
    }
}