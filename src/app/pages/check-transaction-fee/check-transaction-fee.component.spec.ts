import type { ComponentFixture } from '@angular/core/testing';
import { TestBed } from '@angular/core/testing';
import CheckTransactionFeeComponent from './check-transaction-fee.component';

describe('CalculateFeeTaxComponent', () => {
  let component: CheckTransactionFeeComponent | null = null;
  let fixture: ComponentFixture<CheckTransactionFeeComponent> | null = null;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CheckTransactionFeeComponent],
    });
    fixture = TestBed.createComponent(CheckTransactionFeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
