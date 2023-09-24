import { AsyncPipe, JsonPipe, NgFor, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { BehaviorSubject, firstValueFrom } from 'rxjs';
import { BitcoinApiClientService } from 'src/app/clients/bitcoin-api-client/bitcoin-api-client.service';
import { allCurrenciesChipOptions } from 'src/app/constants/all-currencies-chip-options';
import { bitcoinServicesGridTiles } from 'src/app/constants/bitcoin-services-grid-tiles';
import type { WalletIdentifiers } from 'src/app/constants/wallet-indentifiers';
import { ChipIconListComponent } from 'src/app/shared/chip-icon-list/chip-icon-list.component';
import { GridComponent } from 'src/app/shared/grid/grid.component';
import { InputTextComponent } from 'src/app/shared/input-text/input-text.component';
import { WalletCardComponent } from 'src/app/shared/wallet-card/wallet-card.component';
import type { BitcoinWallet } from 'src/app/types/bitcoin-walet';

@Component({
  standalone: true,
  imports: [InputTextComponent, GridComponent, MatChipsModule, MatIconModule, NgFor, NgIf, AsyncPipe, JsonPipe, ReactiveFormsModule, ChipIconListComponent, WalletCardComponent],
  templateUrl: './check-wallet.component.html',
  styleUrls: ['./check-wallet.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class CheckWalletComponent {
  private readonly _bitcoinApiClientService = inject(BitcoinApiClientService);
  private readonly _fb = inject(NonNullableFormBuilder)

  public readonly bitcoinServicesGridTiles = bitcoinServicesGridTiles;
  public readonly allCurrenciesChipOptions = allCurrenciesChipOptions;
  public readonly walletAddressControl = this._fb.control('', [Validators.required]);

  private readonly _wallet$ = new BehaviorSubject<BitcoinWallet & WalletIdentifiers | null>(null);
  public readonly wallet$ = this._wallet$.asObservable();

  public async checkBitcoinWallet(): Promise<void> {
    const data = await firstValueFrom(this._bitcoinApiClientService.wallets.getOneWallet({ id: this.walletAddressControl.value }));
    this._wallet$.next({ ...data, code: "BTC", name: "bitcoin" });
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
  }
}
