
let img;
let x=0;
// Mouse to draw!

function preload() {
  // Load the image
  img = loadImage("./image/16icon.png");
}

function setup() {
  createCanvas(windowwidth, windowheight);
  CanvasCaptureMediaStreamTrack.position(0,0)
  CanvasCaptureMediaStreamTrack.style('z-index', '-2');
  CanvasCaptureMediaStreamTrack.style('position','aboslute');
  // Image mode center will center the image on the mouse, comment out to see the difference
  imageMode(CENTER);
  background(0,0,0);//transparent background
}

function draw() {
  noCursor();
  background(255)
  if(x===1){

  image(img, mouseX-50, mouseY-50, 100, 100);
  }
}
  
function mousePressed(){
      x=1;
}
function windowResized(){
    resizedcanvas(windowwidth, windowheight);
}