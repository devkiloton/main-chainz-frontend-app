import { BreakpointObserver } from '@angular/cdk/layout';
import { AsyncPipe, DatePipe, NgIf } from '@angular/common';
import type { OnInit } from '@angular/core';
import { ChangeDetectionStrategy, Component, DestroyRef, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { ActivatedRoute, Router } from '@angular/router';
import type { Article } from 'projects/central-hash-api-client/src/lib/models/articles/article';
import { ArticlesService } from 'projects/central-hash-api-client/src/public-api';
import type { Observable } from 'rxjs';
import { BehaviorSubject, catchError, map, switchMap } from 'rxjs';
import { TableOfContentsComponent } from 'src/app/shared/table-of-contents/table-of-contents.component';
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
  ],
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ArticleComponent implements OnInit {
  private readonly _routeSnapshot = inject(ActivatedRoute);
  private readonly _articlesService = inject(ArticlesService);
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
          const { article } = param;
          const articles = this._articlesService.findOne(article);
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

  public get otherArticles$(): Observable<Array<Article>> {
    return this._articlesService.findBySector(this._article$.value.sector);
  }
}
