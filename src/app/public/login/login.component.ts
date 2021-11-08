import { SecurityService } from './../../services/security.service';
import { Usuario } from './../../interface/usuario';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  user: Usuario = {
    id: 0,
    userName: '',
    password: ''
  };

  addressForm = this.fb.group({
    userName: [null, Validators.required],
    password: [null, Validators.required],

  });

  hasUnitNumber = false;

  constructor(private fb: FormBuilder, private _security: SecurityService, private _router: Router) {}

  onLogin() {
    console.log(this.user);
    this._security.login(this.user.userName).subscribe(
      (res) =>{
        localStorage.setItem('token', res.token);
        this._router.navigate(['tb_persona']);
      }
    )
  }
}
