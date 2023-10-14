import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { BehaviorSubject } from 'rxjs';
import { allCurrenciesChipOptions } from 'src/app/constants/all-currencies-chip-options';
import { bitcoinServicesGridTiles } from 'src/app/constants/bitcoin-services-grid-tiles';
import { questionsAndAnswers } from 'src/app/constants/home/questions-and-answers';
import { ChipIconListComponent } from 'src/app/shared/chip-icon-list/chip-icon-list.component';
import { GridComponent } from 'src/app/shared/grid/grid.component';
import { TablePricesComponent } from 'src/app/shared/table-prices/table-prices.component';
import { CurrenciesStoreService } from 'src/app/stores';
import { ParticleBgComponent } from '../../shared/particle-bg/particle-bg.component';
import { CardBuyComponent } from './components/card-buy/card-buy.component';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    MatIconModule,
    MatChipsModule,
    MatExpansionModule,
    NgFor,
    GridComponent,
    ChipIconListComponent,
    ParticleBgComponent,
    TablePricesComponent,
    AsyncPipe,
    NgIf,
    CardBuyComponent,
  ],
})
export default class HomeComponent {
  private readonly _currencies = inject(CurrenciesStoreService);

  private readonly _arrowInverted = new BehaviorSubject<number>(0);
  public readonly arrowInverted$ = this._arrowInverted.asObservable();
  public readonly currenciesBroadCast$ = this._currencies.broadCast$.asObservable();

  public readonly bitcoinServicesGridTiles = bitcoinServicesGridTiles;
  public readonly allCurrenciesChipOptions = allCurrenciesChipOptions;

  public readonly questionsAndAnswers = questionsAndAnswers;

  public toggleArrow(index: number): void {
    this._arrowInverted.next(index);
  }
}
