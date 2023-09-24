import type { ComponentFixture } from '@angular/core/testing';
import { TestBed } from '@angular/core/testing';
import { GridComponent } from './grid.component';

describe('GridComponent', () => {
  let component: GridComponent | null = null;
  let fixture: ComponentFixture<GridComponent> | null = null;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [GridComponent],
    });
    fixture = TestBed.createComponent(GridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
