import type { ComponentFixture } from '@angular/core/testing';
import { TestBed } from '@angular/core/testing';
import { ToolBarComponent } from './tool-bar.component';

describe('ToolBarComponent', () => {
  let component: ToolBarComponent | null = null;
  let fixture: ComponentFixture<ToolBarComponent> | null = null;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ToolBarComponent],
    });
    fixture = TestBed.createComponent(ToolBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
