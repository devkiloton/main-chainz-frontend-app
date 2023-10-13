import { AsyncPipe, NgFor } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CurrenciesService } from 'projects/central-hash-api-client/src/lib/entities/currencies/currencies.service';
import { PreviewCurrencyComponent } from '../preview-currency/preview-currency.component';

@Component({
  selector: 'app-carousel-prices',
  standalone: true,
  imports: [PreviewCurrencyComponent, AsyncPipe, NgFor],
  templateUrl: './carousel-prices.component.html',
  styleUrls: ['./carousel-prices.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CarouselPricesComponent {
  private readonly _currencies = inject(CurrenciesService);
  public readonly currencies = this._currencies.findAll();
}
