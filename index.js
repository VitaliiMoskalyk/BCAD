const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.addEventListener("click", startNewLine);

let i = 0;
const lines = [];
let x1, y1, x2, y2;

const drawAll = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let j = 0; j <= i; j++) {
    ctx.lineWidth = 5;
    ctx.moveTo(lines[j][0], lines[j][1]);
    ctx.lineTo(lines[j][2], lines[j][3]);
    ctx.stroke();

    crossingPoint();
  }
};

function startNewLine(e) {
  x1 = e.clientX;
  y1 = e.clientY;

  lines.push([x1, y1]);

  canvas.removeEventListener("click", startNewLine);
  canvas.addEventListener("mousemove", rerenderNewLine);
}

function rerenderNewLine(e) {
  x2 = e.clientX;
  y2 = e.clientY;

  ctx.beginPath();

  drawAll();

  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();

  canvas.addEventListener("click", endNewLine);
}

function endNewLine() {
  lines[i].push(x2, y2);

  drawAll();

  i++;

  canvas.removeEventListener("click", endNewLine);
  canvas.removeEventListener("mousemove", rerenderNewLine);
  canvas.addEventListener("click", startNewLine);
}

const crossingPoint = () => {
  let coordX,
    coordY = 0;

  for (let i = 0; i < lines.length - 1; i++) {
    console.log(lines);
    let x1 = lines[i][0];
    let x2 = lines[i][2];
    let x3 = lines[i + 1][0];
    let x4 = lines[i + 1][2];
    let y1 = lines[i][1];
    let y2 = lines[i][3];
    let y3 = lines[i + 1][1];
    let y4 = lines[i + 1][3];

    if (x1 >= x2) {
      x1 = lines[i][2];
      x2 = lines[i][0];
      y1 = lines[i][3];
      y2 = lines[i][1];
    }

    if (x3 >= x4) {
      x3 = lines[i + 1][2];
      x4 = lines[i + 1][0];
      y3 = lines[i + 1][3];
      y4 = lines[i + 1][1];
    }
    y2 === y1 ? (k1 = 0) : (k1 = (y2 - y1) / (x2 - x1));
    y3 === y4 ? (k2 = 0) : (k2 = (y4 - y3) / (x4 - x3));

    b1 = y1 - k1 * x1;
    b2 = y3 - k2 * x3;

    coordX = (b2 - b1) / (k1 - k2);
    coordY = k1 * coordX + b1;

    ctx.fillStyle = "red";
    ctx.beginPath();
    ctx.arc(coordX, coordY, 5, 0, 2 * Math.PI);
    ctx.fill();
  }
};
