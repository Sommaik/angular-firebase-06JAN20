import { Component, OnInit, Output, EventEmitter } from '@angular/core';
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

  @Output() save: EventEmitter<string> = new EventEmitter();

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  onFormSubmit() {
    if (this.inputForm.valid) {
      console.log('send data to server');
      this.save.emit(this.inputForm.get('first').value);
    } else {
      alert('invalid form');
    }
  }

}
