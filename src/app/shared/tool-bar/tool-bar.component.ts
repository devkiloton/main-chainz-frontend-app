import { BreakpointObserver } from '@angular/cdk/layout';
import { AsyncPipe, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, inject, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { BehaviorSubject, map } from 'rxjs';
import { AccessiblePressDirective } from 'src/app/directives/accessible-press/accessible-press.directive';
import { FiatCurrencies } from 'src/app/enums/fiat-currencies';
import { ThemesService } from 'src/app/services/themes/themes.service';
import { ButtonChangeCurrencyComponent } from '../button-change-currency/button-change-currency.component';
import { ButtonChangeThemeComponent } from '../button-change-theme/button-change-theme.component';
import { ChangeLocaleButtonComponent } from '../change-locale-button/change-locale-button.component';
import { TreeComponent } from './components/tree/tree.component';

@Component({
  selector: 'app-tool-bar',
  standalone: true,
  imports: [
    RouterModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatDividerModule,
    RouterModule,
    AccessiblePressDirective,
    NgIf,
    AsyncPipe,
    TreeComponent,
    ButtonChangeThemeComponent,
    ButtonChangeCurrencyComponent,
    ChangeLocaleButtonComponent,
  ],
  templateUrl: './tool-bar.component.html',
  styleUrls: ['./tool-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToolBarComponent {
  private readonly _themesService = inject(ThemesService);
  private readonly _breakpointObserver = inject(BreakpointObserver);

  public showFiller = false;
  public readonly fiatCurrencies = FiatCurrencies;

  private readonly _drawerState$ = new BehaviorSubject<boolean>(false);
  public readonly drawerState$ = this._drawerState$.asObservable();
  public readonly theme$ = this._themesService.theme$;
  public readonly isDesktop$ = this._breakpointObserver
    .observe('(max-width: 1024px)')
    .pipe(map(value => !value.matches));

  @Output()
  public readonly sideNavToggle = new EventEmitter<void>();

  public toggleSideNav(): void {
    this.sideNavToggle.emit();
  }
}
