import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  standalone: true,
  imports: [CommonModule],
  templateUrl: './check-wallet.component.html',
  styleUrls: ['./check-wallet.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class CheckWalletComponent {}
