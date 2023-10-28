import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecentralizedProtocolsComponent } from './decentralized-protocols.component';

describe('DecentralizedProtocolsComponent', () => {
  let component: DecentralizedProtocolsComponent;
  let fixture: ComponentFixture<DecentralizedProtocolsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [DecentralizedProtocolsComponent]
    });
    fixture = TestBed.createComponent(DecentralizedProtocolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
