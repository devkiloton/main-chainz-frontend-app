import type { ComponentFixture } from '@angular/core/testing';
import { TestBed } from '@angular/core/testing';
import { ChangeLocaleButtonComponent } from './change-locale-button.component';

describe('ChangeLocaleButtonComponent', () => {
  let component: ChangeLocaleButtonComponent | null = null;
  let fixture: ComponentFixture<ChangeLocaleButtonComponent> | null = null;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ChangeLocaleButtonComponent],
    });
    fixture = TestBed.createComponent(ChangeLocaleButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
