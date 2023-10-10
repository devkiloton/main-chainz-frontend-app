import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { AuthStateService } from './auth-state.service';

describe('AuthStateService', () => {
  let service: AuthStateService | null = null;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(AuthStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
