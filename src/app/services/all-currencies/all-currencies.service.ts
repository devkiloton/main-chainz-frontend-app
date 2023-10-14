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
}
