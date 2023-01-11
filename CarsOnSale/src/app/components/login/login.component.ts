import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
import { AlertsService } from 'src/app/services/alerts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {
  user: FormGroup;

  constructor(
    private fb: FormBuilder, 
    private auth: AngularFireAuth, 
    public alerts:AlertsService, 
    private router:Router
    ){
    this.user = this.fb.group({
      email: [''],
      password: ['']
    })
  }

  login(){
    const email = this.user.value.email;
    const password = this.user.value.password;

    this.auth.signInWithEmailAndPassword(email,password)
    .then(user => {
      this.alerts.notifications('Welcome','','success');
      this.router.navigate(['/home']);
    })
    .catch(error => {
      var errorCode = error.code;
      var errorMessage = error.message;
      this.alerts.notifications('Error',errorMessage,'error');
    });
  }

  loginWithGoogle(){
    this.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())
    .then(user => {
      this.alerts.notifications('Welcome','','success');
      this.router.navigate(['/home']);
    })
    .catch(error => {
      var errorCode = error.code;
      let errorMessage = error.message;
      this.alerts.notifications('Error',errorMessage,'error');
    });
  }

  loginWithMicrosoft(){
    this.auth.signInWithRedirect(new firebase.auth.OAuthProvider('microsoft.com'))
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      let errorMessage = error.message;
      this.alerts.notifications('Error',errorMessage,'error');
    });
  }
}