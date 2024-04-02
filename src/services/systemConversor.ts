/* eslint-disable camelcase */
import axios from 'axios';
import { SystemConversor } from './interfaces/systemConversorServices';

export class ConvertAPI implements SystemConversor {
  async convert(value: string, from: string, to: string): Promise<string> {
    try {
      const response = await axios({
        method: 'post',
        url: 'https://neutrinoapi.net/convert',
        headers: {
          'User-ID': 'matheusjulidori',
          'API-Key': 'fcOygYhtbRMahLrjF6sdyzKLEZR5qA7THbNRXYMmBxYawXJZ',
        },
        data: new URLSearchParams({
          'from-value': value,
          'from-type': from,
          'to-type': to,
        }).toString(),
      });
      const { valid } = response.data;
      const fromValue = response.data['from-value'];
      const fromName = response.data['from-name'];
      const resultFloat = response.data['result-float'];
      const toName = response.data['to-name'];
      if (!valid) {
        throw new Error('Invalid conversion');
      }
      const resultString = `${fromValue} ${fromName} is equal to ${resultFloat} ${toName}`;
      return resultString;
    } catch (error) {
      console.log(error)
      throw new Error('Unable to fetch convert');
    }
  }
}
