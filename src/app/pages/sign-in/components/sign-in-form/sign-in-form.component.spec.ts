import type { ComponentFixture } from '@angular/core/testing';
import { TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { SignInFormComponent } from './sign-in-form.component';

describe('SignInFormComponent', () => {
  let component: SignInFormComponent | null = null;
  let fixture: ComponentFixture<SignInFormComponent> | null = null;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SignInFormComponent, RouterTestingModule, BrowserAnimationsModule],
    });
    fixture = TestBed.createComponent(SignInFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
