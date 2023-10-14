import { inject, Injectable } from '@angular/core';
import { CurrenciesService } from 'projects/central-hash-api-client/src/lib/entities/currencies/currencies.service';
import type { Currency } from 'projects/central-hash-api-client/src/lib/models/currencies/currency';
import type { Observable } from 'rxjs';
import { map, Subject } from 'rxjs';
import type { GetOnlyOps } from '../models/get-only-ops';

@Injectable({
  providedIn: 'root',
})
export class CurrenciesStoreService implements GetOnlyOps<Currency> {
  private readonly _currencies = inject(CurrenciesService);

  // eslint-disable-next-line @typescript-eslint/naming-convention
  private readonly TIME_TO_BROADCAST_UPDATE = 30000;

  private readonly _state$ = new Subject<Array<Currency>>();

  public readonly broadCast$ = this._state$;

  constructor() {
    this._currencies.broadCast(this.TIME_TO_BROADCAST_UPDATE).subscribe(currencies => this._state$.next(currencies));
  }

  public get findAll(): Observable<Array<Currency>> {
    return this._state$.asObservable();
  }

  public get findAllAsync(): Observable<Array<Currency>> {
    return this._currencies.findAll();
  }

  public findOne(id: string): Observable<Currency | null> {
    return this._state$.pipe(map(currencies => currencies.find(currency => currency.id === id) ?? null));
  }

  public findOneAsync(id: string): Observable<Currency | null> {
    return this._currencies.findOne(id);
  }
}
