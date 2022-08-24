import fizzBuzz from './fizzbuzz';

describe("test FizzBuzz", () => {
    it("return ordinary number as it is", () => {
        expect(fizzBuzz(1)).toBe('1');
        expect(fizzBuzz(8)).toBe('8');
        expect(fizzBuzz(7)).toBe('7');
        expect(fizzBuzz(41)).toBe('41');
    })

    it("return multiple of three as Fizz", () => {
        expect(fizzBuzz(3)).toBe('Fizz');
        expect(fizzBuzz(9)).toBe('Fizz');
        expect(fizzBuzz(12)).toBe('Fizz');
        expect(fizzBuzz(18)).toBe('Fizz');
    })

    it("return multiple of five as Buzz", () => {
        expect(fizzBuzz(5)).toBe('Buzz');
        expect(fizzBuzz(10)).toBe('Buzz');
        expect(fizzBuzz(20)).toBe('Buzz');
        expect(fizzBuzz(25)).toBe('Buzz');
    })

    it("return multiple of three and five as FizzBuzz", () => {
        expect(fizzBuzz(15)).toBe('FizzBuzz');
        expect(fizzBuzz(30)).toBe('FizzBuzz');
        expect(fizzBuzz(45)).toBe('FizzBuzz');
        expect(fizzBuzz(60)).toBe('FizzBuzz');
    })

    it("handle input is undefined", () => {
        expect(fizzBuzz(undefined)).toBe(undefined);
    })

})

