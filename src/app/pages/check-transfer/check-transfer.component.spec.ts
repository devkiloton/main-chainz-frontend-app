import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckTransferComponent } from './check-transfer.component';

describe('CheckTransferComponent', () => {
  let component: CheckTransferComponent;
  let fixture: ComponentFixture<CheckTransferComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CheckTransferComponent]
    });
    fixture = TestBed.createComponent(CheckTransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
