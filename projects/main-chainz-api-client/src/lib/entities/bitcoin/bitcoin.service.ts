import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PublicWallet } from '../../models/bitcoin/public-wallet';

@Injectable({
  providedIn: 'root',
})
export class BitcoinService {
  private readonly API = environment.mainChainzApiUrl;
  private readonly _httpClient = inject(HttpClient);

  public findInformation(): Observable<PublicWallet> {
    return this._httpClient.get<PublicWallet>(`${this.API}/bitcoin`);
  }

  public createTransaction(data: { satoshis: number; receiver: string }): Observable<string> {
    return this._httpClient.post<string>(`${this.API}/bitcoin/create-transaction`, data);
  }
}
