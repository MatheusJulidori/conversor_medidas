import * as readline from 'readline';
import { ConvertAPI } from './services/systemConversor';
import { SystemConversor } from './services/interfaces/systemConversorServices';

class SystemConversorApp {
  private converter: SystemConversor;
  private rl: readline.Interface;

  constructor(converter: SystemConversor) {
    this.converter = converter;
    this.rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
  }

  async start() {
    try {
      console.log('Conversor de unidades de medida');
      this.rl.question(
        '\n1 - Converter de imperial para SI \n 2 - Converter de SI para imperial \n 3 - Sair \n',
        async option => {
          switch (option) {
            case '1':
              this.convertToSI();
              break;
            case '2':
              this.convertToImperial();
              break;
            case '3':
              this.rl.close();
              break;
            default:
              console.log('Opção inválida');
              this.start();
              break;
          }
        },
      );
    } catch (error) {
      console.error(error);
    }
  }

  // --------------- Imperial para SI ---------------- //
  async convertToSI() {
    try {
      this.rl.question(
        '\n1 - Temperatura \n 2 - Comprimento \n 3 - Peso \n 4 - Volume \n 5 - Sair \n Selecione a grandeza:  ',
        async option => {
          switch (option) {
            case '1':
              this.convertTemperatureToSI();
              break;
            case '2':
              this.convertLengthToSI();
              break;
            case '3':
              this.convertWeightToSI();
              break;
            case '4':
              this.convertVolumeToSI();
              break;
            case '5':
              this.start();
              break;
            default:
              console.log('Opção inválida');
              this.convertToSI();
              break;
          }
        },
      );
    } catch (error) {
      console.error(error);
    }
  }

  async convertTemperatureToSI() {
    try {
      this.rl.question('\nDigite a temperatura em Fahrenheit: ', async value => {
        try {
          const result = await this.converter.convert(
            value,
            'Fahrenheit',
            'Celsius',
          );
          console.log(result);
          this.convertToSI();
        } catch (error) {
          console.error(error);
          this.convertTemperatureToSI();
        }
      });
    } catch (error) {
      console.error(error);
    }
  }

  async convertLengthToSI() {
    try {
      this.rl.question(
        '\n1 - Polegadas(in) \n 2 - Pés(ft) \n 3 - Jardas(yd) \n 4 - Milhas(mi) \n 5 - Sair \n Selecione a medida de comprimento: ',
        async medida => {
          switch (medida) {
            case '1':
              this.rl.question(
                'Digite o valor em polegadas: ',
                async value => {
                  try {
                    const result = await this.converter.convert(
                      value,
                      'Inch',
                      'Meter',
                    );
                    console.log(result);
                    this.convertToSI();
                  } catch (error) {
                    console.error(error);
                    this.convertLengthToSI();
                  }
                },
              );
              break;
            case '2':
              this.rl.question('\nDigite o valor em pés: ', async value => {
                try {
                  const result = await this.converter.convert(
                    value,
                    'Feet',
                    'Meter',
                  );
                  console.log(result);
                  this.convertToSI();
                } catch (error) {
                  console.error(error);
                  this.convertLengthToSI();
                }
              });
              break;
            case '3':
              this.rl.question('\nDigite o valor em jardas: ', async value => {
                try {
                  const result = await this.converter.convert(
                    value,
                    'Yard',
                    'Meter',
                  );
                  console.log(result);
                  this.convertToSI();
                } catch (error) {
                  console.error(error);
                  this.convertLengthToSI();
                }
              });
              break;
            case '4':
              this.rl.question('\nDigite o valor em milhas: ', async value => {
                try {
                  const result = await this.converter.convert(
                    value,
                    'Mile',
                    'Km',
                  );
                  console.log(result);
                  this.convertToSI();
                } catch (error) {
                  console.error(error);
                  this.convertLengthToSI();
                }
              });
              break;
            case '5':
              this.start();
              break;
            default:
              console.log('Opção inválida');
              this.convertLengthToSI();
              break;
          }
        },
      );
    } catch (error) {
      console.error(error);
    }
  }

  async convertWeightToSI() {
    try {
      this.rl.question(
        '\n1 - Libras(lb) \n 2 - Onças(oz) \n 3 - Sair \n Selecione a medida de peso: ',
        async medida => {
          switch (medida) {
            case '1':
              this.rl.question('\nDigite o valor em libras: ', async value => {
                try {
                  const result = await this.converter.convert(value, 'Pound', 'Gram');
                  console.log(result);
                  this.convertToSI();
                } catch (error) {
                  console.error(error);
                  this.convertWeightToSI();
                }
              });
              break;
            case '2':
              this.rl.question('\nDigite o valor em onças: ', async value => {
                try {
                  const result = await this.converter.convert(value, 'Ounce', 'Gram');
                  console.log(result);
                  this.convertToSI();
                } catch (error) {
                  console.error(error);
                  this.convertWeightToSI();
                }
              });
              break;
            case '3':
              this.start();
              break;
            default:
              console.log('Opção inválida');
              this.convertWeightToSI();
              break;
          }
        },
      );
    } catch (error) {
      console.error(error);
    }
  }

  async convertVolumeToSI() {
    try {
      this.rl.question('\nDigite o volume em galões: ', async value => {
        try {
          const result = await this.converter.convert(value, 'Gallon', 'Liter');
          console.log(result);
          this.convertToSI();
        } catch (error) {
          console.error(error);
          this.convertVolumeToSI();
        }
      });
    } catch (error) {
      console.error(error);
    }
  }

  // --------------- SI para Imperial ---------------- //
  async convertToImperial() {
    try {
      this.rl.question(
        '\n1 - Temperatura \n 2 - Comprimento \n 3 - Peso \n 4 - Volume \n 5 - Sair \n Selecione a grandeza: ',
        async option => {
          switch (option) {
            case '1':
              this.convertTemperatureToImperial();
              break;
            case '2':
              this.convertLengthToImperial();
              break;
            case '3':
              this.convertWeightToImperial();
              break;
            case '4':
              this.convertVolumeToImperial();
              break;
            case '5':
              this.start();
              break;
            default:
              console.log('Opção inválida');
              this.convertToSI();
              break;
          }
        },
      );
    } catch (error) {
      console.error(error);
    }
  }

  async convertTemperatureToImperial() {
    try {
      this.rl.question('\nDigite a temperatura em Celsius: ', async value => {
        try {
          const result = await this.converter.convert(
            value,
            'Celsius',
            'Fahrenheit',
          );
          console.log(result);
          this.convertToImperial();
        } catch (error) {
          console.error(error);
          this.convertTemperatureToImperial();
        }
      });
    } catch (error) {
      console.error(error);
    }
  }

  async convertLengthToImperial() {
    try {
      this.rl.question(
        '\n1 - Polegadas(in) \n 2 - Pés(ft) \n 3 - Jardas(yd) \n 4 - Milhas(mi) \n 5 - Sair \n Selecione a medida de comprimento resultante: ',
        async medida => {
          switch (medida) {
            case '1':
              this.rl.question(
                'Digite o valor em metros: ',
                async value => {
                  try {
                    const result = await this.converter.convert(
                      value,
                      'Meter',
                      'Inch',
                    );
                    console.log(result);
                    this.convertToImperial();
                  } catch (error) {
                    console.error(error);
                    this.convertLengthToImperial();
                  }
                },
              );
              break;
            case '2':
              this.rl.question('\nDigite o valor em metros: ', async value => {
                try {
                  const result = await this.converter.convert(
                    value,
                    'Meter',
                    'Feet',
                  );
                  console.log(result);
                  this.convertToImperial();
                } catch (error) {
                  console.error(error);
                  this.convertLengthToImperial();
                }
              });
              break;
            case '3':
              this.rl.question('\nDigite o valor em metros: ', async value => {
                try {
                  const result = await this.converter.convert(
                    value,
                    'Meter',
                    'Yard',
                  );
                  console.log(result);
                  this.convertToImperial();
                } catch (error) {
                  console.error(error);
                  this.convertLengthToImperial();
                }
              });
              break;
            case '4':
              this.rl.question('\nDigite o valor em metros: ', async value => {
                try {
                  const result = await this.converter.convert(
                    value,
                    'Km',
                    'Mile',
                  );
                  console.log(result);
                  this.convertToImperial();
                } catch (error) {
                  console.error(error);
                  this.convertLengthToImperial();
                }
              });
              break;
            case '5':
              this.start();
              break;
            default:
              console.log('Opção inválida');
              this.convertLengthToImperial();
              break;
          }
        },
      );
    } catch (error) {
      console.error(error);
    }
  }

  async convertWeightToImperial() {
    try {
      this.rl.question(
        '\n1 - Libras(lb) \n 2 - Onças(oz) \n 3 - Sair \n Selecione a medida resultante de peso: ',
        async medida => {
          switch (medida) {
            case '1':
              this.rl.question('\nDigite o valor em gramas: ', async value => {
                try {
                  const result = await this.converter.convert(value, 'Gram', 'Pound');
                  console.log(result);
                  this.convertToImperial();
                } catch (error) {
                  console.error(error);
                  this.convertWeightToImperial();
                }
              });
              break;
            case '2':
              this.rl.question('\nDigite o valor em gramas: ', async value => {
                try {
                  const result = await this.converter.convert(value, 'Gram', 'Ounce');
                  console.log(result);
                  this.convertToImperial();
                } catch (error) {
                  console.error(error);
                  this.convertWeightToImperial();
                }
              });
              break;
            case '3':
              this.start();
              break;
            default:
              console.log('Opção inválida');
              this.convertWeightToImperial();
              break;
          }
        },
      );
    } catch (error) {
      console.error(error);
    }
  }

  async convertVolumeToImperial() {
    try {
      this.rl.question('\nDigite o volume em litros: ', async value => {
        try {
          const result = await this.converter.convert(value, 'Liter', 'Gallon');
          console.log(result);
          this.convertToImperial();
        } catch (error) {
          console.error(error);
          this.convertVolumeToImperial();
        }
      });
    } catch (error) {
      console.error(error);
    }
  }
}

const app = new SystemConversorApp(new ConvertAPI());
app.start();
