
let img;
let x=0;
// Mouse to draw!

function preload() {
  // Load the image
  img = loadImage("./image/16icon.png");
}

function setup() {
  let cnv = createCanvas(windowWidth, windowHeight);
  cnv.position(0,0)
  cnv.style('z-index', '-2');
  cnv.style('position','aboslute');
  // Image mode center will center the image on the mouse, comment out to see the difference
  imageMode(CENTER);
}

function draw() {

  noCursor();
  if(x===50){

  image(img, mouseX-50, mouseY-50, 100, 100);
  }
}
  
function mousePressed(){
      x=50;
}
function windowResized(){
    resizedcanvas(windowWidth, windowHeight);
}