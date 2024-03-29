import type { Currency } from 'projects/main-chainz-api-client/src/lib/models/currencies/currency';
import type { FiatCurrency } from 'projects/main-chainz-api-client/src/lib/models/fiat-currencies/fiat-currency';

export const isCurrency = (item: Currency | FiatCurrency): item is Currency => {
  return 'name' in item; // specific property of Currency
};
