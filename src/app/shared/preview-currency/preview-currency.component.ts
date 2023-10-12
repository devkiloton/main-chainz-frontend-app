import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-preview-currency',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './preview-currency.component.html',
  styleUrls: ['./preview-currency.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PreviewCurrencyComponent {

}
