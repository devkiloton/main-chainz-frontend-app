import { AsyncPipe, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { FormsModule, NonNullableFormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import type { Currency } from 'projects/central-hash-api-client/src/lib/models/currencies/currency';
import type { FiatCurrency } from 'projects/central-hash-api-client/src/lib/models/fiat-currencies/fiat-currency';
import { CurrenciesStoreService, FiatCurrenciesStoreService } from 'src/app/stores';
import { ButtonPrimaryComponent } from '../button-primary/button-primary.component';
import { CurrencyInputComponent } from './currency-input/currency-input.component';
import { AllCurrenciesService } from 'src/app/services/all-currencies/all-currencies.service';
import { firstValueFrom } from 'rxjs';

export type State = {
  flag: string;
  name: string;
  population: string;
};

@Component({
  selector: 'app-modal-converter',
  standalone: true,
  imports: [
    MatInputModule,
    MatIconModule,
    NgIf,
    FormsModule,
    AsyncPipe,
    ButtonPrimaryComponent,
    ReactiveFormsModule,
    CurrencyInputComponent,
  ],
  templateUrl: './modal-converter.component.html',
  styleUrls: ['./modal-converter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModalConverterComponent implements OnInit {
  private readonly _currenciesStore = inject(CurrenciesStoreService);
  private readonly _fiatCurrenciesStore = inject(FiatCurrenciesStoreService);
  private readonly _fb = inject(NonNullableFormBuilder);
  private readonly _allCurrencies = inject(AllCurrenciesService);

  public readonly form = this._fb.group({
    currency: {
      id: 'BTC',
      amount: 0,
    },
    fiatCurrency: {
      id: '',
      amount: 0,
    },
  });

  public async ngOnInit(): Promise<void> {
    const defaultCurrency = this._allCurrencies.getDefaultCurrency as string;
    const fiat = await firstValueFrom(this._fiatCurrenciesStore.findOneAsync(defaultCurrency));
    const btc = await firstValueFrom(this._currenciesStore.findOneAsync('BTC'));
    const btcPriceDefaultCurrency = (btc?.price ?? 0) * (fiat?.rate ?? 0);
    const hundredDefaultCurrencyInBtc = 100 / btcPriceDefaultCurrency;
    this.form.patchValue({
      currency: {
        id: 'BTC',
        amount: hundredDefaultCurrencyInBtc,
      },
      fiatCurrency: {
        id: defaultCurrency,
        amount: 100,
      },
    });
  }

  public get allCurrencies(): Array<Currency> {
    return this._currenciesStore.findAll;
  }

  public get fiatCurrencies(): Array<FiatCurrency> {
    return this._fiatCurrenciesStore.findAll;
  }
}
