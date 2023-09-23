import { ChangeDetectionStrategy, Component } from '@angular/core';
import { InputTextComponent } from 'src/app/shared/input-text/input-text.component';

@Component({
  standalone: true,
  imports: [InputTextComponent],
  templateUrl: './check-wallet.component.html',
  styleUrls: ['./check-wallet.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class CheckWalletComponent {}
