import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardQuestionsComponent } from './card-questions.component';

describe('CardQuestionsComponent', () => {
  let component: CardQuestionsComponent;
  let fixture: ComponentFixture<CardQuestionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CardQuestionsComponent]
    });
    fixture = TestBed.createComponent(CardQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
