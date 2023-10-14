import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, from, switchMap, timer } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Currency } from '../../models/currencies/currency';

@Injectable({
  providedIn: 'root',
})
export class CurrenciesService {
  private readonly API = environment.centralHashApiUrl;
  private readonly _httpClient = inject(HttpClient);

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
  public boradCast(time = 10000): Observable<Array<Currency>> {
    return timer(0, time).pipe(
      switchMap(() => from(fetch(`${this.API}/currencies`)).pipe(switchMap(response => response.json()))),
    );
  }
}
