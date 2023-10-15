import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import type { Currency } from 'projects/central-hash-api-client/src/lib/models/currencies/currency';
import type { FiatCurrency } from 'projects/central-hash-api-client/src/lib/models/fiat-currencies/fiat-currency';
import { CurrenciesStoreService, FiatCurrenciesStoreService } from 'src/app/stores';
import { ButtonPrimaryComponent } from '../button-primary/button-primary.component';

export type State = {
  flag: string;
  name: string;
  population: string;
};

@Component({
  selector: 'app-modal-converter',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatMenuModule,
    NgFor,
    NgIf,
    FormsModule,
    AsyncPipe,
    ButtonPrimaryComponent,
    ReactiveFormsModule,
    MatRippleModule,
  ],
  templateUrl: './modal-converter.component.html',
  styleUrls: ['./modal-converter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModalConverterComponent {
  private readonly _currenciesStore = inject(CurrenciesStoreService);
  private readonly _fiatCurrenciesStore = inject(FiatCurrenciesStoreService);

  public value = 'Clear me';
  public options: Array<string> = ['bitcoin', 'ethereum', 'monero', 'theter', 'BNB'];

  public get allCurrencies(): Array<Currency> {
    return this._currenciesStore.findAll;
  }

  public get fiatCurrencies(): Array<FiatCurrency> {
    return this._fiatCurrenciesStore.findAll;
  }
}
