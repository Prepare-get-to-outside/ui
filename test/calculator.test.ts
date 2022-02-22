
const Calculator = require('../src/Calculator');

describe('Calculator', () => {
    let calc:Calculator2;

    beforeEach(() => {
        calc = new Calculator();
        calc.set(0);
    })

    it('set', () => {
        calc.set(1);

        expect(calc.get()).toBe(1);
    })

    it('add', () => {
        calc.set(2);
        calc.add(5);
        
        expect(calc.get()).toEqual(7);
    })

    describe('divide', () => {
        it('0/0 === NaN', () => {
            calc.divide(0);

            expect(calc.get()).toBe(NaN);
        })

        it('1/0 === Infinity', () => {
            calc.set(1);
            calc.divide(0);

            expect(calc.get()).toBe(Infinity);
        })
    })
})