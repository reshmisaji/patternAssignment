const isOutLine = function(heightIndex){
  return ((heightIndex == 0) || (heightIndex == height -1));
}

const addCharacter = function(line,character){
  let row = line;
  return row += character;
}

const isEven = function(heightIndex){
  return (heightIndex % 2 == 0);
}

const emptyRectangle = function(lineWidth,heightIndex,line){
  let row = line;
  let character;

  for(let widthIndex = 0; widthIndex < lineWidth; widthIndex ++){
    if(isOutLine(heightIndex)){
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
    line = emptyRectangle(lineWidth,heightIndex,line); 
    character = "*";
    line = addCharacter(line,character);
  }
  return line;
}

const filledRectangle = function(width,line){
  let row = line;
  let character;

  for(let widthIndex = 0; widthIndex < width; widthIndex ++){
    let character = "*";
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

const alternatingRectangle = function(width,line){
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
    line = alternatingRectangle(width,line);
  }
  return line;
}

const generateRectangle = function(width,height,type){
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

let type = process.argv[2];
let height = +process.argv[3];
let width = +process.argv[4];
console.log(generateRectangle(width,height,type));
