import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeLocaleButtonComponent } from './change-locale-button.component';

describe('ChangeLocaleButtonComponent', () => {
  let component: ChangeLocaleButtonComponent;
  let fixture: ComponentFixture<ChangeLocaleButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ChangeLocaleButtonComponent]
    });
    fixture = TestBed.createComponent(ChangeLocaleButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
