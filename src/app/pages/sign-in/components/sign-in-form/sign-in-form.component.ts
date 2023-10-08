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
import { RouterModule } from '@angular/router';
import { ButtonPrimaryComponent } from 'src/app/shared/button-primary/button-primary.component';
import { ButtonSecondaryComponent } from 'src/app/shared/button-secondary/button-secondary.component';
import { InputTextComponent } from 'src/app/shared/input-text/input-text.component';

@Component({
  selector: 'app-sign-in-form',
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
    RouterModule,
    MatIconModule,
    ReactiveFormsModule,
    JsonPipe,
  ],
  templateUrl: './sign-in-form.component.html',
  styleUrls: ['./sign-in-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SignInFormComponent),
      multi: true,
    },
  ],
})
export class SignInFormComponent implements ControlValueAccessor, OnInit {
  private readonly _formBuilder = inject(NonNullableFormBuilder);
  private readonly _destroyRef = inject(DestroyRef);

  public signInForm = this._formBuilder.group({
    email: [''],
    password: [''],
  });

  @Output()
  public readonly sendEvent = new EventEmitter<{
    email: string;
    password: string;
  }>();

  public ngOnInit(): void {
    this.signInForm.valueChanges.pipe(takeUntilDestroyed(this._destroyRef)).subscribe(() => {
      const formValue = this.signInForm.getRawValue();
      this.writeValue(formValue);
    });
  }

  public send(): void {
    this.sendEvent.emit(this.signInForm.getRawValue());
  }

  // ControlValueAccessor Implementation
  private _onChange = (_value: { email: string; password: string }): void => void 0;

  public writeValue(value: { email: string; password: string }): void {
    this._onChange(value);
  }

  public registerOnChange(fn: (_value: { email: string; password: string }) => void): void {
    this._onChange = fn;
  }

  public registerOnTouched(_fn: (_value: string) => void): void {}
}
