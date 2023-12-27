import type { Environment } from './utils';
import { EnvConfig } from './utils';

export const environment: Environment = {
  configuration: EnvConfig.production,
  appHostUrl: 'https://mainchainz.com',
  mainChainzApiUrl: 'https://api.mainchainz.com',
};
