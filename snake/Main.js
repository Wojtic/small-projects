let snake;
let apple;

function setup() {
  createCanvas(400, 400);
  snake = new Snake();
  apple = new Apple();
}

let scalar = 20;

function draw() {
  background(200);

  apple.draw();

  snake.update();
  snake.draw();

}
