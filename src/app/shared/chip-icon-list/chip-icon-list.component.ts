import { NgFor } from '@angular/common';
import type { AfterViewInit } from '@angular/core';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  inject,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { MatChipOption, MatChipsModule } from '@angular/material/chips';
import { AccessiblePressDirective } from 'src/app/directives/accessible-press.directive';
import type { ChipOption } from 'src/app/types/chip-option';

@Component({
  selector: 'app-chip-icon-list',
  standalone: true,
  imports: [MatChipsModule, NgFor, AccessiblePressDirective],
  templateUrl: './chip-icon-list.component.html',
  styleUrls: ['./chip-icon-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChipIconListComponent implements AfterViewInit {
  private readonly _cd = inject(ChangeDetectorRef);

  @Output() public readonly pressChipButton = new EventEmitter<ChipOption>();
  @Input({ required: true }) public chipOptions: Array<ChipOption> = [];
  @ViewChild(MatChipOption) public chipElement!: MatChipOption | undefined;

  public ngAfterViewInit(): void {
    this.chipElement?._elementRef.nativeElement.classList.remove('mdc-evolution-chip--selected');
    this._cd.detectChanges();
  }

  public onChipClick(data: ChipOption): void {
    this.chipElement?.select();
    // necessary workaround to not show check icon on chip
    setTimeout(() => {
      this.chipElement?._elementRef.nativeElement.classList.remove('mdc-evolution-chip--selected');
    });

    this.pressChipButton.emit(data);
  }
}
