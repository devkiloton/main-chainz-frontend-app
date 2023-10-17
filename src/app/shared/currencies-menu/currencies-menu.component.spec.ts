import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrenciesMenuComponent } from './currencies-menu.component';

describe('CurrenciesMenuComponent', () => {
  let component: CurrenciesMenuComponent;
  let fixture: ComponentFixture<CurrenciesMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CurrenciesMenuComponent]
    });
    fixture = TestBed.createComponent(CurrenciesMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
