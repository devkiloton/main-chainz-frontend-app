import { HttpClientTestingModule } from '@angular/common/http/testing';
import type { ComponentFixture } from '@angular/core/testing';
import { TestBed } from '@angular/core/testing';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogWithdrawalComponent } from './dialog-withdrawal.component';

describe('DialogWithdrawalComponent', () => {
  let component: DialogWithdrawalComponent | null = null;
  let fixture: ComponentFixture<DialogWithdrawalComponent> | null = null;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [DialogWithdrawalComponent, HttpClientTestingModule, BrowserAnimationsModule],
      providers: [
        {
          provide: MatDialogRef,
          useValue: {},
        },
        {
          provide: MAT_DIALOG_DATA,
          useValue: {},
        },
      ],
    });
    fixture = TestBed.createComponent(DialogWithdrawalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
