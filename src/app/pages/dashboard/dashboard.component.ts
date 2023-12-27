import { AsyncPipe, JsonPipe, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BitcoinService } from 'projects/main-chainz-api-client/src/lib/entities/bitcoin/bitcoin.service';
import { UserEntity } from 'projects/main-chainz-api-client/src/public-api';
import { firstValueFrom } from 'rxjs';
import { DialogDepositComponent } from 'src/app/shared/dialog-deposit/dialog-deposit.component';
import { DialogWithdrawalComponent } from 'src/app/shared/dialog-withdrawal/dialog-withdrawal.component';

@Component({
  standalone: true,
  imports: [
    JsonPipe,
    AsyncPipe,
    MatIconModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatTooltipModule,
    MatDialogModule,
    NgIf,
  ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class DashboardComponent {
  private readonly _userEntity = inject(UserEntity);
  private readonly _dialog = inject(MatDialog);
  public readonly user$ = this._userEntity.find();
  private readonly _bitcoinService = inject(BitcoinService);

  public readonly walletInformation$ = this._bitcoinService.findInformation();

  public async openDepositDialog(enterAnimationDuration: string, exitAnimationDuration: string): Promise<void> {
    const publicWallet = await firstValueFrom(this._bitcoinService.findInformation());
    this._dialog.open(DialogDepositComponent, {
      enterAnimationDuration,
      exitAnimationDuration,
      width: '410px',
      data: publicWallet,
    });
  }

  public async openWithdrawalDialog(enterAnimationDuration: string, exitAnimationDuration: string): Promise<void> {
    this._dialog.open(DialogWithdrawalComponent, {
      enterAnimationDuration,
      exitAnimationDuration,
      width: '450px',
    });
  }
}
