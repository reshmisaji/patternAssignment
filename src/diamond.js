/*...................determine height..............................*/
const {generateLine} = require('./patternsUtil.js');


/*......................Generate Line....................................*/


/*......................Generate Triangle.................................*/

const generateTriangle = function(height,middleChar){
  let triangle ="";
  delimiter = "";

  for(let lineNo = 1; lineNo <= height; lineNo++){
    let noOfSpaces = (height - lineNo)+1;
    let line = generateLine((2*lineNo)-1,"*",middleChar,"*");
    let spaces = generateLine(noOfSpaces," "," "," ");
    triangle += delimiter +spaces+line;
    delimiter = "\n"
  } 
  return triangle;
}

/*......................Generate Triangle Reverse........................*/

const generateTriangleRev = function(height,middleChar){
  let triangle ="";
  delimiter = "";

  for(let lineNo = height; lineNo >= 1; lineNo--){
    let noOfSpaces = (height - lineNo)+2;
    let line = generateLine((2*lineNo)-1,"*",middleChar,"*");
    let spaces = generateLine(noOfSpaces," "," "," ");
    triangle += delimiter +spaces+line;
    delimiter = "\n"
  } 
  return triangle;
}

/*.....................Generate Diamond.................................*/

const generateDiamond = function(height,middleChar){
  let diamond = "";
  let halfHeight = Math.ceil(height/2);
  diamond += generateTriangle(halfHeight,middleChar) + "\n";
  diamond += generateTriangleRev(halfHeight-1,middleChar);
  return diamond;
}

/*................Generate Angled Diamond...............................*/

const generateAngledDiamond = function(height){
  let diamond = "";
  let halfHeight = Math.ceil(height/2);
  diamond += generateLine(halfHeight," "," ","*") + "\n";//firstline

  for(let lineNo = 2; lineNo < halfHeight; lineNo++){//firsthalf
    diamond += generateLine(halfHeight - lineNo ," "," "," ");
    diamond += generateLine((2*lineNo)-1,"/"," ","\\") + "\n";
  }
  diamond += generateLine(height,"*"," ","*") + "\n";//middleline
  
  for(let lineNo = halfHeight-1; lineNo > 1; lineNo--){//partaftermiddle
    diamond += generateLine(halfHeight - lineNo ," "," "," ");
    diamond += generateLine((2*lineNo)-1,"\\"," ","/") + "\n";
  }
  diamond += generateLine(halfHeight," "," ","*"); //last line
  return diamond;
}

exports.generateAngledDiamond = generateAngledDiamond;
exports.generateDiamond = generateDiamond;
exports.generateTriangle = generateTriangle;
exports.generateTriangleRev = generateTriangleRev;
