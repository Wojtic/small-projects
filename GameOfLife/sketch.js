function setup() {
  createCanvas(10000, 10000);
  frameRate(5);
  generate();
}

let world = [];
let c1 = 200;
let c2 = 0;

function generate() {

  c1 = map(Math.random(),0,1,100,255)
  c2 = map(Math.random(),0,1,0,255)

  world = [];
  for (let i = 0; i < 250000; i++) {
    if (Math.random() > 0.9) {
      world.push(true);
    } else {
      world.push(false);
    }

  }
}

let timer = 0;

function draw() {
  background(c1);
  noStroke();
  fill(c2);

  timer += 0.1;

  if (timer >= 10) {
    timer = 0;
    generate();
  }

  let genWorld = world;

  for (let i = 0; i < world.length; i++) {
    let neighbours = 0;

    if (i > Math.sqrt(world.length) && (i % Math.sqrt(world.length)) > 2 && (i % Math.sqrt(world.length)) < (Math.sqrt(world.length)-2) && i < ((world.length) - Math.sqrt(world.length))) {

    if (genWorld[i + 1]) {
      neighbours++;
    }
    if (genWorld[i - 1]) {
      neighbours++;
    }
    if (genWorld[i - Math.sqrt(world.length)]) {
      neighbours++;
    }
    if (genWorld[i - (Math.sqrt(world.length)+1)]) {
      neighbours++;
    }
    if (genWorld[i - (Math.sqrt(world.length)-1)]) {
      neighbours++;
    }
    if (genWorld[i + Math.sqrt(world.length)]) {
      neighbours++;
    }
    if (genWorld[i + (Math.sqrt(world.length)+1)]) {
      neighbours++;
    }
    if (genWorld[i + (Math.sqrt(world.length)-1)]) {
      neighbours++;
    }

    switch (neighbours) {
      case 8:
        world[i] = false;
        break;
      case 7:
        world[i] = false;
        break;
      case 6:
        world[i] = false;
        break;
      case 5:
        world[i] = false;
        break;
      case 4:
        world[i] = false;
        break;
      case 3:
        world[i] = true;
        break;
      case 2:
        if (genWorld[i] == 0) {
          world[i] = false;
        } else {
          world[i] = true;
        }
        break;
      case 1:
        world[i] = false;
        break;
      case 0:
        world[i] = false;
        break;
    }
  }

  }

  for (let i = 0; i < world.length; i++) {
    if (world[i]) {
      let x = (i % Math.sqrt(world.length)) * 10;
      let y = Math.floor(i / Math.sqrt(world.length)) * 10;
      square(x, y, 10);
    }
  }

}
