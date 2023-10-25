import { AsyncPipe, NgIf } from '@angular/common';
import type { OnInit } from '@angular/core';
import { ChangeDetectionStrategy, Component, inject, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MarkdownModule } from 'ngx-markdown';
import type { Article } from 'projects/central-hash-api-client/src/lib/models/articles/article';
import { ArticlesService } from 'projects/central-hash-api-client/src/public-api';
import { BehaviorSubject, firstValueFrom } from 'rxjs';

@Component({
  standalone: true,
  imports: [MarkdownModule, AsyncPipe, NgIf],
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.ShadowDom,
})
export default class ArticleComponent implements OnInit {
  private readonly _routeSnapshot = inject(ActivatedRoute);
  private readonly _articlesService = inject(ArticlesService);
  private readonly _articles$ = new BehaviorSubject<Article>(new Object() as Article);
  public readonly articles$ = this._articles$.asObservable();

  public async ngOnInit(): Promise<void> {
    const params = (await firstValueFrom(this._routeSnapshot.params)) as { category: string; article: string };
    const article = await firstValueFrom(this._articlesService.findOne(params.article));
    this._articles$.next(article);
  }
}
