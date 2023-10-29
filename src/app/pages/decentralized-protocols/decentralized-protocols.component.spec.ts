import type { ComponentFixture } from '@angular/core/testing';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import DecentralizedProtocolsComponent from './decentralized-protocols.component';

describe('DecentralizedProtocolsComponent', () => {
  let component: DecentralizedProtocolsComponent | null = null;
  let fixture: ComponentFixture<DecentralizedProtocolsComponent> | null = null;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [DecentralizedProtocolsComponent, RouterTestingModule],
    });
    fixture = TestBed.createComponent(DecentralizedProtocolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
