import type { ComponentFixture } from '@angular/core/testing';
import { TestBed } from '@angular/core/testing';
import { SignUpFormComponent } from 'src/app/pages/sign-up/components/sign-up-form/sign-up-form.component';

describe('SignUpFormComponent', () => {
  let component: SignUpFormComponent | null = null;
  let fixture: ComponentFixture<SignUpFormComponent> | null = null;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SignUpFormComponent],
    });
    fixture = TestBed.createComponent(SignUpFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
