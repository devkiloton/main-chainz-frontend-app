import { TestBed } from '@angular/core/testing';
import { LocalesService } from './locales.service';

describe('LocalesService', () => {
  let service: LocalesService | null = null;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
