import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { from, of, throwError } from 'rxjs';
import { catchError, delay, finalize, switchMap, tap } from 'rxjs/operators';
import { Auth } from '../models/auth.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private router: Router,
    private storage: Storage,
    private toastController: ToastController,
    private loadingController: LoadingController,
  ) {}

  private readonly keyAuthorized = 'authorized';

  readonly isAuthorized$ = () => from(this.storage.get(this.keyAuthorized));

  login(auth: Auth) {
    return of(true).pipe(
      switchMap(() => this.showLoadingSpinner()),
      delay(2000),
      switchMap(() => this.setAuthorized(true)),
      tap(() => this.router.navigateByUrl('/engage', { replaceUrl: true })),
      catchError((error) => {
        this.handleErrorToast(error);
        return throwError(error);
      }),
      finalize(() => this.loadingController.dismiss()),
    );
  }

  logout() {
    return this.setAuthorized(false).pipe(
      switchMap(() => this.showLoadingSpinner()),
      delay(500),
      tap(() => this.router.navigateByUrl('/auth/login', { replaceUrl: true })),
      finalize(() => this.loadingController.dismiss()),
      catchError((error) => {
        this.handleErrorToast(error);
        return throwError(error);
      }),
    );
  }

  private async showLoadingSpinner() {
    const loading = await this.loadingController.create({
      spinner: 'crescent',
    });
    await loading.present();
  }

  private setAuthorized(authorized: boolean) {
    return from(this.storage.set(this.keyAuthorized, authorized));
  }

  private async handleErrorToast(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 2000,
      color: 'danger',
    });
    toast.present();
  }
}
