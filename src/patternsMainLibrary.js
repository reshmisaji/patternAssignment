const triangleRight = require('./triangle.js').triangleRight;
const triangleLeft = require('./triangle.js').triangleLeft;

const main = function(align = process.argv[2],number = process.argv[3]){

  if(align == "left"){
    console.log(triangleLeft(number));
  }

  if(align == "right"){
    console.log(triangleRight(number));
  }
}
main();
