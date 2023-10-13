import type { ComponentFixture } from '@angular/core/testing';
import { TestBed } from '@angular/core/testing';
import { CarouselPricesComponent } from './carousel-prices.component';

describe('CarouselPricesComponent', () => {
  let component: CarouselPricesComponent | null = null;
  let fixture: ComponentFixture<CarouselPricesComponent> | null = null;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CarouselPricesComponent],
    });
    fixture = TestBed.createComponent(CarouselPricesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
