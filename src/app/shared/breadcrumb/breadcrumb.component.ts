import { AsyncPipe, NgFor } from '@angular/common';
import type { OnInit } from '@angular/core';
import { ChangeDetectionStrategy, Component, DestroyRef, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-breadcrumb',
  standalone: true,
  imports: [AsyncPipe, NgFor, RouterModule],
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BreadcrumbComponent implements OnInit {
  private readonly _routeSnapshot = inject(ActivatedRoute);
  private readonly _destroyRef = inject(DestroyRef);

  private readonly _breadcrumbPaths$ = new BehaviorSubject<Array<{ path: string; name: string }>>([]);
  public readonly breadcrumbPaths$ = this._breadcrumbPaths$.asObservable();

  public async ngOnInit(): Promise<void> {
    this._routeSnapshot.url.pipe(takeUntilDestroyed(this._destroyRef)).subscribe(() => {
      const pathFromRoot = this._routeSnapshot.pathFromRoot
        .map(v => v.snapshot.url.map(v => v.path).join('/'))
        .join('/')
        .split('/');
      const breadcrumbPaths = pathFromRoot.map((v, i) => {
        const path = pathFromRoot.slice(0, i + 1).join('/');
        const name = v.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
        return { path, name: name === '' ? 'Home' : name };
      });
      this._breadcrumbPaths$.next(breadcrumbPaths);
    });
  }
}
