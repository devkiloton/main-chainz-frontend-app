import type { ComponentFixture } from '@angular/core/testing';
import { TestBed } from '@angular/core/testing';
import { CardCategoryComponent } from './card-category.component';

describe('CardCategoryComponent', () => {
  let component: CardCategoryComponent | null = null;
  let fixture: ComponentFixture<CardCategoryComponent> | null = null;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CardCategoryComponent],
    });
    fixture = TestBed.createComponent(CardCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
