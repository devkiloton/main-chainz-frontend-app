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

@Component({
  selector: 'app-sign-in-form',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    MatTabsModule,
    MatIconModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    ButtonPrimaryComponent,
    ButtonSecondaryComponent,
    RouterModule,
    MatIconModule,
    ReactiveFormsModule,
    AsyncPipe,
    AlertCardComponent,
  ],
  templateUrl: './sign-in-form.component.html',
  styleUrls: ['./sign-in-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignInFormComponent implements OnInit {
  private readonly _formBuilder = inject(NonNullableFormBuilder);
  private readonly _destroyRef = inject(DestroyRef);

  public hide = true;

  public signInForm = this._formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
  });

  @Output()
  public readonly sendEvent = new EventEmitter<{
    email: string;
    password: string;
  }>();

  @Input()
  public set asyncError(code: number) {
    if (String(code).startsWith('4')) {
      this._cardState$.next('alert-card');
      this._message$.next('Wrong email or password');
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

  public readonly passwordErrorMessage$ = this.signInForm.controls.password.statusChanges.pipe(
    map(() => this.getPasswordErrorMessage()),
  );

  public readonly emailErrorMessage$ = this.signInForm.controls.email.statusChanges.pipe(
    map(() => this.getEmailErrorMessage()),
  );

  public ngOnInit(): void {
    this.signInForm.valueChanges.pipe(takeUntilDestroyed(this._destroyRef)).subscribe(() => {
      this._cardState$.next('alert-card-hidden');
    });
  }

  public send(): void {
    if (this.signInForm.valid) {
      this.sendEvent.emit(this.signInForm.getRawValue());
      return;
    }
    if (this.signInForm.controls.email.hasError('required') && this.signInForm.controls.password.hasError('required')) {
      this._cardState$.next('alert-card');
      this._message$.next('Type a valid email and password');
      return;
    }
    if (this.signInForm.controls.email.hasError('email')) {
      this._cardState$.next('alert-card');
      this._message$.next('Type a valid email');
      return;
    }
    if (this.signInForm.controls.password.hasError('required')) {
      this._cardState$.next('alert-card');
      this._message$.next('Type a valid password');
    }
  }

  public changeStyleAlert(): void {
    if (this._cardState$.value === 'alert-card-hidden') {
      this._cardState$.next('alert-card');
    } else {
      this._cardState$.next('alert-card-hidden');
    }
  }

  public getEmailErrorMessage(): string {
    if (this.signInForm.controls.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.signInForm.controls.email.hasError('email') ? 'Not a valid email' : '';
  }

  public getPasswordErrorMessage(): string {
    if (this.signInForm.controls.password.hasError('required')) {
      return 'You must enter a value';
    }

    return '';
  }
}
