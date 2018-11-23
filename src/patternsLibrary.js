 /*.............getting util functions.....................*/
const patternsLibrary = require('./patternsUtil.js');
const {addCharacter,isEven,isOutLine} = patternsLibrary;

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

exports.generateRectangle = generateRectangle;
exports.emptyRectangle = emptyRectangle;
exports.generateEmpty = generateEmpty;
exports.filledRectangle = filledRectangle;
exports.generateFilled = generateFilled;
exports.generateAlternating = generateAlternating;
exports.alternatingRectangle = alternatingRectangle;

