import { ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';
import { MatDrawer, MatSidenavModule } from '@angular/material/sidenav';
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
  ],
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class SidenavComponent {
  @ViewChild(MatDrawer)
  public readonly drawer!: MatDrawer;

  public toggleDrawer(): void {
    this.drawer.toggle();
  }
}
