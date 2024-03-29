import { Injectable, inject } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { User as UserModel } from '../../models/user/user';
import { Observable } from 'rxjs';
import { UpdateUser } from '../../models/user/update-user';
import { Response } from '../../shared/response';

@Injectable({
  providedIn: 'root',
})
export class UserEntity {
  private readonly API = environment.mainChainzApiUrl;
  private readonly _httpClient = inject(HttpClient);

  public find(): Observable<Response<UserModel>> {
    // Add the bearer token
    return this._httpClient.get<Response<UserModel>>(`${this.API}/user`);
  }
  public update(data: UpdateUser): Observable<Response<UserModel>> {
    return this._httpClient.patch<Response<UserModel>>(`${this.API}/user`, data);
  }
  public delete(): Observable<{ message: string }> {
    return this._httpClient.delete<{ message: string }>(`${this.API}/user`);
  }
}
