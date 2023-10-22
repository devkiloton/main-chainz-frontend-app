import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import type { OnInit } from '@angular/core';
import { ChangeDetectionStrategy, Component, DestroyRef, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import type { MatStep } from '@angular/material/stepper';
import { MatStepperModule } from '@angular/material/stepper';
import { AuthEntity } from 'projects/central-hash-api-client/src/public-api';
import { isNil } from 'ramda';
import { BehaviorSubject, firstValueFrom, merge } from 'rxjs';
import { cardAlert } from 'src/app/constants/sign-in/card-alert';
import { dialogErrors } from 'src/app/constants/sign-in/forgot-password-dialogue-errors';
import { dialogueSteps } from 'src/app/constants/sign-in/forgot-password-dialogue-steps';
import { AccessiblePressDirective } from 'src/app/directives/accessible-press.directive';
import { strongPasswordValidator } from 'src/app/validators/strong-password.validator';
import { AlertCardComponent } from '../alert-card/alert-card.component';
import { InputTextComponent } from '../input-text/input-text.component';

@Component({
  selector: 'app-dialog-change-password',
  standalone: true,
  imports: [
    MatDialogModule,
    MatButtonModule,
    MatButtonModule,
    MatStepperModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    InputTextComponent,
    MatFormFieldModule,
    MatInputModule,
    AsyncPipe,
    NgFor,
    NgIf,
    AccessiblePressDirective,
    AlertCardComponent,
  ],
  templateUrl: './dialog-change-password.component.html',
  styleUrls: ['./dialog-change-password.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogChangePasswordComponent implements OnInit {
  private readonly _authEntity = inject(AuthEntity);
  private readonly _fb = inject(NonNullableFormBuilder);
  private readonly _destroyref = inject(DestroyRef);

  private readonly _cardState$ = new BehaviorSubject<boolean>(false);
  public readonly cardState$ = this._cardState$.asObservable();
  private readonly _message$ = new BehaviorSubject<string>('');
  public readonly message$ = this._message$.asObservable();

  public isLinear = true;
  public emailFormGroup = this._fb.group({
    email: ['', [Validators.required, Validators.email]],
  });

  public codeFormGroup = this._fb.group({
    code: ['', Validators.required],
  });

  public newPasswordFormGroup = this._fb.group({
    password: ['', [Validators.required, strongPasswordValidator()]],
  });

  public readonly steps = [
    {
      formGroup: this.emailFormGroup,
      formControl: this.emailFormGroup.controls.email,
      header: dialogueSteps.email.header,
      description: dialogueSteps.email.description,
      secondaryButtonText: dialogueSteps.email.secondaryButtonText,
      primaryButtonText: dialogueSteps.email.primaryButtonText,
      label: dialogueSteps.email.label,
      placeholder: dialogueSteps.email.placeholder,
      type: dialogueSteps.email.type,
    },
    {
      formGroup: this.codeFormGroup,
      formControl: this.codeFormGroup.controls.code,
      header: dialogueSteps.code.header,
      description: dialogueSteps.code.description,
      secondaryButtonText: dialogueSteps.code.secondaryButtonText,
      primaryButtonText: dialogueSteps.code.primaryButtonText,
      label: dialogueSteps.code.label,
      placeholder: dialogueSteps.code.placeholder,
      type: dialogueSteps.code.type,
    },
    {
      formGroup: this.newPasswordFormGroup,
      formControl: this.newPasswordFormGroup.controls.password,
      header: dialogueSteps.newPassword.header,
      description: dialogueSteps.newPassword.description,
      secondaryButtonText: dialogueSteps.newPassword.secondaryButtonText,
      primaryButtonText: dialogueSteps.newPassword.primaryButtonText,
      label: dialogueSteps.newPassword.label,
      placeholder: dialogueSteps.newPassword.placeholder,
      type: dialogueSteps.newPassword.type,
    },
  ];

  constructor(public dialogRef: MatDialogRef<DialogChangePasswordComponent>) {}

  public ngOnInit(): void {
    merge(this.emailFormGroup.valueChanges, this.codeFormGroup.valueChanges, this.newPasswordFormGroup.valueChanges)
      .pipe(takeUntilDestroyed(this._destroyref))
      .subscribe(() => {
        this._cardState$.next(false);
        this._message$.next('');
      });
  }

  public setAsyncError(code: number): void {
    if (String(code).startsWith('429')) {
      this._cardState$.next(true);
      this._message$.next(cardAlert.tooManyRequests);
      return;
    }
    if (String(code).startsWith('4')) {
      this._cardState$.next(true);
      this._message$.next(cardAlert.invalidData);
      return;
    }
    if (String(code).startsWith('5')) {
      this._cardState$.next(true);
      this._message$.next(cardAlert.problems);
    }
  }

  public sendEmail(): void {
    const { email } = this.emailFormGroup.value;
    if (isNil(email) || this.emailFormGroup.invalid) {
      return;
    }
    firstValueFrom(this._authEntity.requestResetPassword({ email }));
  }

  public async resetPassword(stepper: MatStep): Promise<void> {
    const { email } = this.emailFormGroup.value;
    const { code } = this.codeFormGroup.value;
    const { password } = this.newPasswordFormGroup.value;
    if (isNil(email) || isNil(code) || isNil(password) || this.newPasswordFormGroup.invalid) {
      return;
    }

    try {
      await firstValueFrom(this._authEntity.resetPassword({ email, code, password }));
      stepper._stepper.next();
    } catch (error: any) {
      this.setAsyncError(error.status);
    }
  }

  public async verifyCode(stepper: MatStep): Promise<void> {
    const { email } = this.emailFormGroup.value;
    const { code } = this.codeFormGroup.value;
    if (isNil(email) || isNil(code) || this.codeFormGroup.invalid) {
      return;
    }
    try {
      await firstValueFrom(this._authEntity.verifyResetPassword({ email, code }));
      stepper._stepper.next();
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      this.setAsyncError(error.status);
    }
  }

  public async defineSubmit(data: { label: string; stepper: MatStep }): Promise<void> {
    const { label, stepper } = data;
    switch (label) {
      case 'Email':
        this.sendEmail();
        stepper._stepper.next();
        break;
      case 'Code':
        await this.verifyCode(stepper);
        break;
      case 'New password':
        await this.resetPassword(stepper);
        break;
    }
  }

  public errorMessages(label: string): string {
    switch (label) {
      case 'Email':
        if (this.emailFormGroup.controls.email.hasError('required')) {
          return dialogErrors.requiredEmail;
        }
        return this.emailFormGroup.controls.email.hasError('email') ? dialogErrors.invalidEmail : '';
      case 'Code':
        return this.codeFormGroup.controls.code.hasError('required') ? dialogErrors.requiredCode : '';
      case 'New password':
        if (this.newPasswordFormGroup.controls.password.hasError('required')) {
          return dialogErrors.requiredPassword;
        }
        return this.newPasswordFormGroup.controls.password.hasError('strongPassword')
          ? dialogErrors.invalidPassword
          : '';
      default:
        return '';
    }
  }
}
