import { BreakpointObserver } from '@angular/cdk/layout';
import { AsyncPipe, DatePipe, NgIf } from '@angular/common';
import type { OnInit } from '@angular/core';
import { ChangeDetectionStrategy, Component, DestroyRef, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { ActivatedRoute, Router } from '@angular/router';
import { isNil } from 'lodash-es';
import type { Article } from 'projects/central-hash-api-client/src/lib/models/articles/article';
import type { Observable } from 'rxjs';
import { BehaviorSubject, catchError, map, of, switchMap } from 'rxjs';
import { BreadcrumbComponent } from 'src/app/shared/breadcrumb/breadcrumb.component';
import { TableOfContentsComponent } from 'src/app/shared/table-of-contents/table-of-contents.component';
import { ArticlesStoreService } from 'src/app/stores/articles/articles-store.service';
import { MarkdownConverterComponent } from '../../components/markdown-converter/markdown-converter.component';

@Component({
  standalone: true,
  imports: [
    AsyncPipe,
    NgIf,
    DatePipe,
    TableOfContentsComponent,
    MarkdownConverterComponent,
    MatDividerModule,
    MatIconModule,
    MatButtonModule,
    BreadcrumbComponent,
  ],
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ArticleComponent implements OnInit {
  private readonly _routeSnapshot = inject(ActivatedRoute);
  private readonly _articlesStoreService = inject(ArticlesStoreService);
  private readonly _router = inject(Router);
  private readonly _destroyRef = inject(DestroyRef);
  private readonly _article$ = new BehaviorSubject<Article>(new Object() as Article);
  public readonly articles$ = this._article$.asObservable();
  private readonly _observer = inject(BreakpointObserver);
  public readonly isHandset$ = this._observer.observe('(min-width: 768px)').pipe(map(result => result.matches));

  public async ngOnInit(): Promise<void> {
    this._routeSnapshot.params
      .pipe(
        switchMap(param => {
          const { article, category } = param;
          this._articlesStoreService.load(category);
          const articles = this._articlesStoreService.findOne(article);
          return articles;
        }),
        catchError(() => {
          this._router.navigate(['/not-found']);
          return [];
        }),
        takeUntilDestroyed(this._destroyRef),
      )
      .subscribe(articles => {
        this._article$.next(articles);
      });
  }

  public get otherArticles$(): Observable<Array<Article> | null> {
    const { category } = this._article$.value;

    if (isNil(category)) {
      return of(null);
    }
    return this._articlesStoreService.findByCategory(category);
  }
}
