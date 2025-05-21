class Calculator {
    constructor() {
        this.history = [];
    }

    add(a, b) {
        let result = a + b;
        this.history.push(`${a} + ${b} = ${result}`);
        return result;
    }

    subtract(a, b) {
        let result = a - b;
        this.history.push(`${a} - ${b} = ${result}`);
        return result;
    }

    multiply(a, b) {
        let result = a * b;
        this.history.push(`${a} * ${b} = ${result}`);
        return result;
    }

    divide(a, b) {
        if (b === 0) {
            throw new Error("Cannot divide by zero.");
        }
        let result = a / b;
        this.history.push(`${a} / ${b} = ${result}`);
        return result;
    }

    power(baseNum, exponent) {
        let result = 1;
        for (let i = 0; i < exponent; i++) {
            result *= baseNum;
        }
        this.history.push(`${baseNum} ^ ${exponent} = ${result}`);
        return result;
    }

    getHistory() {
        return this.history;
    }

    clearHistory() {
        this.history = [];
    }

    percentage(value, percent) {
        let result = (value * percent) / 100;
        this.history.push(`${percent}% of ${value} = ${result}`);
        return result;
    }
}
module.exports = { Calculator };
