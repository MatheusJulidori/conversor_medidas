import { ConvertAPI } from './systemConversorMock';

describe('ConvertAPI', () => {
  it('should convert Celsius to Fahrentheit correctly', async () => {
    const converter = new ConvertAPI();
    const amount = '20';
    const from = 'Celsius';
    const to = 'Fahrenheit';
    const result = await converter.convert(amount, from, to);
    console.log(result)
    expect(result).toBe('20 Celsius is equal to 68 Fahrenheit')
  });

  it('should throw an error for invalid conversion', async () => {
    const converter = new ConvertAPI();
    const amount = '10';
    const from = 'Celcius';
    const to = 'INVALID';
    await expect(converter.convert(amount, from, to)).rejects.toThrow('Unable to fetch convert');
  });
});
