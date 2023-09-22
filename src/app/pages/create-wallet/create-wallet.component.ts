import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule],
  templateUrl: './create-wallet.component.html',
  styleUrls: ['./create-wallet.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class CreateWalletComponent {

}
