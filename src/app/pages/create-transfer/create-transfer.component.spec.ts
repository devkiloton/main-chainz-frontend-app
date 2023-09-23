import type { ComponentFixture } from '@angular/core/testing';
import { TestBed } from '@angular/core/testing';
import CreateTransferComponent from './create-transfer.component';

describe('CreateTransferComponent', () => {
  let component: CreateTransferComponent | null = null;
  let fixture: ComponentFixture<CreateTransferComponent> | null = null;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CreateTransferComponent],
    });
    fixture = TestBed.createComponent(CreateTransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
