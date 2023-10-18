import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatStepperModule } from '@angular/material/stepper';
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
  ],
  templateUrl: './dialog-change-password.component.html',
  styleUrls: ['./dialog-change-password.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogChangePasswordComponent {
  private readonly _fb = inject(NonNullableFormBuilder);
  public isLinear = true;
  public firstFormGroup = this._fb.group({
    firstCtrl: ['', Validators.required],
  });

  public secondFormGroup = this._fb.group({
    secondCtrl: ['', Validators.required],
  });

  constructor(public dialogRef: MatDialogRef<DialogChangePasswordComponent>) {}
}
