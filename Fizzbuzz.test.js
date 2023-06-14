const fizzBuzz = require('./fizzbuzz');

describe('FizzBuzz', () => {
  it('returns "Fizz" for numbers divisible by 3', () => {
    expect(fizzBuzz(3)).toBe('Fizz');
    expect(fizzBuzz(9)).toBe('Fizz');
  });

  it('returns "Buzz" for numbers divisible by 5', () => {
    expect(fizzBuzz(5)).toBe('Buzz');
    expect(fizzBuzz(10)).toBe('Buzz');
  });

  it('returns "FizzBuzz" for numbers divisible by both 3 and 5', () => {
    expect(fizzBuzz(15)).toBe('FizzBuzz');
    expect(fizzBuzz(30)).toBe('FizzBuzz');
  });

  it('returns the input number as a string for numbers not divisible by 3 or 5', () => {
    expect(fizzBuzz(2)).toBe('2');
    expect(fizzBuzz(7)).toBe('7');
  });
});
