import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule } from '@angular/forms';
import { UserEntity } from 'projects/central-hash-api-client/src/public-api';
import { SignUpFormComponent } from './components/sign-up-form/sign-up-form.component';

@Component({
  standalone: true,
  imports: [SignUpFormComponent, ReactiveFormsModule],
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class SignUpComponent {
  public readonly userEntity = inject(UserEntity);
  private readonly _formBuilder = inject(NonNullableFormBuilder);

  public readonly createUserInfo = this._formBuilder.control<{
    name: string;
    email: string;
    password: string;
    termsAndConditions: boolean;
  }>({
    name: '',
    email: '',
    password: '',
    termsAndConditions: false,
  });

  public createUser(data: { name: string; email: string; password: string; termsAndConditions: boolean }): void {
    const { name, email, password, termsAndConditions } = data;
    if (termsAndConditions) {
      this.userEntity.create({ name, email, password }).subscribe({
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
