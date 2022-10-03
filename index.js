const canvas = document.getElementById("canvas");
const buttonCollapse = document.getElementById("button");
const ctx = canvas.getContext("2d");

buttonCollapse.style.outline = "1px solid red";
buttonCollapse.style.display = "flex";
canvas.style.outline = "1px solid red";

buttonCollapse.addEventListener("click", function (e) {
  raf = window.requestAnimationFrame(animateLines);
});

canvas.addEventListener("mousedown", startNewLine);

let i = 0;
const lines = [];
let crossiPoints = [];
let x1, y1, x2, y2;

const drawAll = () => {
  lines.forEach((e) => {
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(e[0], e[1]);
    ctx.lineTo(e[2], e[3]);
    ctx.stroke();

    ctx.closePath();
  });
};

const drawPoints = () => {
  crossiPoints.forEach((p) => {
    ctx.fillStyle = "red";
    ctx.beginPath();
    ctx.arc(p[0], p[1], 5, 0, 2 * Math.PI);
    ctx.fill();
    ctx.closePath();
  });
};

function startNewLine(e) {
  x1 = e.offsetX;
  y1 = e.offsetY;

  lines.push([x1, y1]);
  crossingPoint();
  canvas.removeEventListener("mousedown", startNewLine);
  canvas.addEventListener("mousemove", rerenderNewLine);
}

function rerenderNewLine(e) {
  x2 = e.offsetX;
  y2 = e.offsetY;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawAll();
  drawPoints();

  ctx.moveTo(x1, y1);

  ctx.lineTo(x2, y2);

  ctx.stroke();

  canvas.addEventListener("mousedown", endNewLine);
}

function endNewLine(e) {
  if (e.buttons == 1) {
    lines[i].push(x2, y2);
    crossingPoint();
    drawAll();
    drawPoints();

    i++;
  }

  e.buttons == 2 && lines.pop();

  canvas.removeEventListener("mousedown", endNewLine);
  canvas.removeEventListener("mousemove", rerenderNewLine);
  canvas.addEventListener("mousedown", startNewLine);
}

function animateLines() {
  lines.forEach((e) => {
    // e[0] = e[0] / 2;
    e[1] = e[1] / 1.1;
    // e[2] = e[2] / 2;
    e[3] = e[3] * 1.1;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    crossiPoints = [];
    crossingPoint();
    drawAll();
    drawPoints();
  });

  raf = window.requestAnimationFrame(animateLines);
}

const crossingPoint = (e) => {
  let coordX,
    coordY = 0;

  for (let i = 0; i <= lines.length - 1; i++) {
    let x1 = lines[i][0];
    let x2 = lines[i][2];
    let x3 = i === lines.length - 1 ? lines[0][0] : lines[i + 1][0];
    let x4 = i === lines.length - 1 ? lines[0][2] : lines[i + 1][2];
    let y1 = lines[i][1];
    let y2 = lines[i][3];
    let y3 = i === lines.length - 1 ? lines[0][1] : lines[i + 1][1];
    let y4 = i === lines.length - 1 ? lines[0][3] : lines[i + 1][3];

    if (x1 >= x2) {
      x1 = lines[i][2];
      x2 = lines[i][0];
      y1 = lines[i][3];
      y2 = lines[i][1];
    }

    if (x3 >= x4) {
      x3 = i === lines.length - 1 ? lines[0][2] : lines[i + 1][2];
      x4 = i === lines.length - 1 ? lines[0][0] : lines[i + 1][0];
      y3 = i === lines.length - 1 ? lines[0][3] : lines[i + 1][3];
      y4 = i === lines.length - 1 ? lines[0][1] : lines[i + 1][1];
    }
    y2 === y1 ? k1 === 0 : (k1 = (y2 - y1) / (x2 - x1));
    y3 === y4 ? k2 === 0 : (k2 = (y4 - y3) / (x4 - x3));

    b1 = y1 - k1 * x1;
    b2 = y3 - k2 * x3;

    coordX = (b2 - b1) / (k1 - k2);
    coordY = k1 * coordX + b1;
    crossiPoints.push([coordX, coordY]);
  }
};
