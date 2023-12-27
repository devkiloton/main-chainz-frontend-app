import type { Environment } from './utils';
import { EnvConfig } from './utils';

export const environment: Environment = {
  configuration: EnvConfig.development,
  appHostUrl: 'http://localhost:4200',
  mainChainzApiUrl: 'http://localhost:3000',
};
