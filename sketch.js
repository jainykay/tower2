const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world, slingshot;
var platform, box1, box2, box3;
var box4, box5, box6;

function preload() {
    polygonImg = loadImage("polygon.png");
}

function setup() {
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    platform = new Box(500, 350, 400, 20);
    box1 = new Box(400, 300, 70, 70);
    box2 = new Box(500, 300, 70, 70);
    box3 = new Box(600, 300, 70, 70);

    box4 = new Box(450, 230, 70, 70);
    box5 = new Box(550, 230, 70, 70);
    box6 = new Box(500, 160, 70, 70);

    polygon = Bodies.circle(200, 250, 70);
    World.add(world, polygon);

    slingshot = new Sling(this.polygon, {x:100, y:200});

}

function draw() {
    background("white");

    imageMode(CENTER);
    image(polygonImg, polygon.position.x, polygon.position.y, 70, 70);

    slingshot.display();
    
    platform.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();

    text("instructions to play", 150, 150);
    text("1. drag the hexagon", 170, 170);
    text("2. aim", 190, 190);
    text("3. release", 210, 210);
}

function mouseDragged() {
    Matter.Body.setPosition(this.polygon, {x:mouseX, y: mouseY});
}

function mouseReleased() {
    slingshot.fly();
}

function keyPressed() {
    if(keyCode === 32) {
        slingshot.attach(this.polygon);
    }
}