import { Injectable } from '@angular/core';
import type { Currencies } from 'src/app/enums/currencies';
import { FiatCurrencies } from 'src/app/enums/fiat-currencies';
import { Locales } from 'src/app/enums/locales';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  public set setDefaultCurrency(currency: FiatCurrencies) {
    localStorage.setItem('currency', currency);
  }

  public get getDefaultCurrency(): FiatCurrencies {
    return (localStorage.getItem('currency') as FiatCurrencies | null) ?? FiatCurrencies.usd;
  }

  public set setDefaultLocale(locale: Locales) {
    localStorage.setItem('locale', locale);
  }

  public get getDefaultLocale(): Locales {
    return (localStorage.getItem('locale') as Locales | null) ?? Locales.en_us;
  }

  public set setFiatCurrenciesPriceUSD(data: {
    prices: Array<{ code: FiatCurrencies; priceUSD: number }>;
    date: Date;
  }) {
    localStorage.setItem('fiatCurrenciesPriceUSD', JSON.stringify(data));
  }

  public deleteAllFiatCurrenciesPriceUSD(): void {
    localStorage.removeItem('fiatCurrenciesPriceUSD');
  }

  public get getFiatCurrenciesPriceUSD(): { prices: Array<{ code: FiatCurrencies; priceUSD: number }>; date: Date } {
    const fiatCurrenciesPriceUSD = localStorage.getItem('fiatCurrenciesPriceUSD');
    if (fiatCurrenciesPriceUSD !== null) {
      return JSON.parse(fiatCurrenciesPriceUSD) as {
        prices: Array<{ code: FiatCurrencies; priceUSD: number }>;
        date: Date;
      };
    }

    // To implement http request to get all fiat currencies price in USD
    return {} as unknown as { prices: Array<{ code: FiatCurrencies; priceUSD: number }>; date: Date };
  }

  public set setCurrenciesPriceUSD(data: { prices: Array<{ code: Currencies; priceUSD: number }>; date: Date }) {
    localStorage.setItem('currenciesPriceUSD', JSON.stringify(data));
  }

  public deleteAllCurrenciesPriceUSD(): void {
    localStorage.removeItem('currenciesPriceUSD');
  }

  public get getCurrenciesPriceUSD(): { prices: Array<{ code: Currencies; priceUSD: number }>; date: Date } {
    const currenciesPriceUSD = localStorage.getItem('currenciesPriceUSD');
    if (currenciesPriceUSD !== null) {
      return JSON.parse(currenciesPriceUSD) as { prices: Array<{ code: Currencies; priceUSD: number }>; date: Date };
    }

    // To implement http request to get all fiat currencies price in USD
    return {} as unknown as { prices: Array<{ code: Currencies; priceUSD: number }>; date: Date };
  }

  public set setDefaultTheme(theme: 'dark-mode' | 'light-mode') {
    localStorage.setItem('theme', theme);
  }

  public get getDefaultTheme(): 'dark-mode' | 'light-mode' {
    return (localStorage.getItem('theme') as 'dark-mode' | 'light-mode' | null) ?? 'light-mode';
  }

  public set setAuthToken(value: string) {
    localStorage.setItem('auth_token', value);
  }

  public get getAuthToken(): string | null {
    return localStorage.getItem('auth_token');
  }

  public removeAuthToken(): void {
    localStorage.removeItem('auth_token');
  }
}
