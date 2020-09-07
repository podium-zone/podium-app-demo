import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPage } from './pages/login/login.page';
import { LogoutPage } from './pages/logout/logout.page';
import { RedirectIfAuthorizedGuard } from './services/redirect-if-authorized.guard';

const routes: Routes = [
  {
    path: 'login',
    component: LoginPage,
    canActivate: [RedirectIfAuthorizedGuard],
  },
  {
    path: 'logout',
    component: LogoutPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
