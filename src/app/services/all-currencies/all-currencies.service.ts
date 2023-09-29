import { inject, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import type { Currencies } from 'src/app/enums/currencies';
import { FiatCurrencies } from 'src/app/enums/fiat-currencies';
import { LocalStorageService } from '../local-storage/local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class AllCurrenciesService {
  private readonly _localStorageService = inject(LocalStorageService);

  private readonly _fiatCurrenciesPriceUSD$ = new BehaviorSubject<{
    prices: Array<{ code: FiatCurrencies; priceUSD: number }>;
    date: Date;
  }>({ prices: [], date: new Date() });

  public fiatCurrenciesPriceUSD$ = this._fiatCurrenciesPriceUSD$.asObservable();

  private readonly _currenciesPriceUSD$ = new BehaviorSubject<{
    prices: Array<{ code: Currencies; priceUSD: number }>;
    date: Date;
  }>({ prices: [], date: new Date() });

  public currenciesPriceUSD$ = this._currenciesPriceUSD$.asObservable();

  private readonly _defaultCurrency$ = new BehaviorSubject<FiatCurrencies>(FiatCurrencies.usd);

  public defaultCurrency$ = this._defaultCurrency$.asObservable();

  public set setDefaultCurrency(currency: FiatCurrencies) {
    this._localStorageService.setDefaultCurrency = currency;
  }

  public get getDefaultCurrency(): FiatCurrencies {
    return this._localStorageService.getDefaultCurrency;
  }

  public set setFiatCurrenciesPriceUSD(data: {
    prices: Array<{ code: FiatCurrencies; priceUSD: number }>;
    date: Date;
  }) {
    this._fiatCurrenciesPriceUSD$.next(data);
    this._localStorageService.setFiatCurrenciesPriceUSD = data;
  }

  public deleteAllFiatCurrenciesPriceUSD(): void {
    this._localStorageService.deleteAllFiatCurrenciesPriceUSD();
  }

  public get getFiatCurrenciesPriceUSD(): { prices: Array<{ code: FiatCurrencies; priceUSD: number }>; date: Date } {
    const fiatCurrenciesPriceUSD = this._localStorageService.getFiatCurrenciesPriceUSD;
    return fiatCurrenciesPriceUSD;
  }

  public set setCurrenciesPriceUSD(data: { prices: Array<{ code: Currencies; priceUSD: number }>; date: Date }) {
    this._currenciesPriceUSD$.next(data);
    this._localStorageService.setCurrenciesPriceUSD = data;
  }

  public deleteAllCurrenciesPriceUSD(): void {
    this._localStorageService.deleteAllCurrenciesPriceUSD();
  }

  public get getCurrenciesPriceUSD(): { prices: Array<{ code: Currencies; priceUSD: number }>; date: Date } {
    const currenciesPriceUSD = this._localStorageService.getCurrenciesPriceUSD;
    return currenciesPriceUSD;
  }
}
