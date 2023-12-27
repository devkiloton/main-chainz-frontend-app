import { BreakpointObserver } from '@angular/cdk/layout';
import { AsyncPipe, NgIf } from '@angular/common';
import type { HttpErrorResponse } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthEntity } from 'projects/main-chainz-api-client/src/public-api';
import { BehaviorSubject, firstValueFrom, map } from 'rxjs';
import { fader } from 'src/app/animations/fader';
import { AuthStateService } from 'src/app/services/auth-state/auth-state.service';
import { InsertYourCodeComponent } from 'src/app/shared/insert-your-code/insert-your-code.component';
import { ParticleBgComponent } from 'src/app/shared/particle-bg/particle-bg.component';
import { SignUpFormComponent } from './components/sign-up-form/sign-up-form.component';

@Component({
  standalone: true,
  imports: [SignUpFormComponent, InsertYourCodeComponent, ReactiveFormsModule, ParticleBgComponent, AsyncPipe, NgIf],
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
  animations: [fader],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class SignUpComponent {
  private readonly _authEntity = inject(AuthEntity);
  private readonly _authState = inject(AuthStateService);
  private readonly _router = inject(Router);
  public isHandset$ = inject(BreakpointObserver)
    .observe('(min-width: 1024px)')
    .pipe(map(({ matches }) => matches));

  private readonly _email$ = new BehaviorSubject<string>('');
  private readonly _showCodeInput$ = new BehaviorSubject<boolean>(false);
  public readonly showCodeInput$ = this._showCodeInput$.asObservable();
  private readonly _asyncError$ = new BehaviorSubject<number>(0);
  public readonly asyncError$ = this._asyncError$.asObservable();

  public returnToSignUp(): void {
    this._showCodeInput$.next(false);
  }

  public async createUser(data: {
    name: string;
    email: string;
    password: string;
    termsAndConditions: boolean;
  }): Promise<void> {
    const { name, email, password, termsAndConditions } = data;
    this._email$.next(email);
    if (!termsAndConditions) {
      return;
    }
    this._asyncError$.next(0);
    try {
      await firstValueFrom(this._authEntity.signUp({ name, email, password }));
      this._showCodeInput$.next(true);
    } catch (error) {
      const { status } = error as HttpErrorResponse;
      this._asyncError$.next(status);
    }
  }

  public async confirmCodeSignUp(data: { code: string }): Promise<void> {
    const { code } = data;

    this._asyncError$.next(0);
    try {
      const tokens = await firstValueFrom(this._authEntity.verifySignGeneral({ email: this._email$.value, code }));
      this._authState.set(tokens);
      this._router.navigate(['/dashboard']);
    } catch (error) {
      const { status } = error as HttpErrorResponse;
      this._asyncError$.next(status);
    }
  }
}
