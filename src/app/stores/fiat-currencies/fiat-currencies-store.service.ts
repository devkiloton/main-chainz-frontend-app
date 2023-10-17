import { inject, Injectable } from '@angular/core';
import { FiatCurrenciesService } from 'projects/central-hash-api-client/src/lib/entities/fiat-currencies/fiat-currencies.service';
import type { FiatCurrency } from 'projects/central-hash-api-client/src/lib/models/fiat-currencies/fiat-currency';
import { BehaviorSubject, map, type Observable } from 'rxjs';
import { supportedFiats } from 'src/app/constants/supported-fiats';
import type { GetOnlyOps } from '../models/get-only-ops';

@Injectable({
  providedIn: 'root',
})
export class FiatCurrenciesStoreService implements GetOnlyOps<FiatCurrency> {
  private readonly _currencies = inject(FiatCurrenciesService);

  // eslint-disable-next-line @typescript-eslint/naming-convention
  private readonly TIME_TO_BROADCAST_UPDATE = 30000;

  private readonly _state$ = new BehaviorSubject<Array<FiatCurrency>>([]);

  public readonly broadCast$ = this._state$;

  constructor() {
    this._currencies
      .broadCast(this.TIME_TO_BROADCAST_UPDATE)
      .pipe(
        map(value => {
          const mutatedValue = value.filter(currency => supportedFiats.includes(currency.id));
          return mutatedValue;
        }),
      )
      .subscribe(currencies => this._state$.next(currencies));
  }

  public get findAll(): Array<FiatCurrency> {
    return this._state$.value;
  }

  public get findAllAsync(): Observable<Array<FiatCurrency>> {
    return this._currencies.findAll().pipe(
      map(value => {
        const mutatedValue = value.filter(currency => supportedFiats.includes(currency.id));
        return mutatedValue;
      }),
    );
  }

  public findOne(id: string): FiatCurrency | null {
    return this._state$.value.find(fiat => fiat.id === id) ?? null;
  }

  public findOneAsync(id: string): Observable<FiatCurrency | null> {
    return this._currencies.findOne(id);
  }
}
