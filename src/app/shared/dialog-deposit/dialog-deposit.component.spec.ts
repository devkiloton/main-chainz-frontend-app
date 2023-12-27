import { HttpClientTestingModule } from '@angular/common/http/testing';
import type { ComponentFixture } from '@angular/core/testing';
import { TestBed } from '@angular/core/testing';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DialogDepositComponent } from './dialog-deposit.component';

describe('DialogDepositComponent', () => {
  let component: DialogDepositComponent | null = null;
  let fixture: ComponentFixture<DialogDepositComponent> | null = null;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [DialogDepositComponent, HttpClientTestingModule],
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
    fixture = TestBed.createComponent(DialogDepositComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
