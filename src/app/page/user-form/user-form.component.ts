import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  userForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email] ],
    password: ['', [Validators.required, Validators.minLength(8)] ]
  });

  constructor(
    private fb: FormBuilder,
    private userService: UserService
  ) { }

  ngOnInit() {
  }

  onFormSubmit() {
    if (this.userForm.valid) {
      this.userService
        .addUser(this.userForm.value)
        .subscribe(resp => console.log(resp));
    } else {
      alert('invalid form');
    }
  }

}
