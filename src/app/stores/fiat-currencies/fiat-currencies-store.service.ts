import { isPlatformBrowser } from '@angular/common';
import { Inject, inject, Injectable, PLATFORM_ID } from '@angular/core';
import { FiatCurrenciesService } from 'projects/central-hash-api-client/src/lib/entities/fiat-currencies/fiat-currencies.service';
import type { FiatCurrency } from 'projects/central-hash-api-client/src/lib/models/fiat-currencies/fiat-currency';
import { map, type Observable, Subject } from 'rxjs';
import type { GetOnlyOps } from '../models/get-only-ops';

@Injectable({
  providedIn: 'root',
})
export class FiatCurrenciesStoreService implements GetOnlyOps<FiatCurrency> {
  private readonly _currencies = inject(FiatCurrenciesService);

  // eslint-disable-next-line @typescript-eslint/naming-convention
  private readonly TIME_TO_BROADCAST_UPDATE = 30000;

  private readonly _state$ = new Subject<Array<FiatCurrency>>();

  public readonly broadCast$ = this._state$;

  constructor(@Inject(PLATFORM_ID) private readonly _platformId: object) {
    if (isPlatformBrowser(this._platformId)) {
      this._currencies.broadCast(this.TIME_TO_BROADCAST_UPDATE).subscribe(currencies => this._state$.next(currencies));
    }
  }

  public get findAll(): Observable<Array<FiatCurrency>> {
    return this._state$.asObservable();
  }

  public get findAllAsync(): Observable<Array<FiatCurrency>> {
    return this._currencies.findAll();
  }

  public findOne(id: string): Observable<FiatCurrency | null> {
    return this._state$.pipe(map(currencies => currencies.find(currency => currency.id === id) ?? null));
  }

  public findOneAsync(id: string): Observable<FiatCurrency | null> {
    return this._currencies.findOne(id);
  }
}
