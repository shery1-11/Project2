
let img;
let c1,c2;
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
    c1 = color(255);
    c2 = color(63, 191, 191);
    for(let y=0; y<height; y++){
        n = map(y,0,height,0,1);
        let newc = lerpColor(c1,c2,n);
        stroke(newc);
        line(0,y,width, y);
      }
      x=50;
}
function windowResized(){
    resizedcanvas(windowWidth, windowHeight);
}