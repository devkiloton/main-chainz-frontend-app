import type { ComponentFixture } from '@angular/core/testing';
import { TestBed } from '@angular/core/testing';
import { RadialChartComponent } from './radial-chart.component';

describe('RadialChartComponent', () => {
  let component: RadialChartComponent | null = null;
  let fixture: ComponentFixture<RadialChartComponent> | null = null;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RadialChartComponent],
    });
    fixture = TestBed.createComponent(RadialChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
