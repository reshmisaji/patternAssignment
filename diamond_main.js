const diamondLibrary = require('./src/diamond.js');
const {determineLength,generateAngledDmnd,generateDiamond} = diamondLibrary;

const main = function(type,height){
  height = determineLength(height); 

  if(type == "filled"){
    console.log(generateDiamond(height,"*"));
  }else if(type == "hollow"){
    console.log(generateDiamond(height," "));
  }else{
  console.log(generateAngledDmnd(height));
  }
}

main(process.argv[2],process.argv[3]);
