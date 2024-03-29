import type { EnvConfig } from './env-config';

export type Environment = {
  configuration: EnvConfig;
  appHostUrl: string;
  mainChainzApiUrl: string;
};
