import type { ComponentFixture } from '@angular/core/testing';
import { TestBed } from '@angular/core/testing';
import { DialogWithdrawalComponent } from './dialog-withdrawal.component';

describe('DialogWithdrawalComponent', () => {
  let component: DialogWithdrawalComponent | null = null;
  let fixture: ComponentFixture<DialogWithdrawalComponent> | null = null;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [DialogWithdrawalComponent],
    });
    fixture = TestBed.createComponent(DialogWithdrawalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
