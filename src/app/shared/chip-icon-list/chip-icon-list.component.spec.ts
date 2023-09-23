import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChipIconListComponent } from './chip-icon-list.component';

describe('ChipIconListComponent', () => {
  let component: ChipIconListComponent;
  let fixture: ComponentFixture<ChipIconListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ChipIconListComponent]
    });
    fixture = TestBed.createComponent(ChipIconListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
