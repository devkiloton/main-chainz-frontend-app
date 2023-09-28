import { TestBed } from '@angular/core/testing';
import { ThemesService } from './themes.service';

describe('ThemesService', () => {
  let service: ThemesService | null = null;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThemesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
