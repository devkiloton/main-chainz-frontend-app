import { JsonPipe } from '@angular/common';
import type { OnInit } from '@angular/core';
import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  EventEmitter,
  forwardRef,
  inject,
  Output,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import type { ControlValueAccessor } from '@angular/forms';
import { NG_VALUE_ACCESSOR, NonNullableFormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { ButtonPrimaryComponent } from 'src/app/shared/button-primary/button-primary.component';
import { ButtonSecondaryComponent } from 'src/app/shared/button-secondary/button-secondary.component';
import { InputTextComponent } from 'src/app/shared/input-text/input-text.component';

@Component({
  selector: 'app-sign-up-form',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    MatTabsModule,
    MatIconModule,
    MatCheckboxModule,
    InputTextComponent,
    ButtonPrimaryComponent,
    ButtonSecondaryComponent,
    MatIconModule,
    ReactiveFormsModule,
    JsonPipe,
  ],
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SignUpFormComponent),
      multi: true,
    },
  ],
})
export class SignUpFormComponent implements ControlValueAccessor, OnInit {
  private readonly _formBuilder = inject(NonNullableFormBuilder);
  private readonly _destroyRef = inject(DestroyRef);

  public signUpForm = this._formBuilder.group({
    name: [''],
    email: [''],
    password: [''],
    termsAndConditions: [false],
  });

  @Output()
  public readonly sendEvent = new EventEmitter<{
    name: string;
    email: string;
    password: string;
    termsAndConditions: boolean;
  }>();

  public ngOnInit(): void {
    this.signUpForm.valueChanges.pipe(takeUntilDestroyed(this._destroyRef)).subscribe(() => {
      const formValue = this.signUpForm.getRawValue();
      this.writeValue(formValue);
    });
  }

  public send(): void {
    this.sendEvent.emit(this.signUpForm.getRawValue());
  }

  // ControlValueAccessor Implementation
  private _onChange = (_value: { name: string; email: string; password: string; termsAndConditions: boolean }): void =>
    void 0;

  public writeValue(value: { name: string; email: string; password: string; termsAndConditions: boolean }): void {
    this._onChange(value);
  }

  public registerOnChange(
    fn: (_value: { name: string; email: string; password: string; termsAndConditions: boolean }) => void,
  ): void {
    this._onChange = fn;
  }

  public registerOnTouched(_fn: (_value: string) => void): void {}
}
