import type { GridTile } from '../types/grid-tile';

export const bitcoinServicesGridTiles: Array<GridTile> = [
  {
    text: $localize`Check wallet` as string,
    cols: 1,
    rows: 1,
    color: 'var(--mat-option-selected-state-label-text-color)',
    icon: 'manage_search',
    route: 'check-wallet',
    isActive: true,
  },
  {
    text: $localize`Check transaction history` as string,
    cols: 1,
    rows: 1,
    color: 'var(--mat-option-selected-state-label-text-color)',
    icon: 'receipt',
    route: 'check-transaction-history',
    isActive: null,
  },
  {
    text: $localize`Create wallet` as string,
    cols: 1,
    rows: 1,
    color: 'var(--mat-option-selected-state-label-text-color)',
    icon: 'account_balance_wallet',
    route: 'create-wallet',
    isActive: null,
  },
  {
    text: $localize`Create transfer` as string,
    cols: 1,
    rows: 1,
    color: 'var(--mat-option-selected-state-label-text-color)',
    icon: 'sync_alt',
    route: 'create-transfer',
    isActive: null,
  },
  {
    text: $localize`Check transaction fee` as string,
    cols: 1,
    rows: 1,
    color: 'var(--mat-option-selected-state-label-text-color)',
    icon: 'local_gas_station',
    route: 'check-transaction-fee',
    isActive: null,
  },
  {
    text: $localize`Check transfer` as string,
    cols: 1,
    rows: 1,
    color: 'var(--mat-option-selected-state-label-text-color)',
    icon: 'done_all',
    route: 'check-transfer',
    isActive: null,
  },
];
