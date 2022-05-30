const RomanDictionary = [
  { number: 1, roman: 'I' },
  { number: 4, roman: 'IV' },
  { number: 5, roman: 'V' },
  { number: 9, roman: 'IX' },
  { number: 10, roman: 'X' },
  { number: 40, roman: 'XL' },
  { number: 50, roman: 'L' },
  { number: 90, roman: 'XC' },
  { number: 100, roman: 'C' },
  { number: 400, roman: 'CD' },
  { number: 500, roman: 'D' },
  { number: 900, roman: 'CM' },
  { number: 1000, roman: 'M' },
];

export function fromArabicToRoman(arabic: number): string {
  let result = '';
  for (let i = RomanDictionary.length - 1; i >= 0; i--) {
    while (RomanDictionary[i].number <= arabic) {
      result += RomanDictionary[i].roman;
      arabic -= RomanDictionary[i].number;
    }
  }
  return result;
}
