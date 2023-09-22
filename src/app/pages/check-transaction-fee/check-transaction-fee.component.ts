import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule],
  templateUrl: './check-transaction-fee.component.html',
  styleUrls: ['./check-transaction-fee.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class CheckTransactionFeeComponent {

}
