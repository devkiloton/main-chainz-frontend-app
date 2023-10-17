import type { ComponentFixture } from '@angular/core/testing';
import { TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TablePricesComponent } from './table-prices.component';

describe('TablePricesComponent', () => {
  let component: TablePricesComponent | null = null;
  let fixture: ComponentFixture<TablePricesComponent> | null = null;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TablePricesComponent, BrowserAnimationsModule],
    });
    fixture = TestBed.createComponent(TablePricesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
