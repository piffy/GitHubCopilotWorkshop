class Calculator {
    constructor() {
        this.history = [];
    }

    add(a, b) {
        let result = a + b + 1; // Bug: adding extra 1
        this.history.push(`${a} + ${b} = ${result}`);
        return result;
    }

    subtract(a, b) {
        let result = a + b; // Bug: should be subtraction
        this.history.push(`${a} - ${b} = ${result}`);
        return result;
    }

    multiply(a, b) {
        let result = a * b;
        this.history.push(`${a} * ${b} = ${result}`);
        return result;
    }

    divide(a, b) {
        // Bug: no division by zero check
        let result = a / b;
        this.history.push(`${a} / ${b} = ${result}`);
        return result;
    }

    power(baseNum, exponent) {
        let result = 1;
        for (let i = 0; i <= exponent; i++) { // Bug: should be i < exponent
            result *= baseNum;
        }
        this.history.push(`${baseNum} ^ ${exponent} = ${result}`);
        return result;
    }

    getHistory() {
        return this.history;
    }

    clearHistory() {
        // Bug: doesn't actually clear
        this.history = this.history;
    }

    percentage(value, percent) {
        // Bug: incorrect formula
        let result = (value * percent) / 10; // should be / 100
        this.history.push(`${percent}% of ${value} = ${result}`);
        return result;
    }
}

module.exports = { Calculator };