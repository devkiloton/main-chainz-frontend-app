import { ChangeDetectionStrategy, Component, DestroyRef, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthEntity } from 'projects/central-hash-api-client/src/public-api';
import { ParticleBgComponent } from 'src/app/shared/particle-bg/particle-bg.component';
import { SignInFormComponent } from './components/sign-in-form/sign-in-form.component';

@Component({
  standalone: true,
  imports: [SignInFormComponent, ReactiveFormsModule, ParticleBgComponent],
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class SignInComponent {
  private readonly _authEntity = inject(AuthEntity);
  private readonly _destroyRef = inject(DestroyRef);

  public signIn(data: { email: string; password: string }): void {
    const { email, password } = data;
    this._authEntity
      .signin({ email, password })
      .pipe(takeUntilDestroyed(this._destroyRef))
      .subscribe({
        next: value => {
          console.log(value);
        },
        error: error => {
          console.error(error);
        },
      });
  }
}
