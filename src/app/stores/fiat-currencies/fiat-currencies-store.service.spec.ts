import { TestBed } from '@angular/core/testing';
import { FiatCurrenciesStoreService } from './fiat-currencies-store.service';

describe('FiatCurrenciesStoreService', () => {
  let service: FiatCurrenciesStoreService | null = null;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FiatCurrenciesStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
