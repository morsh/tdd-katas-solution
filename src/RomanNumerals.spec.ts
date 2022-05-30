import { fromArabicToRoman } from './RomanNumerals';

describe('RomanNumerals', () => {
  it('should return the correct roman numeral', () => {
    expect(fromArabicToRoman(1)).toEqual('I');
    expect(fromArabicToRoman(2)).toEqual('II');
    expect(fromArabicToRoman(3)).toEqual('III');
    expect(fromArabicToRoman(4)).toEqual('IV');
    expect(fromArabicToRoman(5)).toEqual('V');
    expect(fromArabicToRoman(6)).toEqual('VI');
    expect(fromArabicToRoman(9)).toEqual('IX');
    expect(fromArabicToRoman(14)).toEqual('XIV');
    expect(fromArabicToRoman(71)).toEqual('LXXI');
    expect(fromArabicToRoman(38)).toEqual('XXXVIII');
    expect(fromArabicToRoman(949)).toEqual('CMXLIX');
  });
});

