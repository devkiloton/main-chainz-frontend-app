import { Injectable } from '@angular/core';
import { FiatCurrencies } from 'src/app/enums/fiat-currencies';
import { Locales } from 'src/app/enums/locales';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  public set setDefaultCurrency(currency: FiatCurrencies) {
    localStorage.setItem('currency', currency);
  }

  public get getDefaultCurrency(): FiatCurrencies {
    return (localStorage.getItem('currency') as FiatCurrencies | null) ?? FiatCurrencies.usd;
  }

  public set setDefaultLocale(locale: Locales) {
    localStorage.setItem('locale', locale);
  }

  public get getDefaultLocale(): Locales {
    return (localStorage.getItem('locale') as Locales | null) ?? Locales.en_us;
  }

  public set setDefaultTheme(theme: 'dark-mode' | 'light-mode') {
    localStorage.setItem('theme', theme);
  }

  public get getDefaultTheme(): 'dark-mode' | 'light-mode' {
    return (localStorage.getItem('theme') as 'dark-mode' | 'light-mode' | null) ?? 'light-mode';
  }

  public set setAuthToken(value: string) {
    localStorage.setItem('auth_token', value);
  }

  public get getAuthToken(): string | null {
    return localStorage.getItem('auth_token');
  }

  public removeAuthToken(): void {
    localStorage.removeItem('auth_token');
  }
}
