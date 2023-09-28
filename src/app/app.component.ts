import type { OnInit } from '@angular/core';
import { Component, inject } from '@angular/core';
import { getAllCurrenciesPricesUSD } from './helpers/getAllCurrenciesPricesUSD';
import { LocalStorageService } from './services/local-storage/local-storage.service';
import { ThemesService } from './services/themes/themes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  private readonly _localStorageService = inject(LocalStorageService);
  private readonly _themesService = inject(ThemesService);

  constructor() {
    this._themesService.setTheme = this._localStorageService.getDefaultTheme;
  }

  public async ngOnInit(): Promise<void> {
    const { currencies, fiatCurrencies } = await getAllCurrenciesPricesUSD();
    this._localStorageService.setCurrenciesPriceUSD = { date: new Date(), prices: currencies };
    this._localStorageService.setFiatCurrenciesPriceUSD = { date: new Date(), prices: fiatCurrencies };
  }
}
