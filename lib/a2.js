var A1 = require('./a1.js');

var A2 = function() {
  A1();
  console.log('A2');
}

module.exports = A2;