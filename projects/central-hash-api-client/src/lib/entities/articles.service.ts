import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from '../models/articles/article';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ArticlesService {
  private readonly _httpClient = inject(HttpClient);
  private readonly API = environment.centralHashApiUrl;

  public find(): Observable<Array<Article>> {
    return this._httpClient.get<Array<Article>>(`${this.API}/articles`);
  }

  public findOne(id: string): Observable<Article> {
    return this._httpClient.get<Article>(`${this.API}/articles/${id}`);
  }

  public findMostViewed(): Observable<Array<Article>> {
    return this._httpClient.get<Array<Article>>(`${this.API}/articles/most-viewed`);
  }
}
