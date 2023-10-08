import type { Environment } from './utils';
import { EnvConfig } from './utils';

export const environment: Environment = {
  configuration: EnvConfig.development,
  currenciesApiUrl: 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd.json',
  bitcoinApiUrl: 'http://localhost:3333',
  appHostUrl: 'http://localhost:4200',
  centralHashApiUrl: 'http://localhost:3000',
};
