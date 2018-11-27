/*...........Util functions of traingle pattern..............*/
const addCharacter = function(line,character){
let row = line;
  return row += character;
}

/*............Util functions for rectangle pattern...........*/
const isEven = function(number){
  return (number%2 == 0);
}

const isOutLine = function(heightIndex,height){
  return ((heightIndex == 0) || (heightIndex == height -1));
}

/*.........Util functions for diamond pattern.................*/

const determineLength = function(height){
  return (height-(height%2)+1);
}


const generateLine = function(length,starChar,middleChar,endChar){
  let line = "";
  line += starChar;

  for(pos = 1;pos<=length-2;pos++){
    line += middleChar;
  }
  
  if(length !=1){
    line += endChar;
  }
  return line;
}

exports.isOutLine = isOutLine;
exports.isEven = isEven;
exports.addCharacter = addCharacter;
exports.determineLength = determineLength;
exports.generateLine = generateLine;
