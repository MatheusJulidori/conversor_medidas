/* eslint-disable camelcase */
import { SystemConversor } from '../interfaces/systemConversorServices';

const result = [
  {
    valid: true,
    'from-value': '20',
    'from-type': 'Celsius',
    'to-type': 'Fahrenheit',
    'result-float': '68',
    'to-name': 'Fahrenheit',
    'from-name': 'Celsius',
  },
];

export class ConvertAPI implements SystemConversor {
  async convert(value: string, from: string, to: string): Promise<string> {
    try {
      const response = result.find(
        (element) =>
          element['from-type'] === from &&
          element['to-type'] === to &&
          element['from-value'] === value,
      );
      if (!response) {
        throw new Error('Invalid conversion');
      }
      const { valid } = response;
      const fromValue = response['from-value'];
      const fromName = response['from-name'];
      const resultFloat = response['result-float'];
      const toName = response['to-name'];
      if (!valid) {
        throw new Error('Invalid conversion');
      }
      const resultString = `${fromValue} ${fromName} is equal to ${resultFloat} ${toName}`;
      return resultString;
    } catch (error) {
      throw new Error('Unable to fetch convert');
    }
  }
}
