const {deepEqual} = require('assert');
const testFrameWorkLibrary = require('./test_frame_work.js');
const patternsUtil = require('../src/patternsUtil.js');
const patternsLibrary = require('../src/patternsLibrary.js');

const {display,repeatCharacter} = testFrameWorkLibrary;
const {generateTriangleRev,generateAngledDiamond,generateTriangle,generateDiamond,triangleRight,triangleLeft,generateAlternating,alternatingRectangle,generateEmpty,generateFilled,generateRectangle,filledRectangle,emptyRectangle} = patternsLibrary;
const {isOutLine,addCharacter,isEven,generateLine} = patternsUtil;

/*....................test frame work.....................*/
const displayTestReport = function(text){
  console.log(repeatCharacter("⌱",102));
  console.log(display(text));
}

/*.....................triangle right.....................*/
deepEqual(triangleRight(1),'*',"Triangle Right with height 1");
deepEqual(triangleRight(2),' *\n**',"Triangle Right with height 2");
deepEqual(triangleRight(3),'  *\n **\n***',"Triangle with height 3");
displayTestReport("All tests passed for right triangle");

/*..................triangle left.........................*/
deepEqual(triangleLeft(1),'*',"Triangle Left with height 1");
deepEqual(triangleLeft(2),'*\n**',"Triangle Left with height 2");
deepEqual(triangleLeft(3),'*\n**\n***',"Triangle with height 3");
displayTestReport("All tests passed for left triangle");

/*.................rectangle filled.......................*/
deepEqual(generateRectangle(1,1,"filled"),"*","Filled rectangle with width 1 and height 1");
deepEqual(generateRectangle(2,1,"filled"),"**","Filled rectangle with width 2 and height 1 ");
deepEqual(generateRectangle(1,2,"filled"),"*\n*","Filled rectangle with width 1 and height 2");
deepEqual(generateRectangle(2,2,"filled"),"**\n**","Filled rectangle with width 2 and height 2");
displayTestReport("All tests passed for filled rectangle");

/*................hollow rectangle........................*/
deepEqual(generateRectangle(2,1,"empty"),"**","Empty rectangle with width 2 and height 1");
deepEqual(generateRectangle(2,2,"empty"),"**\n**","Empty rectangle with width 2 and height 2");
deepEqual(generateRectangle(3,2,"empty"),"***\n***","Empty rectangle with width 3 and height 2");
deepEqual(generateRectangle(3,3,"empty"),"***\n* *\n***","Empty rectangle with width 3 and height 3");
displayTestReport("All tests passed for empty rectangle");

/*...............alternating rectangle....................*/
deepEqual(generateRectangle(2,1,"alternating"),"**","Alternating rectangle with width 2 and height 1");
deepEqual(generateRectangle(2,2,"alternating"),"**\n--","Alternating rectangle with width 2 and height 2");
deepEqual(generateRectangle(3,2,"alternating"),"***\n---","Alternating rectangle with width 3 and height 2");
deepEqual(generateRectangle(3,3,"alternating"),"***\n---\n***","Alternating rectangle with width 3 and height 3");
displayTestReport("All tests passed for alternating rectangle");

/*...............filled diamond...........................*/
deepEqual(generateDiamond(1,"*")," *\n","filled diamond with height 1");
deepEqual(generateDiamond(2,"*")," *\n","filled diamond with height 2");
deepEqual(generateDiamond(3,"*"),"  *\n ***\n  *","filled diamond with height 3");
displayTestReport("All the tests passed for filled diamond");

/*...............hollow diamond...........................*/
deepEqual(generateDiamond(1," ")," *\n","hollow diamond with height 1");
deepEqual(generateDiamond(2," ")," *\n","hollow diamond with height 2");
deepEqual(generateDiamond(3," "),"  *\n * *\n  *","hollow diamond with height 3");
displayTestReport("All the tests passed for hollow diamond");

/*...............angled diamond...........................*/
deepEqual(generateAngledDiamond(1)," \n*\n ","angle diamond with height 1");
deepEqual(generateAngledDiamond(3)," *\n* *\n *","angle diamond with height 2");
deepEqual(generateAngledDiamond(5),"  *\n / \\\n*   *\n \\ /\n  *","angle diamond with height 3");
displayTestReport("All the tests passed for angle diamond");

console.log(repeatCharacter("⌱",102));
console.log("\n");

/*..............is Out line................................*/
deepEqual(isOutLine(0,1),true);
deepEqual(isOutLine(0,3),true);
deepEqual(isOutLine(3,4),true);
deepEqual(isOutLine(4,4),false);
displayTestReport("All tests passed for is out line");

/*..............add character.............................*/
deepEqual(addCharacter("","*"),"*");
deepEqual(addCharacter(" ","-")," -");
deepEqual(addCharacter("*"," "),"* ");
deepEqual(addCharacter("- ","*"),"- *");
displayTestReport("All tests passed for add character");

/*..................is even.............................*/
deepEqual(isEven(1),false);
deepEqual(isEven(0),true);
displayTestReport("All tests passed for is even");

/*..................empty rectangle .............................*/
deepEqual(emptyRectangle(1,0,"",2),"*","empty rectangle with heightIndex 0 and height 2");
deepEqual(emptyRectangle(2,1,"*",4),"*  ","empty rectangle with heightIndex 1 and height 4");
deepEqual(emptyRectangle(2,1," *",4)," *  ","empty rectangle with heightIndex 1 and height 4");
displayTestReport("All tests passed for empty rectangle");

/*..................generate empty .............................*/
deepEqual(generateEmpty(2,1),"**","empty rectangle with width 2 and height 1");
deepEqual(generateEmpty(2,2),"**\n**","empty rectangle with width 2 and height 2");
deepEqual(generateEmpty(3,3),"***\n* *\n***","empty rectangle with width 3 and height 3");
displayTestReport("All tests passed for generate empty ");

/*..................filled rectangle.............................*/
deepEqual(filledRectangle(2,""),"**","filled rectangle with width 2 ");
deepEqual(filledRectangle(2," ")," **","filled rectangle with width 2  ");
deepEqual(filledRectangle(3,""),"***","filled rectangle with width 3 ");
displayTestReport("All tests passed for  filled line");

/*..................generate filled rectangle.............................*/
deepEqual(generateFilled(2,2),"**\n**","filled rectangle with width 2 and height 2 ");
deepEqual(generateFilled(2,3),"**\n**\n**","filled rectangle with width 2 and height 3 ");
deepEqual(generateFilled(3,3),"***\n***\n***","filled rectangle with width 3 and height 3");
displayTestReport("All tests passed for generate filled rectangle ");

/*..................generate Alternating.............................*/
deepEqual(generateAlternating(2,2),"**\n--","alternating rectangle with width 2 and height 2 ");
deepEqual(generateAlternating(2,3),"**\n--\n**","alternating rectangle with width 2 and height 3 ");
deepEqual(generateAlternating(3,3),"***\n---\n***","alternating rectangle with width 3 and height 3");
displayTestReport("All tests passed for generate alternating rectangle ");

/*..................alternating rectangle.............................*/
deepEqual(alternatingRectangle(2,"",0),"**","alternating rectangle with width 2 and heightindex 0 ");
deepEqual(alternatingRectangle(3,"",1),"---","alternating rectangle with width 2 and heightindex 1 ");
deepEqual(alternatingRectangle(3," ",3)," ---","alternating rectangle with width 3 and heightindex 3");
displayTestReport("All tests passed for alternating lines ");

/*..................generate line.............................*/
deepEqual(generateLine(3,"/"," ","\\"),"/ \\","generate line with width 3 ");
deepEqual(generateLine(2,"/"," ","\\"),"/\\","generate line with width 2");
deepEqual(generateLine(3,"*"," ","*"),"* *","generate line with width 3 and heightindex 3");
displayTestReport("All tests passed for generating lines ");

/*..................generate Triangle.............................*/
deepEqual(generateTriangle(3," "),"   *\n  * *\n *   *","generate triangle with width 3 ");
deepEqual(generateTriangle(2,"*\n "),"  *\n **\n *","generate triangle with width 2");
deepEqual(generateTriangle(3,"*"),"   *\n  ***\n *****","generate triangle with width 3 ");
displayTestReport("All tests passed for generating triangles ");

/*..................generate Triangle Reverse.............................*/
deepEqual(generateTriangleRev(3," "),"  *   *\n   * *\n    *","generate triangle reverse with width 3 ");
deepEqual(generateTriangleRev(2,"*\n "),"  **\n *\n   *","generate triangle with reverse width 2");
deepEqual(generateTriangleRev(3,"*"),"  *****\n   ***\n    *","generate triangle reverse with width 3 ");
displayTestReport("All tests passed for generating reverse triangles ");

console.log(repeatCharacter("⌱",102));
