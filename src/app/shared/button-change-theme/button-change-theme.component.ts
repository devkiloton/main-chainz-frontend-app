import { AsyncPipe, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AccessiblePressDirective } from 'src/app/directives/accessible-press.directive';
import { ThemesService } from 'src/app/services/themes/themes.service';

@Component({
  selector: 'app-button-change-theme',
  standalone: true,
  imports: [MatIconModule, MatButtonModule, NgIf, AsyncPipe, AccessiblePressDirective],
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
