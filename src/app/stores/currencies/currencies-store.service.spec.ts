import { TestBed } from '@angular/core/testing';

import { CurrenciesStoreService } from './currencies-store.service';

describe('CurrenciesStoreService', () => {
  let service: CurrenciesStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CurrenciesStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
