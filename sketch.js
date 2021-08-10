var issImg
var spacebg
var sc1,sc2,sc3,sc4
var iss,spacecraft
var hasDocked = false



function preload(){
issImg = loadImage("img/iss.png")
spacebg = loadImage("img/spacebg.jpg ")
sc1 = loadImage("img/spacecraft1.png")
sc2 = loadImage("img/spacecraft2.png")
sc3 = loadImage("img/spacecraft3.png")
sc4 = loadImage("img/spacecraft4.png")
}


function setup() {
  
  createCanvas(600,350);
  //createSprite(400, 200, 50, 50);
  iss = createSprite(330,130)
  iss.addImage(issImg)
  iss.scale = 0.25

  spacecraft = createSprite(285,240)
  spacecraft.addImage(sc1)
  spacecraft.scale = 0.15
}

function draw() {
  background(spacebg)
  spacecraft.addImage(sc1)
  

  if(hasDocked === false){
    spacecraft.x = spacecraft.x + random(-1,1)

    if(keyDown("UP_ARROW")){
      spacecraft.addImage(sc4)
      spacecraft.y = spacecraft.y-2
    }
  
    if(keyDown("LEFT_ARROW")){
      spacecraft.addImage(sc3)
      spacecraft.x = spacecraft.x - 2
    }
  
    if(keyDown("RIGHT_ARROW")){
      spacecraft.addImage(sc2)
      spacecraft.x = spacecraft.x + 2
    }
  
    if(keyDown("DOWN_ARROW")){
      spacecraft.addImage(sc1)
      spacecraft.y = spacecraft.y + 2
    }
  
   
  
    //console.log(spacecraft.x)
    //console.log(spacecraft.y)
  }
  drawSprites();

  if(spacecraft.y <= (iss.y+70) && spacecraft.x  <= (iss.x-10)){
    hasDocked = true
    text("Docking Succesful",240,240)
  }

  }

  