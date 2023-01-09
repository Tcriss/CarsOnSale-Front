import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  user: FormGroup;

  constructor(private fb: FormBuilder){
    this.user = this.fb.group({
      email: [''],
      password: ['']
    })
  }

  login(){
    const email = this.user.value.email;
    const password = this.user.value.password;
  }
}