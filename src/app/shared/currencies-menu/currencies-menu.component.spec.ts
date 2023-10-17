import type { ComponentFixture } from '@angular/core/testing';
import { TestBed } from '@angular/core/testing';
import { CurrenciesMenuComponent } from './currencies-menu.component';

describe('CurrenciesMenuComponent', () => {
  let component: CurrenciesMenuComponent | null = null;
  let fixture: ComponentFixture<CurrenciesMenuComponent> | null = null;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CurrenciesMenuComponent],
    });
    fixture = TestBed.createComponent(CurrenciesMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
