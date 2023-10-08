import type { ComponentFixture } from '@angular/core/testing';
import { TestBed } from '@angular/core/testing';
import SignInComponent from './sign-in.component';

describe('SignInComponent', () => {
  let component: SignInComponent | null = null;
  let fixture: ComponentFixture<SignInComponent> | null = null;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SignInComponent],
    });
    fixture = TestBed.createComponent(SignInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
