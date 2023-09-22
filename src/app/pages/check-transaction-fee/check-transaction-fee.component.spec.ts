import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculateFeeTaxComponent } from './calculate-fee-tax.component';

describe('CalculateFeeTaxComponent', () => {
  let component: CalculateFeeTaxComponent;
  let fixture: ComponentFixture<CalculateFeeTaxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CalculateFeeTaxComponent]
    });
    fixture = TestBed.createComponent(CalculateFeeTaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
