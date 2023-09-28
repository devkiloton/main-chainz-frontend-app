import { DOCUMENT, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, Inject, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router, RouterModule } from '@angular/router';
import { AccessiblePressDirective } from 'src/app/directives/accessible-press.directive';
import { FiatCurrencies } from 'src/app/enums/fiat-currencies';
import { LocalStorageService } from 'src/app/services/local-storage/local-storage.service';
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
  ],
  templateUrl: './tool-bar.component.html',
  styleUrls: ['./tool-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToolBarComponent {
  private readonly _router = inject(Router);
  private readonly _localStorageService = inject(LocalStorageService);
  private readonly _themesService = inject(ThemesService);

  public readonly fiatCurrencies = FiatCurrencies;

  constructor(@Inject(DOCUMENT) private readonly _document: Document) {}

  public changeLocaleServer(locale: string): void {
    this._document.location.href = `${environment.appHostUrl}/${locale}${this._router.routerState.snapshot.url}`;
  }

  public changeDefaultCurrency(currency: FiatCurrencies): void {
    this._localStorageService.setDefaultCurrency = currency;
  }

  public changeTheme(theme: 'dark-mode' | 'light-mode'): void {
    this._themesService.setTheme = theme;
  }

  public getTheme(): 'dark-mode' | 'light-mode' {
    return this._themesService.getTheme();
  }
}
