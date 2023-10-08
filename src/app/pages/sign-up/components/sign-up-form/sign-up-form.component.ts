/* eslint-disable max-statements */
import { AsyncPipe } from '@angular/common';
import type { OnInit } from '@angular/core';
import { ChangeDetectionStrategy, Component, DestroyRef, EventEmitter, inject, Input, Output } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterModule } from '@angular/router';
import { BehaviorSubject, map } from 'rxjs';
import { AlertCardComponent } from 'src/app/shared/alert-card/alert-card.component';
import { ButtonPrimaryComponent } from 'src/app/shared/button-primary/button-primary.component';
import { ButtonSecondaryComponent } from 'src/app/shared/button-secondary/button-secondary.component';
import { strongPasswordValidator } from 'src/app/validators/strong-password.validator';

@Component({
  selector: 'app-sign-up-form',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    MatTabsModule,
    MatIconModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    ButtonPrimaryComponent,
    ButtonSecondaryComponent,
    RouterModule,
    MatIconModule,
    ReactiveFormsModule,
    AlertCardComponent,
    AsyncPipe,
  ],
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignUpFormComponent implements OnInit {
  private readonly _formBuilder = inject(NonNullableFormBuilder);
  private readonly _destroyRef = inject(DestroyRef);

  public hide = true;

  public signUpForm = this._formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, strongPasswordValidator()]],
    termsAndConditions: [false, [Validators.requiredTrue]],
  });

  @Output()
  public readonly sendEvent = new EventEmitter<{
    name: string;
    email: string;
    password: string;
    termsAndConditions: boolean;
  }>();

  @Input()
  public set asyncError(code: number) {
    if (String(code).startsWith('4')) {
      this._cardState$.next('alert-card');
      this._message$.next('Invalid data, try again');
    }
    if (String(code).startsWith('5')) {
      this._cardState$.next('alert-card');
      this._message$.next('We are having problems, try again later');
    }
  }

  public readonly _cardState$ = new BehaviorSubject<string>('alert-card-hidden');
  public readonly cardState$ = this._cardState$.asObservable();
  public readonly _message$ = new BehaviorSubject<string>('');
  public readonly message$ = this._message$.asObservable();

  public readonly passwordErrorMessage$ = this.signUpForm.controls.password.statusChanges.pipe(
    map(() => this.getPasswordErrorMessage()),
  );

  public readonly emailErrorMessage$ = this.signUpForm.controls.email.statusChanges.pipe(
    map(() => this.getEmailErrorMessage()),
  );

  public readonly nameErrorMessage$ = this.signUpForm.controls.name.statusChanges.pipe(
    map(() => this.getNameErrorMessage()),
  );

  public ngOnInit(): void {
    this.signUpForm.valueChanges.pipe(takeUntilDestroyed(this._destroyRef)).subscribe(() => {
      this._cardState$.next('alert-card-hidden');
    });
  }

  public send(): void {
    if (this.signUpForm.valid) {
      this.sendEvent.emit(this.signUpForm.getRawValue());
      return;
    }
    if (
      this.signUpForm.controls.email.hasError('required') &&
      this.signUpForm.controls.password.hasError('required') &&
      this.signUpForm.controls.name.hasError('required') &&
      this.signUpForm.controls.termsAndConditions.hasError('required')
    ) {
      this._cardState$.next('alert-card');
      this._message$.next('Fill up all fields');
      return;
    }
    if (this.signUpForm.controls.name.hasError('required')) {
      this._cardState$.next('alert-card');
      this._message$.next('Type a valid name');
      return;
    }
    if (this.signUpForm.controls.email.hasError('email') || this.signUpForm.controls.email.hasError('required')) {
      this._cardState$.next('alert-card');
      this._message$.next('Type a valid email');
      return;
    }
    if (this.signUpForm.controls.password.hasError('required')) {
      this._cardState$.next('alert-card');
      this._message$.next('Type a valid password');
      return;
    }
    if (this.signUpForm.controls.termsAndConditions.hasError('required')) {
      this._cardState$.next('alert-card');
      this._message$.next('Accept terms and conditions');
    }
  }

  public changeStyleAlert(): void {
    if (this._cardState$.value === 'alert-card-hidden') {
      this._cardState$.next('alert-card');
    } else {
      this._cardState$.next('alert-card-hidden');
    }
  }

  public getNameErrorMessage(): string {
    if (this.signUpForm.controls.name.hasError('required')) {
      return 'You must enter a value';
    }

    return '';
  }

  public getEmailErrorMessage(): string {
    if (this.signUpForm.controls.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.signUpForm.controls.email.hasError('email') ? 'Not a valid email' : '';
  }

  public getPasswordErrorMessage(): string {
    if (this.signUpForm.controls.password.hasError('required')) {
      return 'You must enter a value';
    }
    if (this.signUpForm.controls.password.hasError('strongPassword')) {
      return 'Password must contain at least 8 characters, 1 uppercase, 1 lowercase, 1 number and 1 special character';
    }

    return '';
  }
}
