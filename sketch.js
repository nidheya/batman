

function preload(){
 b=loadAnimation("Walking Frame/walking_1.png","Walking Frame/walking_2.png","Walking Frame/walking_3.png","Walking Frame/walking_4.png","Walking Frame/walking_5.png","Walking Frame/walking_6.png")
 thunder=loadAnimation("thunderbolt/1.png","thunderbolt/2.png","thunderbolt/3.png","thunderbolt/4.png")
}

function setup(){
    createCanvas(400,400)
    bruce=createSprite(200,200,20,10)
    bruce.addAnimation("b",b)
    bruce.scale=0.5
    tb=createSprite(100,87,100,100)
    tb.addAnimation("tt",thunder)
    tb.scale=0.5
}

function draw(){
background(0);
 drawSprites();

}   

