import type { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import * as core from '@angular/core';
import type { Observable } from 'rxjs';
import { AuthStateService } from 'src/app/services/auth-state/auth-state.service';

@core.Injectable()
export class UniversalAppInterceptor implements HttpInterceptor {
  private readonly _authService = core.inject(AuthStateService);

  public intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const _token = (): string => {
      const isValidAuthToken = this._authService.isTokenExpired();

      if (isValidAuthToken) {
        return this._authService.getRefreshToken() ?? '';
      }
      return this._authService.get() ?? '';
    };

    const modifiedReq = request.clone({
      url: request.url,
      setHeaders: {
        // AuthroizationGuard will redirect to /sign-in if token falsy or expired
        Authorization: `Bearer ${_token()}`,
      },
    });
    return next.handle(modifiedReq);
  }
}
