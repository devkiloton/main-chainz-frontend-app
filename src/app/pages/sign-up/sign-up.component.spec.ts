import { HttpClientTestingModule } from '@angular/common/http/testing';
import type { ComponentFixture } from '@angular/core/testing';
import { TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import SignUpComponent from './sign-up.component';

describe('SignUpComponent', () => {
  let component: SignUpComponent | null = null;
  let fixture: ComponentFixture<SignUpComponent> | null = null;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SignUpComponent, HttpClientTestingModule, RouterTestingModule, BrowserAnimationsModule],
    });
    fixture = TestBed.createComponent(SignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
