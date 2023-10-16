import { AsyncPipe, NgIf } from '@angular/common';
import type { OnInit } from '@angular/core';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormsModule, NonNullableFormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import type { Currency } from 'projects/central-hash-api-client/src/lib/models/currencies/currency';
import type { FiatCurrency } from 'projects/central-hash-api-client/src/lib/models/fiat-currencies/fiat-currency';
import { firstValueFrom } from 'rxjs';
import { supportedCurrencies } from 'src/app/constants/supported-currencies';
import { AllCurrenciesService } from 'src/app/services/all-currencies/all-currencies.service';
import { CurrenciesStoreService, FiatCurrenciesStoreService } from 'src/app/stores';
import { ButtonPrimaryComponent } from '../button-primary/button-primary.component';
import { CurrencyInputComponent } from './currency-input/currency-input.component';

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
      // #TODO: Check how effective $localize`USD` is in SSR
      id: localStorage.getItem('currency') ?? ($localize`USD` as string),
      amount: 0,
    },
  });

  public async ngOnInit(): Promise<void> {
    const defaultCurrency = this._allCurrencies.getDefaultCurrency as string;
    const fiat = await firstValueFrom(this._fiatCurrenciesStore.findOneAsync(defaultCurrency));
    const btc = await firstValueFrom(this._currenciesStore.findOneAsync('BTC'));
    const btcPriceDefaultCurrency = (btc?.price ?? 0) * (fiat?.rate ?? 0);
    const hundredDefaultCurrencyInBtc = 100 / btcPriceDefaultCurrency;
    this.form.setValue({
      currency: {
        id: 'BTC',
        amount: hundredDefaultCurrencyInBtc,
      },
      fiatCurrency: {
        id: defaultCurrency,
        amount: 100,
      },
    });

    this.form.controls.currency.valueChanges.subscribe(value => {
      const currencyControl = this.form.controls.currency;
      const fiatCurrencyControl = this.form.controls.fiatCurrency;
      const fiatCurrency = this._fiatCurrenciesStore.findOne(fiatCurrencyControl.value.id);
      const currency = this._currenciesStore.findOne(currencyControl.value.id);
      const fiatCurrencyValue = value.amount * (fiatCurrency?.rate ?? 0) * (currency?.price ?? 0);
      fiatCurrencyControl.setValue(
        {
          id: fiatCurrency?.id ?? fiatCurrencyControl.value.id,
          amount: fiatCurrencyValue,
        },
        { emitEvent: false },
      );
    });

    this.form.controls.fiatCurrency.valueChanges.subscribe(value => {
      const currencyControl = this.form.controls.currency;
      const fiatCurrencyControl = this.form.controls.fiatCurrency;
      const fiatCurrency = this._fiatCurrenciesStore.findOne(fiatCurrencyControl.value.id);
      const currency = this._currenciesStore.findOne(currencyControl.value.id);
      const currencyValue = value.amount / (fiatCurrency?.rate ?? 0) / (currency?.price ?? 0);
      currencyControl.setValue(
        {
          id: currency?.id ?? currencyControl.value.id,
          amount: currencyValue,
        },
        { emitEvent: false },
      );
    });
  }

  public get allCurrencies(): Array<Currency> {
    return this._currenciesStore.findAll.filter(currency => supportedCurrencies.includes(currency.id));
  }

  public get fiatCurrencies(): Array<FiatCurrency> {
    return this._fiatCurrenciesStore.findAll;
  }
}
