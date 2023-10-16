import type { ComponentFixture } from '@angular/core/testing';
import { TestBed } from '@angular/core/testing';
import { CardBuyComponent } from './card-buy.component';

describe('CardBuyComponent', () => {
  let component: CardBuyComponent | null = null;
  let fixture: ComponentFixture<CardBuyComponent> | null = null;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CardBuyComponent],
    });
    fixture = TestBed.createComponent(CardBuyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
