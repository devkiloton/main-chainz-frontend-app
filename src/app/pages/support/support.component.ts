import { AsyncPipe, NgFor } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ArticlesService } from 'projects/central-hash-api-client/src/public-api';
import { data } from 'src/app/constants/support/grid-tiles';
import { GridComponent } from 'src/app/shared/grid/grid.component';
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
  private readonly _articlesService = inject(ArticlesService);

  public data = data;

  public readonly articles$ = this._articlesService.findMostViewed();
}
