function fizzBuzz(num: number): number | string {
  let s = '';
  if (num % 3 === 0) {
    s += 'Fizz';
  }
  if (num % 5 === 0) {
    s += 'Buzz';
  }
  return s || num;
}

describe('FizzBuzz', () => {
  it('should return 1 for 1', () => {
    expect(fizzBuzz(1)).toEqual(1);
    expect(fizzBuzz(2)).toEqual(2);
    expect(fizzBuzz(3)).toEqual('Fizz');
    expect(fizzBuzz(4)).toEqual(4);
    expect(fizzBuzz(5)).toEqual('Buzz');
    expect(fizzBuzz(6)).toEqual('Fizz');
    expect(fizzBuzz(7)).toEqual(7);
    expect(fizzBuzz(8)).toEqual(8);
    expect(fizzBuzz(9)).toEqual('Fizz');
    expect(fizzBuzz(10)).toEqual('Buzz');
    expect(fizzBuzz(11)).toEqual(11);
    expect(fizzBuzz(15)).toEqual('FizzBuzz');
  });
});

