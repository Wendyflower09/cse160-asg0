// Xiaohua Huo
// xhuo3@ucsc.edu
// Notes to Grader:
// Thank you!

var canvas = document.getElementById('example');
var ctx = canvas.getContext('2d');

function drawVector(v, color) {
  ctx.strokeStyle = color;
  ctx.save();
  ctx.translate(200, 200);
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(v.elements[0] * 20, -v.elements[1] * 20);
  ctx.stroke();
  ctx.restore();
}

function handleDrawEvent(){
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = 'rgba(0, 0, 0, 1.0)'; // Set color to black
  ctx.fillRect(0, 0, 400, 400);        // Fill a rectangle with the color
  var v1x = document.getElementById('v1x').value;
  var v1y = document.getElementById('v1y').value;
  var v1 = new Vector3([v1x, v1y, 0.0]);
  drawVector(v1, "red");
  var v2x = document.getElementById('v2x').value;
  var v2y = document.getElementById('v2y').value;
  var v2 = new Vector3([v2x, v2y, 0.0]);
  drawVector(v2, "blue");
}

function angleBetween(v1, v2){
  var d = Vector3.dot(v1, v2);
  var radians = Math.acos(d / v1.magnitude() * v2.magnitude());
  var angle = radians * (180 / Math.PI);
  return angle;
}

function areaTriangle(v1, v2){
  var area = ((Vector3.cross(v1, v2)).magnitude()) / 2;
  return area;
}

function handleDrawOperationEvent(){
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = 'rgba(0, 0, 0, 1.0)'; // Set color to black
  ctx.fillRect(0, 0, 400, 400);        // Fill a rectangle with the color
  var v1x = document.getElementById('v1x').value;
  var v1y = document.getElementById('v1y').value;
  var v1 = new Vector3([v1x, v1y, 0.0]);
  drawVector(v1, "red");
  var v2x = document.getElementById('v2x').value;
  var v2y = document.getElementById('v2y').value;
  var v2 = new Vector3([v2x, v2y, 0.0]);
  drawVector(v2, "blue");
  var selector = document.getElementById('selector').value;
  var scalar = document.getElementById('scalar').value;
  if (selector == "add"){
    var v3 = v1.add(v2);
    drawVector(v3, "green");
  }else if (selector == "sub"){
    var v3 = v1.sub(v2);
    drawVector(v3, "green");
  }else if (selector == "mul"){
    var v3 = v1.mul(scalar);
    var v4 = v2.mul(scalar);
    drawVector(v3, "green");
    drawVector(v4, "green");
  }else if (selector == "div"){
    var v3 = v1.div(scalar);
    var v4 = v2.div(scalar);
    drawVector(v3, "green");
    drawVector(v4, "green");
  }else if (selector == "mag"){
    console.log("Magnitude v1: ", v1.magnitude());
    console.log("Magnitude v2: ", v2.magnitude());
  }else if (selector == "nor"){
    var v3 = v1.normalize(scalar);
    var v4 = v2.normalize(scalar);
    drawVector(v3, "green");
    drawVector(v4, "green");
  }else if (selector == "angle"){
    console.log("Angle: ", angleBetween(v1, v2));
  }else if (selector == "area"){
    console.log("Area of the triangle: ", areaTriangle(v1, v2));
  }
}

// DrawTriangle.js (c) 2012 matsuda
function main() {  
  // Retrieve <canvas> element
  // var canvas = document.getElementById('example');  
  if (!canvas) { 
    console.log('Failed to retrieve the <canvas> element');
    return false; 
  } 
  var v1 = new Vector3([2.25, 2.25, 0.0]);
  // Get the rendering context for 2DCG
  // var ctx = canvas.getContext('2d');

  // Draw a black rectangle
  ctx.fillStyle = 'rgba(0, 0, 0, 1.0)'; // Set color to black
  ctx.fillRect(0, 0, 400, 400);        // Fill a rectangle with the color

  drawVector(v1, "red");
}
