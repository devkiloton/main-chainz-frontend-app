import { AsyncPipe, NgFor } from '@angular/common';
import type { OnInit } from '@angular/core';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import type { Article } from 'projects/central-hash-api-client/src/lib/models/articles/article';
import { ArticlesService } from 'projects/central-hash-api-client/src/public-api';
import { BehaviorSubject, firstValueFrom } from 'rxjs';

@Component({
  standalone: true,
  imports: [AsyncPipe, NgFor, RouterModule],
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class CategoryComponent implements OnInit {
  private readonly _routeSnapshot = inject(ActivatedRoute);
  private readonly _articlesService = inject(ArticlesService);
  private readonly _articles$ = new BehaviorSubject<Array<Article>>([]);
  public readonly articles$ = this._articles$.asObservable();

  public async ngOnInit(): Promise<void> {
    const param = (await firstValueFrom(this._routeSnapshot.params)) as { category: string };
    const articles = await firstValueFrom(this._articlesService.findCategory(param.category));
    this._articles$.next(articles);
  }
}
