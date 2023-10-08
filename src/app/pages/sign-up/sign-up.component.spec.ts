import type { ComponentFixture } from '@angular/core/testing';
import { TestBed } from '@angular/core/testing';
import SignUpComponent from './sign-up.component';

describe('SignUpComponent', () => {
  let component: SignUpComponent | null = null;
  let fixture: ComponentFixture<SignUpComponent> | null = null;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SignUpComponent],
    });
    fixture = TestBed.createComponent(SignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
