// const crossingPoint = () => {
//   let coordX,
//     coordY = 0;
//   for (let i = 0; i < lines.length - 1; i++) {
//     console.log(lines);
//     let x1 = lines[i][0];
//     let x2 = lines[i][2];
//     let x3 = lines[i + 1][0];
//     let x4 = lines[i + 1][2];
//     let y1 = lines[i][1];
//     let y2 = lines[i][3];
//     let y3 = lines[i + 1][1];
//     let y4 = lines[i + 1][3];

//     if (x1 >= x2) {
//       x1 = lines[i][2];
//       x2 = lines[i][0];
//       y1 = lines[i][3];
//       y2 = lines[i][1];
//     }

//     if (x3 >= x4) {
//       x3 = lines[i + 1][2];
//       x4 = lines[i + 1][0];
//       y3 = lines[i + 1][3];
//       y4 = lines[i + 1][1];
//     }
//     y2 === y1 ? (k1 = 0) : (k1 = (y2 - y1) / (x2 - x1));
//     y3 === y4 ? (k2 = 0) : (k2 = (y4 - y3) / (x4 - x3));

//     b1 = y1 - k1 * x1;
//     b2 = y3 - k2 * x3;

//     coordX = (b2 - b1) / (k1 - k2);
//     coordY = k1 * coordX + b1;

//     ctx.fillStyle = "red";
//     ctx.beginPath();
//     ctx.arc(coordX, coordY, 5, 0, 2 * Math.PI);
//     ctx.fill();
//   }
// };

// const crossingPoint = () => {
//   let coordX,
//     coordY = 0;
//   for (let i = 0; i < lines.length - 1; i++) {
//     console.log(lines);
//     let x1 = lines[i][0];
//     let x2 = lines[i][2];
//     let x3 = lines[i + 1][0];
//     let x4 = lines[i + 1][2];
//     let y1 = lines[i][1];
//     let y2 = lines[i][3];
//     let y3 = lines[i + 1][1];
//     let y4 = lines[i + 1][3];
//     let a1 = lines[i][4];
//     let a2 = lines[i + 1][4];
//     let b1 = lines[i][5];
//     let b2 = lines[i + 1][5];
//     let c1 = lines[i][6];
//     let c2 = lines[i + 1][6];

// if (x1 >= x2) {
//   x1 = lines[i][2];
//   x2 = lines[i][0];
//   y1 = lines[i][3];
//   y2 = lines[i][1];
// }

// if (x3 >= x4) {
//   x3 = lines[i + 1][2];
//   x4 = lines[i + 1][0];
//   y3 = lines[i + 1][3];
//   y4 = lines[i + 1][1];
// }
// y2 === y1 ? (k1 = 0) : (k1 = (y2 - y1) / (x2 - x1));
// y3 === y4 ? (k2 = 0) : (k2 = (y4 - y3) / (x4 - x3));

// b1 = y1 - k1 * x1;
// b2 = y3 - k2 * x3;

// coordX = (b2 - b1) / (k1 - k2);
// coordY = k1 * coordX + b1;
// ctx.arcTo(coordX, coordY, 10);
// ctx.fillRect(coordX - 5, coordY - 5, 10, 10);

//     coordX = (b1 * c2 - b2 * c1) / (a1 * b2 - a2 * b1);

//     coordY = (a2 * c1 - a1 * c2) / (a1 * b2 - a2 * b1);

//     ctx.fillRect(coordX, coordY, 10, 10);

//     //     console.log("====================================");
//     console.log(coordX, coordY);
//     //     console.log("====================================");
//     //
//   }
// };
// const canvas = document.getElementById("canvas");
// const ctx = canvas.getContext("2d");

// canvas.addEventListener("click", startNewLine);

// let i = 0;
// const lines = [];
// let x1, y1, x2, y2;

// const drawAll = () => {
//   ctx.clearRect(0, 0, canvas.width, canvas.height);
//   for (let j = 0; j <= i; j++) {
//     ctx.lineWidth = 5;

//     ctx.moveTo(lines[j][0], lines[j][1]);
//     ctx.lineTo(lines[j][2], lines[j][3]);
//     ctx.stroke();

//     crossingPoint();
//   }
// };

// function startNewLine(e) {
//   x1 = e.clientX;
//   y1 = e.clientY;

//   lines.push([x1, y1]);
//   //   if (ctx.isPointInPath(50, 100)) {
//   //     ctx.arc(x1, y1, 10, 0, 2 * Math.PI);
//   //     ctx.fill();
//   //     console.log("fffff");
//   //   }
//   canvas.removeEventListener("click", startNewLine);
//   canvas.addEventListener("mousemove", rerenderNewLine);
// }

// function rerenderNewLine(e) {
//   x2 = e.clientX;
//   y2 = e.clientY;

//   ctx.beginPath();

//   drawAll();

//   ctx.moveTo(x1, y1);
//   ctx.lineTo(x2, y2);

//   for (let i = x1; i < x2; i++) {}

//   ctx.stroke();

//   canvas.addEventListener("click", endNewLine);
// }

// function endNewLine() {
//   lines[i].push(x2, y2);

//   drawAll();

//   let a1 = 0;
//   let b1 = 0;
//   let c1 = 0;

//   a1 = lines[i][3] - lines[i][1];
//   b1 = lines[i][0] - lines[i][2];
//   c1 = lines[i][1] * lines[i][2] - lines[i][0] * lines[i][3];

//   lines[i].push(a1, b1, c1);
//   let arrX = [];
//   let arrY = [];
//   for (let k = lines[i][0]; k < lines[i][2]; k++) {
//     arrX === arrX.push(k);
//   }
//   for (let h = lines[i][1]; h < lines[i][3]; h++) {
//     arrY === arrY.push(h);
//   }
//   console.log("arrX" + arrX, "arrY" + arrY);

//   i++;

//   canvas.removeEventListener("click", endNewLine);
//   canvas.removeEventListener("mousemove", rerenderNewLine);
//   canvas.addEventListener("click", startNewLine);
// }

// const crossingPoint = () => {
//   let coordX,
//     coordY = 0;
//   for (let i = 0; i < lines.length - 1; i++) {
//     let x1 = lines[i][0];
//     let x2 = lines[i][2];
//     let x3 = lines[i + 1][0];
//     let x4 = lines[i + 1][2];
//     let y1 = lines[i][1];
//     let y2 = lines[i][3];
//     let y3 = lines[i + 1][1];
//     let y4 = lines[i + 1][3];
//     if (x1 >= x2) {
//       x1 = lines[i][2];
//       x2 = lines[i][0];
//       y1 = lines[i][3];
//       y2 = lines[i][1];
//     }
//     if (x3 >= x4) {
//       x3 = lines[i + 1][2];
//       x4 = lines[i + 1][0];
//       y3 = lines[i + 1][3];
//       y4 = lines[i + 1][1];
//     }
//     y2 === y1 ? (k1 = 0) : (k1 = (y2 - y1) / (x2 - x1));
//     y3 === y4 ? (k2 = 0) : (k2 = (y4 - y3) / (x4 - x3));
//     b1 = y1 - k1 * x1;
//     b2 = y3 - k2 * x3;
//     coordX = (b2 - b1) / (k1 - k2);
//     coordY = k1 * coordX + b1;
//     ctx.fillStyle = "red";
//     ctx.beginPath();
//     ctx.arc(coordX, coordY, 5, 0, 2 * Math.PI);
//     ctx.fill();
//   }
// };

// const canvas = document.getElementById("canvas");
// const ctx = canvas.getContext("2d");

// canvas.addEventListener("click", startNewLine);

// let i = 0;
// const lines = [];
// let x1, y1, x2, y2;
// let arrX = [];
// let arrY = [];
// let coordX = [];
// let coordY = [];

// const drawAll = () => {
//   ctx.clearRect(0, 0, canvas.width, canvas.height);

//   for (let j = 0; j <= i; j++) {
//     ctx.lineWidth = 5;
//     ctx.moveTo(lines[j][0][0], lines[j][1][0]);
//     ctx.lineTo(
//       lines[j][0][lines[j][0].length - 1],
//       lines[j][1][lines[j][1].length - 1]
//     );
//     ctx.stroke();
//     console.log("====================================");
//     console.log(coordX, coordY);
//     console.log("====================================");
//     crossingPoint();
//   }
// };

// function startNewLine(e) {
//   x1 = e.clientX;
//   y1 = e.clientY;

//   lines.push([[x1], [y1]]);

//   canvas.removeEventListener("click", startNewLine);
//   canvas.addEventListener("mousemove", rerenderNewLine);
// }

// function rerenderNewLine(e) {
//   x2 = e.clientX;
//   y2 = e.clientY;

//   ctx.beginPath();

//   drawAll();

//   ctx.moveTo(x1, y1);
//   ctx.lineTo(x2, y2);
//   ctx.stroke();

//   canvas.addEventListener("click", endNewLine);
// }

// function endNewLine() {
//   if (x1 <= x2) {
//     for (let k = x1 + 1; k <= x2; k++) {
//       lines[i][0].push(k);
//     }
//   }

//   if (x1 > x2) {
//     for (let k = x1 - 1; k >= x2; k--) {
//       lines[i][0].push(k);
//     }
//   }
//   if (y1 <= y2) {
//     for (let h = y1 + 1; h <= y2; h++) {
//       lines[i][1].push(h);
//     }
//   }
//   if (y1 > y2) {
//     for (let h = y1 - 1; h >= y2; h--) {
//       lines[i][1].push(h);
//     }
//   }

//   lines[i].push(x2, y2);

//   drawAll();

//   let a1 = 0;
//   let b1 = 0;
//   let c1 = 0;

//   a1 = lines[i][3] - lines[i][1];
//   b1 = lines[i][0] - lines[i][2];
//   c1 = lines[i][1] * lines[i][2] - lines[i][0] * lines[i][3];

//   lines[i].push(a1, b1, c1);

//   for (let k = lines[i][0]; k <= lines[i][2]; k++) {
//     arrX === arrX.push(k);
//   }
//   for (let h = lines[i][1]; h <= lines[i][3]; h++) {
//     arrY === arrY.push(h);
//   }

i++;
//   if (arrX.length >= 1 && arrY.length >= 1) {
//     let d = arrX.find((e) => e === x2);
//     let r = arrY.find((e) => e === y2);
//     if (d != "undefined" && r != "undefined") {
//       coordY.push(r);
//       coordX.push(d);
//     }
//   }

//   for (let y = 0; y < coordX.length; y++) {
//     ctx.fillStyle = "red";
//     ctx.beginPath();
//     ctx.arc(coordX[y], coordY[y], 5, 0, 2 * Math.PI);
//     ctx.fill();
//   }
//   canvas.removeEventListener("click", endNewLine);
//   canvas.removeEventListener("mousemove", rerenderNewLine);
//   canvas.addEventListener("click", startNewLine);
// }

// const crossingPoint = () => {
//   for (let i = 0; i < lines.length - 1; i++) {
//     for (let j = 0; j < lines[i + 1][0].length - 1; j++) {
//       const t = lines[i + 1].find(
//         (e, ix) => e[0][ix] === lines[i][0][j] && e[1][ix] === lines[i][1][j]
//       );
//       console.log(t);
//     }
//   for (let i = 0; i < lines.length - 1; i++) {
//     let common = lines[i][0].filter((e) => lines[i + 1][0].indexOf(e) !== -1);
//     let common2 = lines[i][1].filter((e) => lines[i + 1][1].indexOf(e) !== -1);
//     let indexX,
//       indexY = 0;
//     for (let s = 0; s < common.length - 1; s++) {
//       indexX = lines[i + 1][0].findIndex((el) => el === common[s]);
//       for (let q = 0; q < common2.length - 1; q++) {
//         indexY = lines[i + 1][1].findIndex((el) => el === common2[q]);
//       }
//       if (indexX === indexY) {
//         //    coordX === coordX.push(lines[i + 1][0][indexX]);
//         //    coordY === coordY.push(lines[i + 1][1][indexY]);
//         console.log(indexX);
//       }
//     }
//   }

//   let coordX,
//     coordY = 0;
//   for (let i = 0; i < lines.length - 1; i++) {
//     let x1 = lines[i][0];
//     let x2 = lines[i][2];
//     let x3 = lines[i + 1][0];
//     let x4 = lines[i + 1][2];
//     let y1 = lines[i][1];
//     let y2 = lines[i][3];
//     let y3 = lines[i + 1][1];
//     let y4 = lines[i + 1][3];
//     if (x1 >= x2) {
//       x1 = lines[i][2];
//       x2 = lines[i][0];
//       y1 = lines[i][3];
//       y2 = lines[i][1];
//     }
//     if (x3 >= x4) {
//       x3 = lines[i + 1][2];
//       x4 = lines[i + 1][0];
//       y3 = lines[i + 1][3];
//       y4 = lines[i + 1][1];
//     }
//     y2 === y1 ? (k1 = 0) : (k1 = (y2 - y1) / (x2 - x1));
//     y3 === y4 ? (k2 = 0) : (k2 = (y4 - y3) / (x4 - x3));
//     b1 = y1 - k1 * x1;
//     b2 = y3 - k2 * x3;
//     coordX = (b2 - b1) / (k1 - k2);
//     coordY = k1 * coordX + b1;
//     ctx.fillStyle = "red";
//     ctx.beginPath();
//     ctx.arc(coordX, coordY, 5, 0, 2 * Math.PI);
//     ctx.fill();
//   }
// };

//   let a1 = 0;
//   let b1 = 0;
//   let c1 = 0;

//   a1 = lines[i][3] - lines[i][1];
//   b1 = lines[i][0] - lines[i][2];
//   c1 = lines[i][1] * lines[i][2] - lines[i][0] * lines[i][3];

//   lines[i].push(a1, b1, c1);
//   let arrX = [];
//   let arrY = [];
//   for (let k = lines[i][0]; k < lines[i][2]; k++) {
//     arrX === arrX.push(k);
//   }
//   for (let h = lines[i][1]; h < lines[i][3]; h++) {
//     arrY === arrY.push(h);
//   }
//   console.log("arrX" + arrX, "arrY" + arrY);
