/*.............Rectangle Main...................*/
const rectangleLibrary = require('./src/rectangle.js');
const {generateRectangle} = rectangleLibrary;

const main = function(type,width,height){
  console.log(generateRectangle(width,height,type));
}

main(process.argv[2],+process.argv[3],+process.argv[4]);

