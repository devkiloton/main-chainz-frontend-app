import { Injectable, inject } from '@angular/core';
import { CreateUser } from '../../models/user/create-user';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { User as UserModel } from '../../models/user/user';
import { Observable } from 'rxjs';
import { UpdateUser } from '../../models/user/update-user';
import { UpdateUserPassword } from '../../models/user/update-user-password';
import { Response } from '../../shared/response';

@Injectable({
  providedIn: 'root',
})
export class UserEntity {
  private readonly API = environment.centralHashApiUrl;
  private readonly _httpClient = inject(HttpClient);

  public create(data: CreateUser): Observable<Response<UserModel & { access_token: string }>> {
    return this._httpClient.post<Response<UserModel & { access_token: string }>>(`${this.API}/user`, data);
  }
  public find(): Observable<Response<UserModel>> {
    // Add the bearer token
    return this._httpClient.get<Response<UserModel>>(`${this.API}/user/me`);
  }
  public update(data: UpdateUser): Observable<Response<UserModel>> {
    return this._httpClient.patch<Response<UserModel>>(`${this.API}/user`, data);
  }
  public updatePassword(data: UpdateUserPassword): Observable<{ message: string }> {
    return this._httpClient.patch<Response<{ message: string }>>(`${this.API}/user/update-password`, data);
  }
  public delete(): Observable<{ message: string }> {
    return this._httpClient.delete<{ message: string }>(`${this.API}/user`);
  }
}
