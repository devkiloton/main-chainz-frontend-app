import { AsyncPipe, JsonPipe, NgFor, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { CurrenciesStoreService } from 'src/app/stores';
import { PreviewCurrencyComponent } from '../preview-currency/preview-currency.component';

@Component({
  selector: 'app-carousel-prices',
  standalone: true,
  imports: [PreviewCurrencyComponent, AsyncPipe, NgFor, NgIf, MatDividerModule, JsonPipe],
  templateUrl: './carousel-prices.component.html',
  styleUrls: ['./carousel-prices.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CarouselPricesComponent {
  private readonly _currenciesStore = inject(CurrenciesStoreService);
  public readonly currenciesBroadCast$ = this._currenciesStore.broadCast$;
}
