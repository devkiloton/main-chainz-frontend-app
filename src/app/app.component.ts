import { isPlatformBrowser } from '@angular/common';
import type { OnInit } from '@angular/core';
import { Component, Inject, inject, LOCALE_ID, PLATFORM_ID } from '@angular/core';
// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import { MatIconRegistry } from '@angular/material/icon';
// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import { DomSanitizer } from '@angular/platform-browser';
// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import { Locales } from './enums/locales';
import { getFiatAccordingLocale } from './helpers/get-fiat-according-locale';
import { LocalStorageService } from './services/local-storage/local-storage.service';
import { ThemesService } from './services/themes/themes.service';
import { AuthStoreService } from './stores/auth/auth-store.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  private readonly _localStorageService = inject(LocalStorageService);
  private readonly _themesService = inject(ThemesService);
  private readonly _authStore = inject(AuthStoreService);

  public readonly isAuthenticated = this._authStore.isAuthenticated;
  constructor(
    @Inject(PLATFORM_ID) private readonly _platformId: object,
    @Inject(LOCALE_ID) private readonly _localeId: Locales,
    private readonly _matIconRegistry: MatIconRegistry,
    private readonly _domSanitizer: DomSanitizer,
  ) {}

  public async ngOnInit(): Promise<void> {
    const isDefaultCurrencyUSD = this._localStorageService.getDefaultCurrency === 'USD';
    if (isPlatformBrowser(this._platformId)) {
      this._localStorageService.setDefaultCurrency = isDefaultCurrencyUSD
        ? getFiatAccordingLocale(this._localeId)
        : this._localStorageService.getDefaultCurrency;
      this._themesService.setTheme = this._localStorageService.getDefaultTheme;
    }
    this._matIconRegistry.addSvgIcon(
      'decentralized_protocols',
      this._domSanitizer.bypassSecurityTrustResourceUrl('../assets/images/decentralized-protocols.svg'),
    );
  }
}
