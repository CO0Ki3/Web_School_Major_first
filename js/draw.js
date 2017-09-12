let canvas= document.getElementById("canvas");
let context = canvas.getContext("2d");

context.strokeStyle = 'rgb(255, 0, 0)';
context.moveTo(0, 0);
context.lineTo(100, 100);
context.stroke();


context.fillStyle = 'rgb(61, 203, 255)';
context.fillRect(20, 20, 50, 50);

context.fillStyle = 'rgb(192, 255, 186)';
context.beginPath();
context.moveTo(25, 25);
context.lineTo(105, 25);
context.lineTo(25, 105);
context.fill();

context.fillStyle = 'rgb(215, 175, 251)';
context.beginPath();
context.arc(40, 40, 20, 0, 2*Math.PI);
context.fill();

context.fillStyle = 'rgb(255, 170, 239)';
context.beginPath();
context.moveTo(75, 40);
context.bezierCurveTo(75, 37, 70, 25, 50, 25);
context.bezierCurveTo(20, 25, 20, 62.5, 20, 62.5);
context.bezierCurveTo(20, 80, 40, 102, 75, 120);
context.bezierCurveTo(110, 102, 130, 80, 130, 62.5);
context.bezierCurveTo(130, 62.5, 130, 25, 100, 25);
context.bezierCurveTo(85, 25, 75, 37, 75, 40);
context.fill();
