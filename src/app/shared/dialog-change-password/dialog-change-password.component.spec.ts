import { HttpClientTestingModule } from '@angular/common/http/testing';
import type { ComponentFixture } from '@angular/core/testing';
import { TestBed } from '@angular/core/testing';
import { MatDialogRef } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogChangePasswordComponent } from './dialog-change-password.component';

describe('DialogChangePasswordComponent', () => {
  let component: DialogChangePasswordComponent | null = null;
  let fixture: ComponentFixture<DialogChangePasswordComponent> | null = null;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [DialogChangePasswordComponent, HttpClientTestingModule, BrowserAnimationsModule],
      providers: [
        {
          provide: MatDialogRef,
          useValue: {},
        },
      ],
    });
    fixture = TestBed.createComponent(DialogChangePasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
