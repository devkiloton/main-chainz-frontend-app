import { AsyncPipe, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { ThemesService } from 'src/app/services/themes/themes.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [NgIf, AsyncPipe, MatDividerModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
  private readonly _themesService = inject(ThemesService);

  public readonly theme$ = this._themesService.theme$;
}
