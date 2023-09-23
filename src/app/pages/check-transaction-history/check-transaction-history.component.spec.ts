import type { ComponentFixture } from '@angular/core/testing';
import { TestBed } from '@angular/core/testing';
import CheckTransactionHistoryComponent from './check-transaction-history.component';

describe('CheckHistoryComponent', () => {
  let component: CheckTransactionHistoryComponent | null = null;
  let fixture: ComponentFixture<CheckTransactionHistoryComponent> | null = null;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CheckTransactionHistoryComponent],
    });
    fixture = TestBed.createComponent(CheckTransactionHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
