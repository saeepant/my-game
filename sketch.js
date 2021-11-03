var canvas, backgroundImage;
var turtle, turtleImg;
var lifeImg , count;
var gameState = 0;
var wrong_sound , correct_sound, water_sound ; 
var game;
var playbutton, playbuttonImg;
var enemy,enemy1,enemy2,enemy3, enemyimg;

function preload(){
 turtleImg = loadImage("turtle_running1.png");
 lifeImg = loadImage("life_bar.png");
 backgroundImage = loadImage("bg.png");
 backgroundImage1 = loadImage("bg2.jpg");
 playbuttonImg= loadImage("start button.png");
enemyimg= loadImage("enemy.png");

 //load sound files
 wrong_sound = loadSound("wrong.wav");
 correct_sound = loadSound("correct.mp3");
 water_sound = loadSound("water.mp3");

}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);

  backgroundSprite = createSprite(displayWidth/2, displayHeight/2, displayWidth , displayHeight)
  
  playbutton = createSprite (displayWidth/2 - 180,displayHeight/2);
  playbutton.addImage("play",playbuttonImg);
  playbutton.scale= 0.3;
  playbutton.visible = false;

  enemy1 = createSprite(displayWidth/4, displayHeight -250,10,10)
  enemy1.addImage("enemy", enemyimg);
  enemy1.visible = false;
  enemy1.scale = 0.3;

  enemy2 = createSprite(displayWidth*2/4, displayHeight -250,10,10)
  enemy2.addImage("enemy", enemyimg);
  enemy2.visible = false;
  enemy2.scale = 0.3;

  enemy3 = createSprite(displayWidth*3/4, displayHeight -250,10,10)
  enemy3.addImage("enemy", enemyimg);
  enemy3.visible = false;
  enemy3.scale = 0.3;

  turtle= createSprite(50, displayHeight -250,10,10)
  turtle.addImage("turtle", turtleImg);
  turtle.visible = false;
  turtle.scale  = 0.3;

  


  game = new Game();
  
  
  
}


function draw(){
  background( 0);

  if(gameState === 0  ){
    game.start();
  }

  else if(gameState === 1  ){
   clear();
    game.play();
  }

  else if(gameState === 10){
    game.question1();
  }

 
 
}


