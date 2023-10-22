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

  public set setAccessToken(value: string) {
    localStorage.setItem('access_token', value);
  }

  public get getAccessToken(): string | null {
    return localStorage.getItem('access_token');
  }

  public removeAccessToken(): void {
    localStorage.removeItem('access_token');
  }

  public set setRefreshToken(value: string) {
    localStorage.setItem('refresh_token', value);
  }

  public get getRefreshToken(): string | null {
    return localStorage.getItem('refresh_token');
  }

  public removeRefreshToken(): void {
    localStorage.removeItem('refresh_token');
  }
}
