/*.............Rectangle Main...................*/
const rectangleLibrary = require('./rectangle.js');
const {generateRectangle} = rectangleLibrary;

const main = function(type = process.argv[2],height = +process.argv[3],width = +process.argv[4]){
  console.log(generateRectangle(width,height,type));
}

main();

