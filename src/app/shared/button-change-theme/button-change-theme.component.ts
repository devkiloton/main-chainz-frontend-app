import { AsyncPipe, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { ThemesService } from 'src/app/services/themes/themes.service';

@Component({
  selector: 'app-button-change-theme',
  standalone: true,
  imports: [NgIf, AsyncPipe, ButtonModule],
  templateUrl: './button-change-theme.component.html',
  styleUrls: ['./button-change-theme.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonChangeThemeComponent {
  private readonly _themesService = inject(ThemesService);

  public readonly theme$ = this._themesService.theme$;

  public changeTheme(theme: 'dark-mode' | 'light-mode'): void {
    this._themesService.setTheme = theme;
  }
}
