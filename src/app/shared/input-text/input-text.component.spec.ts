import type { ComponentFixture } from '@angular/core/testing';
import { TestBed } from '@angular/core/testing';
import { InputTextComponent } from './input-text.component';

describe('InputTextComponent', () => {
  let component: InputTextComponent | null = null;
  let fixture: ComponentFixture<InputTextComponent> | null = null;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [InputTextComponent],
    });
    fixture = TestBed.createComponent(InputTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
