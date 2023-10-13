import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Response } from '../../shared/response';
import { Observable } from 'rxjs';
import { FiatCurrency } from '../../models/fiat-currencies/fiat-currency';

@Injectable({
  providedIn: 'root',
})
export class FiatCurrenciesService {
  private readonly API = environment.centralHashApiUrl;
  private readonly _httpClient = inject(HttpClient);

  public findAll(): Observable<Response<Array<FiatCurrency>>> {
    return this._httpClient.get<Response<Array<FiatCurrency>>>(`${this.API}/fiat-currencies`);
  }

  public findOne(id: string): Observable<Response<FiatCurrency>> {
    return this._httpClient.get<Response<FiatCurrency>>(`${this.API}/fiat-currencies/${id}`);
  }
}
