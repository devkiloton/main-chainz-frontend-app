import { AsyncPipe, NgFor } from '@angular/common';
import type { OnInit } from '@angular/core';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import type { Currency } from 'projects/central-hash-api-client/src/lib/models/currencies/currency';
import type { FiatCurrency } from 'projects/central-hash-api-client/src/lib/models/fiat-currencies/fiat-currency';
import { BehaviorSubject } from 'rxjs';
import { AccessiblePressDirective } from 'src/app/directives/accessible-press.directive';

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
  ],
  templateUrl: './currency-input.component.html',
  styleUrls: ['./currency-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CurrencyInputComponent implements OnInit {
  private readonly _selectedCurrencyCode$ = new BehaviorSubject<string>('');
  public readonly selectedCurrencyCode$ = this._selectedCurrencyCode$.asObservable();

  @Input({ required: true })
  public currencies!: Array<Currency | FiatCurrency>;

  @Input({ required: true })
  public defaultCurrencyCode!: string;

  @Input({ required: true })
  public isFiatCollection!: boolean;

  public ngOnInit(): void {
    this._selectedCurrencyCode$.next(this.defaultCurrencyCode);
  }

  // Custom type guard
  public isCurrency(item: Currency | FiatCurrency): item is Currency {
    return 'name' in item; // specific property of Currency
  }

  public isFiatCurrency(item: Currency | FiatCurrency): item is FiatCurrency {
    return 'symbol' in item; // specific property of FiatCurrency
  }

  public get allCurrencies(): Array<Currency> {
    return this.currencies.filter(this.isCurrency);
  }

  public get allFiatCurrencies(): Array<FiatCurrency> {
    return this.currencies.filter(this.isFiatCurrency);
  }

  public finalColletion(): Array<Currency | FiatCurrency> {
    if (this.isFiatCollection) {
      return this.allFiatCurrencies;
    }
    return this.allCurrencies;
  }

  public setSelection(currencyCode: string): void {
    this._selectedCurrencyCode$.next(currencyCode);
  }
}
