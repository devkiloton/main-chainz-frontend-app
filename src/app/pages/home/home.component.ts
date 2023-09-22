import { NgFor } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
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
}


@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatGridListModule, MatIconModule, NgFor],
})
export default class HomeComponent {
  private readonly _router = inject(Router);
  public tiles: Array<Tile> = [
    {text: 'Verificar carteira', cols: 1, rows: 1, color: '#1E559C', icon: 'manage_search', route: 'check-wallet'},
    {text: 'Extrato de carteira', cols: 1, rows: 1, color: '#1E559C', icon: 'receipt', route: 'check-transaction-history'},
    {text: 'Criar carteira', cols: 1, rows: 1, color: '#1E559C', icon: 'account_balance_wallet', route: 'create-wallet'},
    {text: 'Fazer uma transação', cols: 1, rows: 1, color: '#1E559C', icon: 'sync_alt', route: 'create-transfer'},
    { text: 'Calcular taxa de transação', cols: 1, rows: 1, color: '#1E559C', icon: 'local_gas_station', route: 'check-transaction-fee'},
    {text: 'Verificar transação', cols: 1, rows: 1, color: '#1E559C', icon: 'done_all', route: 'check-transfer'},
  ];

  public navigateTo(route: string): void {
    this._router.navigate([route]);
  }
}
