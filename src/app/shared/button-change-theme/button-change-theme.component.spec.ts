import type { ComponentFixture } from '@angular/core/testing';
import { TestBed } from '@angular/core/testing';
import { ButtonChangeThemeComponent } from './button-change-theme.component';

describe('ButtonChangeThemeComponent', () => {
  let component: ButtonChangeThemeComponent | null = null;
  let fixture: ComponentFixture<ButtonChangeThemeComponent> | null = null;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ButtonChangeThemeComponent],
    });
    fixture = TestBed.createComponent(ButtonChangeThemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
