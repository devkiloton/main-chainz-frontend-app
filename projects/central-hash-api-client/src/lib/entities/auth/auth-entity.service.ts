import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Auth as AuthModel } from '../../models/auth/auth';
import { Observable } from 'rxjs';
import { Response } from '../../shared/response';

@Injectable({
  providedIn: 'root',
})
export class AuthEntity {
  private readonly API = environment.centralHashApiUrl;
  private readonly _httpClient = inject(HttpClient);

  public signin(data: AuthModel): Observable<Response<object>> {
    return this._httpClient.post<Response<object>>(`${this.API}/auth/sign-in`, data);
  }
}
