import { ChangeDetectionStrategy, Component, DestroyRef, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ReactiveFormsModule } from '@angular/forms';
import { UserEntity } from 'projects/central-hash-api-client/src/public-api';
import { ParticleBgComponent } from 'src/app/shared/particle-bg/particle-bg.component';
import { SignUpFormComponent } from './components/sign-up-form/sign-up-form.component';

@Component({
  standalone: true,
  imports: [SignUpFormComponent, ReactiveFormsModule, ParticleBgComponent],
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class SignUpComponent {
  private readonly _userEntity = inject(UserEntity);
  private readonly _destroyRef = inject(DestroyRef);

  public createUser(data: { name: string; email: string; password: string; termsAndConditions: boolean }): void {
    const { name, email, password, termsAndConditions } = data;
    if (termsAndConditions) {
      this._userEntity
        .create({ name, email, password })
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
}
