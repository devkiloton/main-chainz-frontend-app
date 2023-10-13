import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { FiatCurrency } from '../../models/fiat-currencies/fiat-currency';

@Injectable({
  providedIn: 'root',
})
export class FiatCurrenciesService {
  private readonly API = environment.centralHashApiUrl;
  private readonly _httpClient = inject(HttpClient);

  public findAll(): Observable<Array<FiatCurrency>> {
    return this._httpClient.get<Array<FiatCurrency>>(`${this.API}/fiat-currencies`);
  }

  public findOne(id: string): Observable<FiatCurrency> {
    return this._httpClient.get<FiatCurrency>(`${this.API}/fiat-currencies/${id}`);
  }
}
