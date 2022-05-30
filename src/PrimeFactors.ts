export function primeFactors(num: number): any {
  const factors = [];
  for (let candidate = 2; num > 1; candidate++) {
    while (num % candidate === 0) {
      factors.push(candidate);
      num /= candidate;
    }
  }
  return factors;
}
