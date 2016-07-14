//Scenes

//main/opening scene
function mainScene() {
  //clear scene
  clearScene();

  //background
  drawRect(0,0, screenWidth, screenHeight, "#7F77FC")
  imageRepeat(groundTexture, 0, screenHeight*6/8, screenHeight*1/8, screenHeight*1/8, screenWidth/(screenHeight*1/8), 2);
  drawImageOnCanvas(screenWidth/6, screenHeight*11/16, screenHeight/4, screenHeight/16, hillSmallTexture);
  drawImageOnCanvas(screenWidth*2/7, screenHeight*10/16, screenHeight/3, screenHeight/8, hillLargeTexture);

  //sprites
  mario.drawMario();

  for(var i = 0; i < clouds.length; i++){
    clouds[i].drawCloud();
    clouds[i].moveCloud();
  }

  //title has to go after cloud due to layering
  drawImageOnCanvas(screenWidth/4, screenHeight/8, screenWidth/2, screenHeight/3, titleTexture);

  //button
  drawImageOnCanvas(screenWidth*5/16, screenHeight*9/16, screenWidth*3/8, screenHeight/16, playButton);
}


//Level Selection scene
function levelSelect() {
  //clear
  clearScene();

  //Draw background
  drawRect(0,0, screenWidth, screenHeight, "#7F77FC")
  imageRepeat(groundTexture, 0, screenHeight*6/8, screenHeight*1/8, screenHeight*1/8, screenWidth/(screenHeight*1/8), 2);
  drawImageOnCanvas(screenWidth/6, screenHeight*11/16, screenHeight/4, screenHeight/16, hillSmallTexture);
  drawImageOnCanvas(screenWidth*2/7, screenHeight*10/16, screenHeight/3, screenHeight/8, hillLargeTexture);

  //Level boxes
  drawImageOnCanvas(screenWidth*5/23, screenHeight*2/7, screenWidth*3/23, screenWidth*3/23, levelOneBox);
  drawImageOnCanvas(screenWidth*10/23, screenHeight*2/7, screenWidth*3/23, screenWidth*3/23, levelLockedBox);
  drawImageOnCanvas(screenWidth*15/23, screenHeight*2/7, screenWidth*3/23, screenWidth*3/23, levelLockedBox);

}

//Level One scene
function levelOneScene(){
  //clear
  clearScene();

  //draw
  drawRect(0,0, screenWidth, screenHeight, "#7F77FC")
  imageRepeat(groundTexture, 0, screenHeight*6/8, screenHeight*1/8, screenHeight*1/8, screenWidth/(screenHeight*1/8), 2);
  mario.drawMario();
  levelOneSprites[0].drawSprite();

  //update
  if (gameplayFreeze == false){
    mario.moveMario();
    mario.jumpMario();
    levelOneSprites[0].moveSprite();
  }
  detectCollision(mario, levelOneSprites[0]);
  //console.log(xPositionInLevel);
  //pause
  pauseScene();
}