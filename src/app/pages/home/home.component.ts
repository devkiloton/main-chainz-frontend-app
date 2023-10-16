import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import type { Currency } from 'projects/central-hash-api-client/src/lib/models/currencies/currency';
import type { Observable } from 'rxjs';
import { map, of, switchMap } from 'rxjs';
import { allCurrenciesChipOptions } from 'src/app/constants/all-currencies-chip-options';
import { bitcoinServicesGridTiles } from 'src/app/constants/bitcoin-services-grid-tiles';
import { questionsAndAnswers } from 'src/app/constants/home/questions-and-answers';
import { supportedCurrencies } from 'src/app/constants/supported-currencies';
import { ChipIconListComponent } from 'src/app/shared/chip-icon-list/chip-icon-list.component';
import { GridComponent } from 'src/app/shared/grid/grid.component';
import { ModalConverterComponent } from 'src/app/shared/modal-converter/modal-converter.component';
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
    ModalConverterComponent,
  ],
})
export default class HomeComponent {
  private readonly _currencies = inject(CurrenciesStoreService);
  public readonly currenciesBroadCast$: Observable<Array<Currency> | null> = this._currencies.broadCast$.pipe(
    switchMap(currencies => (currencies.length > 0 ? of(currencies) : of(null))),
  );

  public supportedCurrencies$ = this._currencies.broadCast$.pipe(
    map(currencies => {
      const currenciesCard = currencies.filter(currency => supportedCurrencies.includes(currency.id));
      return currenciesCard;
    }),
  );

  public readonly bitcoinServicesGridTiles = bitcoinServicesGridTiles;
  public readonly allCurrenciesChipOptions = allCurrenciesChipOptions;

  public readonly questionsAndAnswers = questionsAndAnswers;
}
