import { AsyncPipe } from '@angular/common';
import type { OnInit } from '@angular/core';
import { ChangeDetectionStrategy, Component, DestroyRef, EventEmitter, inject, Input, Output } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { BehaviorSubject, map } from 'rxjs';
import { cardAlert } from 'src/app/constants/sign-in/card-alert';
import { AccessiblePressDirective } from 'src/app/directives/accessible-press/accessible-press.directive';
import { AlertCardComponent } from 'src/app/shared/alert-card/alert-card.component';
import { ButtonPrimaryComponent } from 'src/app/shared/button-primary/button-primary.component';
import { ButtonSecondaryComponent } from 'src/app/shared/button-secondary/button-secondary.component';

@Component({
  selector: 'app-insert-your-code',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    MatIconModule,
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
    AccessiblePressDirective,
  ],
  templateUrl: './insert-your-code.component.html',
  styleUrls: ['./insert-your-code.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InsertYourCodeComponent implements OnInit {
  private readonly _formBuilder = inject(NonNullableFormBuilder);
  private readonly _destroyRef = inject(DestroyRef);

  public hide = true;

  public codeForm = this._formBuilder.group({
    code: ['', [Validators.required]],
  });

  @Output()
  public readonly sendEvent = new EventEmitter<{
    code: string;
  }>();

  @Output()
  public readonly returnEvent = new EventEmitter<void>();

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

  public readonly passwordErrorMessage$ = this.codeForm.controls.code.statusChanges.pipe(
    map(() => this.getCodeErrorMessage()),
  );

  public ngOnInit(): void {
    this.codeForm.valueChanges.pipe(takeUntilDestroyed(this._destroyRef)).subscribe(() => {
      this._cardState$.next('alert-card-hidden');
    });
  }

  public send(): void {
    if (this.codeForm.valid) {
      this.sendEvent.emit(this.codeForm.getRawValue());
      return;
    }
    if (this.codeForm.controls.code.hasError('required')) {
      this._cardState$.next('alert-card');
      this._message$.next(cardAlert.generalError);
    }
  }

  public return(): void {
    this.returnEvent.emit();
  }

  public changeStyleAlert(): void {
    if (this._cardState$.value === 'alert-card-hidden') {
      this._cardState$.next('alert-card');
    } else {
      this._cardState$.next('alert-card-hidden');
    }
  }

  public getCodeErrorMessage(): string {
    if (this.codeForm.controls.code.hasError('required')) {
      return $localize`You must enter a value` as string;
    }

    return '';
  }
}
