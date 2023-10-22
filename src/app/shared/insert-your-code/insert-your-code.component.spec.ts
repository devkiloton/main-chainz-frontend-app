import type { ComponentFixture } from '@angular/core/testing';
import { TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InsertYourCodeComponent } from './insert-your-code.component';

describe('InsertYourCodeComponent', () => {
  let component: InsertYourCodeComponent | null = null;
  let fixture: ComponentFixture<InsertYourCodeComponent> | null = null;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [InsertYourCodeComponent, BrowserAnimationsModule],
    });
    fixture = TestBed.createComponent(InsertYourCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
