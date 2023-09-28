import type { ComponentFixture} from '@angular/core/testing';
import { TestBed } from '@angular/core/testing';
import { ParticleBgComponent } from './particle-bg.component';

describe('ParticleBgComponent', () => {
  let component: ParticleBgComponent | null = null;
  let fixture: ComponentFixture<ParticleBgComponent> | null = null;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ParticleBgComponent]
    });
    fixture = TestBed.createComponent(ParticleBgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
