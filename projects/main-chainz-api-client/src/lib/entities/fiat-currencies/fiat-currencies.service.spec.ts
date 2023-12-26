import { TestBed } from '@angular/core/testing';

import { FiatCurrenciesService } from './fiat-currencies.service';

describe('FiatCurrenciesService', () => {
  let service: FiatCurrenciesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FiatCurrenciesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
