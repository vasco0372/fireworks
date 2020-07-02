//
var fireworks = [];
var gravity;
let song;

function preload() {
  mySound = loadSound('Firework-sounds.mp3');
}

//for Flag
  var flagCanvas;
  var flagHeight=200;
  var flagWidth=flagHeight*1.9;
  var xStarSeparation = flagHeight * 0.063;
  var yStarSeparation = flagHeight * 0.054;
function setup() {

  background(0);
  createCanvas(600, 400);
  flagCanvas=createGraphics(380,200);
  colorMode(RGB);
  stroke(255);
  strokeWeight(4);
  background(0);

//Flag
    image(flagCanvas,50,10);
    strokeWeight(2);
    flagCanvas.fill(255);
    rect(50,20,flagWidth,flagHeight);
//color red stripes
    for (var ixStripe =0; ixStripe <13; ixStripe +=2){
      fill(255,0,0);
      rect(50,20+ixStripe*flagHeight/13,flagWidth,flagHeight/13);
    }
// Draw the blue field.
        fill(5,20,255);
        rect(50, 20, 0.76 * flagHeight, flagHeight * 7 / 13);
// Draw the stars.
        var outerRadius = 0.0616 * flagHeight / 2;
        var innerRadius = outerRadius * Math.sin(Math.PI / 10) / Math.sin(7 * Math.PI / 10);
        fill(255);
        for (var row = 1; row <= 9; ++row) {
            for (var col = 1; col <= 11; ++col) {
                if ((row + col) % 2 == 0) {
                    drawStar(xStarSeparation * col+50, yStarSeparation * row+20, 5, outerRadius, innerRadius);
                }
            }
        }
//Draw a star
    function drawStar(xCenter, yCenter, nPoints, outerRadius, innerRadius) {
        //flagCanvas.beginPath();
        for (var ixVertex = 0; ixVertex <= 2 * nPoints; ++ixVertex) {
            var angle = ixVertex * Math.PI / nPoints - Math.PI / 2;
            var radius = ixVertex % 2 == 0 ? outerRadius : innerRadius;
            line(xCenter, yCenter,xCenter + radius * Math.cos(angle), yCenter + radius * Math.sin(angle));
        }
    }


//Fireworks
  gravity = createVector(0,0.25);
  //
  mycanvas=document.getElementById("defaultCanvas0");
  mysec=document.getElementById("aboutMe");
  //mysec.appendChild(flagCanvas);
  mysec.appendChild(mycanvas);
  document.getElementById("startFireworks").addEventListener('click', start_fireworks);
//
  function start_fireworks (){
    loop();
    mySound.loop();
    //document.getElementById("stopFireworks").addEventListener('click', stop_fireworks);
//
  }
  
  noLoop();
}
//
function draw() {

  colorMode(RGB);
  background(0,25);
  if (random(1) <0.03) {
    fireworks.push (new Firework());
  }
  
  for (var i=fireworks.length-1; i >=0; i--){
    fireworks[i].update();
    fireworks[i].show();
    if(fireworks[i].done()){
      fireworks.splice(i,1);
    }
  }

}
//var h1msg = createElement('h1', "My favorite number is 21");