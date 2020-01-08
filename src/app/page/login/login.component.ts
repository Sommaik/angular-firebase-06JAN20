import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email] ],
    password: ['', [Validators.required, Validators.minLength(8)] ]
  });

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private afauth: AngularFireAuth
  ) { }

  ngOnInit() {
  }

  onFormSubmit() {
    if (this.userForm.valid) {
      this.afauth.auth.signInWithEmailAndPassword(
        this.userForm.get('email').value,
        this.userForm.get('password').value
      ).then(cre => {
        if ( cre.user.emailVerified) {
          this.router.navigate(['', 'admin', 'menu']);
        } else {
          console.log('email not verified');
        }
      }).catch( reason => {
        console.log(reason);
      });
    }
  }

  onGoogleClick() {
    this.afauth.auth.signInWithRedirect(
      new firebase.auth.GoogleAuthProvider()
    );
  }

  onFacebookClick() {
    this.afauth.auth.signInWithRedirect(
      new firebase.auth.FacebookAuthProvider()
    );
  }

}
