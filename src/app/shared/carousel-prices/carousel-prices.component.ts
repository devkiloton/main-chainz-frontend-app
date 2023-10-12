import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-carousel-prices',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carousel-prices.component.html',
  styleUrls: ['./carousel-prices.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CarouselPricesComponent {}
