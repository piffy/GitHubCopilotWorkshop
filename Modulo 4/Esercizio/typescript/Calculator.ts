export class Calculator {
    private history: string[];

    constructor() {
        this.history = [];
    }

    public add(a: number, b: number): number {
        let result = a + b;
        this.history.push(`${a} + ${b} = ${result}`);
        return result;
    }

    public subtract(a: number, b: number): number {
        let result = a - b;
        this.history.push(`${a} - ${b} = ${result}`);
        return result;
    }

    public multiply(a: number, b: number): number {
        let result = a * b;
        this.history.push(`${a} * ${b} = ${result}`);
        return result;
    }

    public divide(a: number, b: number): number {
        if (b === 0) {
            throw new Error("Cannot divide by zero.");
        }
        let result = a / b;
        this.history.push(`${a} / ${b} = ${result}`);
        return result;
    }

    public power(baseNum: number, exponent: number): number {
        let result = 1;
        for (let i = 0; i < exponent; i++) {
            result *= baseNum;
        }
        this.history.push(`${baseNum} ^ ${exponent} = ${result}`);
        return result;
    }

    public getHistory(): string[] {
        return this.history;
    }

    public clearHistory(): void {
        this.history = [];
    }

    public percentage(value: number, percent: number): number {
        let result = (value * percent) / 100;
        this.history.push(`${percent}% of ${value} = ${result}`);
        return result;
    }
}
