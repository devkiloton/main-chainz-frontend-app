import { isPlatformBrowser } from '@angular/common';
import type { OnInit } from '@angular/core';
import { Component, Inject, inject, PLATFORM_ID } from '@angular/core';
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
  constructor(@Inject(PLATFORM_ID) private readonly _platformId: object) {}

  public async ngOnInit(): Promise<void> {
    if (isPlatformBrowser(this._platformId)) {
      this._themesService.setTheme = this._localStorageService.getDefaultTheme;
    }
  }
}
