class Apple {
  constructor() {
    this.pos = [round(random(2, width/scalar - 1)), round(random(2, height/scalar - 1))];
  }

  generatePos() {
    let possiblePos = [round(random(0, width/scalar - 1)), round(random(0, height/scalar - 1))];
    for (let i = 0; i < snake.parts.length; i++) {
      if (possiblePos[0] == snake.parts[i][0] && possiblePos[1] == snake.parts[i][1]) {
        i = -1;
        possiblePos = [round(random(0, width/scalar - 1)), round(random(0, height/scalar - 1))];
      }
    }
    this.pos = possiblePos;
  }

  draw() {
    noStroke();
    fill(255, 0, 0);
    rect(this.pos[0] * scalar, this.pos[1] * scalar, scalar, scalar)
  }
}
