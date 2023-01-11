import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AlertsService } from 'src/app/services/alerts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  registerUser: FormGroup;

  constructor(
    private fb: FormBuilder, 
    private auth: AngularFireAuth, 
    public alerts:AlertsService, 
    private router:Router
    ) {
    this.registerUser = this.fb.group({
      userName: [''],
      name: [''],
      email: [''],
      password: [''],
      repeatPassword: [''],
      phone: ['']
    })
   }

  ngOnInit(): void {}
  
  register(){
    const userName = this.registerUser.value.userName;
    const name = this.registerUser.value.name;
    const email = this.registerUser.value.email;
    const password = this.registerUser.value.password;
    const rPassword = this.registerUser.value.repeatPassword;
    const phone = this.registerUser.value.phone;
    console.log(userName,name,email,password,rPassword,phone);

    if(password !== rPassword){
      this.alerts.notifications('Error','The passwords have to be the same.','error');
      return;
    }

    this.auth.createUserWithEmailAndPassword(email,password)
    .then(user => {
      this.alerts.notifications('User successfully registered','','success');
      this.router.navigate(['/login']);
    })
    .catch(error => {
      var errorCode = error.code;
      var errorMessage = error.message;
      if (errorCode == 'auth/weak-password') {
        this.alerts.notifications('Warning','The password is too weak.','warning');
      } else if (errorCode == 'auth/email-already-in-use') {
        this.alerts.notifications('Error','This email is already in use, try another diferent.','error');
      } else if (errorCode == 'auth/invalid-email') {
        this.alerts.notifications('Error','This email is invalid.','error');
      } else {
        this.alerts.notifications('Error',errorMessage,'error');
      }
    });
  }
}
