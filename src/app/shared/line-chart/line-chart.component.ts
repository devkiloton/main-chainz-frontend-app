import type { OnInit } from '@angular/core';
import { ChangeDetectionStrategy, Component, DestroyRef, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import type { ChartConfiguration, ChartDataset} from 'chart.js/auto';
import { Chart } from 'chart.js/auto';
import { getLastSevenDaysDate } from 'src/app/helpers/getLastSevenDaysDate';
import { AllCurrenciesService } from 'src/app/services/all-currencies/all-currencies.service';
import { LocalesService } from 'src/app/services/locales/locales.service';
import { ThemesService } from 'src/app/services/themes/themes.service';

@Component({
  selector: 'app-line-chart',
  standalone: true,
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LineChartComponent implements OnInit {
  private readonly _allCurrenciesService = inject(AllCurrenciesService);
  private readonly _localesService = inject(LocalesService);
  private readonly _themesService = inject(ThemesService);
  private readonly _destroyRef = inject(DestroyRef);

  public chart!: Chart;

  public ngOnInit(): void {
    const chartConfig: ChartConfiguration<'line'> = {
      type: 'line',
      data: {
        labels: getLastSevenDaysDate(this._localesService.getDefaultLocale).reverse(),
        datasets: [
          {
            label: `${this._allCurrenciesService.getDefaultCurrency}`,
            data: [12, 19, 3, 5, 2, 3, 8],
            borderWidth: 2,
            tension: 0.4,
            borderColor: this._themesService.getTheme === 'dark-mode' ? '#FFFFFF' : '#000000',
          },
        ],
      },
      options: {
        plugins: {
          legend: {
             display: false
          }
       },
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          // eslint-disable-next-line id-length
          y: {
            beginAtZero: true,
            grace: '25%',
          },
          // eslint-disable-next-line id-length
          x: {
            grid: {
              display: false,
            }
          }
        },
      },
    }
    this._themesService.theme$.pipe(takeUntilDestroyed(this._destroyRef)).subscribe((theme) => {
     (chartConfig.data.datasets[0] as ChartDataset).borderColor = theme === 'dark-mode' ? '#FFFFFF' : '#000000'
      this.chart.update()
    })
    this.chart = new Chart('canvas', chartConfig)

  }
}
