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

exports.isOutLine = isOutLine;
exports.isEven = isEven;
exports.addCharacter = addCharacter;
