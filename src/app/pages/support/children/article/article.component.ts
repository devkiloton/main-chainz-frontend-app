import { AsyncPipe, DatePipe, NgIf } from '@angular/common';
import type { OnInit } from '@angular/core';
import { ChangeDetectionStrategy, Component, inject, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MarkdownModule } from 'ngx-markdown';
import type { Article } from 'projects/central-hash-api-client/src/lib/models/articles/article';
import { ArticlesService } from 'projects/central-hash-api-client/src/public-api';
import { BehaviorSubject, Observable, firstValueFrom } from 'rxjs';
import { TableOfContentsComponent } from 'src/app/shared/table-of-contents/table-of-contents.component';

@Component({
  standalone: true,
  imports: [MarkdownModule, AsyncPipe, NgIf, DatePipe, TableOfContentsComponent],
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.ShadowDom,
})
export default class ArticleComponent implements OnInit {
  private readonly _routeSnapshot = inject(ActivatedRoute);
  private readonly _articlesService = inject(ArticlesService);
  private readonly _article$ = new BehaviorSubject<Article>(new Object() as Article);
  public readonly articles$ = this._article$.asObservable();

  public async ngOnInit(): Promise<void> {
    const params = (await firstValueFrom(this._routeSnapshot.params)) as { category: string; article: string };
    const article = await firstValueFrom(this._articlesService.findOne(params.article));
    this._article$.next(article);
  }

  public get otherArticles$(): Observable<Array<Article>> {
    return this._articlesService.findSector({
      category: this._article$.value.category,
      sector: this._article$.value.sector,
    });
  }
}
