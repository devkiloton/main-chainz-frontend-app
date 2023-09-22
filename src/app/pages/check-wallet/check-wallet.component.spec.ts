import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckWalletComponent } from './check-wallet.component';

describe('CheckWalletComponent', () => {
  let component: CheckWalletComponent;
  let fixture: ComponentFixture<CheckWalletComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CheckWalletComponent]
    });
    fixture = TestBed.createComponent(CheckWalletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
