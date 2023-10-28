import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkdownConverterComponent } from './markdown-converter.component';

describe('MarkdownConverterComponent', () => {
  let component: MarkdownConverterComponent;
  let fixture: ComponentFixture<MarkdownConverterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MarkdownConverterComponent]
    });
    fixture = TestBed.createComponent(MarkdownConverterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});