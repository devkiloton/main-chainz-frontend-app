import { NgFor } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import {MatChipsModule} from '@angular/material/chips';
import {MatGridListModule} from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';

export type Tile = {
  color: string;
  cols: number;
  rows: number;
  text: string;
  icon: string;
  route: string
  isActive: boolean | null
}


@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatGridListModule, MatIconModule, MatChipsModule, NgFor],
})
export default class HomeComponent {
  private readonly _router = inject(Router);
  public tiles: Array<Tile> = [
    {text: 'Verificar carteira', cols: 1, rows: 1, color: '#673ab7', icon: 'manage_search', route: 'check-wallet', isActive: true},
    {text: 'Extrato de carteira', cols: 1, rows: 1, color: '#673ab7', icon: 'receipt', route: 'check-transaction-history', isActive: true},
    {text: 'Criar carteira', cols: 1, rows: 1, color: '#673ab7', icon: 'account_balance_wallet', route: 'create-wallet', isActive: null},
    {text: 'Fazer uma transação', cols: 1, rows: 1, color: '#673ab7', icon: 'sync_alt', route: 'create-transfer', isActive: null},
    {text: 'Calcular taxa de transação', cols: 1, rows: 1, color: '#673ab7', icon: 'local_gas_station', route: 'check-transaction-fee', isActive: null},
    {text: 'Verificar transação', cols: 1, rows: 1, color: '#673ab7', icon: 'done_all', route: 'check-transfer', isActive: null},
  ];

  public navigateTo(data: {route: string, isActive: boolean | null}): void {
    if (data.isActive === true) {
      this._router.navigate([data.route]);
    }
  }
}
