import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import type { Currency } from 'projects/central-hash-api-client/src/lib/models/currencies/currency';
import { CurrenciesService } from 'projects/central-hash-api-client/src/public-api';
import type { Observable } from 'rxjs';
import { map, of, switchMap } from 'rxjs';
import { questionsAndAnswers } from 'src/app/constants/home/questions-and-answers';
import { supportedCurrencies } from 'src/app/constants/supported-currencies';
import { ShapeBehindDirective } from 'src/app/directives/shape-behind/shape-behind.directive';
import { ThemesService } from 'src/app/services/themes/themes.service';
import { ModalConverterComponent } from 'src/app/shared/modal-converter/modal-converter.component';
import { TablePricesComponent } from 'src/app/shared/table-prices/table-prices.component';
import { CurrenciesStoreService } from 'src/app/stores';
import { ParticleBgComponent } from '../../shared/particle-bg/particle-bg.component';
import { CardBuyComponent } from './components/card-buy/card-buy.component';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    MatIconModule,
    MatChipsModule,
    MatExpansionModule,
    NgFor,
    ParticleBgComponent,
    TablePricesComponent,
    AsyncPipe,
    NgIf,
    CardBuyComponent,
    ModalConverterComponent,
    ShapeBehindDirective,
    MatDividerModule,
  ],
})
export default class HomeComponent {
  private readonly _themes$ = inject(ThemesService);
  public readonly theme$ = this._themes$.theme$;
  private readonly _currencies = inject(CurrenciesStoreService);
  private readonly _currenciesClient = inject(CurrenciesService);
  public readonly currenciesBroadCast$: Observable<Array<Currency> | null> = this._currencies.broadCast$.pipe(
    switchMap(currencies => (currencies.length > 0 ? of(currencies) : of(null))),
  );

  public supportedCurrencies$ = this._currencies.broadCast$.pipe(
    map(currencies => {
      const currenciesCard = currencies.filter(currency => supportedCurrencies.includes(currency.id));
      return currenciesCard;
    }),
  );

  public readonly fearAndGreedIndex$ = this._currenciesClient.fearAndGreedIndex();

  public readonly questionsAndAnswers = questionsAndAnswers;
}
