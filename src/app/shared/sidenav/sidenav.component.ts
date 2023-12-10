import { BreakpointObserver } from '@angular/cdk/layout';
import { AsyncPipe, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, ViewChild } from '@angular/core';
import { MatDrawer, MatSidenavModule } from '@angular/material/sidenav';
import { map } from 'rxjs';
import { AuthStoreService } from 'src/app/stores/auth/auth-store.service';
import { ButtonChangeCurrencyComponent } from '../button-change-currency/button-change-currency.component';
import { ButtonChangeThemeComponent } from '../button-change-theme/button-change-theme.component';
import { ChangeLocaleButtonComponent } from '../change-locale-button/change-locale-button.component';
import { TreeComponent } from '../tool-bar/components/tree/tree.component';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [
    MatSidenavModule,
    TreeComponent,
    ButtonChangeThemeComponent,
    ButtonChangeCurrencyComponent,
    ChangeLocaleButtonComponent,
    AsyncPipe,
    NgIf,
  ],
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class SidenavComponent {
  private readonly _authEntity = inject(AuthStoreService);
  private readonly _breakpointObserver = inject(BreakpointObserver);

  public readonly isAuthenticated = this._authEntity.isAuthenticated;
  public readonly isDesktop$ = this._breakpointObserver
    .observe('(max-width: 1024px)')
    .pipe(map(value => !value.matches));

  @ViewChild(MatDrawer)
  public readonly drawer!: MatDrawer;

  public toggleDrawer(): void {
    this.drawer.toggle();
  }
}
