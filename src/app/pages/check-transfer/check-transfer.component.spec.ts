import type { ComponentFixture } from '@angular/core/testing';
import { TestBed } from '@angular/core/testing';
import CheckTransferComponent from './check-transfer.component';

describe('CheckTransferComponent', () => {
  let component: CheckTransferComponent | null = null;
  let fixture: ComponentFixture<CheckTransferComponent> | null = null;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CheckTransferComponent],
    });
    fixture = TestBed.createComponent(CheckTransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
