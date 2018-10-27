const assert = require('assert');
const triangleLibrary = require('../src/triangle.js');
const {triangleRight,triangleLeft} = triangleLibrary;

assert.deepEqual(triangleRight(1),'*');
assert.deepEqual(triangleRight(2),' *\n**');
assert.deepEqual(triangleRight(3),'  *\n **\n***');
