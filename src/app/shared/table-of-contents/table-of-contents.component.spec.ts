import type { ComponentFixture } from '@angular/core/testing';
import { TestBed } from '@angular/core/testing';
import { TableOfContentsComponent } from './table-of-contents.component';

describe('TableOfContentsComponent', () => {
  let component: TableOfContentsComponent | null = null;
  let fixture: ComponentFixture<TableOfContentsComponent> | null = null;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TableOfContentsComponent],
    });
    fixture = TestBed.createComponent(TableOfContentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
