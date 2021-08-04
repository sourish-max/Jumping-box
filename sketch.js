var canvas;
var music;
var surface1,surface2,surface3,surface4,box;
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
    surface1=createSprite(100,500,200,10);
    surface2=createSprite(300,500,200,10);
    surface3=createSprite(500,500,200,10);
    surface4=createSprite(700,500,200,10);
    surface1.shapeColor="blue";
    surface2.shapeColor="yellow";
    surface3.shapeColor="green";
    surface4.shapeColor="red";
    //create 4 different surfaces


    box=createSprite(random(20,750));
    box.velocityX=2;
    box.velocityY=2;
    box.shapeColor="white";
    
    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    createEdgeSprites();
    
    
    //create edgeSprite


    if(surface1.isTouching(box) && box.bounceOff(surface1)){
        box.shapeColor="blue";
    }
    if(surface2.isTouching(box) && box.bounceOff(surface2)){
        box.shapeColor="yellow";
    }
    if(surface3.isTouching(box) && box.bounceOff(surface3)){
        box.shapeColor="green";
    }
    if(surface4.isTouching(box) && box.bounceOff(surface4)){
        box.shapeColor="red";
    }
    //add condition to check if box touching surface and make it box
    drawSprites();
}
