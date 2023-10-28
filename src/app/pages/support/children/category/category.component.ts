import { BreakpointObserver } from '@angular/cdk/layout';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import type { OnInit } from '@angular/core';
import { ChangeDetectionStrategy, Component, DestroyRef, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticlesService } from 'projects/central-hash-api-client/src/lib/entities/articles/articles.service';
import type { Article } from 'projects/central-hash-api-client/src/lib/models/articles/article';
import { BehaviorSubject, catchError, map, switchMap } from 'rxjs';
import { supportCategories } from 'src/app/constants/support/categories';
import { BreadcrumbComponent } from 'src/app/shared/breadcrumb/breadcrumb.component';
import { TableOfContentsComponent } from 'src/app/shared/table-of-contents/table-of-contents.component';
import { CardQuestionsComponent } from '../../components/card-questions/card-questions.component';

@Component({
  standalone: true,
  imports: [AsyncPipe, NgIf, NgFor, CardQuestionsComponent, TableOfContentsComponent, BreadcrumbComponent],
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class CategoryComponent implements OnInit {
  private readonly _routeSnapshot = inject(ActivatedRoute);
  private readonly _articlesService = inject(ArticlesService);
  private readonly _destroyRef = inject(DestroyRef);
  private readonly _articles$ = new BehaviorSubject<Array<Article>>([]);
  public readonly articles$ = this._articles$.asObservable();
  private readonly _router = inject(Router);
  private readonly _observer = inject(BreakpointObserver);
  public readonly isHandset$ = this._observer.observe('(min-width: 768px)').pipe(map(result => result.matches));

  public categories = supportCategories;

  public ngOnInit(): void {
    this._routeSnapshot.params
      .pipe(
        switchMap(param => {
          const { category } = param;
          const articles = this._articlesService.findByCategory(category);
          return articles;
        }),
        catchError(() => {
          this._router.navigate(['/not-found']);
          return [];
        }),
        takeUntilDestroyed(this._destroyRef),
      )
      .subscribe(articles => {
        this._articles$.next(articles);
      });
  }
}
