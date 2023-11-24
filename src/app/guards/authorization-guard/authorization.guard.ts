import { inject } from '@angular/core';
import { type CanActivateFn, Router } from '@angular/router';
import { isNil } from 'lodash-es';
import { AuthEntity } from 'projects/central-hash-api-client/src/public-api';
import { firstValueFrom } from 'rxjs';
import { AuthStateService } from 'src/app/services/auth-state/auth-state.service';
import { AuthStoreService } from 'src/app/stores/auth/auth-store.service';

export const authorizationGuard: CanActivateFn = async (_route, _state) => {
  const authState = inject(AuthStateService);
  const authStore = inject(AuthStoreService);
  const router = inject(Router);
  const authEntity = inject(AuthEntity);
  if (isNil(authState)) {
    router.navigate(['/sign-in']);
    return false;
  }
  if (authState.isTokenExpired()) {
    try {
      const data = await firstValueFrom(authEntity.refresh());
      authState.set(data);
    } catch (error) {
      router.navigate(['/sign-in']);
      authStore.isAuthenticated.set(false);
      return false;
    }
  }
  authStore.isAuthenticated.set(true);
  return true;
};
