const diamondLibrary = require('./src/diamond.js');
const {determineLength,generateAngledDmnd,generateDiamond} = diamondLibrary;

const main = function(type,height){
  let length = determineLength(height); 
  let diamondType = {filled : generateDiamond(height,"*"),hollow : generateDiamond(height," "),angled : generateAngledDmnd(height)};

  console.log(diamondType[type]);
}

main(process.argv[2],process.argv[3]);
