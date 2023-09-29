import { inject, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Locales } from 'src/app/enums/locales';
import { LocalStorageService } from '../local-storage/local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class LocalesService {
  private readonly _localStorageService = inject(LocalStorageService);

  private readonly _locale$ = new BehaviorSubject<Locales>(Locales.en_us);
  public locale$ = this._locale$.asObservable();

  public set setDefaultLocale(locale: Locales) {
    this._locale$.next(locale);
    this._localStorageService.setDefaultLocale = locale;
  }

  public get getDefaultLocale(): Locales {
    return this._localStorageService.getDefaultLocale;
  }
}
