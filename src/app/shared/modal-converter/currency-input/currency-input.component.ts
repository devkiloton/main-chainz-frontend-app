import { AsyncPipe, NgFor } from '@angular/common';
import { ChangeDetectionStrategy, Component, DestroyRef, forwardRef, inject, Input } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import type { ControlValueAccessor } from '@angular/forms';
import { NG_VALUE_ACCESSOR, NonNullableFormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import type { Currency } from 'projects/central-hash-api-client/src/lib/models/currencies/currency';
import type { FiatCurrency } from 'projects/central-hash-api-client/src/lib/models/fiat-currencies/fiat-currency';
import { AccessiblePressDirective } from 'src/app/directives/accessible-press.directive';
import { isCurrency } from 'src/app/type-guards/is-currency';
import { isFiatCurrency } from 'src/app/type-guards/is-fiat-currency';
import { CurrenciesMenuComponent } from '../../currencies-menu/currencies-menu.component';
import { getCurrencyRepresentation } from 'src/app/helpers/get-currency-representation';

@Component({
  selector: 'app-currency-input',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatMenuModule,
    MatIconModule,
    MatRippleModule,
    NgFor,
    AsyncPipe,
    AccessiblePressDirective,
    ReactiveFormsModule,
    CurrenciesMenuComponent,
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CurrencyInputComponent),
      multi: true,
    },
  ],
  templateUrl: './currency-input.component.html',
  styleUrls: ['./currency-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CurrencyInputComponent implements ControlValueAccessor {
  private readonly _fb = inject(NonNullableFormBuilder);
  private readonly _destroyRef = inject(DestroyRef);
  public readonly getCurrencyRepresentation = getCurrencyRepresentation;

  public readonly form = this._fb.group({
    id: '',
    amount: 0,
  });

  @Input({ required: true })
  public currencies!: Array<Currency | FiatCurrency>;

  @Input({ required: true })
  public set defaultCurrencyCode(id: string) {
    this.form.controls.id.setValue(id);
  }

  @Input({ required: true })
  public isFiatCollection!: boolean;

  @Input()
  public set initialAmount(amount: number) {
    this.form.controls.amount.setValue(amount);
  }

  public get allCurrencies(): Array<Currency> {
    return this.currencies.filter(isCurrency);
  }

  public get allFiatCurrencies(): Array<FiatCurrency> {
    return this.currencies.filter(isFiatCurrency);
  }

  public finalColletion(): Array<Currency | FiatCurrency> {
    if (this.isFiatCollection) {
      return this.allFiatCurrencies;
    }
    return this.allCurrencies;
  }

  public setSelection(asset: Currency | FiatCurrency): void {
    this.form.controls.id.setValue(asset.id);
  }

  // * CVA
  public writeValue(
    obj: Partial<{
      id: string;
      amount: number;
    }>,
  ): void {
    this.form.patchValue(obj, { emitEvent: false });
  }

  public registerOnChange(
    fn: (
      arg: Partial<{
        id: string;
        amount: number;
      }>,
    ) => void,
  ): void {
    this.form.valueChanges.pipe(takeUntilDestroyed(this._destroyRef)).subscribe(fn);
  }

  public registerOnTouched(
    fn: (
      arg: Partial<{
        id: string;
        amount: number;
      }>,
    ) => void,
  ): void {
    this.form.valueChanges.pipe(takeUntilDestroyed(this._destroyRef)).subscribe(fn);
  }
}
