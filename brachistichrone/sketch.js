class object {
  constructor(r) {
    this.r = r;
    this.v = 0;
    this.acc = 1/30*9.8;
    this.curtrackIndex = 20000;
  }



  update() {
    this.v += this.acc * cos(track[round(this.curtrackIndex)][2]);
    this.curtrackIndex += round(this.v * 10);
  }

  show() {
    circle(track[round(this.curtrackIndex)][0], track[round(this.curtrackIndex)][1], this.r*2);
  }
}

let track = [[0, 0, 0]];


let length;
let obj1;

let r = 50;


function setup() {
  createCanvas(400, 400);
  strokeWeight(4);
  frameRate(30);

  length = 5000;

  obj1 = new object(20);

  for (let i = 1; i < length; i++) {
    //track.push([width/length*(i), track[i-1][1]+random(-0.03, 0.06), 0]);
    //track.push([width/length*(i), track[i-1][1] - 0.2, 0]);
    let t = -8.7/length * i;
    track.push([-r*(t - sin(t)), r*(1 - cos(t)), 0]);
    //track.push([track[i-1][0]+1, 0]);
    track[i-1][2] = find_angle({x: track[i-1][0], y: height}, {x: track[i-1][0], y: track[i-1][1]}, {x: track[i][0], y: track[i][1]});
  }

  strokeWeight(1);
}


function draw() {
  background(200);
  for (let i = 0; i < track.length; i++) {
    stroke(map(track[i][2], 0, PI, 0, 255));
    point(track[i][0], track[i][1]);
  }

  obj1.update();
  obj1.show();
}




function find_angle(A,B,C) {
    var AB = Math.sqrt(Math.pow(B.x-A.x,2)+ Math.pow(B.y-A.y,2));
    var BC = Math.sqrt(Math.pow(B.x-C.x,2)+ Math.pow(B.y-C.y,2));
    var AC = Math.sqrt(Math.pow(C.x-A.x,2)+ Math.pow(C.y-A.y,2));
    return Math.acos((BC*BC+AB*AB-AC*AC)/(2*BC*AB));
}
