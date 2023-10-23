import type { ComponentFixture } from '@angular/core/testing';
import { TestBed } from '@angular/core/testing';
import { TreeComponent } from './tree.component';

describe('TreeComponent', () => {
  let component: TreeComponent | null = null;
  let fixture: ComponentFixture<TreeComponent> | null = null;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TreeComponent],
    });
    fixture = TestBed.createComponent(TreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
