import type { Environment } from './utils';
import { EnvConfig } from './utils';

export const environment: Environment = {
  configuration: EnvConfig.development,
  bitcoinApiUrl: 'http://localhost:3333',
  appHostUrl: 'http://localhost:4200',
};
