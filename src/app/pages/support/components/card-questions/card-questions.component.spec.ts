import type { ComponentFixture } from '@angular/core/testing';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CardQuestionsComponent } from './card-questions.component';

describe('CardQuestionsComponent', () => {
  let component: CardQuestionsComponent | null = null;
  let fixture: ComponentFixture<CardQuestionsComponent> | null = null;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CardQuestionsComponent, RouterTestingModule],
    });
    fixture = TestBed.createComponent(CardQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
