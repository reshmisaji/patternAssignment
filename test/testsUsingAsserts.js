const assert = require('assert');
const triangleLibrary = require('../src/triangle.js');
const testFrameWorkLibrary = require('./testFrameWork.js');
const {display,repeatCharacter} = testFrameWorkLibrary;
const {triangleRight,triangleLeft} = triangleLibrary;


const displayTestReport = function(text){
  console.log(repeatCharacter("⌱",102));
  console.log(display(text));
  console.log(repeatCharacter("⌱",102));
}

assert.deepEqual(triangleRight(1),'*',"Triangle Right with height 1");
assert.deepEqual(triangleRight(2),' *\n**',"Triangle Right with height 2");
assert.deepEqual(triangleRight(3),'  *\n **\n***',"Triangle with height 3");
displayTestReport("All tests passed for right triangle");

