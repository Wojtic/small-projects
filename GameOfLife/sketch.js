const X = 100;
const Y = 100;
const SQUARE_SIZE = 10;

let simulate = false;
let shouldDraw = false;
let random = false;

function setup() {
  createCanvas(X * SQUARE_SIZE, Y * SQUARE_SIZE);
  frameRate(10);

  world = [];
  for (let i = 0; i < X; i++) {
    world[i] = [];
    for (let j = 0; j < Y; j++) {
      world[i].push(false);
    }
  }
}

let density = 0.1;
let world = [];
let c1 = 200;
let c2 = 0;

function generateRandom() {
  c1 = map(Math.random(), 0, 1, 100, 255);
  c2 = map(Math.random(), 0, 1, 0, 255);

  world = [];
  for (let i = 0; i < X; i++) {
    world[i] = [];
    for (let j = 0; j < Y; j++) {
      world[i].push(Math.random() > 1 - density);
    }
  }
}

function mouseClicked() {
    const x = floor(mouseX / SQUARE_SIZE);
    const y = floor(mouseY / SQUARE_SIZE);

    world[x][y] = !world[x][y];

    drawScreen();
}

function keyPressed(){
    if (keyCode === ENTER){
      simulate = !simulate;
    }
  }

let timer = 0;

function nextGen() {
    let newWorld = JSON.parse(JSON.stringify(world));

    for (let i = 1; i < X - 1; i++) {
      for (let j = 1; j < Y - 1; j++) {
        let neighbours = 0;
  
        if (world[i][j + 1]) neighbours++;
        if (world[i][j - 1]) neighbours++;
        if (world[i + 1][j + 1]) neighbours++;
        if (world[i + 1][j]) neighbours++;
        if (world[i + 1][j - 1]) neighbours++;
        if (world[i - 1][j + 1]) neighbours++;
        if (world[i - 1][j]) neighbours++;
        if (world[i - 1][j - 1]) neighbours++;
  
        if (world[i][j] && (neighbours == 2 || neighbours == 3))
          newWorld[i][j] = true;
        else if (!world[i][j] && neighbours == 3) newWorld[i][j] = true;
        else newWorld[i][j] = false;
      }
    }
  
    world = newWorld;
}

function drawScreen() {
    background(c1);
    noStroke();
    fill(c2);

    for (let i = 0; i < X; i++) {
        for (let j = 0; j < Y; j++) {
            if (world[i][j]) {
            square(i * SQUARE_SIZE, j * SQUARE_SIZE, SQUARE_SIZE);
            }
        }
    } 
}

function draw() {
  drawScreen();

  if (random) {
    timer += 1;

    if (timer >= 200) {
        timer = 0;
        generateRandom();
    }
  }

  if (simulate) nextGen();

  if (shouldDraw) drawScreen();
}