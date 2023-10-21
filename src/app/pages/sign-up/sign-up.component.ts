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
import { SignUpFormComponent } from './components/sign-up-form/sign-up-form.component';

@Component({
  standalone: true,
  imports: [SignUpFormComponent, ReactiveFormsModule, ParticleBgComponent, AsyncPipe, NgIf],
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class SignUpComponent {
  private readonly _authEntity = inject(AuthEntity);
  private readonly _destroyRef = inject(DestroyRef);
  private readonly _authState = inject(AuthStateService);
  private readonly _router = inject(Router);
  public isHandset$ = inject(BreakpointObserver)
    .observe('(min-width: 1024px)')
    .pipe(map(({ matches }) => matches));

  private readonly _asyncError$ = new BehaviorSubject<number>(0);
  public readonly asyncError$ = this._asyncError$.asObservable();

  public createUser(data: { name: string; email: string; password: string; termsAndConditions: boolean }): void {
    const { name, email, password, termsAndConditions } = data;
    if (termsAndConditions) {
      this._authEntity
        .signUp({ name, email, password })
        .pipe(takeUntilDestroyed(this._destroyRef))
        .subscribe({
          next: tokens => {
            const { access_token, refresh_token } = tokens;
            this._authState.set({ access_token, refresh_token });
            this._router.navigate(['/dashboard']);
          },
          error: error => {
            const { status } = error as HttpErrorResponse;
            this._asyncError$.next(status);
          },
        });
    }
  }
}
