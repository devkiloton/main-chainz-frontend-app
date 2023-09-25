import { environment } from 'src/environments/environment';
import { Currencies } from '../enums/currencies';
import { FiatCurrencies } from '../enums/fiat-currencies';
import type { CurrenciesApiResponse } from '../types/currenciesApiResponse';

export const getAllCurrenciesPricesUSD = async (): Promise<{
  currencies: Array<{ code: Currencies; priceUSD: number }>;
  fiatCurrencies: Array<{
    code: FiatCurrencies;
    priceUSD: number;
  }>;
}> => {
  const response = await fetch(environment.currenciesApiUrl);
  const data = (await response.json()) as Promise<CurrenciesApiResponse>;
  const postData = await data;
  // #TODO refactor this later
  const fiatCurrenciesPriceUSD = Object.entries(postData.usd)
    .filter(
      value =>
        value[0] === FiatCurrencies.usd.toLowerCase() ||
        value[0] === FiatCurrencies.eur.toLowerCase() ||
        value[0] === FiatCurrencies.cny.toLowerCase() ||
        value[0] === FiatCurrencies.inr.toLowerCase() ||
        value[0] === FiatCurrencies.brl.toLowerCase() ||
        value[0] === FiatCurrencies.rub.toLowerCase() ||
        value[0] === FiatCurrencies.ngn.toLowerCase() ||
        value[0] === FiatCurrencies.uah.toLowerCase() ||
        value[0] === FiatCurrencies.vnd.toLowerCase(),
    )
    .map(value => {
      const obj = {
        code: value[0] as FiatCurrencies,
        priceUSD: Number(value[1]),
      };
      return obj;
    });
  const currenciesPrice = Object.entries(postData.usd)
    .filter(
      value =>
        value[0] === Currencies.btc.toLowerCase() ||
        value[0] === Currencies.eth.toLowerCase() ||
        value[0] === Currencies.xmr.toLowerCase(),
    )
    .map(value => {
      const obj = {
        code: value[0] as Currencies,
        priceUSD: Number(value[1]),
      };
      return obj;
    });
  return {
    currencies: currenciesPrice,
    fiatCurrencies: fiatCurrenciesPriceUSD,
  };
};
