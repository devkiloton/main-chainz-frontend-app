import { AsyncPipe } from '@angular/common';
import type { HttpErrorResponse } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, DestroyRef, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthEntity } from 'projects/central-hash-api-client/src/public-api';
import { BehaviorSubject } from 'rxjs';
import { AuthStateService } from 'src/app/services/auth-state/auth-state.service';
import { ParticleBgComponent } from 'src/app/shared/particle-bg/particle-bg.component';
import { SignInFormComponent } from './components/sign-in-form/sign-in-form.component';

@Component({
  standalone: true,
  imports: [SignInFormComponent, ReactiveFormsModule, ParticleBgComponent, AsyncPipe],
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class SignInComponent {
  private readonly _authEntity = inject(AuthEntity);
  private readonly _destroyRef = inject(DestroyRef);
  private readonly _authState = inject(AuthStateService);
  private readonly _router = inject(Router);

  private readonly _asyncError$ = new BehaviorSubject<number>(0);
  public readonly asyncError$ = this._asyncError$.asObservable();

  public signIn(data: { email: string; password: string }): void {
    const { email, password } = data;
    this._authEntity
      .signin({ email, password })
      .pipe(takeUntilDestroyed(this._destroyRef))
      .subscribe({
        next: value => {
          this._authState.set(value.data.access_token);
          this._router.navigate(['/dashboard']);
        },
        error: error => {
          const { status } = error as HttpErrorResponse;
          this._asyncError$.next(status);
        },
      });
  }
}
