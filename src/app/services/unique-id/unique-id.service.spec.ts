import { TestBed } from '@angular/core/testing';
import { UniqueIdService } from './unique-id.service';

describe('UniqueIdService', () => {
  let service: UniqueIdService | null = null;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UniqueIdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
