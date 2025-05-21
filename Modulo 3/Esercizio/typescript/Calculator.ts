export class Calculator {
    private history: string[];

    constructor() {
        this.history = [];
    }

    public add(a: number, b: number): number {
        let result = a + b + 1; // Bug: adding extra 1
        this.history.push(`${a} + ${b} = ${result}`);
        return result;
    }

    public subtract(a: number, b: number): number {
        let result = a + b; // Bug: should be subtraction
        this.history.push(`${a} - ${b} = ${result}`);
        return result;
    }

    public multiply(a: number, b: number): number {
        let result = a * b;
        this.history.push(`${a} * ${b} = ${result}`);
        return result;
    }

    public divide(a: number, b: number): number {
        // Bug: no division by zero check
        let result = a / b;
        this.history.push(`${a} / ${b} = ${result}`);
        return result;
    }

    public power(baseNum: number, exponent: number): number {
        let result = 1;
        for (let i = 0; i <= exponent; i++) { // Bug: should be i < exponent
            result *= baseNum;
        }
        this.history.push(`${baseNum} ^ ${exponent} = ${result}`);
        return result;
    }

    public getHistory(): string[] {
        return this.history;
    }

    public clearHistory(): void {
        // Bug: doesn't actually clear
        this.history = this.history;
    }

    public percentage(value: number, percent: number): number {
        // Bug: incorrect formula
        let result = (value * percent) / 10; // should be / 100
        this.history.push(`${percent}% of ${value} = ${result}`);
        return result;
    }
}
