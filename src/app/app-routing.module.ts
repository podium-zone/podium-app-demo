import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RedirectIfUnauthorizedGuard } from './auth/services/redirect-if-unauthorized.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/engage',
    pathMatch: 'full',
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'intro',
    loadChildren: () => import('./intro/intro.module').then((m) => m.IntroModule),
  },
  {
    path: 'engage',
    loadChildren: () => import('./engage/engage.module').then((m) => m.EngageModule),
    canLoad: [RedirectIfUnauthorizedGuard],
  },
  {
    path: 'tribe',
    loadChildren: () => import('./tribe/tribe.module').then((m) => m.TribeModule),
    canLoad: [RedirectIfUnauthorizedGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
