import type { ComponentFixture } from '@angular/core/testing';
import { TestBed } from '@angular/core/testing';
import WhoWeAreComponent from './who-we-are.component';

describe('WhoWeAreComponent', () => {
  let component: WhoWeAreComponent | null = null;
  let fixture: ComponentFixture<WhoWeAreComponent> | null = null;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [WhoWeAreComponent],
    });
    fixture = TestBed.createComponent(WhoWeAreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
