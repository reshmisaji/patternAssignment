const assert = require('assert');
const triangleLibrary = require('../src/triangle.js');
const testFrameWorkLibrary = require('./testFrameWork.js');
const rectangleLibrary = require('../src/rectangle.js');
const diamondLibrary = require('../src/diamond.js');

const {display,repeatCharacter} = testFrameWorkLibrary;
const {triangleRight,triangleLeft} = triangleLibrary;
const {generateRectangle,isOutLine,addCharacter,isEven,emptyRectangle} = rectangleLibrary;
const {generateAngledDmnd,generateDiamond} = diamondLibrary;

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

/*...............filled diamond...........................*/
assert.deepEqual(generateDiamond(1,"*")," *\n","filled diamond with height 1");
assert.deepEqual(generateDiamond(2,"*")," *\n","filled diamond with height 2");
assert.deepEqual(generateDiamond(3,"*"),"  *\n ***\n  *","filled diamond with height 3");
displayTestReport("All the tests passed for filled diamond");

/*...............hollow diamond...........................*/
assert.deepEqual(generateDiamond(1," ")," *\n","hollow diamond with height 1");
assert.deepEqual(generateDiamond(2," ")," *\n","hollow diamond with height 2");
assert.deepEqual(generateDiamond(3," "),"  *\n * *\n  *","hollow diamond with height 3");
displayTestReport("All the tests passed for hollow diamond");

/*...............angled diamond...........................*/
assert.deepEqual(generateAngledDmnd(1)," \n*\n ","angle diamond with height 1");
assert.deepEqual(generateAngledDmnd(3)," *\n* *\n *","angle diamond with height 2");
assert.deepEqual(generateAngledDmnd(5),"  *\n / \\\n*   *\n \\ /\n  *","angle diamond with height 3");
displayTestReport("All the tests passed for angle diamond");

console.log(repeatCharacter("⌱",102));
console.log("\n");

/*..............is Out line................................*/
assert.deepEqual(isOutLine(0,1),true);
assert.deepEqual(isOutLine(0,3),true);
assert.deepEqual(isOutLine(3,4),true);
assert.deepEqual(isOutLine(4,4),false);
displayTestReport("All tests passed for is out line");

/*..............add character.............................*/
assert.deepEqual(addCharacter("","*"),"*");
assert.deepEqual(addCharacter(" ","-")," -");
assert.deepEqual(addCharacter("*"," "),"* ");
assert.deepEqual(addCharacter("- ","*"),"- *");
displayTestReport("All tests passed for add character");

/*..................is even.............................*/
assert.deepEqual(isEven(1),false);
assert.deepEqual(isEven(0),true);
displayTestReport("All tests passed for is even");

/*..................empty rectangle .............................*/
assert.deepEqual(emptyRectangle(1,0,"",2),"*","empty rectangle with heightIndex 0 and height 2");
assert.deepEqual(emptyRectangle(2,1,"*",4),"*  ","empty rectangle with heightIndex 1 and height 4");
assert.deepEqual(emptyRectangle(2,1," *",4)," *  ","empty rectangle with heightIndex 1 and height 4");
displayTestReport("All tests passed for empty rectangle");

console.log(repeatCharacter("⌱",102));
