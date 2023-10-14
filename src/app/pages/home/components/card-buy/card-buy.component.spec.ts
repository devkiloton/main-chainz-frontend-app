import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardBuyComponent } from './card-buy.component';

describe('CardBuyComponent', () => {
  let component: CardBuyComponent;
  let fixture: ComponentFixture<CardBuyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CardBuyComponent]
    });
    fixture = TestBed.createComponent(CardBuyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
