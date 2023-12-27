import { Currencies } from '../enums/currencies';

export const getCurrencyNameFromId = (id: Currencies): string => {
  switch (id) {
    case Currencies.btc:
      return 'Bitcoin';
    case Currencies.xmr:
      return 'Monero';
    case Currencies.eth:
      return 'Ethereum';
    case Currencies.usdt:
      return 'Tether';
    default:
      return 'Unknown';
  }
};
