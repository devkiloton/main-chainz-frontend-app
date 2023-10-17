import { BreakpointObserver } from '@angular/cdk/layout';
import { AsyncPipe, DOCUMENT, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, Inject, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router, RouterModule } from '@angular/router';
import { BehaviorSubject, map } from 'rxjs';
import { AccessiblePressDirective } from 'src/app/directives/accessible-press.directive';
import { FiatCurrencies } from 'src/app/enums/fiat-currencies';
import { AllCurrenciesService } from 'src/app/services/all-currencies/all-currencies.service';
import { ThemesService } from 'src/app/services/themes/themes.service';
import { environment } from 'src/environments/environment';
import { CurrenciesMenuComponent } from '../currencies-menu/currencies-menu.component';
import { FiatCurrenciesStoreService } from 'src/app/stores';
import { FiatCurrency } from 'projects/central-hash-api-client/src/lib/models/fiat-currencies/fiat-currency';
import { Currency } from 'projects/central-hash-api-client/src/lib/models/currencies/currency';
import { isFiatCurrency } from 'src/app/type-guards/is-fiat-currency';

@Component({
  selector: 'app-tool-bar',
  standalone: true,
  imports: [
    RouterModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatButtonModule,
    MatChipsModule,
    MatMenuModule,
    MatSidenavModule,
    MatDividerModule,
    RouterModule,
    AccessiblePressDirective,
    NgIf,
    AsyncPipe,
    CurrenciesMenuComponent,
  ],
  templateUrl: './tool-bar.component.html',
  styleUrls: ['./tool-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToolBarComponent {
  private readonly _router = inject(Router);
  private readonly _allCurrenciesService = inject(AllCurrenciesService);
  private readonly _themesService = inject(ThemesService);
  private readonly _breakpointObserver = inject(BreakpointObserver);
  private readonly _fiatCurrenciesStore = inject(FiatCurrenciesStoreService);

  public showFiller = false;
  public readonly fiatCurrencies = FiatCurrencies;

  private readonly _drawerState$ = new BehaviorSubject<boolean>(false);
  public readonly drawerState$ = this._drawerState$.asObservable();
  public readonly theme$ = this._themesService.theme$;
  public readonly isDesktop$ = this._breakpointObserver
    .observe('(max-width: 1024px)')
    .pipe(map(value => !value.matches));

  constructor(@Inject(DOCUMENT) private readonly _document: Document) {}

  public changeLocaleServer(locale: string): void {
    this._document.location.href = `${environment.appHostUrl}/${locale}${this._router.routerState.snapshot.url}`;
  }

  public changeDefaultCurrency(currency: FiatCurrency | Currency): void {
    if (isFiatCurrency(currency)) {
      this._allCurrenciesService.setDefaultCurrency = currency;
    }
  }

  public changeTheme(theme: 'dark-mode' | 'light-mode'): void {
    this._themesService.setTheme = theme;
  }

  public changeDrowerState(): void {
    if (!this._drawerState$.value) {
      this._drawerState$.next(!this._drawerState$.value);
      return;
    }

    // #TODO: Remove this timeout when the bug is fixed
    setTimeout(() => {
      this._drawerState$.next(!this._drawerState$.value);
    }, 150);
  }

  public get allFiatCurrencies(): Array<FiatCurrency> {
    return this._fiatCurrenciesStore.findAll;
  }
}
