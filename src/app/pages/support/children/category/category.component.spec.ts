import { HttpClientTestingModule } from '@angular/common/http/testing';
import type { ComponentFixture } from '@angular/core/testing';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import CategoryComponent from './category.component';

describe('CategoryComponent', () => {
  let component: CategoryComponent | null = null;
  let fixture: ComponentFixture<CategoryComponent> | null = null;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CategoryComponent, RouterTestingModule, HttpClientTestingModule],
    });
    fixture = TestBed.createComponent(CategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
