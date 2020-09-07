import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from './auth.service';
@Injectable({
  providedIn: 'root',
})
export class RedirectIfAuthorizedGuard implements CanLoad, CanActivate {
  constructor(private auth: AuthService, private router: Router) {}

  canActivate() {
    return this.canLoad();
  }

  canLoad(): Observable<UrlTree | boolean> {
    return this.auth.isAuthorized$().pipe(
      map((authorized) => {
        if (!authorized) {
          return true;
        }

        return this.router.parseUrl('/engage');
      }),
    );
  }
}
