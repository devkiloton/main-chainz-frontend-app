import type { ChipOption } from '../types/chip-option';

export const allCurrenciesChipOptions: Array<ChipOption> = [
  {
    currencyName: 'Bitcoin',
    iconUrl: 'assets/images/BTC.svg',
    isAvailable: true,
    isDefault: true,
  },
  {
    currencyName: 'Ethereum',
    iconUrl: 'assets/images/ETH.svg',
    isAvailable: false,
    isDefault: false,
  },
  {
    currencyName: 'Monero',
    iconUrl: 'assets/images/XMR.svg',
    isAvailable: false,
    isDefault: false,
  },
];
