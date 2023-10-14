import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ButtonPrimaryComponent } from 'src/app/shared/button-primary/button-primary.component';

@Component({
  selector: 'app-card-buy',
  standalone: true,
  imports: [CommonModule, ButtonPrimaryComponent],
  templateUrl: './card-buy.component.html',
  styleUrls: ['./card-buy.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardBuyComponent {}
