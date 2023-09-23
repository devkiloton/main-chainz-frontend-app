import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import type { Observable } from 'rxjs';
import type { BitcoinWallet } from 'src/app/types/bitcoin-walet';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BitcoinApiClientService {
  private readonly _httpClient = inject(HttpClient);

  public wallets = {
    getOneWallet: (data: { id: string }): Observable<BitcoinWallet> => {
      return this._httpClient.get<BitcoinWallet>(`${environment.bitcoinApiUrl}/wallets/${data.id}`);
    }
  }
}
