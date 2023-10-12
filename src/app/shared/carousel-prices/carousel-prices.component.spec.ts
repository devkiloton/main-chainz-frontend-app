import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselPricesComponent } from './carousel-prices.component';

describe('CarouselPricesComponent', () => {
  let component: CarouselPricesComponent;
  let fixture: ComponentFixture<CarouselPricesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CarouselPricesComponent]
    });
    fixture = TestBed.createComponent(CarouselPricesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
