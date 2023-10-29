import type { ComponentFixture } from '@angular/core/testing';
import { TestBed } from '@angular/core/testing';
import { MarkdownConverterComponent } from './markdown-converter.component';

describe('MarkdownConverterComponent', () => {
  let component: MarkdownConverterComponent | null = null;
  let fixture: ComponentFixture<MarkdownConverterComponent> | null = null;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MarkdownConverterComponent],
    });
    fixture = TestBed.createComponent(MarkdownConverterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
