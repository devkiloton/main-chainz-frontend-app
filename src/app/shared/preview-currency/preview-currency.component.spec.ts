import type { ComponentFixture } from '@angular/core/testing';
import { TestBed } from '@angular/core/testing';
import { PreviewCurrencyComponent } from './preview-currency.component';

describe('PreviewCurrencyComponent', () => {
  let component: PreviewCurrencyComponent | null = null;
  let fixture: ComponentFixture<PreviewCurrencyComponent> | null = null;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [PreviewCurrencyComponent],
    });
    fixture = TestBed.createComponent(PreviewCurrencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
