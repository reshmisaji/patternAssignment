const assert = require('assert');
const triangleLibrary = require('../src/triangle.js');
const {triangleRight,triangleLeft} = triangleLibrary;

assert.deepEqual(triangleRight(1),'*',"Triangle Right with height 1");
assert.deepEqual(triangleRight(2),' *\n**',"Triangle Right with height 2");
assert.deepEqual(triangleRight(3),'  *\n **\n***',"Triangle with height 3");


