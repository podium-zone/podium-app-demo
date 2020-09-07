import { Injectable } from '@angular/core';
import { CanLoad, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from './auth.service';
@Injectable({
  providedIn: 'root',
})
export class RedirectIfUnauthorizedGuard implements CanLoad {
  constructor(private auth: AuthService, private router: Router) {}

  canLoad(): Observable<UrlTree | boolean> {
    return this.auth.isAuthorized$().pipe(
      map((authorized) => {
        if (authorized) {
          return true;
        }

        return this.router.parseUrl('/intro');
      }),
    );
  }
}
