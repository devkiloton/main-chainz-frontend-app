import { BreakpointObserver } from '@angular/cdk/layout';
import { AsyncPipe, NgFor } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';
import { MatRippleModule } from '@angular/material/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { map } from 'rxjs';

export type Tile = {
  color: string;
  cols: number;
  rows: number;
  text: string;
  icon: string;
  route: string;
  isActive: boolean | null;
};

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatGridListModule, MatIconModule, MatChipsModule, MatRippleModule, NgFor, AsyncPipe],
})
export default class HomeComponent {
  private readonly _router = inject(Router);
  private readonly _breakpointObserver = inject(BreakpointObserver);

  public readonly isHandset$ = this._breakpointObserver.observe(['(min-width: 768px)', '(min-width: 1024px)']).pipe(
    map(result => {
      if (result.breakpoints['(min-width: 1024px)'] === true) {
        return 3;
      }
      if (result.breakpoints['(min-width: 768px)'] === true) {
        return 2;
      }
      return 1;
    }),
  );

  public tiles: Array<Tile> = [
    {
      text: $localize`Check wallet` as string,
      cols: 1,
      rows: 1,
      color: '#673ab7',
      icon: 'manage_search',
      route: 'check-wallet',
      isActive: true,
    },
    {
      text: $localize`Check transaction history` as string,
      cols: 1,
      rows: 1,
      color: '#673ab7',
      icon: 'receipt',
      route: 'check-transaction-history',
      isActive: true,
    },
    {
      text: $localize`Create wallet` as string,
      cols: 1,
      rows: 1,
      color: '#673ab7',
      icon: 'account_balance_wallet',
      route: 'create-wallet',
      isActive: null,
    },
    {
      text: $localize`Create transfer` as string,
      cols: 1,
      rows: 1,
      color: '#673ab7',
      icon: 'sync_alt',
      route: 'create-transfer',
      isActive: null,
    },
    {
      text: $localize`Check transaction fee` as string,
      cols: 1,
      rows: 1,
      color: '#673ab7',
      icon: 'local_gas_station',
      route: 'check-transaction-fee',
      isActive: null,
    },
    {
      text: $localize`Check transfer` as string,
      cols: 1,
      rows: 1,
      color: '#673ab7',
      icon: 'done_all',
      route: 'check-transfer',
      isActive: null,
    },
  ];

  public navigateTo(data: { route: string; isActive: boolean | null }): void {
    if (data.isActive === true) {
      this._router.navigate([data.route]);
    }
  }
}
