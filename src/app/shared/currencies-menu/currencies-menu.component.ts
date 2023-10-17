import { NgFor } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { MatMenu, MatMenuModule } from '@angular/material/menu';
import type { Currency } from 'projects/central-hash-api-client/src/lib/models/currencies/currency';
import type { FiatCurrency } from 'projects/central-hash-api-client/src/lib/models/fiat-currencies/fiat-currency';
import { AccessiblePressDirective } from 'src/app/directives/accessible-press.directive';
import { getCurrencyRepresentation } from 'src/app/helpers/get-currency-representation';
import { isCurrency } from 'src/app/type-guards/is-currency';
import { isFiatCurrency } from 'src/app/type-guards/is-fiat-currency';

@Component({
  selector: 'app-currencies-menu',
  standalone: true,
  imports: [MatMenuModule, NgFor, AccessiblePressDirective],
  templateUrl: './currencies-menu.component.html',
  styleUrls: ['./currencies-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CurrenciesMenuComponent {
  public readonly isCurrency = isCurrency;
  public readonly isFiatCurrency = isFiatCurrency;
  public readonly getCurrencyRepresentation = getCurrencyRepresentation;

  @Output()
  public readonly menuClosed = new EventEmitter<void>();

  @Output()
  public readonly itemSelected = new EventEmitter<FiatCurrency | Currency>();

  @ViewChild(MatMenu)
  public matMenu!: MatMenu;

  @Input({ required: true })
  public isFiatCollection!: boolean;

  @Input({ required: true })
  public collection!: Array<Currency | FiatCurrency>;

  public emitCloseMenu(): void {
    this.menuClosed.emit();
  }

  public set setItem(value: FiatCurrency | Currency) {
    this.itemSelected.next(value);
  }
}
