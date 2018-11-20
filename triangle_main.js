const triangleLibrary = require('./src/patternsLibrary.js');
const {triangleRight,triangleLeft} = triangleLibrary;

const main = function(align,number){

  if(align == "left"){
    console.log(triangleLeft(number));
  }

  if(align == "right"){
    console.log(triangleRight(number));
  }
}

main(process.argv[2],process.argv[3]);
