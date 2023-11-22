import { isPlatformBrowser } from '@angular/common';
import { Inject, inject, Injectable, PLATFORM_ID } from '@angular/core';
import * as jwt_decode from 'jwt-decode';
import type { JWT } from 'src/app/types/jwt';
import { LocalStorageService } from '../local-storage/local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class AuthStateService {
  private readonly _localStorage = inject(LocalStorageService);
  constructor(@Inject(PLATFORM_ID) private readonly _platformId: object) {}

  public set(data: { access_token: string; refresh_token: string }): void {
    if (isPlatformBrowser(this._platformId)) {
      this._localStorage.setAccessToken = data.access_token;
      this._localStorage.setRefreshToken = data.refresh_token;
    }
  }

  public get(): string | null {
    if (!isPlatformBrowser(this._platformId)) {
      return null;
    }
    return this._localStorage.getAccessToken;
  }

  public getRefreshToken(): string | null {
    if (!isPlatformBrowser(this._platformId)) {
      return null;
    }
    return this._localStorage.getRefreshToken;
  }

  public remove(): void {
    if (!isPlatformBrowser(this._platformId)) {
      return;
    }
    localStorage.removeItem('auth_token');
  }

  public getDecodedToken(): JWT | null {
    if (!isPlatformBrowser(this._platformId)) {
      return null;
    }
    const token = this.get();
    if (token !== null) {
      return jwt_decode.default(token);
    }

    return null;
  }

  public isTokenExpired(): boolean {
    if (!isPlatformBrowser(this._platformId)) {
      return true;
    }
    const decodedToken = this.getDecodedToken();
    if (decodedToken !== null) {
      return decodedToken.exp < Date.now() / 1000;
    }

    return true;
  }
}
