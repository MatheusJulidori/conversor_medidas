import type { Config } from 'jest';

const config: Config = {
  testEnvironment: 'node',
  transform: {
    '.+\\.ts$': 'ts-jest',
  },
  reporters: [
    'default',
    ['jest-junit', {
      suiteName: 'Jest Tests',
      outputDirectory: 'test-results',
      outputName: 'junit.xml',
    }]
  ]
};

export default config;
