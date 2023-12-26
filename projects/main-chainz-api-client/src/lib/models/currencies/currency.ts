import { Currencies } from 'src/app/enums/currencies';

export type Currency = {
  id: Currencies;

  name: string;

  price: number;

  priceChange24h: number;

  marketCap: number;

  updatedAt: Date;
};
