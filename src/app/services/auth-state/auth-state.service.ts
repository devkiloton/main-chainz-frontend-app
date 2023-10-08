import { inject, Injectable } from '@angular/core';
import * as jwt_decode from 'jwt-decode';
import type { JWT } from 'src/app/types/jwt';
import { LocalStorageService } from '../local-storage/local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class AuthStateService {
  private readonly _localStorage = inject(LocalStorageService);

  public set(value: string): void {
    this._localStorage.setAuthToken = value;
  }

  public get(): string | null {
    return this._localStorage.getAuthToken;
  }

  public remove(): void {
    localStorage.removeItem('auth_token');
  }

  public getDecodedToken(): JWT | null {
    const token = this.get();
    if (token !== null) {
      return jwt_decode.default(token);
    }

    return null;
  }

  public isTokenExpired(): boolean {
    const decodedToken = this.getDecodedToken();
    if (decodedToken !== null) {
      return decodedToken.exp < Date.now() / 1000;
    }

    return true;
  }
}
