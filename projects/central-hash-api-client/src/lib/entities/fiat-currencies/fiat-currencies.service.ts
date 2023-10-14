import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, PLATFORM_ID, inject } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable, switchMap, timer } from 'rxjs';
import { FiatCurrency } from '../../models/fiat-currencies/fiat-currency';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class FiatCurrenciesService {
  private readonly API = environment.centralHashApiUrl;
  private readonly _httpClient = inject(HttpClient);

  constructor(@Inject(PLATFORM_ID) private readonly _platformId: Object) {} // eslint-disable-line @typescript-eslint/naming-convention

  public findAll(): Observable<Array<FiatCurrency>> {
    return this._httpClient.get<Array<FiatCurrency>>(`${this.API}/fiat-currencies`);
  }

  public findOne(id: string): Observable<FiatCurrency> {
    return this._httpClient.get<FiatCurrency>(`${this.API}/fiat-currencies/${id}`);
  }

  /**
   * BroadCast methods SHOULD NOT be used in components, only stores
   *
   * REASON: seriously danger of memory leaks
   */
  public broadCast(time = 10000): Observable<Array<FiatCurrency>> {
    if (isPlatformBrowser(this._platformId)) {
      return timer(0, time).pipe(switchMap(() => fetch(this.API + '/fiat-currencies').then(value => value.json())));
    }
    return this.findAll();
  }
}
