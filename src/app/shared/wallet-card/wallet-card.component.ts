import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import type { WalletIdentifiers } from 'src/app/constants/wallet-indentifiers';
import type { BitcoinWallet } from 'src/app/types/bitcoin-walet';

@Component({
  selector: 'app-wallet-card',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './wallet-card.component.html',
  styleUrls: ['./wallet-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WalletCardComponent {

  @Input({required: true}) public wallet!: BitcoinWallet & WalletIdentifiers;

}
