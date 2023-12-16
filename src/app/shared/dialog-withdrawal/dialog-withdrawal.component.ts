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
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BitcoinService } from 'projects/central-hash-api-client/src/lib/entities/bitcoin/bitcoin.service';
import type { PublicWallet } from 'projects/central-hash-api-client/src/lib/models/bitcoin/public-wallet';
import type { Currency } from 'projects/central-hash-api-client/src/lib/models/currencies/currency';
import type { FiatCurrency } from 'projects/central-hash-api-client/src/lib/models/fiat-currencies/fiat-currency';
import { isNotNil } from 'ramda';
import { BehaviorSubject, firstValueFrom } from 'rxjs';
import { depositDialogTexts } from 'src/app/constants/dashboard/deposit-dialog-texts';
import { supportedCurrencies } from 'src/app/constants/supported-currencies';
import { AccessiblePressDirective } from 'src/app/directives/accessible-press/accessible-press.directive';
import { Currencies } from 'src/app/enums/currencies';
import { getCurrencyNameFromId } from 'src/app/helpers/get-currency-name-from-Id';
import { getCurrencyRepresentation } from 'src/app/helpers/get-currency-representation';
import { CurrenciesStoreService } from 'src/app/stores';
import { isCurrency } from 'src/app/type-guards/is-currency';
import { AlertCardComponent } from '../alert-card/alert-card.component';
import { CurrenciesMenuComponent } from '../currencies-menu/currencies-menu.component';
import { InputTextComponent } from '../input-text/input-text.component';

@Component({
  selector: 'app-dialog-withdrawal',
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
    MatTooltipModule,
    MatSnackBarModule,
    AlertCardComponent,
  ],
  templateUrl: './dialog-withdrawal.component.html',
  styleUrls: ['./dialog-withdrawal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogWithdrawalComponent {
  private readonly _currenciesStore = inject(CurrenciesStoreService);
  private readonly _fb = inject(NonNullableFormBuilder);
  private readonly _snackBar = inject(MatSnackBar);
  private readonly _bitcoin = inject(BitcoinService);

  private readonly _cardState$ = new BehaviorSubject<boolean>(false);
  public readonly cardState$ = this._cardState$.asObservable();
  private readonly _message$ = new BehaviorSubject<string>('');
  public readonly message$ = this._message$.asObservable();
  public readonly getCurrencyRepresentation = getCurrencyRepresentation;
  public readonly getCurrencyNameFromId = getCurrencyNameFromId;
  public isCopied = false;
  public isConfirmed = false;

  public readonly form = this._fb.group({
    id: Currencies.btc,
    address: '',
    amount: 0,
  });

  constructor(
    public dialogRef: MatDialogRef<DialogWithdrawalComponent>,
    @Inject(MAT_DIALOG_DATA) public walletInformation: PublicWallet,
  ) {}

  public copyWalletAddress(): void {
    this.isCopied = true;
    this._snackBar.open(depositDialogTexts.tooltip, '', {
      duration: 2000,
    });
  }

  public get allCurrencies(): Array<Currency> {
    return this._currenciesStore.findAll.filter(currency => supportedCurrencies.includes(currency.id));
  }

  public setSelection(asset: Currency | FiatCurrency): void {
    if (isCurrency(asset)) {
      this.form.controls.id.setValue(asset.id);
    }
  }

  public async confirmWithdrawal(): Promise<void> {
    const { address, amount } = this.form.value;
    if (isNotNil(address) && isNotNil(amount)) {
      console.log(address, amount);
      await firstValueFrom(
        this._bitcoin.createTransaction({
          receiver: address,
          satoshis: Number(amount * 1000000000),
        }),
      );
      this.isConfirmed = true;
    }
  }
}
