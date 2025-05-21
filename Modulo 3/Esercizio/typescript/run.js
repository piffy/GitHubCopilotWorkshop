// NOTE: before running this script, compile the TypeScript code with `tsc Calculator.ts --lib es2015`

const { Calculator } = require('./Calculator');

const calculator = new Calculator();
var sum = calculator.add(5, 3);
console.log("Sum: " + sum);