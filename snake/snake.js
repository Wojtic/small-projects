class Snake {
  constructor() {
    this.parts = [[0, 0]];
    this.direction = 'right';
    this.delay = 20;
    this.curDelay = 0;
    this.makeLongerPos = [];
  }



  update() {

    this.curDelay++;

    if (keyIsPressed) {
      if (this.parts.length > 1) {
        if (keyCode == RIGHT_ARROW && this.direction != 'left') this.direction = 'right';
        else if (keyCode == LEFT_ARROW && this.direction != 'right') this.direction = 'left';
        else if (keyCode == UP_ARROW && this.direction != 'down') this.direction = 'up';
        else if (keyCode == DOWN_ARROW && this.direction != 'up') this.direction = 'down';
      } else {
        if (keyCode == RIGHT_ARROW) this.direction = 'right';
        else if (keyCode == LEFT_ARROW) this.direction = 'left';
        else if (keyCode == UP_ARROW) this.direction = 'up';
        else if (keyCode == DOWN_ARROW) this.direction = 'down';
      }

    }

    if (this.curDelay > this.delay) {
      this.curDelay = 0;
      switch (this.direction) {
        case 'right':
          this.parts.unshift([this.parts[0][0] + 1, this.parts[0][1]]);
          break;
        case 'left':
          this.parts.unshift([this.parts[0][0] - 1, this.parts[0][1]]);
          break;
        case 'up':
          this.parts.unshift([this.parts[0][0], this.parts[0][1] - 1]);
          break;
        case 'down':
          this.parts.unshift([this.parts[0][0], this.parts[0][1] + 1]);
          break;
        default:
    }
    this.parts.pop();

  }

  if (this.makeLongerPos[1] != null) {
    this.parts.push(this.makeLongerPos);
    this.makeLongerPos = [];
  }

  if (this.parts[0][0] == apple.pos[0] && this.parts[0][1] == apple.pos[1]) {
    apple.generatePos();
    this.makeLongerPos = [this.parts[this.parts.length-1], this.parts[this.parts.length-1]];
    this.delay -= 0.1 * this.delay > 5;
  }

  for (let i = 1; i < this.parts.length; i++) {
    if (this.parts[0][0] == this.parts[i][0] && this.parts[0][1] == this.parts[i][1]){
      this.parts = [[0, 0]];
      this.direction = 'right';
      this.delay = 20;
    }
  }

  if (this.parts[0][0] >= width/scalar) this.parts[0][0] = 0;
  else if (this.parts[0][0] < 0) this.parts[0][0] = width/scalar - 1;
  else if (this.parts[0][1] >= height/scalar) this.parts[0][1] = 0;
  else if (this.parts[0][1] < 0) this.parts[0][1] = height/scalar - 1;

  }

  draw() {
    noStroke();
    fill(255);
    print(this.parts.length);
    for (let i = 0; i < this.parts.length; i++) {
      if (i > 0 && i < this.parts.length - 1) {

        if ((this.parts[i + 1][1] > this.parts[i][1] && this.parts[i - 1][0] > this.parts[i][0]) || (this.parts[i - 1][1] > this.parts[i][1] && this.parts[i + 1][0] > this.parts[i][0])) { // top left
          rect(this.parts[i][0] * scalar + 2, this.parts[i][1] * scalar + 2, scalar - 2, scalar - 4);
          rect(this.parts[i][0] * scalar + 2, this.parts[i][1] * scalar + 2, scalar - 4, scalar - 2);
        } else if ((this.parts[i + 1][0] < this.parts[i][0] && this.parts[i - 1][1] > this.parts[i][1]) || (this.parts[i - 1][0] < this.parts[i][0] && this.parts[i + 1][1] > this.parts[i][1])) { // top right
          rect(this.parts[i][0] * scalar, this.parts[i][1] * scalar + 2, scalar - 2, scalar - 4);
          rect(this.parts[i][0] * scalar + 2, this.parts[i][1] * scalar + 2, scalar - 4, scalar - 2);
        } else if ((this.parts[i + 1][1] < this.parts[i][1] && this.parts[i - 1][0] < this.parts[i][0]) || (this.parts[i - 1][1] < this.parts[i][1] && this.parts[i + 1][0] < this.parts[i][0])) { // bottom right
          rect(this.parts[i][0] * scalar + 2, this.parts[i][1] * scalar, scalar - 4, scalar - 2);
          rect(this.parts[i][0] * scalar, this.parts[i][1] * scalar + 2, scalar - 2, scalar - 4);
        } else if ((this.parts[i + 1][0] > this.parts[i][0] && this.parts[i - 1][1] < this.parts[i][1]) || (this.parts[i - 1][0] > this.parts[i][0] && this.parts[i + 1][1] < this.parts[i][1])) { // bottom left
          rect(this.parts[i][0] * scalar + 2, this.parts[i][1] * scalar, scalar - 4, scalar - 2);
          rect(this.parts[i][0] * scalar + 2, this.parts[i][1] * scalar + 2, scalar - 2, scalar - 4);
        } else if (this.parts[i + 1][1] == this.parts[i][1] && this.parts[i - 1][1] == this.parts[i][1]) {
          rect(this.parts[i][0] * scalar, this.parts[i][1] * scalar + 2, scalar, scalar - 4);
        } else if (this.parts[i + 1][0] == this.parts[i][0] && this.parts[i - 1][0] == this.parts[i][0]) {
          rect(this.parts[i][0] * scalar + 2, this.parts[i][1] * scalar, scalar - 4, scalar);
        }
      } else if (i == 0 && this.parts.length > 1) {
        if (this.parts[1][0] > this.parts[0][0]) {
          rect(this.parts[0][0] * scalar + 2, this.parts[0][1] * scalar + 2, scalar - 2, scalar - 4);
        } else if (this.parts[1][0] < this.parts[0][0]) {
          rect(this.parts[0][0] * scalar, this.parts[0][1] * scalar + 2, scalar - 2, scalar - 4);
        } else if (this.parts[1][1] < this.parts[0][1]) {
          rect(this.parts[0][0] * scalar + 2, this.parts[0][1] * scalar, scalar - 4, scalar - 2);
        } else if (this.parts[1][1] > this.parts[0][1]) {
          rect(this.parts[0][0] * scalar + 2, this.parts[0][1] * scalar + 2, scalar - 4, scalar - 2);
        }
      } else if (i == this.parts.length - 1 && this.parts.length > 1) {
        if (this.parts[i - 1][0] > this.parts[i][0]) {
          rect(this.parts[i][0] * scalar + 2, this.parts[i][1] * scalar + 2, scalar - 2, scalar - 4);
        } else if (this.parts[i - 1][0] < this.parts[i][0]) {
          rect(this.parts[i][0] * scalar, this.parts[i][1] * scalar + 2, scalar - 2, scalar - 4);
        } else if (this.parts[i - 1][1] < this.parts[i][1]) {
          rect(this.parts[i][0] * scalar + 2, this.parts[i][1] * scalar, scalar - 4, scalar - 2);
        } else if (this.parts[i - 1][1] > this.parts[i][1]) {
          rect(this.parts[i][0] * scalar + 2, this.parts[i][1] * scalar + 2, scalar - 4, scalar - 2);
        } else ('something is wrong')
      } else if (this.parts.length == 1){
        rect(this.parts[i][0] * scalar + 2, this.parts[i][1] * scalar + 2, scalar - 4, scalar - 4);
      } else {
        print("something went wrong")
      }
    }
  }
}
