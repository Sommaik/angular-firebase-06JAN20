import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-group-form',
  templateUrl: './group-form.component.html',
  styleUrls: ['./group-form.component.css']
})
export class GroupFormComponent implements OnInit {

  inputForm: FormGroup = this.fb.group({
    first: ['', [Validators.required, Validators.minLength(5)] ],
    last: ['', [Validators.required] ]
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  onFormSubmit() {
    if (this.inputForm.valid) {
      console.log('send data to server');
    } else {
      alert('invalid form');
    }
  }

}
