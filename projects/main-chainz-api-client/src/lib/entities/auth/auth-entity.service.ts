import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { SignIn } from '../../models/auth/sign-in';
import { Auth } from '../../models/auth/auth';
import { SignUp } from '../../models/auth/sign-up';
import { Response } from '../../shared/response';

@Injectable({
  providedIn: 'root',
})
export class AuthEntity {
  private readonly API = environment.mainChainzApiUrl;
  private readonly _httpClient = inject(HttpClient);

  public signIn(data: SignIn): Observable<{ message: 'Confirmation email sent' }> {
    return this._httpClient.post<{ message: 'Confirmation email sent' }>(`${this.API}/auth/sign-in`, data);
  }

  public signUp(data: SignUp): Observable<{ message: 'Confirmation email sent' }> {
    return this._httpClient.post<{ message: 'Confirmation email sent' }>(`${this.API}/auth/sign-up`, data);
  }

  public signOut(): Observable<Response<{ message: string }>> {
    return this._httpClient.post<Response<{ message: string }>>(`${this.API}/auth/sign-out`, {});
  }

  public requestResetPassword(data: { email: string }): Observable<Response<{ message: string }>> {
    return this._httpClient.post<Response<{ message: string }>>(`${this.API}/auth/request-reset-password`, data);
  }

  public resetPassword(data: {
    email: string;
    code: string;
    password: string;
  }): Observable<Response<{ message: string }>> {
    return this._httpClient.patch<Response<{ message: string }>>(`${this.API}/auth/reset-password`, data);
  }

  public verifySignGeneral(data: { email: string; code: string }): Observable<Auth> {
    return this._httpClient.post<Auth>(`${this.API}/auth/verify-sign-general`, data);
  }

  public verifyResetPassword(data: { email: string; code: string }): Observable<Response<{ message: string }>> {
    return this._httpClient.post<Response<{ message: string }>>(`${this.API}/auth/verify-reset-password`, data);
  }

  public refresh(): Observable<Auth> {
    return this._httpClient.get<Auth>(`${this.API}/auth/refresh`);
  }
}
