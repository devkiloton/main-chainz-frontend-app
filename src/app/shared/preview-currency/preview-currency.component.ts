import { AsyncPipe, CurrencyPipe, NgIf } from '@angular/common';
import type { OnInit } from '@angular/core';
import { ChangeDetectionStrategy, Component, inject, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import type { Observable } from 'rxjs';
import { map, of } from 'rxjs';
import { ThemesService } from 'src/app/services/themes/themes.service';

@Component({
  selector: 'app-preview-currency',
  standalone: true,
  imports: [NgIf, MatIconModule, CurrencyPipe, AsyncPipe],
  templateUrl: './preview-currency.component.html',
  styleUrls: ['./preview-currency.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PreviewCurrencyComponent implements OnInit {
  private readonly _themes$ = inject(ThemesService);
  public readonly theme$ = this._themes$.theme$;

  @Input({ required: true })
  public name!: string;

  @Input({ required: true })
  public baseFiatCurrency!: string;

  @Input({ required: true })
  public price!: number;

  @Input({ required: true })
  public priceChange24h!: number;

  public priceChange24hAbs!: number;

  public ngOnInit(): void {
    this.priceChange24hAbs = Math.abs(this.priceChange24h);
  }

  public priceChange24hStatus(): Observable<string> {
    if (this.priceChange24h === 0) {
      return of('neutral');
    }
    return this.theme$.pipe(
      map(theme => {
        if (this.priceChange24h > 0) {
          return 'bull';
        } else if (this.priceChange24h < 0 && theme === 'dark-mode') {
          return 'bear-light';
        }
        return 'bear';
      }),
    );
  }

  public get priceChange24hIcon(): string {
    if (this.priceChange24h < -10) {
      return 'warning';
    }
    if (this.priceChange24h > 10) {
      return 'rocket_launch';
    }
    if (this.priceChange24h > 5) {
      return 'keyboard_double_arrow_up';
    }
    if (this.priceChange24h < -5) {
      return 'keyboard_double_arrow_down';
    }
    if (this.priceChange24h > 0) {
      return 'keyboard_arrow_up';
    }
    if (this.priceChange24h < 0) {
      return 'keyboard_arrow_down';
    }
    return 'remove';
  }
}
