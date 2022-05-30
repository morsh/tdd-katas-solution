import { primeFactors } from './PrimeFactors';

describe('PrimeFactors', () => {
  it('should return all prime factors of a number', () => {
    expect(primeFactors(1)).toEqual([]);
    expect(primeFactors(2)).toEqual([2]);
    expect(primeFactors(3)).toEqual([3]);
    expect(primeFactors(4)).toEqual([2, 2]);
    expect(primeFactors(5)).toEqual([5]);
    expect(primeFactors(6)).toEqual([2, 3]);
    expect(primeFactors(7)).toEqual([7]);
    expect(primeFactors(8)).toEqual([2, 2, 2]);
    expect(primeFactors(9)).toEqual([3, 3]);
    expect(primeFactors(10)).toEqual([2, 5]);
    expect(primeFactors(17)).toEqual([17]);
    expect(primeFactors(2*2*3*3*3*7*17)).toEqual([2, 2, 3, 3, 3, 7, 17]);
  });
});
