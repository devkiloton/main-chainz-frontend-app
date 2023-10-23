import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonChangeThemeComponent } from './button-change-theme.component';

describe('ButtonChangeThemeComponent', () => {
  let component: ButtonChangeThemeComponent;
  let fixture: ComponentFixture<ButtonChangeThemeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ButtonChangeThemeComponent]
    });
    fixture = TestBed.createComponent(ButtonChangeThemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
