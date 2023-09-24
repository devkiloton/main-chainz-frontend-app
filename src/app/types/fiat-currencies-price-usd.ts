import type { FiatCurrencies } from '../enums/fiat-currencies';

export type FiatCurrenciesPriceUsd = {
  priceUSD: number;
  code: FiatCurrencies;
};
