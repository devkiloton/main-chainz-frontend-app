import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule],
  templateUrl: './check-transaction-history.component.html',
  styleUrls: ['./check-transaction-history.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class CheckTransactionHistoryComponent {

}
