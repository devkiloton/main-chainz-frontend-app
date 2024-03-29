import type { Currency } from 'projects/main-chainz-api-client/src/lib/models/currencies/currency';
import type { FiatCurrency } from 'projects/main-chainz-api-client/src/lib/models/fiat-currencies/fiat-currency';

export const isFiatCurrency = (item: Currency | FiatCurrency): item is FiatCurrency => {
  return 'symbol' in item; // specific property of FiatCurrency
};
