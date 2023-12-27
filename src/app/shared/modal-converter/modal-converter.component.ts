import { AsyncPipe, NgIf } from '@angular/common';
import type { OnInit } from '@angular/core';
import { ChangeDetectionStrategy, Component, DestroyRef, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormsModule, NonNullableFormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import type { Currency } from 'projects/main-chainz-api-client/src/lib/models/currencies/currency';
import type { FiatCurrency } from 'projects/main-chainz-api-client/src/lib/models/fiat-currencies/fiat-currency';
import { firstValueFrom } from 'rxjs';
import { supportedCurrencies } from 'src/app/constants/supported-currencies';
import { getCurrencyAmountFromFiat } from 'src/app/helpers/get-currency-amount-from-fiat';
import { getFiatAmountFromCurrency } from 'src/app/helpers/get-fiat-amount-from-currency';
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
  private readonly _destroyRef = inject(DestroyRef);

  public readonly form = this._fb.group({
    currency: {
      id: 'BTC',
      amount: 0,
    },
    fiatCurrency: {
      // #TODO: remove localstorage on production bc ssr
      id: localStorage.getItem('currency') ?? ($localize`USD` as string),
      amount: 0,
    },
  });

  public async ngOnInit(): Promise<void> {
    // Fetching assets that will be used in the first conversion
    const defaultCurrency = this._allCurrencies.getDefaultCurrency as string;
    const fiat = await firstValueFrom(this._fiatCurrenciesStore.findOneAsync(defaultCurrency));
    const btc = await firstValueFrom(this._currenciesStore.findOneAsync('BTC'));

    // Calculate 100 default currency in BTC when app starts
    const hundredDefaultCurrencyInBtc = getCurrencyAmountFromFiat({
      fiatRate: fiat?.rate ?? 0,
      currencyPrice: btc?.price ?? 0,
      amount: 100,
    });

    // Controls used when value changes
    const currencyControl = this.form.controls.currency;
    const fiatCurrencyControl = this.form.controls.fiatCurrency;

    this.form.setValue({
      currency: {
        id: 'BTC',
        amount: Number(hundredDefaultCurrencyInBtc.toFixed(8)),
      },
      fiatCurrency: {
        id: defaultCurrency,
        amount: 100,
      },
    });

    this.form.controls.currency.valueChanges.pipe(takeUntilDestroyed(this._destroyRef)).subscribe(value => {
      // Fetching data that maybe was updated
      const fiatCurrency = this._fiatCurrenciesStore.findOne(fiatCurrencyControl.value.id);
      const currency = this._currenciesStore.findOne(currencyControl.value.id);
      // Covert the inputed amount of the currency in the selected fiat currency amount
      const fiatCurrencyAmount = getFiatAmountFromCurrency({
        fiatRate: fiatCurrency?.rate ?? 0,
        currencyPrice: currency?.price ?? 0,
        amount: value.amount,
      });
      // Update the fiat currency control
      fiatCurrencyControl.setValue(
        {
          id: fiatCurrency?.id ?? fiatCurrencyControl.value.id,
          amount: Number(fiatCurrencyAmount.toFixed(2)),
        },
        { emitEvent: false },
      );
    });

    this.form.controls.fiatCurrency.valueChanges.pipe(takeUntilDestroyed(this._destroyRef)).subscribe(value => {
      // Fetching data that maybe was updated
      const fiatCurrency = this._fiatCurrenciesStore.findOne(fiatCurrencyControl.value.id);
      const currency = this._currenciesStore.findOne(currencyControl.value.id);
      // Covert the inputed amount of the fiat currency in the selected currency amount
      const currencyAmount = getCurrencyAmountFromFiat({
        fiatRate: fiatCurrency?.rate ?? 0,
        currencyPrice: currency?.price ?? 0,
        amount: value.amount,
      });
      // Update the currency control
      currencyControl.setValue(
        {
          id: currency?.id ?? currencyControl.value.id,
          amount: Number(currencyAmount.toPrecision(8)),
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
