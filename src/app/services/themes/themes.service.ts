import { DOCUMENT } from '@angular/common';
import { Inject, inject, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LocalStorageService } from '../local-storage/local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class ThemesService {
  private readonly _localStorageService = inject(LocalStorageService);

  private readonly _theme$ = new BehaviorSubject<'dark-mode' | 'light-mode'>('light-mode');
  public theme$ = this._theme$.asObservable();

  constructor(@Inject(DOCUMENT) private readonly _document: Document) {}

  public set setTheme(theme: 'dark-mode' | 'light-mode') {
    this._document.body.classList.remove('dark-mode', 'light-mode');
    this._document.body.classList.add(theme);
    this._theme$.next(theme);
    this._localStorageService.setDefaultTheme = theme;
  }

  public get getTheme(): 'dark-mode' | 'light-mode' {
    return this._document.body.classList.contains('dark-mode') ? 'dark-mode' : 'light-mode';
  }
}
