import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, Inject, inject } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import type { PublicWallet } from 'projects/central-hash-api-client/src/lib/models/bitcoin/public-wallet';
import type { Currency } from 'projects/central-hash-api-client/src/lib/models/currencies/currency';
import type { FiatCurrency } from 'projects/central-hash-api-client/src/lib/models/fiat-currencies/fiat-currency';
import { BehaviorSubject } from 'rxjs';
import { supportedCurrencies } from 'src/app/constants/supported-currencies';
import { AccessiblePressDirective } from 'src/app/directives/accessible-press/accessible-press.directive';
import { getCurrencyRepresentation } from 'src/app/helpers/get-currency-representation';
import { CurrenciesStoreService } from 'src/app/stores';
import { CurrenciesMenuComponent } from '../currencies-menu/currencies-menu.component';
import { InputTextComponent } from '../input-text/input-text.component';

@Component({
  selector: 'app-dialog-deposit',
  standalone: true,
  imports: [
    MatDialogModule,
    MatButtonModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    InputTextComponent,
    MatFormFieldModule,
    MatInputModule,
    AsyncPipe,
    NgFor,
    NgIf,
    AccessiblePressDirective,
    CurrenciesMenuComponent,
    MatIconModule,
    MatMenuModule,
    MatRippleModule,
  ],
  templateUrl: './dialog-deposit.component.html',
  styleUrls: ['./dialog-deposit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogDepositComponent {
  private readonly _currenciesStore = inject(CurrenciesStoreService);
  private readonly _fb = inject(NonNullableFormBuilder);

  private readonly _cardState$ = new BehaviorSubject<boolean>(false);
  public readonly cardState$ = this._cardState$.asObservable();
  private readonly _message$ = new BehaviorSubject<string>('');
  public readonly message$ = this._message$.asObservable();
  public readonly getCurrencyRepresentation = getCurrencyRepresentation;

  public readonly form = this._fb.group({
    id: 'BTC',
  });

  constructor(
    public dialogRef: MatDialogRef<DialogDepositComponent>,
    @Inject(MAT_DIALOG_DATA) public walletInformation: PublicWallet,
  ) {}

  public get allCurrencies(): Array<Currency> {
    return this._currenciesStore.findAll.filter(currency => supportedCurrencies.includes(currency.id));
  }

  public setSelection(asset: Currency | FiatCurrency): void {
    this.form.controls.id.setValue(asset.id);
  }
}
