const diamondLibrary = require('./src/diamond.js');
const {generateAngledDmnd,generateDiamond} = diamondLibrary;

const main = function(type,height){
  height = height - (height % 2) + 1;

  if(type == "filled"){
    console.log(generateDiamond(height,"*"));
  }else if(type == "hollow"){
    console.log(generateDiamond(height," "));
  }else{
  console.log(generateAngledDmnd(height));
  }
}

main(process.argv[2],process.argv[3]);
