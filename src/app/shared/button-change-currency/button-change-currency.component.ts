import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import type { Currency } from 'projects/central-hash-api-client/src/lib/models/currencies/currency';
import type { FiatCurrency } from 'projects/central-hash-api-client/src/lib/models/fiat-currencies/fiat-currency';
import { AllCurrenciesService } from 'src/app/services/all-currencies/all-currencies.service';
import { FiatCurrenciesStoreService } from 'src/app/stores';
import { isFiatCurrency } from 'src/app/type-guards/is-fiat-currency';
import { CurrenciesMenuComponent } from '../currencies-menu/currencies-menu.component';

@Component({
  selector: 'app-button-change-currency',
  standalone: true,
  imports: [MatMenuModule, MatIconModule, CurrenciesMenuComponent, MatButtonModule],
  templateUrl: './button-change-currency.component.html',
  styleUrls: ['./button-change-currency.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonChangeCurrencyComponent {
  private readonly _fiatCurrenciesStore = inject(FiatCurrenciesStoreService);
  private readonly _allCurrenciesService = inject(AllCurrenciesService);

  public get allFiatCurrencies(): Array<FiatCurrency> {
    return this._fiatCurrenciesStore.findAll;
  }

  public changeDefaultCurrency(currency: FiatCurrency | Currency): void {
    if (isFiatCurrency(currency)) {
      this._allCurrenciesService.setDefaultCurrency = currency;
    }
  }
}
