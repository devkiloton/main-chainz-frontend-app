import { AsyncPipe, NgFor } from '@angular/common';
import type { OnInit } from '@angular/core';
import { ChangeDetectionStrategy, Component, DestroyRef, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router } from '@angular/router';
import type { Article } from 'projects/central-hash-api-client/src/lib/models/articles/article';
import { ArticlesService } from 'projects/central-hash-api-client/src/public-api';
import { BehaviorSubject, catchError, switchMap } from 'rxjs';
import { supportCategories } from 'src/app/constants/support/categories';
import { TableOfContentsComponent } from 'src/app/shared/table-of-contents/table-of-contents.component';
import { CardQuestionsComponent } from '../../components/card-questions/card-questions.component';

@Component({
  standalone: true,
  imports: [AsyncPipe, NgFor, CardQuestionsComponent, TableOfContentsComponent],
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
