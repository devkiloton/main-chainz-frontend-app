import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckHistoryComponent } from './check-history.component';

describe('CheckHistoryComponent', () => {
  let component: CheckHistoryComponent;
  let fixture: ComponentFixture<CheckHistoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CheckHistoryComponent]
    });
    fixture = TestBed.createComponent(CheckHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
