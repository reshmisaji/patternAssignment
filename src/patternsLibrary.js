/*.............getting util functions.....................*/
const patternsLibrary = require('./patternsUtil.js');
const {addCharacter,isEven,isOutLine,generateLine} = patternsLibrary;

/*..............Library functions of triangle............*/

const triangleLeft = function(number){
  let line="";
  delimiter ="";

  for(let index = 1; index <= number; index++){
    line +=delimiter;
    delimiter="\n";

    for(let innerIndex =1; innerIndex <=index; innerIndex++){
      line = addCharacter(line,"*");
    }
  }
  return line;
}

const triangleRight = function(number){
  let line = "";
  let delimiter = "";

  for(let index = 1; index <=number; index++){
    line +=delimiter;
    delimiter = "\n";

    for(let innerIndex =1; innerIndex <=number; innerIndex++){

      if(innerIndex <= (number-index)){
        line = addCharacter(line," ");
      } else {
        line = addCharacter(line,"*");
      }
    }
  }
  return line;
}

exports.triangleRight = triangleRight;
exports.triangleLeft = triangleLeft;

/*............library functions of rectangle............*/

const emptyRectangle = function(lineWidth,heightIndex,line,height){
  let row = line;
  let character;

  for(let widthIndex = 0; widthIndex < lineWidth; widthIndex ++){
    if(isOutLine(heightIndex,height)){
      character = "*";
      row = addCharacter(row,character);
    } else {
      character = " ";
      row = addCharacter(row,character);
    }
  }
  return row;
}

const generateEmpty = function(width,height){
  let line = "";
  let lineDelimiter = "";
  let lineWidth = width -2;

  for(let heightIndex = 0; heightIndex < height; heightIndex ++){
    line += lineDelimiter;
    lineDelimiter = "\n";
    let character = "*";
    line = addCharacter(line,character);
    line = emptyRectangle(lineWidth,heightIndex,line,height); 
    character = "*";
    line = addCharacter(line,character);
  }
  return line;
}

const filledRectangle = function(width,line){
  let row = line;
  let character;

  for(let widthIndex = 0; widthIndex < width; widthIndex ++){
    character = "*";
    row = addCharacter(row,character);
  }
  return row;
}

const generateFilled = function(width,height){
  let line = "";
  let lineDelimiter = "";

  for(let heightIndex = 0; heightIndex < height; heightIndex ++){
    line += lineDelimiter;
    lineDelimiter = "\n";
    line = filledRectangle(width,line);
  }
  return line;
}

const alternatingRectangle = function(width,line,heightIndex){
  let row = line;

  for(let breadthIndex = 1; breadthIndex <= width; breadthIndex ++){
    if(isEven(heightIndex)){
      let character = "*";
      row = addCharacter(row,character);
    }else{
      let character = "-";
      row = addCharacter(row,character);
    }
  }
  return row;
}

const generateAlternating = function(width,height){
  let line = "";
  let lineDelimiter = "";

  for(heightIndex = 0; heightIndex < height; heightIndex ++){
    line += lineDelimiter;
    lineDelimiter = "\n";
    line = alternatingRectangle(width,line,heightIndex);
  }
  return line;
}

const generateRectangle = function(width,height,type){
  let line = '';

  if(type == "empty"){
    line = generateEmpty(width,height);
  }
  
  if(type == "filled"){
    line = generateFilled(width,height);
  }

  if(type == "alternating"){
    line = generateAlternating(width,height);
  }
  return line;
}

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

const generateDiamond = function(height,middleChar){
  let diamond = "";
  let halfHeight = Math.ceil(height/2);
  diamond += generateTriangle(halfHeight,middleChar) + "\n";
  diamond += generateTriangleRev(halfHeight-1,middleChar);
  return diamond;
}

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

exports.generateDiamond = generateDiamond;
exports.generateRectangle = generateRectangle;
exports.emptyRectangle = emptyRectangle;
exports.generateEmpty = generateEmpty;
exports.filledRectangle = filledRectangle;
exports.generateFilled = generateFilled;
exports.generateAlternating = generateAlternating;
exports.alternatingRectangle = alternatingRectangle;
exports.generateTriangleRev = generateTriangleRev;
exports.generateAngledDiamond = generateAngledDiamond;
exports.generateTriangle = generateTriangle;

