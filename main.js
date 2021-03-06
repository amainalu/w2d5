function preload() {
  bgImage = loadImage("./assets/wide.jpg");
  character = loadImage("./assets/character-right.png");
}

const player = new Character();

const myBackground = new Background();
function setup() {
  createCanvas(500, 300);
  myBackground.setup();
}

function draw() {
  clear();
  background("cyan");
  myBackground.draw();
  player.draw();
}

function keyPressed() {
  if (keyCode === 32) {
    player.jump(10);
  }
}
