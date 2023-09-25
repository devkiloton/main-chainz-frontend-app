import type { ComponentFixture } from '@angular/core/testing';
import { TestBed } from '@angular/core/testing';
import type { WalletIdentifiers } from 'src/app/constants/wallet-indentifiers';
import { LocalStorageService } from 'src/app/services/local-storage/local-storage.service';
import type { BitcoinWallet } from 'src/app/types/bitcoin-walet';
import { WalletCardComponent } from './wallet-card.component';

const mocks: BitcoinWallet & WalletIdentifiers = {
  address: 'bc1qlpj4hm7ujrhtnv73exxvjl74ncnc3ncjxm6cdl',
  balance: 2206844,
  confirmedBalance: 2206844,
  transactionsReference: [],
  unconfirmedBalance: 0,
  code: 'BTC',
  name: 'bitcoin',
};

describe('WalletCardComponent', () => {
  let component: WalletCardComponent | null = null;
  let fixture: ComponentFixture<WalletCardComponent> | null = null;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [WalletCardComponent],
      providers: [
        {
          provide: LocalStorageService,
          useValue: {
            getDefaultCurrency: 'USD',
            getCurrenciesPriceUSD: {
              prices: [
                {
                  code: 'btc',
                  priceUSD: 1,
                },
              ],
              date: new Date(),
            },
            getFiatCurrenciesPriceUSD: {
              prices: [
                {
                  code: 'usd',
                  priceUSD: 1,
                },
              ],
              date: new Date(),
            },
          },
        },
      ],
    });
    fixture = TestBed.createComponent(WalletCardComponent);
    TestBed.inject(LocalStorageService);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    if (!fixture || !component) {
      return;
    }
    component.wallet = mocks;
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
});
