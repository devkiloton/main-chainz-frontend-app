/* eslint-disable max-lines-per-function */
import type { OnInit } from '@angular/core';
import { ChangeDetectionStrategy, Component, Input, ViewChild } from '@angular/core';
import type {
  ApexChart,
  ApexFill,
  ApexNonAxisChartSeries,
  ApexPlotOptions,
  ApexStroke,
  ChartComponent,
} from 'ng-apexcharts';
import { NgApexchartsModule } from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  labels: Array<string>;
  plotOptions: ApexPlotOptions;
  fill: ApexFill;
  stroke: ApexStroke;
};

@Component({
  selector: 'app-radial-chart',
  standalone: true,
  imports: [NgApexchartsModule],
  templateUrl: './radial-chart.component.html',
  styleUrls: ['./radial-chart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RadialChartComponent implements OnInit {
  @ViewChild('chart') public chart!: ChartComponent;
  public chartOptions!: ChartOptions;

  private _label = '';
  private _value = 0;

  @Input() public set label(data: string) {
    this._label = data;
    console.log(this._label);
  }

  @Input() public set value(data: string) {
    this._value = Number(data);
    console.log(this._value);
  }

  public ngOnInit(): void {
    this.chartOptions = {
      series: [this._value],
      chart: {
        height: 350,
        type: 'radialBar',
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        radialBar: {
          startAngle: -135,
          endAngle: 135,
          hollow: {
            margin: 0,
            size: '70%',
            background: '#ffffff00',
            image: undefined,
            position: 'front',
            dropShadow: {
              enabled: false,
              top: 3,
              left: 0,
              blur: 4,
              opacity: 0.24,
            },
          },
          track: {
            background: 'var(--mat-stepper-header-done-state-icon-background-color',
            opacity: 0.1,
            strokeWidth: '67%',
            margin: 0, // margin is in pixels
            dropShadow: {
              enabled: false,
              top: -3,
              left: 0,
              blur: 4,
              opacity: 0.35,
            },
          },

          dataLabels: {
            show: true,
            name: {
              offsetY: -10,
              show: true,
              color: 'var(--mdc-checkbox-selected-focus-icon-color)',
              fontSize: '17px',
            },
            value: {
              formatter(val) {
                return parseInt(val.toString(), 10).toString();
              },
              color: 'var(--mat-stepper-header-selected-state-icon-background-color)',
              fontSize: '36px',
              show: true,
            },
          },
        },
      },
      fill: {
        type: 'gradient',
        colors: ['#53FF95'],
        gradient: {
          shade: 'dark',
          type: 'horizontal',
          shadeIntensity: 1,
          gradientToColors: ['#FF4D4D'],
          inverseColors: true,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 100],
        },
      },
      stroke: {
        lineCap: 'round',
      },
      labels: [this._label],
    };
  }
}
