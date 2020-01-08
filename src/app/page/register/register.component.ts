import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

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
      this.afauth.auth.createUserWithEmailAndPassword(
        this.userForm.get('email').value,
        this.userForm.get('password').value
      ).then( cre => {
        console.log(cre);
        cre.user.sendEmailVerification();
      }).catch( reason => {
        console.log(reason);
      });
    }
  }

}
