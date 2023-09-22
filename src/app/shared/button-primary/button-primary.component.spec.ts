import type { ComponentFixture } from '@angular/core/testing';
import { TestBed } from '@angular/core/testing';
import { ButtonPrimaryComponent } from './button-primary.component';

describe('ButtonPrimaryComponent', () => {
  let component: ButtonPrimaryComponent | null = null;
  let fixture: ComponentFixture<ButtonPrimaryComponent> | null = null;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonPrimaryComponent],
    });
    fixture = TestBed.createComponent(ButtonPrimaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
