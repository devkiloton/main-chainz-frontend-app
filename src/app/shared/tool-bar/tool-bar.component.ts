import { AsyncPipe, DOCUMENT, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, Inject, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router, RouterModule } from '@angular/router';
import { AccessiblePressDirective } from 'src/app/directives/accessible-press.directive';
import { FiatCurrencies } from 'src/app/enums/fiat-currencies';
import { AllCurrenciesService } from 'src/app/services/all-currencies/all-currencies.service';
import { ThemesService } from 'src/app/services/themes/themes.service';
import { environment } from 'src/environments/environment';

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
    AccessiblePressDirective,
    NgIf,
    AsyncPipe
  ],
  templateUrl: './tool-bar.component.html',
  styleUrls: ['./tool-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToolBarComponent {
  private readonly _router = inject(Router);
  private readonly _allCurrenciesService = inject(AllCurrenciesService);
  private readonly _themesService = inject(ThemesService);

  public readonly fiatCurrencies = FiatCurrencies;

  public readonly theme$ = this._themesService.theme$;

  constructor(@Inject(DOCUMENT) private readonly _document: Document) {}

  public changeLocaleServer(locale: string): void {
    this._document.location.href = `${environment.appHostUrl}/${locale}${this._router.routerState.snapshot.url}`;
  }

  public changeDefaultCurrency(currency: FiatCurrencies): void {
    this._allCurrenciesService.setDefaultCurrency = currency;
  }

  public changeTheme(theme: 'dark-mode' | 'light-mode'): void {
    this._themesService.setTheme = theme;
  }
}
