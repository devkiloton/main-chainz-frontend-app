import { CurrencyPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { isNil } from 'lodash-es';
import type { WalletIdentifiers } from 'src/app/constants/wallet-indentifiers';
import { numberInverter } from 'src/app/helpers/number-inverter';
import { AllCurrenciesService } from 'src/app/services/all-currencies/all-currencies.service';
import type { BitcoinWallet } from 'src/app/types/bitcoin-walet';

@Component({
  selector: 'app-wallet-card',
  standalone: true,
  imports: [MatCardModule, CurrencyPipe],
  templateUrl: './wallet-card.component.html',
  styleUrls: ['./wallet-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WalletCardComponent {
  private readonly _allCurrenciesService = inject(AllCurrenciesService);

  @Input({ required: true }) public wallet!: BitcoinWallet & WalletIdentifiers;

  public get defaultCurrency(): string {
    return this._allCurrenciesService.getDefaultCurrency;
  }

  public get currencyPrice(): number {
    const [currencyPrice] = this._allCurrenciesService.getCurrenciesPriceUSD.prices
      .filter(item => item.code === this.wallet.code.toLowerCase())
      .map(obj => obj.priceUSD);
    // #TODO add error handling
    const [fiatPrice] = this._allCurrenciesService.getFiatCurrenciesPriceUSD.prices
      .filter(item => item.code === this.defaultCurrency.toLowerCase())
      .map(obj => obj.priceUSD * numberInverter(currencyPrice ?? 0));

    if (!isNil(fiatPrice)) {
      return fiatPrice;
    }
    return 0;
  }
}
