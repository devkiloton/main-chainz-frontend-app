import { BreakpointObserver } from '@angular/cdk/layout';
import { AsyncPipe, CurrencyPipe } from '@angular/common';
import type { AfterViewInit, OnInit } from '@angular/core';
import { ChangeDetectionStrategy, Component, inject, Input, ViewChild } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginator, MatPaginatorIntl, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import type { Currency } from 'projects/central-hash-api-client/src/lib/models/currencies/currency';
import { of, switchMap } from 'rxjs';
import { getPaginatorIntl } from 'src/app/helpers/paginator-intl';

export type UserData = {
  id: string;
  name: string;
  progress: string;
  fruit: string;
};

@Component({
  selector: 'app-table-prices',
  standalone: true,
  imports: [
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatSortModule,
    MatInputModule,
    AsyncPipe,
    CurrencyPipe,
  ],
  providers: [
    {
      provide: MatPaginatorIntl,
      useValue: getPaginatorIntl(),
    },
  ],
  templateUrl: './table-prices.component.html',
  styleUrls: ['./table-prices.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TablePricesComponent implements OnInit, AfterViewInit {
  private readonly _breakPointObserver = inject(BreakpointObserver);

  @Input()
  public currencies!: Array<Currency>;

  @ViewChild(MatPaginator) public paginator!: MatPaginator;
  @ViewChild(MatSort) public sort!: MatSort;

  public displayedColumns: Array<string> = ['name', 'id', 'price', 'marketCap', 'priceChange24h'];
  public dataSource!: MatTableDataSource<Currency>;

  public columns$ = this._breakPointObserver.observe(['(max-width: 768px)']).pipe(
    switchMap(result => {
      if (result.matches) {
        return of(['name', 'price', 'priceChange24h']);
      }
      return of(['name', 'id', 'price', 'marketCap', 'priceChange24h']);
    }),
  );

  public ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.currencies);
  }

  public ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  public applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
