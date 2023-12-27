import { inject, Injectable } from '@angular/core';
import { isNil } from 'lodash-es';
import type { Article } from 'projects/main-chainz-api-client/src/lib/models/articles/article';
import type { Category } from 'projects/main-chainz-api-client/src/lib/models/articles/enum/category';
import { ArticlesService } from 'projects/main-chainz-api-client/src/public-api';
import type { Observable } from 'rxjs';
import { BehaviorSubject, firstValueFrom, of } from 'rxjs';

export type ArticleStoreState = Array<Article>;

@Injectable({
  providedIn: 'root',
})
export class ArticlesStoreService {
  private readonly _articlesService = inject(ArticlesService);
  private readonly _state$ = new BehaviorSubject<ArticleStoreState>([]);

  public async load(category: Category): Promise<void> {
    const state = this._state$.getValue();
    if (state.find(item => item.category === category)) {
      return;
    }
    const articles = await firstValueFrom(this._articlesService.findByCategory(category));
    state.push(...articles);
    this._state$.next(state);
  }

  public findOne(id: string): Observable<Article> {
    const article = this._state$.getValue().find(item => item.id === id);
    if (!this._state$.getValue().length || isNil(article)) {
      return this._articlesService.findOne(id);
    }
    return of(article);
  }

  public findMostViewed(): Observable<Array<Article>> {
    const state = this._state$.getValue();
    if (!state.length) {
      return this._articlesService.findMostViewed();
    }
    return of(
      state
        .map(item => item)
        .sort((last, current) => current.views - last.views)
        .slice(0, 10),
    );
  }

  public findByCategory(category: Category): Observable<Array<Article>> {
    const state = this._state$.getValue();
    const articles = state.filter(item => item.category === category);
    if (articles.length < 10) {
      return this._articlesService.findByCategory(category);
    }
    return of(articles);
  }
}
