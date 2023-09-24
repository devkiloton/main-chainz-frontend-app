import type { OnInit } from '@angular/core';
import { Component, inject } from '@angular/core';
import { getAllCurrenciesPricesUSD } from './helpers/getAllCurrenciesPricesUSD';
import { LocalStorageService } from './services/local-storage/local-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public readonly localStorageService = inject(LocalStorageService);
  public async ngOnInit(): Promise<void> {
    const { currencies, fiatCurrencies } = await getAllCurrenciesPricesUSD();
    this.localStorageService.setCurrenciesPriceUSD = {date: new Date(), prices: currencies};
    this.localStorageService.setFiatCurrenciesPriceUSD = {date: new Date(), prices: fiatCurrencies};
  }
}
