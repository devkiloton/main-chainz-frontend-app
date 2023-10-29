import type { ComponentFixture } from '@angular/core/testing';
import { TestBed } from '@angular/core/testing';
import NotFoundComponent from './not-found.component';

describe('NotFoundComponent', () => {
  let component: NotFoundComponent | null = null;
  let fixture: ComponentFixture<NotFoundComponent> | null = null;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NotFoundComponent],
    });
    fixture = TestBed.createComponent(NotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
