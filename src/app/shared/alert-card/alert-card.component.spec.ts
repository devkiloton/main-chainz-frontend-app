import type { ComponentFixture } from '@angular/core/testing';
import { TestBed } from '@angular/core/testing';
import { AlertCardComponent } from './alert-card.component';

describe('AlertCardComponent', () => {
  let component: AlertCardComponent | null = null;
  let fixture: ComponentFixture<AlertCardComponent> | null = null;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AlertCardComponent],
    });
    fixture = TestBed.createComponent(AlertCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
