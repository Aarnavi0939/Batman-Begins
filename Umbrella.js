class Umbrella{
    constructor(x,y){
        var options = {
        isStatic : true    
        }
        this.image = loadImage("walking_4.png");
        this.umbrella = Bodies.rectangle(x,y,50,50,options);
        this.width = 50;
        this.height = 50;
        World.add(world,this.umbrella);
    }
    display(){
        var pos = this.umbrella.position
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,200,300)
    }
}