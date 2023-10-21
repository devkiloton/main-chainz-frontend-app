import { BreakpointObserver } from '@angular/cdk/layout';
import { AsyncPipe, NgIf } from '@angular/common';
import type { HttpErrorResponse } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, DestroyRef, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthEntity } from 'projects/central-hash-api-client/src/public-api';
import { BehaviorSubject, map } from 'rxjs';
import { AuthStateService } from 'src/app/services/auth-state/auth-state.service';
import { ParticleBgComponent } from 'src/app/shared/particle-bg/particle-bg.component';
import { SignInFormComponent } from './components/sign-in-form/sign-in-form.component';

@Component({
  standalone: true,
  imports: [SignInFormComponent, ReactiveFormsModule, ParticleBgComponent, AsyncPipe, NgIf],
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class SignInComponent {
  private readonly _authEntity = inject(AuthEntity);
  private readonly _destroyRef = inject(DestroyRef);
  private readonly _authState = inject(AuthStateService);
  private readonly _router = inject(Router);
  public isHandset$ = inject(BreakpointObserver)
    .observe('(min-width: 1024px)')
    .pipe(map(({ matches }) => matches));

  private readonly _asyncError$ = new BehaviorSubject<number>(0);
  public readonly asyncError$ = this._asyncError$.asObservable();

  public signIn(data: { email: string; password: string }): void {
    const { email, password } = data;
    this._authEntity
      .signIn({ email, password })
      .pipe(takeUntilDestroyed(this._destroyRef))
      .subscribe({
        next: tokens => {
          this._authState.set(tokens);
          this._router.navigate(['/dashboard']);
        },
        error: error => {
          const { status } = error as HttpErrorResponse;
          this._asyncError$.next(status);
        },
      });
  }
}
