import type { ComponentFixture } from '@angular/core/testing';
import { TestBed } from '@angular/core/testing';
import CreateWalletComponent from './create-wallet.component';

describe('CreateWalletComponent', () => {
  let component: CreateWalletComponent | null = null;
  let fixture: ComponentFixture<CreateWalletComponent> | null = null;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CreateWalletComponent],
    });
    fixture = TestBed.createComponent(CreateWalletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
