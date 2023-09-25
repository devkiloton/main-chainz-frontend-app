import type { ChipOption } from '../types/chip-option';

export const allCurrenciesChipOptions: Array<ChipOption> = [
  {
    currencyName: 'Bitcoin',
    iconUrl: 'assets/images/bitcoin.svg',
    isAvailable: true,
    isDefault: true,
  },
  {
    currencyName: 'Ethereum',
    iconUrl: 'assets/images/ethereum.svg',
    isAvailable: false,
    isDefault: false,
  },
  {
    currencyName: 'Monero',
    iconUrl: 'assets/images/monero.svg',
    isAvailable: false,
    isDefault: false,
  },
];
