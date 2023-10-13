import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PreviewCurrencyComponent } from '../preview-currency/preview-currency.component';

@Component({
  selector: 'app-carousel-prices',
  standalone: true,
  imports: [PreviewCurrencyComponent],
  templateUrl: './carousel-prices.component.html',
  styleUrls: ['./carousel-prices.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CarouselPricesComponent {}
