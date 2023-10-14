import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { allCurrenciesChipOptions } from 'src/app/constants/all-currencies-chip-options';
import { bitcoinServicesGridTiles } from 'src/app/constants/bitcoin-services-grid-tiles';
import { ChipIconListComponent } from 'src/app/shared/chip-icon-list/chip-icon-list.component';
import { GridComponent } from 'src/app/shared/grid/grid.component';
import { TablePricesComponent } from 'src/app/shared/table-prices/table-prices.component';
import { CurrenciesStoreService } from 'src/app/stores';
import { ParticleBgComponent } from '../../shared/particle-bg/particle-bg.component';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    MatIconModule,
    MatChipsModule,
    NgFor,
    GridComponent,
    ChipIconListComponent,
    ParticleBgComponent,
    TablePricesComponent,
    AsyncPipe,
    NgIf,
  ],
})
export default class HomeComponent {
  private readonly _currencies = inject(CurrenciesStoreService);

  public readonly currenciesBroadCast$ = this._currencies.broadCast$.asObservable();

  public readonly bitcoinServicesGridTiles = bitcoinServicesGridTiles;
  public readonly allCurrenciesChipOptions = allCurrenciesChipOptions;
}
