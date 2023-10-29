import type { ComponentFixture } from '@angular/core/testing';
import { TestBed } from '@angular/core/testing';
import ArticleComponent from './article.component';

describe('ArticleComponent', () => {
  let component: ArticleComponent | null = null;
  let fixture: ComponentFixture<ArticleComponent> | null = null;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ArticleComponent],
    });
    fixture = TestBed.createComponent(ArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
