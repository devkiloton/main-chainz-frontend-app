import { CurrencyPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ButtonPrimaryComponent } from 'src/app/shared/button-primary/button-primary.component';

@Component({
  selector: 'app-card-buy',
  standalone: true,
  imports: [ButtonPrimaryComponent, CurrencyPipe],
  templateUrl: './card-buy.component.html',
  styleUrls: ['./card-buy.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardBuyComponent {
  @Input({ required: true })
  public currencyCode!: string;

  @Input({ required: true })
  public price!: number;

  @Input({ required: true })
  public priceChange24h!: number;

  @Input({ required: true })
  public currencyName!: string;

  public get priceChange24hStatus(): string {
    if (this.priceChange24h === 0) {
      return 'neutral';
    }
    return this.priceChange24h > 0 ? 'bull' : 'bear';
  }
}
