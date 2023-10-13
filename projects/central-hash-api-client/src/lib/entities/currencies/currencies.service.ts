import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Currency } from '../../models/currencies/currency';
import { Response } from '../../shared/response';

@Injectable({
  providedIn: 'root',
})
export class CurrenciesService {
  private readonly API = environment.centralHashApiUrl;
  private readonly _httpClient = inject(HttpClient);

  public findAll(): Observable<Response<Array<Currency>>> {
    return this._httpClient.get<Response<Array<Currency>>>(`${this.API}/currencies`);
  }

  public findOne(id: string): Observable<Response<Currency>> {
    return this._httpClient.get<Response<Currency>>(`${this.API}/currencies/${id}`);
  }
}
