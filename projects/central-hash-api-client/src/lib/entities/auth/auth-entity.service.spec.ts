import { TestBed } from '@angular/core/testing';

import { AuthEntity } from './auth-entity.service';

describe('AuthEntity', () => {
  let entity: AuthEntity;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    entity = TestBed.inject(AuthEntity);
  });

  it('should be created', () => {
    expect(entity).toBeTruthy();
  });
});
