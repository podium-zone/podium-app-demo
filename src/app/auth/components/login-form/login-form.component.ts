import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Auth } from '../../models/auth.model';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginFormComponent {
  constructor(private fb: FormBuilder) {}

  readonly loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  @Output() login = new EventEmitter<Auth>();

  tryLogin() {
    if (this.loginForm.valid) {
      return this.login.emit(this.loginForm.value);
    }

    this.loginForm.controls.email.markAsDirty();
    this.loginForm.controls.password.markAsDirty();
  }
}
