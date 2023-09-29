import { TestBed } from '@angular/core/testing';
import { AllCurrenciesService } from './all-currencies.service';

describe('AllCurrenciesService', () => {
  let service: AllCurrenciesService | null = null;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllCurrenciesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
