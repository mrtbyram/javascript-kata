import add from "./string-calculator";

describe('String Calculator Tests', ()=> {
    it('Empty String returns empty', ()=> {
        expect(add('')).toBe('');
    })

    it('Add two arguments', ()=> {
        expect(add('1,2')).toBe(3);
        expect(add('3,5')).toBe(8);
    })

    it('Add unknown number of arguments', ()=> {
        expect(add('1,2,3')).toBe(6);
        expect(add('3,5,10')).toBe(18);
    })

    it('Handle new lines as comas', ()=> {
        expect(add('1,2\n3')).toBe(6);
    })

    it('Throw exception when invalid input', ()=> {
        expect(() => add('1,2,\n3')).toThrowError('invalid');
        expect(() => add('1,2,')).toThrowError('invalid');
        expect(() => add(',1,2')).toThrowError('invalid');
        expect(() => add(',2')).toThrowError('invalid');
    })

    it('Handle different delimiters', ()=> {
        expect(add('//;\n1;3')).toBe(4);
        expect(add('//|\n1|2|3')).toBe(6);
        expect(add('//sep\n2sep5')).toBe(7);
    })

    it('Throw error when different delimiter than given', ()=> {
        expect(() => add('//|\n1|2,3')).toThrowError('invalid');
    })
})
