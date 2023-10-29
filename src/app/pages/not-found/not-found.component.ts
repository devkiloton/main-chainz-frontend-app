import { AsyncPipe } from '@angular/common';
import type { OnInit } from '@angular/core';
import { ChangeDetectionStrategy, Component, DestroyRef, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Router } from '@angular/router';
import { timer } from 'rxjs';

@Component({
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class NotFoundComponent implements OnInit {
  private readonly _destroyRef = inject(DestroyRef);
  private readonly _router = inject(Router);

  public readonly counter$ = timer(0, 1000);

  public ngOnInit(): void {
    this.counter$.pipe(takeUntilDestroyed(this._destroyRef)).subscribe(value => {
      if (value === 10) {
        this._router.navigate(['/']);
      }
    });
  }
}
