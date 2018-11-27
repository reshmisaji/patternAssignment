const diamondLibrary = require('./src/patternsLibrary.js');
const patternLibrary = require('./src/patternsUtil.js');
const {generateAngledDiamond,generateDiamond} = diamondLibrary;
const {determineLength} = patternLibrary;
const main = function(type,height){
  let length = determineLength(height); 
  let diamondType = {filled : generateDiamond(length,"*"),hollow : generateDiamond(length," "),angled : generateAngledDiamond(length)};

  console.log(diamondType[type]);
}

main(process.argv[2],process.argv[3]);
