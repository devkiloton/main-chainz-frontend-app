import { NgFor } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatStepperModule } from '@angular/material/stepper';
import { dialogueSteps } from 'src/app/constants/sign-in/forgot-password-dialogue-steps';
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
    NgFor,
  ],
  templateUrl: './dialog-change-password.component.html',
  styleUrls: ['./dialog-change-password.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogChangePasswordComponent {
  private readonly _fb = inject(NonNullableFormBuilder);
  public isLinear = true;
  public emailFormGroup = this._fb.group({
    email: ['', Validators.required],
  });

  public codeFormGroup = this._fb.group({
    code: ['', Validators.required],
  });

  public newPasswordFormGroup = this._fb.group({
    newPassword: ['', Validators.required],
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
      formControl: this.newPasswordFormGroup.controls.newPassword,
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
}
