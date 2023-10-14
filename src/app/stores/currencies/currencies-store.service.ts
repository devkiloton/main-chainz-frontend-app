import { inject, Injectable } from '@angular/core';
import { CurrenciesService } from 'projects/central-hash-api-client/src/lib/entities/currencies/currencies.service';
import type { Currency } from 'projects/central-hash-api-client/src/lib/models/currencies/currency';
import type { Observable } from 'rxjs';
import { map, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CurrenciesStoreService {
  private readonly _currencies = inject(CurrenciesService);

  private readonly _currencies$ = new Subject<Array<Currency>>();
  public readonly currencies$ = this._currencies$.asObservable();

  public readonly currenciesBroadCast$ = this._currencies$;

  constructor() {
    this._currencies.boradCast(30000).subscribe(currencies => this._currencies$.next(currencies));
  }

  public get findAll(): Observable<Array<Currency>> {
    return this._currencies$.asObservable();
  }

  public findAllAsync(): Observable<Array<Currency>> {
    return this._currencies.findAll();
  }

  public findOne(id: string): Observable<Currency | null> {
    return this._currencies$.pipe(map(currencies => currencies.find(currency => currency.id === id) ?? null));
  }

  public findOneAsync(id: string): Observable<Currency | null> {
    return this._currencies.findOne(id);
  }
}
