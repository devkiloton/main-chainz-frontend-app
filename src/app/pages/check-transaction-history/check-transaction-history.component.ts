import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  standalone: true,
  imports: [],
  templateUrl: './check-transaction-history.component.html',
  styleUrls: ['./check-transaction-history.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class CheckTransactionHistoryComponent {}
