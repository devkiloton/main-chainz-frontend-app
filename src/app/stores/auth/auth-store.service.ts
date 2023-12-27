import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthStoreService {
  public readonly isAuthenticated = signal(false);
}
