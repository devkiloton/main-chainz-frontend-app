import { HttpClientTestingModule } from '@angular/common/http/testing';
import type { ComponentFixture } from '@angular/core/testing';
import { TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import SupportComponent from './support.component';

describe('SupportComponent', () => {
  let component: SupportComponent | null = null;
  let fixture: ComponentFixture<SupportComponent> | null = null;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SupportComponent, HttpClientTestingModule, BrowserAnimationsModule],
    });
    fixture = TestBed.createComponent(SupportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
