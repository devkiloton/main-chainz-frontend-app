import { HttpClientModule } from '@angular/common/http';
import type { ComponentFixture } from '@angular/core/testing';
import { TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonChangeCurrencyComponent } from './button-change-currency.component';

describe('ButtonChangeCurrencyComponent', () => {
  let component: ButtonChangeCurrencyComponent | null = null;
  let fixture: ComponentFixture<ButtonChangeCurrencyComponent> | null = null;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ButtonChangeCurrencyComponent, BrowserAnimationsModule, HttpClientModule],
    });
    fixture = TestBed.createComponent(ButtonChangeCurrencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
