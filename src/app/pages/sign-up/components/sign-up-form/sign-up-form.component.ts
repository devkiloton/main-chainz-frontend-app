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
import { cardAlert } from 'src/app/constants/sign-up/card-alert';
import { formFieldMessages } from 'src/app/constants/sign-up/form-field-messages';
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
    name: ['', [Validators.required, Validators.minLength(2)]],
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
      this._message$.next(cardAlert.invalidData);
    }
    if (String(code).startsWith('5')) {
      this._cardState$.next('alert-card');
      this._message$.next(cardAlert.problems);
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
      this._message$.next(cardAlert.generalError);
      return;
    }
    if (this.signUpForm.controls.name.hasError('required') || this.signUpForm.controls.name.hasError('minlength')) {
      this._cardState$.next('alert-card');
      this._message$.next(cardAlert.requiredName);
      return;
    }
    if (this.signUpForm.controls.email.hasError('email') || this.signUpForm.controls.email.hasError('required')) {
      this._cardState$.next('alert-card');
      this._message$.next(cardAlert.requiredEmail);
      return;
    }
    if (this.signUpForm.controls.password.hasError('required')) {
      this._cardState$.next('alert-card');
      this._message$.next(cardAlert.requiredPassword);
      return;
    }
    if (this.signUpForm.controls.termsAndConditions.hasError('required')) {
      this._cardState$.next('alert-card');
      this._message$.next(cardAlert.requiredTermsAndConditions);
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
      return formFieldMessages.requiredName;
    }

    if (this.signUpForm.controls.name.hasError('minlength')) {
      return formFieldMessages.invalideName;
    }

    return '';
  }

  public getEmailErrorMessage(): string {
    if (this.signUpForm.controls.email.hasError('required')) {
      return formFieldMessages.requiredEmail;
    }

    return this.signUpForm.controls.email.hasError('email') ? formFieldMessages.invalidEmail : '';
  }

  public getPasswordErrorMessage(): string {
    if (this.signUpForm.controls.password.hasError('required')) {
      return formFieldMessages.requiredPassword;
    }
    if (this.signUpForm.controls.password.hasError('strongPassword')) {
      return formFieldMessages.invalidPassword;
    }

    return '';
  }
}
