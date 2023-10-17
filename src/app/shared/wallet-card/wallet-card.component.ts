import { AsyncPipe, CurrencyPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { isNil } from 'lodash-es';
import type { WalletIdentifiers } from 'src/app/constants/wallet-indentifiers';
import { AllCurrenciesService } from 'src/app/services/all-currencies/all-currencies.service';
import { CurrenciesStoreService, FiatCurrenciesStoreService } from 'src/app/stores';
import type { BitcoinWallet } from 'src/app/types/bitcoin-walet';

@Component({
  selector: 'app-wallet-card',
  standalone: true,
  imports: [MatCardModule, CurrencyPipe, AsyncPipe],
  templateUrl: './wallet-card.component.html',
  styleUrls: ['./wallet-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WalletCardComponent {
  private readonly _fiatCurrencies = inject(FiatCurrenciesStoreService);
  private readonly _currency = inject(CurrenciesStoreService);
  private readonly _allCurrenciesService = inject(AllCurrenciesService);

  @Input({ required: true }) public wallet!: BitcoinWallet & WalletIdentifiers;

  public get defaultCurrency(): string {
    return this._allCurrenciesService.getDefaultCurrency;
  }

  public async currencyPrice(): Promise<number> {
    const currencyPrice = this._currency.findOne(this.wallet.code)?.price ?? 0;

    // #TODO add error handling
    const fiatPrice = (this._fiatCurrencies.findOne(this.defaultCurrency)?.rate ?? 0) * currencyPrice;

    if (!isNil(fiatPrice)) {
      return fiatPrice;
    }
    return 0;
  }
}
