import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalConverterComponent } from './modal-converter.component';

describe('ModalConverterComponent', () => {
  let component: ModalConverterComponent;
  let fixture: ComponentFixture<ModalConverterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ModalConverterComponent]
    });
    fixture = TestBed.createComponent(ModalConverterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
