import { Inject, Injectable, LOCALE_ID, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Article } from '../../models/articles/article';
import { Category } from '../../models/articles/enum/category';

@Injectable({
  providedIn: 'root',
})
export class ArticlesService {
  private readonly _httpClient = inject(HttpClient);
  private readonly API = environment.centralHashApiUrl;

  constructor(@Inject(LOCALE_ID) private readonly _locale: string) {}

  public findOne(id: string): Observable<Article> {
    return this._httpClient.get<Article>(`${this.API}/articles/${id}/${this._locale}`);
  }

  public findMostViewed(): Observable<Array<Article>> {
    return this._httpClient.get<Array<Article>>(`${this.API}/articles/trends/most-viewed/${this._locale}`);
  }

  public findByCategory(category: Category): Observable<Array<Article>> {
    return this._httpClient.get<Array<Article>>(`${this.API}/articles/category/${category}/${this._locale}`);
  }
}
