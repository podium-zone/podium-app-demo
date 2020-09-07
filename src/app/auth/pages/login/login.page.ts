import { Component } from '@angular/core';
import { Keyboard } from '@ionic-native/keyboard/ngx';
import { Auth } from '../../models/auth.model';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  constructor(private auth: AuthService, private keyboard: Keyboard) {}

  login(user: Auth) {
    this.keyboard.close();
    this.auth.login(user).subscribe();
  }
}
