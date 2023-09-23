import { BreakpointObserver } from '@angular/cdk/layout';
import { AsyncPipe, NgFor } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject,Input } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import type { GridTile } from 'src/app/types/grid-tile';

@Component({
  selector: 'app-grid',
  standalone: true,
  imports: [MatGridListModule, MatRippleModule, MatIconModule, MatRippleModule, AsyncPipe, NgFor],
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GridComponent {
  @Input({ required: true }) public gridData: Array<GridTile> = [];
  @Input() public onlyColumn: boolean = false;


  private readonly _router = inject(Router);
  private readonly _breakpointObserver = inject(BreakpointObserver);

  public readonly isHandset$ = this._breakpointObserver.observe(['(min-width: 768px)', '(min-width: 1024px)']).pipe(
    map(result => {
      if (result.breakpoints['(min-width: 1024px)'] === true) {
        return 3;
      }
      if (result.breakpoints['(min-width: 768px)'] === true) {
        return 2;
      }
      return 1;
    }),
  );

  public navigateTo(data: { route: string; isActive: boolean | null }): void {
    if (data.isActive === true) {
      this._router.navigate([data.route]);
    }
  }
}
