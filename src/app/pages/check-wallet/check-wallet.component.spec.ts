import { HttpClientTestingModule } from '@angular/common/http/testing';
import type { ComponentFixture } from '@angular/core/testing';
import { TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import CheckWalletComponent from './check-wallet.component';

describe('CheckWalletComponent', () => {
  let component: CheckWalletComponent | null = null;
  let fixture: ComponentFixture<CheckWalletComponent> | null = null;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CheckWalletComponent, HttpClientTestingModule, BrowserAnimationsModule],
    });
    fixture = TestBed.createComponent(CheckWalletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
