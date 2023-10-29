import type { ComponentFixture } from '@angular/core/testing';
import { TestBed } from '@angular/core/testing';
import { ButtonContactComponent } from './button-contact.component';

describe('ButtonContactComponent', () => {
  let component: ButtonContactComponent | null = null;
  let fixture: ComponentFixture<ButtonContactComponent> | null = null;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ButtonContactComponent],
    });
    fixture = TestBed.createComponent(ButtonContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
