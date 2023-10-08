import { inject } from '@angular/core';
import { type CanActivateFn, Router } from '@angular/router';
import { isNil } from 'lodash-es';
import { AuthStateService } from 'src/app/services/auth-state/auth-state.service';

export const authorizationGuard: CanActivateFn = (_route, _state) => {
  const authState = inject(AuthStateService);
  const router = inject(Router);
  if (isNil(authState.get())) {
    router.navigate(['/sign-in']);
    return false;
  }
  if (authState.isTokenExpired()) {
    router.navigate(['/sign-in']);
    return false;
  }
  return true;
};
