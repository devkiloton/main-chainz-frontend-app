import { inject, Injectable } from '@angular/core';
import type { FiatCurrency } from 'projects/central-hash-api-client/src/lib/models/fiat-currencies/fiat-currency';
import { BehaviorSubject } from 'rxjs';
import type { Currencies } from 'src/app/enums/currencies';
import { FiatCurrencies } from 'src/app/enums/fiat-currencies';
import { LocalStorageService } from '../local-storage/local-storage.service';
import { supportedFiats } from 'src/app/constants/supported-fiats';
import { isNotNil } from 'ramda';

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

  public set setDefaultCurrency(currency: FiatCurrency) {
    const currencyCode = supportedFiats.find(fiat => fiat === currency.id);
    if (isNotNil(currencyCode)) {
      this._localStorageService.setDefaultCurrency = currency.id as FiatCurrencies;
    }
  }

  public get getDefaultCurrency(): FiatCurrencies {
    return this._localStorageService.getDefaultCurrency;
  }
}
