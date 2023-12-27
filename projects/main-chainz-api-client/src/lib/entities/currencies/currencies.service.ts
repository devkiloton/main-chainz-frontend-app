import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, PLATFORM_ID, inject } from '@angular/core';
import { Observable, switchMap, timer } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Currency } from '../../models/currencies/currency';
import { isPlatformBrowser } from '@angular/common';
import { FearAndGreed } from '../../models/currencies/fear-and-greed';

@Injectable({
  providedIn: 'root',
})
export class CurrenciesService {
  private readonly API = environment.mainChainzApiUrl;
  private readonly _httpClient = inject(HttpClient);

  constructor(@Inject(PLATFORM_ID) private readonly _platformId: Object) {} // eslint-disable-line @typescript-eslint/naming-convention

  public findAll(): Observable<Array<Currency>> {
    return this._httpClient.get<Array<Currency>>(`${this.API}/currencies`);
  }

  public findOne(id: string): Observable<Currency> {
    return this._httpClient.get<Currency>(`${this.API}/currencies/${id}`);
  }

  /**
   * BroadCast methods SHOULD NOT be used in components, only stores
   *
   * REASON: seriously danger of memory leaks
   */
  public broadCast(time = 10000): Observable<Array<Currency>> {
    if (isPlatformBrowser(this._platformId)) {
      return timer(0, time).pipe(switchMap(() => fetch(this.API + '/currencies').then(value => value.json())));
    }
    return this.findAll();
  }

  public fearAndGreedIndex(): Observable<FearAndGreed> {
    return this._httpClient.get<FearAndGreed>('https://api.coin-stats.com/v2/fear-greed');
  }
}
