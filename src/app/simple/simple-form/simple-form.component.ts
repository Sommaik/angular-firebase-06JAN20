import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-simple-form',
  templateUrl: './simple-form.component.html',
  styleUrls: ['./simple-form.component.css']
})
export class SimpleFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onFormSubmit(simpleForm: NgForm) {
    if (simpleForm.valid) {
      console.log('post data to server');
    } else {
      alert('invalid form value');
    }
  }

}
