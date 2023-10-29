import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, Inject, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { Router } from '@angular/router';
import { AccessiblePressDirective } from 'src/app/directives/accessible-press.directive';
import { Locales } from 'src/app/enums/locales';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-change-locale-button',
  standalone: true,
  imports: [MatIconModule, MatButtonModule, MatMenuModule, AccessiblePressDirective],
  templateUrl: './change-locale-button.component.html',
  styleUrls: ['./change-locale-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChangeLocaleButtonComponent {
  private readonly _router = inject(Router);
  public readonly locales = Locales;

  constructor(@Inject(DOCUMENT) private readonly _document: Document) {}

  public changeLocaleServer(locale: string): void {
    this._document.location.href = `${environment.appHostUrl}/${locale}${this._router.routerState.snapshot.url}`;
  }
}
