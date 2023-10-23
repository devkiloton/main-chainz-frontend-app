import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonChangeCurrencyComponent } from './button-change-currency.component';

describe('ButtonChangeCurrencyComponent', () => {
  let component: ButtonChangeCurrencyComponent;
  let fixture: ComponentFixture<ButtonChangeCurrencyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ButtonChangeCurrencyComponent]
    });
    fixture = TestBed.createComponent(ButtonChangeCurrencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
