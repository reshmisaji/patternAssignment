const diamondLibrary = require('./src/diamond.js');
const {determineLength,generateAngledDiamond,generateDiamond} = diamondLibrary;

const main = function(type,height){
  let length = determineLength(height); 
  let diamondType = {filled : generateDiamond(length,"*"),hollow : generateDiamond(length," "),angled : generateAngledDiamond(length)};

  console.log(diamondType[type]);
}

main(process.argv[2],process.argv[3]);
