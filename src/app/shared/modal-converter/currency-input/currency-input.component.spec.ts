import type { ComponentFixture } from '@angular/core/testing';
import { TestBed } from '@angular/core/testing';
import { CurrencyInputComponent } from './currency-input.component';

describe('CurrencyInputComponent', () => {
  let component: CurrencyInputComponent | null = null;
  let fixture: ComponentFixture<CurrencyInputComponent> | null = null;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CurrencyInputComponent],
    });
    fixture = TestBed.createComponent(CurrencyInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
