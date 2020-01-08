import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase';

@Component({
  selector: 'app-signin-with-phone',
  templateUrl: './signin-with-phone.component.html',
  styleUrls: ['./signin-with-phone.component.css']
})
export class SigninWithPhoneComponent implements OnInit {

  phoneForm: FormGroup = this.fb.group({
    phoneNo: ['+66', [Validators.required, Validators.minLength(13)]]
  });

  otpForm: FormGroup = this.fb.group({
    code: ['', [Validators.required]]
  });

  confirmResult: firebase.auth.ConfirmationResult;

  constructor(
    private fb: FormBuilder,
    private afauth: AngularFireAuth
  ) { }

  ngOnInit() {
  }

  onPhoneFormSubmit() {
    if (this.phoneForm.valid) {
     this.afauth.auth.signInWithPhoneNumber(
        this.phoneForm.get('phoneNo').value,
        new firebase.auth.RecaptchaVerifier('recapt-div')
      ).then(result => this.confirmResult = result)
      .catch(reason => console.log(reason));
    }
  }

  onOtpFormSubmit() {
    if (this.otpForm.valid) {
      this.confirmResult.confirm(
        this.otpForm.get('code').value
      ).then(cre => {
        console.log('go to menu page');
      }).catch(reason => {
        console.log(reason);
      });
    }
  }

}
