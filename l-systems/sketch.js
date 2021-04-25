let axiom = "fa";
let rules = [["a","b-fa-fb"],["b","a+fb+fa"]];
let angle = 60;


let arr;
let scaler = 10;

function setup() {
  createCanvas(5000, 3000);

  //arr = axiom.split("");
  nextGen();


}


function draw() {
}

function keyTyped () {
  nextGen();
}





function nextGen() {
  background(200);

  let x = 0;
  let y = 0;
  let newX = 0;
  let newY = 0;
  let curAngle = 0;
  let stored = [];

    arr = axiom.split("");
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < rules.length; j++) {
        if (arr[i] == rules[j][0]) {
          arr[i] = rules[j][1];

        }
      }
    }
    arr = arr.join("");
    axiom = arr;
    arr = arr.split("");

    stroke(0,0,0,255);
    strokeWeight(1);

    console.log(arr);
    translate(width/2, 0);
    angleMode(DEGREES);
    arr.forEach((item, i) => {
        switch (item) {
          case "f":
            newX = x + (sin(curAngle) * scaler);
            newY = y + (cos(curAngle) * scaler);
            line(x,y, newX, newY);
            x = newX;
            y = newY;
            break;
          case "g":
              newX = x + (sin(curAngle) * scaler);
              newY = y + (cos(curAngle) * scaler);
              line(x,y, newX, newY);
              x = newX;
              y = newY;
              break;
          case "F":
            newX = x + sin(curAngle) * 50;
            newY = y + cos(curAngle) * 50;

            x = newX;
            y = newY;
            break;
          case "+":
            curAngle += angle;
            if (curAngle >= 360) {
              curAngle -= 360;
            }
            break;
          case "-":
            curAngle -= angle;
            if (curAngle <= -360) {
              curAngle += 360;
            }
            break;
          case "[":
            stored.push([x,y,curAngle]);
            break;
          case "]":
            x = stored[stored.length - 1][0];
            y = stored[stored.length - 1][1];
            curAngle = stored[stored.length - 1][2];
            stored.pop();
            break;
          case "|":
            curAngle += 180;
            if (curAngle >= 360) {
              curAngle -= 360;
            }
            break;
          default: print("not defined")

        }
    });
}
