import type { ComponentFixture } from '@angular/core/testing';
import { TestBed } from '@angular/core/testing';
import { DialogDepositComponent } from './dialog-deposit.component';

describe('DialogDepositComponent', () => {
  let component: DialogDepositComponent | null = null;
  let fixture: ComponentFixture<DialogDepositComponent> | null = null;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [DialogDepositComponent],
    });
    fixture = TestBed.createComponent(DialogDepositComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
