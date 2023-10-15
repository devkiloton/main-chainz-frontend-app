import { AsyncPipe, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import type { Currency } from 'projects/central-hash-api-client/src/lib/models/currencies/currency';
import type { FiatCurrency } from 'projects/central-hash-api-client/src/lib/models/fiat-currencies/fiat-currency';
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
export class ModalConverterComponent {
  private readonly _currenciesStore = inject(CurrenciesStoreService);
  private readonly _fiatCurrenciesStore = inject(FiatCurrenciesStoreService);

  public get allCurrencies(): Array<Currency> {
    return this._currenciesStore.findAll;
  }

  public get fiatCurrencies(): Array<FiatCurrency> {
    return this._fiatCurrenciesStore.findAll;
  }
}
