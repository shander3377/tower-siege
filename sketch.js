const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground1, ground2;
var polygon1;
var score = 0;
var backgroundImg;
var bg = "tower-siege-master/bg.png";

function preload() {
    getTime()
}

function setup() {
    var canvas = createCanvas(1200, 400);
    engine = Engine.create();
    world = engine.world;


    ground1 = new Ground(495, 260, 180, 5);
    box1 = new Box(430, 235, 30, 40);
    box2 = new Box(460, 235, 30, 40);
    box3 = new Box(490, 235, 30, 40);
    box4 = new Box(520, 235, 30, 40);
    box5 = new Box(550, 235, 30, 40);
    box6 = new Box(460, 195, 30, 40);
    box7 = new Box(490, 195, 30, 40);
    box8 = new Box(520, 195, 30, 40);
    box9 = new Box(490, 155, 30, 40);
    polygon1 = new polygon(90, 250, 60);
    slingshot1 = new SlingShot(polygon1.body, {
        x: 90,
        y: 250
    });
}

function draw() {

    if (backgroundImg)
        background(backgroundImg);

    Engine.update(engine);
    ground1.display()
    box1.display()
    box1.scoress()
    box2.display()
    box2.scoress()
    box3.display()
    box3.scoress()
    box4.display()
    box4.scoress()
    box5.display()
    box5.scoress()

    box6.display()
    box6.scoress()
    box7.display()
    box7.scoress()
    box8.display()
    box8.scoress()
    box9.display()
    box9.scoress
    polygon1.display()
    slingshot1.display()
    console.log(score)
    fill("cyan")
    textSize(35)
    text('Score:' + score, 200, 200)
}

function mouseDragged() {
    Matter.Body.setPosition(polygon1.body, {
        x: mouseX,
        y: mouseY
    });
}


function mouseReleased() {
    slingshot1.fly();
}

function keyPressed() {
    if (keyCode === 32) {
        slingshot1.attach(polygon1.body)
    }
}
async function getTime() {
    var time = await fetch("http://worldtimeapi.org/api/timezone/america/chicago");
    var response = await time.json()
    var dt = response.datetime
    var hour = dt.slice(11, 13)
    console.log(hour)
    if (hour >= 06 && hour <= 19) {
        bg = "bg.png"
    } else {
        bg = "bg2.png"

    }

    backgroundImg = loadImage(bg)
    console.log(backgroundImg)
}