const assert = require('assert');
const triangleLibrary = require('../src/triangle.js');
const testFrameWorkLibrary = require('./testFrameWork.js');
const rectangleLibrary = require('../src/rectangle.js');

const {display,repeatCharacter} = testFrameWorkLibrary;
const {triangleRight,triangleLeft} = triangleLibrary;
const {generateRectangle} = rectangleLibrary;

/*....................test frame work.....................*/
const displayTestReport = function(text){
  console.log(repeatCharacter("⌱",102));
  console.log(display(text));
}

/*.....................triangle right.....................*/
assert.deepEqual(triangleRight(1),'*',"Triangle Right with height 1");
assert.deepEqual(triangleRight(2),' *\n**',"Triangle Right with height 2");
assert.deepEqual(triangleRight(3),'  *\n **\n***',"Triangle with height 3");
displayTestReport("All tests passed for right triangle");

/*..................triangle left.........................*/
assert.deepEqual(triangleLeft(1),'*',"Triangle Left with height 1");
assert.deepEqual(triangleLeft(2),'*\n**',"Triangle Left with height 2");
assert.deepEqual(triangleLeft(3),'*\n**\n***',"Triangle with height 3");
displayTestReport("All tests passed for left triangle");

/*.................rectangle filled.......................*/
assert.deepEqual(generateRectangle(1,1,"filled"),"*","Filled rectangle with width 1 and height 1");
assert.deepEqual(generateRectangle(2,1,"filled"),"**","Filled rectangle with width 2 and height 1 ");
assert.deepEqual(generateRectangle(1,2,"filled"),"*\n*","Filled rectangle with width 1 and height 2");
assert.deepEqual(generateRectangle(2,2,"filled"),"**\n**","Filled rectangle with width 2 and height 2");
displayTestReport("All tests passed for filled rectangle");

/*................hollow rectangle........................*/
assert.deepEqual(generateRectangle(2,1,"empty"),"**","Empty rectangle with width 2 and height 1");
assert.deepEqual(generateRectangle(2,2,"empty"),"**\n**","Empty rectangle with width 2 and height 2");
assert.deepEqual(generateRectangle(3,2,"empty"),"***\n***","Empty rectangle with width 3 and height 2");
assert.deepEqual(generateRectangle(3,3,"empty"),"***\n* *\n***","Empty rectangle with width 3 and height 3");
displayTestReport("All tests passed for empty rectangle");

/*...............alternating rectangle....................*/
assert.deepEqual(generateRectangle(2,1,"alternating"),"**","Alternating rectangle with width 2 and height 1");
assert.deepEqual(generateRectangle(2,2,"alternating"),"**\n--","Alternating rectangle with width 2 and height 2");
assert.deepEqual(generateRectangle(3,2,"alternating"),"***\n---","Alternating rectangle with width 3 and height 2");
assert.deepEqual(generateRectangle(3,3,"alternating"),"***\n---\n***","Alternating rectangle with width 3 and height 3");
displayTestReport("All tests passed for alternating rectangle");

console.log(repeatCharacter("⌱",102));
