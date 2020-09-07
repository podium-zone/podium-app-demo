import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Keyboard } from '@ionic-native/keyboard/ngx';
import { IonicModule } from '@ionic/angular';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { LoginPage } from './pages/login/login.page';

@NgModule({
  imports: [CommonModule, IonicModule, AuthRoutingModule, FormsModule, ReactiveFormsModule],
  declarations: [LoginPage, LoginFormComponent],
  providers: [Keyboard],
})
export class AuthModule {}
