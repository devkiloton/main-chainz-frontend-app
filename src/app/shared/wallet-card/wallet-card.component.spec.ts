import type { ComponentFixture} from '@angular/core/testing';
import { TestBed } from '@angular/core/testing';
import type { WalletIdentifiers } from 'src/app/constants/wallet-indentifiers';
import type { BitcoinWallet } from 'src/app/types/bitcoin-walet';
import { WalletCardComponent } from './wallet-card.component';

const mocks: BitcoinWallet & WalletIdentifiers = {
  address: "bc1qlpj4hm7ujrhtnv73exxvjl74ncnc3ncjxm6cdl",
  balance: 2206844,
  confirmedBalance: 2206844,
  transactionsReference: [],
  unconfirmedBalance: 0,
  code: 'BTC',
  name: 'bitcoin'
}

describe('WalletCardComponent', () => {
  let component: WalletCardComponent | null = null;
  let fixture: ComponentFixture<WalletCardComponent> | null = null;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [WalletCardComponent]
    });
    fixture = TestBed.createComponent(WalletCardComponent);
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
