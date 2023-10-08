import { TestBed } from '@angular/core/testing';

import { UserEntity } from './user-entity.service';

describe('UserEntity', () => {
  let entity: UserEntity;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    entity = TestBed.inject(UserEntity);
  });

  it('should be created', () => {
    expect(entity).toBeTruthy();
  });
});
