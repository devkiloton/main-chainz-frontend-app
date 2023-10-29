import { AsyncPipe, NgFor } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { data } from 'src/app/constants/support/grid-tiles';
import { GridComponent } from 'src/app/shared/grid/grid.component';
import { ArticlesStoreService } from 'src/app/stores/articles/articles-store.service';
import { CardQuestionsComponent } from './components/card-questions/card-questions.component';
import { HeaderComponent } from './components/header/header.component';

@Component({
  standalone: true,
  imports: [HeaderComponent, CardQuestionsComponent, NgFor, AsyncPipe, GridComponent],
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class SupportComponent {
  private readonly _articlesStoreService = inject(ArticlesStoreService);

  public data = data;

  public readonly articles$ = this._articlesStoreService.findMostViewed();
}
