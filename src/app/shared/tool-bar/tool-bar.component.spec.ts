import { HttpClientModule } from '@angular/common/http';
import type { ComponentFixture } from '@angular/core/testing';
import { TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { ToolBarComponent } from './tool-bar.component';

describe('ToolBarComponent', () => {
  let component: ToolBarComponent | null = null;
  let fixture: ComponentFixture<ToolBarComponent> | null = null;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ToolBarComponent, RouterTestingModule, BrowserAnimationsModule, HttpClientModule],
    });
    fixture = TestBed.createComponent(ToolBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
