class Game{
    constructor(){

    }

    start(){
        // fill write color of choice
        //background(backgroundImage);
        backgroundSprite.addImage(backgroundImage);
           
       playbutton.visible = true;

       drawSprites ();

       fill("black");
       textSize(20);
       text("Welcome to the Game - Swim with Music. Click on Play" , displayWidth/3 - 180 , 200);

       if(mousePressedOver(playbutton) && gameState === 0){
           gameState = 1;
          // playbutton.delete();
            
       }

       
    }

    play(){

       // console.log("Play");
       playbutton.visible = false;
        playbutton.depth = backgroundSprite.depth - 1;
        playbutton.lifetime = 0;
       // console.log(playbutton.lifetime);
        playbutton.remove();

      //background(backgroundImage1);
         backgroundSprite.addImage(backgroundImage1);
        backgroundSprite.scale = 2;

        //display the enemies
        enemy1.visible = true;
        enemy2.visible = true;
        enemy3.visible = true; 
        
       turtle.visible = true;
        
       if(keyCode === RIGHT_ARROW){
        turtle.x = turtle.x + 2;
       }
       
       drawSprites ();

       // collision between turtle and enemy
       if(turtle.isTouching(enemy1)){
           fill("white");
           strokeWeight(3)
           stroke("blue");
           text("Q1", enemy1.x, enemy1.y-100);
           console.log("Q!");
           gameState = 10;
       }
       
    }

    question1(){
        fill("white");
        rect(enemy1.x+100 , enemy1.y-100, 400,400);
        text("q1 : pop",enemy1.x+100, enemy1.y-100 )
    }
}