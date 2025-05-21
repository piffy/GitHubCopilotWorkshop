// run test with `npm test` command

const { Calculator } = require('./Calculator');

describe('Calculator', () => {
    let calculator;

    beforeEach(() => {
        calculator = new Calculator();
    });

    // Test: add_PositiveNumbers_ReturnsSum
    // Verifica che la somma di due numeri positivi sia corretta
    test('add_PositiveNumbers_ReturnsSum', () => {
        const result = calculator.add(2, 3);
        expect(result).toEqual(5);
    });
});