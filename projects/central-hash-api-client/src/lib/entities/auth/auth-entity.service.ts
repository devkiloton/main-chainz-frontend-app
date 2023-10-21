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
  private readonly API = environment.centralHashApiUrl;
  private readonly _httpClient = inject(HttpClient);

  public signIn(data: SignIn): Observable<Auth> {
    return this._httpClient.post<Auth>(`${this.API}/auth/sign-in`, data);
  }

  public signUp(data: SignUp): Observable<Auth> {
    return this._httpClient.post<Auth>(`${this.API}/auth/sign-up`, data);
  }

  public emitCode(data: { email: string }): Observable<Response<{ message: string }>> {
    return this._httpClient.post<Response<{ message: string }>>(`${this.API}/auth/emit-code`, data);
  }

  public resetPassword(data: {
    email: string;
    code: string;
    newPassword: string;
  }): Observable<Response<{ message: string }>> {
    return this._httpClient.patch<Response<{ message: string }>>(`${this.API}/auth/reset-password`, data);
  }
}
