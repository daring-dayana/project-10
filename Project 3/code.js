var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var Sofia = createSprite(20,25,18,18);
Sofia.shapeColor = "orange";

var cardboard1 = createSprite(10,70,100,20);
cardboard1.shapeColor = 'red';

var cardboard2 = createSprite(101,60,20,80);
cardboard2.shapeColor = 'red';

var cardboard3 = createSprite(250,159,100,20);
cardboard3.shapeColor = 'red';

var cardboard4 = createSprite(190,100,100,20);
cardboard4.shapeColor = 'red';

var cardboard5 = createSprite(4,149,200,20);
cardboard5.shapeColor = 'red';

var cardboard6 = createSprite(301,50,20,150);
cardboard6.shapeColor = 'red';

var cardboard7 = createSprite(150,201,20,135);
cardboard7.shapeColor = 'red';

var cardboard8 = createSprite(276,65,20,125);
cardboard8.shapeColor = 'red';

var cardboard9 = createSprite(200,18,100,20);
cardboard9.shapeColor = 'red';

var cardboard10 = createSprite(50,225,120,20);
cardboard10.shapeColor = 'red';

var cardboard11 = createSprite(252,232,20,100);
cardboard11.shapeColor = 'red';

var cardboard12 = createSprite(12,226,20,100);
cardboard12.shapeColor = 'red';

var cardboard13 = createSprite(172,205,62,20);
cardboard13.shapeColor = 'red';

var cardboard14 = createSprite(250,320,220,20);
cardboard14.shapeColor = 'red';

var cardboard15 = createSprite(250,361,20,100);
cardboard15.shapeColor = 'red';

var cardboard16 = createSprite(130,342,20,65);
cardboard16.shapeColor = 'red';

var cardboard17 = createSprite(350,64,100,20);
cardboard17.shapeColor = 'red';

var cardboard18 = createSprite(365,160,70,20);
cardboard18.shapeColor = 'red';

var cardboard19 = createSprite(340,227,20,113);
cardboard19.shapeColor = 'red';

var cardboard20 = createSprite(50,320,92,20);
cardboard20.shapeColor = "red";

var cardboard21 = createSprite(6,360,30,100);
cardboard21.shapeColor = 'red';

var cardboard22 = createSprite(28,294,50,20);
cardboard22.shapeColor = 'red';

var cup = createSprite(385, 385, 10,50);
cup.shapeColor = "green";



function draw() {
  background("pink");
  createEdgeSprites();
  Sofia.bounceOff(edges);
  
  Sofia.velocityX = 0;
  Sofia.velocityY = 0;
  
  if (keyDown("UP_ARROW")) {
  Sofia.velocityY = -4;
    
  }
  if (keyDown("DOWN_ARROW")) {
    Sofia.velocityY = 4;
    
  }
  if (keyDown("RIGHT_ARROW")) {
    Sofia.velocityX = 4;
  }
  if (keyDown("LEFT_ARROW")) {
    Sofia.velocityX = -4;
    
  }
  
  if (Sofia.isTouching(cardboard1)
  || Sofia.isTouching(cardboard2)
  || Sofia.isTouching(cardboard3)
  ||Sofia.isTouching(cardboard4)
  || Sofia.isTouching(cardboard5)
  || Sofia.isTouching(cardboard6)
  || Sofia.isTouching(cardboard7)
  || Sofia.isTouching(cardboard8)
  || Sofia.isTouching(cardboard9)
  || Sofia.isTouching(cardboard10)
  || Sofia.isTouching(cardboard11)
  || Sofia.isTouching(cardboard12)
  || Sofia.isTouching(cardboard13)
  || Sofia.isTouching(cardboard14)
  || Sofia.isTouching(cardboard15)
  || Sofia.isTouching(cardboard16)
  || Sofia.isTouching(cardboard17)
  || Sofia.isTouching(cardboard18)
  || Sofia.isTouching(cardboard19)
  || Sofia.isTouching(cardboard20)
  || Sofia.isTouching(cardboard21)
  || Sofia.isTouching(cardboard22)) {
   
    Sofia.x = 20;
    Sofia.y = 25;
     
  }
 
  if(Sofia.isTouching(cup)){
    fill("black");
    stroke("black");
    textSize(20);
    text("YOU WIN!!",150,190);
  }
  
  text("Sofia", 37, 25);
  text("cup", 374, 356);
  
  drawSprites();
  
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
