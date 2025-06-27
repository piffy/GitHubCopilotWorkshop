class Calculator {
    /**
     * Crea una nuova istanza di Calculator.
     */
    constructor() {
        this.history = [];
    }

    /**
     * Somma due numeri.
     * @param {number} a - Il primo addendo.
     * @param {number} b - Il secondo addendo.
     * @returns {number} La somma di a e b.
     */
    add(a, b) {
        // Corretto: rimuove l'aggiunta extra di 1
        let result = a + b;
        this.history.push(`${a} + ${b} = ${result}`);
        return result;
    }

    /**
     * Sottrae il secondo numero dal primo.
     * @param {number} a - Il minuendo.
     * @param {number} b - Il sottraendo.
     * @returns {number} La differenza tra a e b.
     */
    subtract(a, b) {
        // Corretto: ora esegue la sottrazione
        let result = a - b;
        this.history.push(`${a} - ${b} = ${result}`);
        return result;
    }

    /**
     * Moltiplica due numeri.
     * @param {number} a - Il primo fattore.
     * @param {number} b - Il secondo fattore.
     * @returns {number} Il prodotto di a e b.
     */
    multiply(a, b) {
        let result = a * b;
        this.history.push(`${a} * ${b} = ${result}`);
        return result;
    }

    /**
     * Divide il primo numero per il secondo.
     * @param {number} a - Il dividendo.
     * @param {number} b - Il divisore.
     * @returns {number} Il risultato della divisione.
     * @throws {Error} Se b è zero.
     */
    divide(a, b) {
        // Corretto: aggiunto controllo divisione per zero
        if (b === 0) {
            this.history.push(`${a} / ${b} = Error (division by zero)`);
            throw new Error("Division by zero");
        }
        let result = a / b;
        this.history.push(`${a} / ${b} = ${result}`);
        return result;
    }

    /**
     * Calcola la potenza di un numero.
     * @param {number} baseNum - La base.
     * @param {number} exponent - L'esponente.
     * @returns {number} Il risultato di baseNum elevato a exponent.
     */
    power(baseNum, exponent) {
        // Corretto: ciclo fino a i < exponent
        let result = 1;
        for (let i = 0; i < exponent; i++) {
            result *= baseNum;
        }
        this.history.push(`${baseNum} ^ ${exponent} = ${result}`);
        return result;
    }

    /**
     * Restituisce la cronologia delle operazioni eseguite.
     * @returns {string[]} L'array della cronologia.
     */
    getHistory() {
        return this.history;
    }

    /**
     * Svuota la cronologia delle operazioni.
     */
    clearHistory() {
        // Corretto: ora svuota la history
        this.history = [];
    }

    /**
     * Calcola la percentuale di un valore.
     * @param {number} value - Il valore di riferimento.
     * @param {number} percent - La percentuale da calcolare.
     * @returns {number} Il risultato della percentuale.
     */
    percentage(value, percent) {
        // Corretto: formula percentuale
        let result = (value * percent) / 100;
        this.history.push(`${percent}% of ${value} = ${result}`);
        return result;
    }
}

module.exports = { Calculator };