import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewCurrencyComponent } from './preview-currency.component';

describe('PreviewCurrencyComponent', () => {
  let component: PreviewCurrencyComponent;
  let fixture: ComponentFixture<PreviewCurrencyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [PreviewCurrencyComponent]
    });
    fixture = TestBed.createComponent(PreviewCurrencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
