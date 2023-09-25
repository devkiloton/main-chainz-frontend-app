import type { EnvConfig } from './env-config';

export type Environment = {
  configuration: EnvConfig;
  currenciesApiUrl: string;
  bitcoinApiUrl: string;
  appHostUrl: string;
};
