import type { ComponentFixture } from '@angular/core/testing';
import { TestBed } from '@angular/core/testing';
import DashboardComponent from './dashboard.component';

describe('DashboardComponent', () => {
  let component: DashboardComponent | null = null;
  let fixture: ComponentFixture<DashboardComponent> | null = null;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [DashboardComponent],
    });
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
