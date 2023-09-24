import type { ComponentFixture} from '@angular/core/testing';
import { TestBed } from '@angular/core/testing';
import { ChipIconListComponent } from './chip-icon-list.component';

describe('ChipIconListComponent', () => {
  let component: ChipIconListComponent | null = null;
  let fixture: ComponentFixture<ChipIconListComponent> | null = null;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ChipIconListComponent]
    });
    fixture = TestBed.createComponent(ChipIconListComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture?.detectChanges();
    expect(component).toBeTruthy();
  });
});
